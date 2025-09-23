import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";

const VehicleFilters = () => {
  const categories = [
    { name: "Deportivo", value: "coupe" },
    { name: "Cabrio", value: "cabrio" },
    { name: "SUV", value: "suv" },
    { name: "Sedán", value: "sedan" },
    { name: "Familiar", value: "familiar" },
    { name: "Monovolumen", value: "monovolumen" },
    { name: "Furgoneta", value: "furgoneta" },
  ];

  return (
    <section className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Buscar vehículo..." 
                className="pl-10 h-12 text-lg"
              />
            </div>
            <Button variant="outline" className="h-12 px-6">
              <Filter size={20} className="mr-2" />
              Filtrar
            </Button>
          </div>

          {/* Category Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant="ghost"
                className="h-16 flex-col text-sm font-medium border border-border hover:border-primary hover:bg-primary/5"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFilters;