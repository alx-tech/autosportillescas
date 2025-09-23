import { Phone, Mail, MapPin, Clock } from "lucide-react";
import aciertoCarsLogo from "@/assets/acierto-cars-logo.png";

const Footer = () => {
  return (
    <footer className="bg-nav-background text-nav-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={aciertoCarsLogo} 
                alt="Acierto Cars Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">Acierto Cars</span>
            </div>
            <p className="text-nav-muted mb-4">
              Tu concesionario de confianza para vehículos premium de ocasión en Madrid.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-nav-muted">690715080</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-nav-muted">contacto@aciertocars.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-primary" />
                <span className="text-nav-muted">Calle Rio Tormes 83, 28110, Algete, Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-nav-muted">
              <li>Venta de vehículos</li>
              <li>Compra de vehículos</li>
              <li>Financiación</li>
              <li>Seguros</li>
              <li>Garantía extendida</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="space-y-2 text-nav-muted">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary" />
                <span>Lun-Vie: 9:00-19:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary" />
                <span>Sáb: 9:00-14:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary" />
                <span>Dom: Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 mt-8 pt-8 text-center">
          <p className="text-nav-muted">
            © 2025 Acierto Cars. Powered by INFINIT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;