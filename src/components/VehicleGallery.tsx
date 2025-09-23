import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import VehicleCard from "./VehicleCard";
import { fetchCars, transformApiCarToVehicle, type Vehicle } from "@/services/carsApi";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const VehicleGallery = () => {
  const { 
    data: carsResponse, 
    isLoading, 
    isError, 
    error 
  } = useQuery({
    queryKey: ['cars', { status: 'Published', page: 1, size: 50 }],
    queryFn: () => fetchCars({ status: 'Published', page: 1, size: 50 }),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });

  const vehicles: Vehicle[] = carsResponse?.results
    ? carsResponse.results.map(transformApiCarToVehicle)
    : [];

  if (isError) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¡Descubre nuestros vehículos!</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              El mejor precio y la mejor calidad van de la mano.
            </p>
          </div>
          
          <Alert className="max-w-md mx-auto">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              No se pudieron cargar los vehículos en este momento. Por favor, inténtalo de nuevo más tarde.
            </AlertDescription>
          </Alert>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">¡Descubre nuestros vehículos!</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            El mejor precio y la mejor calidad van de la mano.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="space-y-3">
                <Skeleton className="h-48 w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-8 w-full" />
                </div>
              </div>
            ))
          ) : (
            vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default VehicleGallery;