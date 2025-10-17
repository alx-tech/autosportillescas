import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import aciertoCarsLogo from "@/assets/acierto-cars-logo.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-nav-background text-nav-foreground border-b border-border/10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img
              src={aciertoCarsLogo}
              alt="Acierto Cars Logo"
              className="w-12 h-12 object-contain"
            />
            <div>
              <h1 className="text-xl font-bold">Acierto Cars</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/buy" className="text-nav-foreground hover:text-primary transition-colors">
              Vehículos de ocasión
            </a>
            <a href="/sell" className="text-nav-foreground hover:text-primary transition-colors">
              Vende tu coche
            </a>
            <a href="/financing" className="text-nav-foreground hover:text-primary transition-colors">
              Financiación
            </a>
            <a href="/services" className="text-nav-foreground hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="/contact" className="text-nav-foreground hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <Button variant="premium" className="hidden md:flex items-center gap-2" asChild>
            <a href="tel:690715080">
              <Phone size={16} />
              Llama ahora
            </a>
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <a
              href="/buy"
              className="text-nav-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vehículos de ocasión
            </a>
            <a
              href="/sell"
              className="text-nav-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vende tu coche
            </a>
            <a
              href="/financing"
              className="text-nav-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Financiación
            </a>
            <a
              href="/services"
              className="text-nav-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="/contact"
              className="text-nav-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <Button variant="premium" className="flex items-center gap-2 w-full" asChild>
              <a href="tel:690715080">
                <Phone size={16} />
                Llama ahora
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;