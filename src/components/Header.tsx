import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-nav-background text-nav-foreground border-b border-border/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AC</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Acierto Cars</h1>
              <p className="text-nav-muted text-xs">Premium Vehicles</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-nav-foreground hover:text-primary transition-colors">
              Vehículos de ocasión
            </a>
            <a href="#" className="text-nav-foreground hover:text-primary transition-colors">
              Vende tu coche
            </a>
            <a href="#" className="text-nav-foreground hover:text-primary transition-colors">
              Financiación
            </a>
            <a href="#" className="text-nav-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="#" className="text-nav-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="premium" className="hidden md:flex items-center gap-2">
            <Phone size={16} />
            Llama ahora
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;