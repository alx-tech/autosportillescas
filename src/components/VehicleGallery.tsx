import VehicleCard from "./VehicleCard";
import suvImage from "@/assets/suv-silver.jpg";
import sedanImage from "@/assets/sedan-black.jpg";
import convertibleImage from "@/assets/convertible-red.jpg";
import coupeImage from "@/assets/coupe-white.jpg";

const VehicleGallery = () => {
  const vehicles = [
    {
      id: "1",
      image: suvImage,
      brand: "Mercedes-Benz",
      model: "GLE 350d",
      year: 2023,
      price: 75000,
      mileage: 15000,
      fuel: "Diesel",
      transmission: "Automático",
      type: "SUV",
      isNew: true,
    },
    {
      id: "2",
      image: sedanImage,
      brand: "BMW",
      model: "Serie 5 530i",
      year: 2022,
      price: 52000,
      mileage: 28000,
      fuel: "Gasolina",
      transmission: "Automático",
      type: "Sedán",
    },
    {
      id: "3",
      image: convertibleImage,
      brand: "Ferrari",
      model: "Portofino",
      year: 2023,
      price: 195000,
      mileage: 8000,
      fuel: "Gasolina",
      transmission: "Automático",
      type: "Cabrio",
      isNew: true,
    },
    {
      id: "4",
      image: coupeImage,
      brand: "Porsche",
      model: "911 Carrera",
      year: 2022,
      price: 125000,
      mileage: 12000,
      fuel: "Gasolina",
      transmission: "Manual",
      type: "Deportivo",
    },
    {
      id: "5",
      image: suvImage,
      brand: "Audi",
      model: "Q8 55 TFSI",
      year: 2023,
      price: 85000,
      mileage: 5000,
      fuel: "Gasolina",
      transmission: "Automático",
      type: "SUV",
    },
    {
      id: "6",
      image: sedanImage,
      brand: "Lexus",
      model: "LS 500h",
      year: 2022,
      price: 95000,
      mileage: 18000,
      fuel: "Híbrido",
      transmission: "Automático",
      type: "Sedán",
    },
  ];

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
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} {...vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VehicleGallery;