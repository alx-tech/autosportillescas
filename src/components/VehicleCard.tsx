import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface VehicleCardProps {
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
}

const VehicleCard = ({ 
  id,
  images = [], 
  brand, 
  model, 
  year, 
  price, 
  mileage, 
  fuel, 
  transmission, 
  type
}: VehicleCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);
  
  // Preload all images
  useEffect(() => {
    if (images.length > 1) {
      const loadPromises = images.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImagesLoaded(prev => {
              const newLoaded = [...prev];
              newLoaded[index] = true;
              return newLoaded;
            });
            resolve();
          };
          img.onerror = () => resolve(); // Still resolve on error to avoid hanging
          img.src = src;
        });
      });
      
      Promise.all(loadPromises);
    }
  }, [images]);
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images[currentImageIndex] || '/placeholder.svg';
  return (
    <Link to={`/stock/${id}`} className="block h-full">
      <Card className="group overflow-hidden hover:shadow-luxury transition-all duration-300 hover:scale-[1.02] flex flex-col h-full cursor-pointer">
        <div className="relative overflow-hidden">
        <img 
          src={currentImage} 
          alt={`${brand} ${model}`}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          style={{ imageRendering: 'auto' }}
        />
        {images.length > 1 && (
          <div className="absolute inset-x-2 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 bg-white/80 hover:bg-white/90"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft size={16} />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="h-8 w-8 bg-white/80 hover:bg-white/90"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {currentImageIndex + 1}/{images.length}
          </div>
        )}
      </div>
      
      <CardContent className="p-4 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-bold text-lg text-foreground">{brand} {model}</h3>
            <p className="text-muted-foreground text-sm">{year} • {type}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">€{price.toLocaleString()}</p>
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground mb-4">
            <div>📏 {mileage.toLocaleString()} km</div>
            <div>⛽ {fuel}</div>
            <div>⚙️ {transmission}</div>
            <div>📅 {year}</div>
          </div>
          <Button 
            className="w-full" 
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <Eye size={16} className="mr-2" />
            Ver detalles
          </Button>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default VehicleCard;