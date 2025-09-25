export interface CarApiResponse {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: string;
  status: string;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  fuel_type: string;
  transmission: string;
  body_type: string;
  color: string;
  doors: number;
  seats: number;
  engine_size: number;
  power: number;
  images: Array<{
    id: string;
    url: string;
    order: number;
  }>;
  features: string[];
  location: string;
  created_at: string;
  updated_at: string;
  days_in_stock: number;
}

export interface CarsApiResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CarApiResponse[];
}

export interface Vehicle {
  id: string;
  image: string;
  brand: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  fuel: string;
  transmission: string;
  type: string;
  isNew?: boolean;
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
  return {
    id: apiCar.id,
    image: apiCar.images?.[0]?.url || '/placeholder.svg',
    brand: apiCar.brand || 'Unknown',
    model: apiCar.model || 'Unknown',
    year: apiCar.year || new Date().getFullYear(),
    price: apiCar.price || 0,
    mileage: apiCar.mileage || 0,
    fuel: apiCar.fuel_type || 'Unknown',
    transmission: apiCar.transmission || 'Unknown',
    type: apiCar.body_type || 'Unknown',
    isNew: apiCar.days_in_stock <= 30
  };
};