import type { VercelRequest, VercelResponse } from '@vercel/node';
import { readFileSync } from 'fs';
import { join } from 'path';

const CARS_API_URL = 'https://multipost-public.app.infinit.cc/api/public/inventory/profiles/442804f3-ac62-4488-b940-1c11a0f641c2';

interface Vehicle {
  id: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  images: string[];
}

// Default metadata
const DEFAULT_METADATA = {
  title: 'Acierto Cars - Vehículos de Alta Gama en Madrid',
  description: 'Concesionario premium especializado en vehículos de alta gama, ocasión y seminuevos en Madrid. La mejor calidad y precio garantizados.',
  ogTitle: 'Acierto Cars - Vehículos de Alta Gama en Madrid',
  ogDescription: 'Concesionario premium especializado en vehículos de alta gama, ocasión y seminuevos en Madrid.',
  ogImage: 'https://www.aciertocars.com/assets/hero-banner.png',
  ogUrl: 'https://www.aciertocars.com'
};

async function fetchVehicleData(id: string): Promise<Vehicle | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(CARS_API_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[SSR-OG] API returned status: ${response.status}`);
      return null;
    }

    const cars = await response.json();
    const apiCar = cars.find((car: any) => car.id === id);

    if (!apiCar) {
      return null;
    }

    const fuelTranslations: Record<string, string> = {
      'Diesel': 'Diésel',
      'Petrol': 'Gasolina',
      'Hybrid': 'Híbrido',
      'Electric': 'Eléctrico',
      'Electricity': 'Eléctrico',
      'Hydrogen': 'Hidrógeno',
      'Biofuels': 'Biocombustibles',
      'CNG': 'GNC',
      'LPG': 'GLP',
      'Other': 'Otro',
    };

    const transmissionTranslations: Record<string, string> = {
      'Automatic': 'Automático',
      'Manual': 'Manual',
    };

    const registrationYear = apiCar.registration_date
      ? new Date(apiCar.registration_date).getFullYear()
      : new Date().getFullYear();

    const vehicle = {
      id: apiCar.id,
      brand: apiCar.make || 'Unknown',
      model: apiCar.model || 'Unknown',
      year: registrationYear,
      price: apiCar.price_cents ? apiCar.price_cents / 100 : 0,
      mileage: apiCar.odometer?.value || 0,
      fuel: fuelTranslations[apiCar.fuel] || apiCar.fuel || 'Desconocido',
      transmission: transmissionTranslations[apiCar.transmission] || apiCar.transmission || 'Desconocido',
      images: apiCar.photo_urls?.length > 0 ? apiCar.photo_urls : [],
    };

    console.log('[SSR-OG] Transformed vehicle:', JSON.stringify(vehicle, null, 2));
    return vehicle;
  } catch (error) {
    console.error('[SSR-OG] Error fetching vehicle data:', error);
    return null;
  }
}

function getMetadataForRoute(path: string, vehicle?: Vehicle) {
  // Check if it's a vehicle detail route
  const buyMatch = path.match(/^\/buy\/([^\/]+)$/) || path.match(/^\/preview\/([^\/]+)$/);

  if (buyMatch && vehicle) {
    const vehicleId = buyMatch[1];
    const formattedPrice = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(vehicle.price || 0);

    const mileageText = vehicle.mileage ? `${vehicle.mileage.toLocaleString('es-ES')} km` : 'Consultar';
    const titleParts = [vehicle.brand, vehicle.model, vehicle.year].filter(Boolean);
    const title = `${titleParts.join(' ')} - ${formattedPrice} | Acierto Cars`;
    const description = `${titleParts.join(' ')} - ${mileageText}, ${vehicle.fuel}, ${vehicle.transmission}. Vehículo de alta gama disponible en Acierto Cars Madrid.`;

    // Optimize image for WhatsApp (resize if needed to stay under 600KB)
    let image = vehicle.images && vehicle.images.length > 0 ? vehicle.images[0] : DEFAULT_METADATA.ogImage;
    if (image && image.includes('alxproduction.blob.core.windows.net')) {
      const encodedUrl = encodeURIComponent(image);
      image = `https://www.aciertocars.com/_vercel/image?url=${encodedUrl}&w=1600&q=80`;
    }

    const url = `https://www.aciertocars.com/buy/${vehicleId}`;

    return {
      title,
      description,
      ogTitle: title,
      ogDescription: description,
      ogImage: image,
      ogUrl: url
    };
  }

  // Default metadata for all other routes
  return DEFAULT_METADATA;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const path = req.url || '/';
    console.log(`[SSR-OG] Processing request for: ${path}`);

    // Fetch the index.html from the deployed site
    // This is more reliable than trying to read from the filesystem in serverless
    let htmlContent: string;
    try {
      console.log('[SSR-OG] Fetching index.html from deployed site');
      const response = await fetch(`https://${req.headers.host || 'www.aciertocars.com'}/index.html`, {
        headers: {
          'User-Agent': 'SSR-Function-Internal'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch index.html: ${response.status}`);
      }

      htmlContent = await response.text();
      console.log('[SSR-OG] Successfully fetched index.html');
    } catch (error) {
      console.error('[SSR-OG] Error fetching index.html:', error);
      throw error;
    }

    // Extract vehicle ID if it's a vehicle route
    const buyMatch = path.match(/^\/buy\/([^\/]+)$/) || path.match(/^\/preview\/([^\/]+)$/);
    let vehicle: Vehicle | undefined;

    if (buyMatch) {
      const vehicleId = buyMatch[1];
      console.log(`[SSR-OG] Fetching vehicle data for ID: ${vehicleId}`);
      vehicle = await fetchVehicleData(vehicleId) || undefined;

      if (!vehicle) {
        console.log(`[SSR-OG] Vehicle ${vehicleId} not found`);
      }
    }

    // Get metadata for the route
    const metadata = getMetadataForRoute(path, vehicle);
    console.log(`[SSR-OG] Using metadata:`, metadata);

    // Replace placeholders
    htmlContent = htmlContent.replace(/__TITLE__/g, metadata.title);
    htmlContent = htmlContent.replace(/__DESCRIPTION__/g, metadata.description);
    htmlContent = htmlContent.replace(/__OG_TITLE__/g, metadata.ogTitle);
    htmlContent = htmlContent.replace(/__OG_DESCRIPTION__/g, metadata.ogDescription);
    htmlContent = htmlContent.replace(/__OG_IMAGE__/g, metadata.ogImage);
    htmlContent = htmlContent.replace(/__OG_URL__/g, metadata.ogUrl);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    console.log(`[SSR-OG] Sending modified HTML`);
    return res.status(200).send(htmlContent);
  } catch (error) {
    console.error('[SSR-OG] Error in handler:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
