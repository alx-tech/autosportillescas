export interface CarApiResponse {
  id: string;
  title: string;
  ad_description: string;
  price_cents: number;
  currency_code: string;
  status: string;
  make: string;
  model: string;
  registration_date: string;
  odometer: {
    value: number;
    unit: string;
  };
  fuel: string;
  transmission: string;
  body_type: string;
  color: string;
  num_doors: number;
  num_seats: number;
  engine_size: number | null;
  engine_power: number;
  photo_urls: string[];
  created_at: string;
  updated_at: string;
  days_in_stock: number;
}

export type CarsApiResponse = CarApiResponse[];

export interface Vehicle {
  id: string;
  images: string[];
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  type: string;
  color?: string;
  doors?: number;
  seats?: number;
  engineSize?: number | null;
  enginePower?: number;
  isNew?: boolean;
  updatedAt: string;
}

const API_URL = 'https://multipost-api.alx.dev-cluster.alx.tech/api/public/inventory/profiles/0379afc2-5bb2-4322-84d5-5a3df99b09a7';

export const fetchCars = async (): Promise<CarsApiResponse> => {
  const response = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'cache-control': 'no-cache',
    },
  });

  if (!response.ok) {
    throw new Error(`API call failed with status: ${response.status}`);
  }

  return response.json();
};

export const transformApiCarToVehicle = (apiCar: CarApiResponse): Vehicle => {
  const registrationYear = apiCar.registration_date 
    ? new Date(apiCar.registration_date).getFullYear() 
    : new Date().getFullYear();
    
  return {
    id: apiCar.id,
    images: apiCar.photo_urls?.length > 0 ? apiCar.photo_urls : ['/placeholder.svg'],
    brand: apiCar.make || 'Unknown',
    model: apiCar.model || 'Unknown',
    year: registrationYear,
    price: apiCar.price_cents ? apiCar.price_cents / 100 : 0, // Convert from cents to euros
    mileage: apiCar.odometer?.value || 0,
    fuel: apiCar.fuel || 'Unknown',
    transmission: apiCar.transmission || 'Unknown',
    type: apiCar.body_type || 'Unknown',
    color: apiCar.color,
    doors: apiCar.num_doors,
    seats: apiCar.num_seats,
    engineSize: apiCar.engine_size,
    enginePower: apiCar.engine_power,
    isNew: apiCar.days_in_stock <= 30,
    updatedAt: apiCar.updated_at
  };
};