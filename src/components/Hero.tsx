import heroBanner from "@/assets/hero-banner.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/buy?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/buy');
    }
  };

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBanner})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight text-primary">
          AutoSport Illescas
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Vehículos de ocasión con kilometraje verificado
        </p>
        
        {/* Search Bar */}
        <form onSubmit={handleSearch} className="max-w-lg mx-auto mt-8">
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Buscar por marca, modelo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white/90 backdrop-blur-sm border-white/20 text-gray-900 placeholder:text-gray-600"
              />
            </div>
            <Button type="submit" className="px-6">
              <Search className="h-4 w-4 mr-2" />
              Buscar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;