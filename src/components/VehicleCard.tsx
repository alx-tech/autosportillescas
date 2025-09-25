import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";

interface VehicleCardProps {
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

const VehicleCard = ({ 
  image, 
  brand, 
  model, 
  year, 
  price, 
  mileage, 
  fuel, 
  transmission, 
  type,
  isNew = false 
}: VehicleCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-luxury transition-all duration-300 hover:scale-[1.02]">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${brand} ${model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNew && (
          <Badge className="absolute top-3 left-3 bg-primary">
            Nuevo
          </Badge>
        )}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="secondary" className="h-8 w-8">
            <Heart size={16} />
          </Button>
        </div>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-3">
          <h3 className="font-bold text-lg text-foreground mb-1">{brand} {model}</h3>
          <p className="text-muted-foreground text-sm">{year} • {type}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
          <div>📏 {mileage.toLocaleString()} km</div>
          <div>⛽ {fuel}</div>
          <div>⚙️ {transmission}</div>
          <div>📅 {year}</div>
        </div>
        
        <p className="text-2xl font-bold text-primary mb-4">€{price.toLocaleString()}</p>
        
        <Button className="w-full" variant="outline">
          <Eye size={16} className="mr-2" />
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};

export default VehicleCard;