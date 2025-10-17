export const config = {
  matcher: '/buy/:id*',
};

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
    const response = await fetch(CARS_API_URL);

    if (!response.ok) {
      return null;
    }

    const cars = await response.json();
    const vehicle = cars.find((car: any) => car.id === id);

    if (!vehicle) {
      return null;
    }

    // Transform data
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
    console.error('Error fetching vehicle data:', error);
    return null;
  }
}

export default async function middleware(request: Request) {
  const url = new URL(request.url);
  const userAgent = request.headers.get('user-agent') || '';

  // Check if the request is from a crawler/bot
  const isCrawler = /bot|crawler|spider|crawling|facebook|twitter|whatsapp|slack|telegram|linkedin|prerender/i.test(userAgent);

  // Only process crawler requests
  if (!isCrawler) {
    return fetch(request);
  }

  // Extract vehicle ID from URL
  const pathMatch = url.pathname.match(/\/buy\/([^\/]+)/);
  if (!pathMatch) {
    return fetch(request);
  }

  const vehicleId = pathMatch[1];

  try {
    // Fetch vehicle data
    const vehicle = await fetchVehicleData(vehicleId);

    if (!vehicle) {
      return fetch(request);
    }

    // Format price
    const formattedPrice = new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(vehicle.price);

    // Generate meta tags
    const pageTitle = `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${formattedPrice} | Acierto Cars`;
    const pageDescription = `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.mileage.toLocaleString()} km, ${vehicle.fuel}, ${vehicle.transmission}. Vehículo de alta gama disponible en Acierto Cars Madrid.`;
    const pageUrl = `https://www.aciertocars.com${url.pathname}`;
    const carImage = vehicle.images[0] || 'https://www.aciertocars.com/og-default.png';

    // Fetch the original HTML
    const response = await fetch(request);
    const html = await response.text();

    // Inject meta tags into the HTML
    const modifiedHtml = html.replace(
      /<head>/i,
      `<head>
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}" />

    <!-- Open Graph / Facebook -->
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
    <meta name="twitter:url" content="${pageUrl}" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDescription}" />
    <meta name="twitter:image" content="${carImage}" />`
    );

    return new Response(modifiedHtml, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 's-maxage=3600, stale-while-revalidate',
      },
    });
  } catch (error) {
    console.error('Error in middleware:', error);
    return fetch(request);
  }
}
