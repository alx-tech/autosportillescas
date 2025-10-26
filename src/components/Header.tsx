import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import autosportLogo from "@/assets/logo-autosport.png";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-black text-white border-b border-border/10">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img
              src={autosportLogo}
              alt="Autosport Illescas Logo"
              className="h-20 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/buy" className="text-white hover:text-primary transition-colors">
              Vehículos de ocasión
            </a>
            <a href="/sell" className="text-white hover:text-primary transition-colors">
              Vende tu coche
            </a>
            <a href="/financing" className="text-white hover:text-primary transition-colors">
              Financiación
            </a>
            <a href="/services" className="text-white hover:text-primary transition-colors">
              Servicios
            </a>
            <a href="/contact" className="text-white hover:text-primary transition-colors">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <Button variant="premium" className="hidden md:flex items-center gap-2" asChild>
            <a href="tel:925501794">
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
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vehículos de ocasión
            </a>
            <a
              href="/sell"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vende tu coche
            </a>
            <a
              href="/financing"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Financiación
            </a>
            <a
              href="/services"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </a>
            <a
              href="/contact"
              className="text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </a>
            <Button variant="premium" className="flex items-center gap-2 w-full" asChild>
              <a href="tel:925501794">
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