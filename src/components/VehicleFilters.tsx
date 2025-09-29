import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, X } from "lucide-react";

interface VehicleFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedBrand: string;
  onBrandChange: (value: string) => void;
  selectedBodyType: string;
  onBodyTypeChange: (value: string) => void;
  selectedTransmission: string;
  onTransmissionChange: (value: string) => void;
  selectedFuel: string;
  onFuelChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  mileageRange: [number, number];
  onMileageRangeChange: (value: [number, number]) => void;
  yearRange: [number, number];
  onYearRangeChange: (value: [number, number]) => void;
  onClearFilters: () => void;
  vehicleCount: number;
  brands: string[];
  bodyTypes: string[];
  transmissions: string[];
  fuels: string[];
}

const VehicleFilters = ({ 
  searchTerm, 
  onSearchChange, 
  selectedBrand, 
  onBrandChange,
  selectedBodyType,
  onBodyTypeChange,
  selectedTransmission,
  onTransmissionChange,
  selectedFuel,
  onFuelChange,
  priceRange,
  onPriceRangeChange,
  mileageRange,
  onMileageRangeChange,
  yearRange,
  onYearRangeChange,
  onClearFilters,
  vehicleCount,
  brands,
  bodyTypes,
  transmissions,
  fuels
}: VehicleFiltersProps) => {
  const hasActiveFilters = searchTerm || selectedBrand || selectedBodyType || selectedTransmission || selectedFuel || 
    priceRange[0] > 0 || priceRange[1] < 100000 || 
    mileageRange[0] > 0 || mileageRange[1] < 300000 ||
    yearRange[0] > 2000 || yearRange[1] < new Date().getFullYear();

  return (
    <section className="bg-secondary/50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-80 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filtros</h3>
                {hasActiveFilters && (
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={onClearFilters}
                    className="text-primary hover:text-primary/80"
                  >
                    <X size={16} className="mr-1" />
                    Eliminar filtros
                  </Button>
                )}
              </div>

              {/* Search */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Buscar</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input 
                    placeholder="Buscar por marca, modelo..." 
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                  />
                </div>
              </div>

              {/* Brand Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Marca</label>
                <Select value={selectedBrand} onValueChange={onBrandChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas las marcas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todas las marcas</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand} value={brand}>
                        {brand}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Body Type Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Carrocería</label>
                <Select value={selectedBodyType} onValueChange={onBodyTypeChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos los tipos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos los tipos</SelectItem>
                    {bodyTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Transmission Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Transmisión</label>
                <Select value={selectedTransmission} onValueChange={onTransmissionChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todas</SelectItem>
                    {transmissions.map((transmission) => (
                      <SelectItem key={transmission} value={transmission}>
                        {transmission}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Fuel Filter */}
              <div className="space-y-2">
                <label className="text-sm font-medium">Combustible</label>
                <Select value={selectedFuel} onValueChange={onFuelChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Todos</SelectItem>
                    {fuels.map((fuel) => (
                      <SelectItem key={fuel} value={fuel}>
                        {fuel}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Precio</label>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={onPriceRangeChange}
                    max={100000}
                    step={1000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{priceRange[0].toLocaleString()}€</span>
                    <span>{priceRange[1] >= 100000 ? '100.000€+' : `${priceRange[1].toLocaleString()}€`}</span>
                  </div>
                </div>
              </div>

              {/* Mileage Range */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Kilómetros</label>
                <div className="px-2">
                  <Slider
                    value={mileageRange}
                    onValueChange={onMileageRangeChange}
                    max={300000}
                    step={5000}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{mileageRange[0].toLocaleString()} km</span>
                    <span>{mileageRange[1] >= 300000 ? '300.000+ km' : `${mileageRange[1].toLocaleString()} km`}</span>
                  </div>
                </div>
              </div>

              {/* Year Range */}
              <div className="space-y-3">
                <label className="text-sm font-medium">Año</label>
                <div className="px-2">
                  <Slider
                    value={yearRange}
                    onValueChange={onYearRangeChange}
                    min={2000}
                    max={new Date().getFullYear()}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>{yearRange[0]}</span>
                    <span>{yearRange[1]}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Info */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">
                  {vehicleCount} Vehículo{vehicleCount !== 1 ? 's' : ''}
                  {hasActiveFilters && ' encontrado' + (vehicleCount !== 1 ? 's' : '')}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleFilters;