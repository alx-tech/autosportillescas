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
    queryKey: ['cars'],
    queryFn: () => fetchCars(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2
  });

  const vehicles: Vehicle[] = carsResponse
    ? carsResponse.map(transformApiCarToVehicle)
    : [];

  // Sort by status (Published first), then by most recent (updatedAt), and take first 3
  const recentVehicles = [...vehicles]
    .sort((a, b) => {
      // First, prioritize by status: Published before Reserved
      const statusOrder = (status: string) => status === 'Published' ? 0 : 1;
      const statusDiff = statusOrder(a.status) - statusOrder(b.status);
      if (statusDiff !== 0) return statusDiff;

      // Then sort by most recent
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    })
    .slice(0, 3);

  if (isError) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">¡Descubre nuestros vehículos!</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todos nuestros vehículos tienen garantía y están en condiciones óptimas.
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
            Todos nuestros vehículos tienen garantía y están en condiciones óptimas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
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
            recentVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} {...vehicle} />
            ))
          )}
        </div>
        
        {!isLoading && vehicles.length > 3 && (
          <div className="text-center mt-8">
            <a
              href="/buy"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Ver vehículos
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default VehicleGallery;