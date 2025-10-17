import type { VercelRequest, VercelResponse } from '@vercel/node';

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

async function fetchVehicleData(id: string): Promise<Vehicle | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(CARS_API_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`[PREVIEW] API returned status: ${response.status}`);
      return null;
    }

    const cars = await response.json();
    const vehicle = cars.find((car: any) => car.id === id);

    if (!vehicle) {
      return null;
    }

    const fuelTranslations: Record<string, string> = {
      'Diesel': 'Diésel',
      'Petrol': 'Gasolina',
      'Hybrid': 'Híbrido',
      'Electric': 'Eléctrico',
    };

    const transmissionTranslations: Record<string, string> = {
      'Automatic': 'Automático',
      'Manual': 'Manual',
    };

    return {
      id: vehicle.id,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
      mileage: vehicle.mileage,
      fuel: fuelTranslations[vehicle.fuel] || vehicle.fuel,
      transmission: transmissionTranslations[vehicle.transmission] || vehicle.transmission,
      images: vehicle.images || [],
    };
  } catch (error) {
    console.error('[PREVIEW] Error fetching vehicle data:', error);
    return null;
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { id } = req.query;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Vehicle ID is required' });
    }

    console.log(`[PREVIEW] Request for vehicle ${id}`);

    const vehicle = await fetchVehicleData(id);

    if (!vehicle) {
      console.log(`[PREVIEW] Vehicle ${id} not found`);
      return res.status(404).send('<h1>Vehicle not found</h1><p>Redirecting...</p><script>setTimeout(() => window.location.href = "/buy", 2000)</script>');
    }

    const formattedPrice = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(vehicle.price);

    const pageTitle = `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${formattedPrice} | Acierto Cars`;
    const pageDescription = `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.mileage.toLocaleString()} km, ${vehicle.fuel}, ${vehicle.transmission}. Vehículo de alta gama disponible en Acierto Cars Madrid.`;
    const pageUrl = `https://www.aciertocars.com/buy/${id}`;
    const carImage = vehicle.images[0] || 'https://www.aciertocars.com/assets/hero-banner.png';

    const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}" />

    <!-- Open Graph / Facebook / WhatsApp -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:title" content="${pageTitle}" />
    <meta property="og:description" content="${pageDescription}" />
    <meta property="og:image" content="${carImage}" />
    <meta property="og:site_name" content="Acierto Cars" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDescription}" />
    <meta name="twitter:image" content="${carImage}" />

    <!-- Auto-redirect to actual vehicle page after 0 seconds for browsers -->
    <meta http-equiv="refresh" content="0;url=/buy/${id}" />
    <script>
      // Immediate redirect (crawlers won't execute this)
      window.location.href = '/buy/${id}';
    </script>

    <style>
      body {
        font-family: Arial, sans-serif;
        max-width: 800px;
        margin: 50px auto;
        padding: 20px;
        background: #f5f5f5;
      }
      .card {
        background: white;
        padding: 30px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      }
      img {
        max-width: 100%;
        border-radius: 4px;
        margin: 20px 0;
      }
      h1 { color: #333; margin: 0 0 10px 0; }
      .price { color: #e63946; font-size: 24px; font-weight: bold; margin: 15px 0; }
      .specs { color: #666; line-height: 1.6; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>${vehicle.brand} ${vehicle.model} ${vehicle.year}</h1>
      <div class="price">${formattedPrice}</div>
      <img src="${carImage}" alt="${vehicle.brand} ${vehicle.model}" />
      <div class="specs">
        <p><strong>Kilometraje:</strong> ${vehicle.mileage.toLocaleString()} km</p>
        <p><strong>Combustible:</strong> ${vehicle.fuel}</p>
        <p><strong>Transmisión:</strong> ${vehicle.transmission}</p>
      </div>
      <p style="margin-top: 20px; color: #999;">Redirecting to vehicle page...</p>
    </div>
  </body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    console.log(`[PREVIEW] Sending HTML for ${vehicle.brand} ${vehicle.model}`);
    return res.status(200).send(html);
  } catch (error) {
    console.error('[PREVIEW] Error in handler:', error);
    return res.status(500).send('<h1>Error loading preview</h1><p>Please try again later.</p>');
  }
}
