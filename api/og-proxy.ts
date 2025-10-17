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

function isCrawler(userAgent: string): boolean {
  const crawlerPatterns = [
    'bot', 'crawler', 'spider', 'crawling',
    'facebook', 'twitter', 'whatsapp', 'slack',
    'telegram', 'linkedin', 'pinterest',
    'facebot', 'twitterbot', 'whatsappbot',
    'slackbot', 'telegrambot', 'linkedinbot',
    'prerender'
  ];

  const lowerUA = userAgent.toLowerCase();
  return crawlerPatterns.some(pattern => lowerUA.includes(pattern));
}

async function fetchVehicleData(id: string): Promise<Vehicle | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout

    const response = await fetch(CARS_API_URL, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`API returned status: ${response.status}`);
      return null;
    }

    const cars = await response.json();
    const vehicle = cars.find((car: any) => car.id === id);

    if (!vehicle) {
      console.error(`Vehicle with ID ${id} not found in API response`);
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

function generateHTMLWithMetaTags(vehicle: Vehicle, vehicleId: string): string {
  const formattedPrice = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(vehicle.price);

  const pageTitle = `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${formattedPrice} | Acierto Cars`;
  const pageDescription = `${vehicle.brand} ${vehicle.model} ${vehicle.year} - ${vehicle.mileage.toLocaleString()} km, ${vehicle.fuel}, ${vehicle.transmission}. Vehículo de alta gama disponible en Acierto Cars Madrid.`;
  const pageUrl = `https://www.aciertocars.com/buy/${vehicleId}`;
  const carImage = vehicle.images[0] || 'https://www.aciertocars.com/og-default.png';

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/assets/acierto-cars-logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${pageTitle}</title>
    <meta name="description" content="${pageDescription}" />
    <meta name="author" content="Acierto Cars" />

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
    <meta name="twitter:url" content="${pageUrl}" />
    <meta name="twitter:title" content="${pageTitle}" />
    <meta name="twitter:description" content="${pageDescription}" />
    <meta name="twitter:image" content="${carImage}" />

    <!-- Redirect browsers to the actual SPA -->
    <meta http-equiv="refresh" content="0;url=/buy/${vehicleId}" />
    <script>
      // Immediate redirect for browsers (crawlers won't execute this)
      if (!navigator.userAgent.match(/bot|crawler|spider|crawling|facebook|twitter|whatsapp|slack|telegram|linkedin/i)) {
        window.location.href = '/buy/${vehicleId}';
      }
    </script>
  </head>
  <body>
    <h1>${vehicle.brand} ${vehicle.model} ${vehicle.year}</h1>
    <p>${pageDescription}</p>
    <img src="${carImage}" alt="${vehicle.brand} ${vehicle.model}" />
    <p>Precio: ${formattedPrice}</p>
    <p>Redirecting to vehicle page...</p>
    <a href="/buy/${vehicleId}">Click here if you are not redirected</a>
  </body>
</html>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({ error: 'Vehicle ID is required' });
  }

  const userAgent = req.headers['user-agent'] || '';
  const isBot = isCrawler(userAgent);

  console.log(`Request for vehicle ${id}, User-Agent: ${userAgent}, isBot: ${isBot}`);

  // For regular browsers, just redirect to the SPA
  if (!isBot) {
    return res.redirect(307, `/buy/${id}`);
  }

  // For bots, fetch vehicle data and return HTML with meta tags
  try {
    const vehicle = await fetchVehicleData(id);

    if (!vehicle) {
      console.log(`Vehicle ${id} not found`);
      return res.redirect(307, '/buy');
    }

    const html = generateHTMLWithMetaTags(vehicle, id);

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(200).send(html);
  } catch (error) {
    console.error('Error in OG proxy handler:', error);
    return res.redirect(307, `/buy/${id}`);
  }
}
