import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import aciertoCarsLogo from "@/assets/acierto-cars-logo.png";

const Footer = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const legalContent = {
    privacy: {
      title: "Política de Privacidad",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">1. Información que recopilamos</h3>
          <p>En Acierto Cars recopilamos información personal cuando visita nuestro sitio web, se pone en contacto con nosotros o utiliza nuestros servicios.</p>
          
          <h3 className="text-lg font-semibold">2. Cómo utilizamos su información</h3>
          <p>Utilizamos su información personal para proporcionarle nuestros servicios, responder a sus consultas y mejorar su experiencia en nuestro sitio web.</p>
          
          <h3 className="text-lg font-semibold">3. Protección de datos</h3>
          <p>Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger su información personal contra el acceso no autorizado, alteración, divulgación o destrucción.</p>
          
          <h3 className="text-lg font-semibold">4. Sus derechos</h3>
          <p>Tiene derecho a acceder, rectificar, suprimir y portar sus datos personales, así como a limitar u oponerse a su tratamiento.</p>
        </div>
      )
    },
    legal: {
      title: "Aviso Legal",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">1.1 Identificación del Titular</h3>
          <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que el presente sitio web www.aciertocars.com es propiedad de:</p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p><strong>Titular:</strong> Acierto Cars Luxury S.L.U.</p>
            <p><strong>CIF/NIF:</strong> B44976579</p>
            <p><strong>Domicilio social:</strong> Calle Río Tormes, nº 83, 28110, Algete</p>
            <p><strong>Teléfono:</strong> 690715080</p>
            <p><strong>Correo electrónico:</strong> contacto@aciertocars.com</p>
          </div>
          
          <h3 className="text-lg font-semibold">1.2 Condiciones de Uso</h3>
          <p>El acceso y uso del sitio web atribuyen la condición de usuario e implican la aceptación de las siguientes condiciones:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>El usuario se compromete a utilizar el sitio de forma lícita y conforme a la normativa vigente.</li>
            <li>La empresa puede modificar en cualquier momento los contenidos y condiciones del sitio sin previo aviso.</li>
            <li>No se garantiza la disponibilidad permanente del sitio ni la ausencia de errores.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">1.3 Propiedad Intelectual e Industrial</h3>
          <p>Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños, etc.) son propiedad de Acierto Cars Luxury S.L.U. o de terceros autorizados. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
          
          <h3 className="text-lg font-semibold">1.4 Responsabilidad</h3>
          <p>No nos hacemos responsables del uso indebido del sitio web ni de los enlaces de terceros que puedan aparecer en él.</p>
          
          <h3 className="text-lg font-semibold">1.5 Legislación y Jurisdicción</h3>
          <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los tribunales de Madrid.</p>
        </div>
      )
    },
    terms: {
      title: "Términos y Condiciones",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">1. Aceptación de términos</h3>
          <p>Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos y condiciones de uso.</p>
          
          <h3 className="text-lg font-semibold">2. Servicios</h3>
          <p>Acierto Cars se dedica a la venta de vehículos de ocasión, financiación y servicios relacionados con el automóvil.</p>
          
          <h3 className="text-lg font-semibold">3. Precios y disponibilidad</h3>
          <p>Los precios mostrados están sujetos a cambios sin previo aviso. La disponibilidad de los vehículos se actualiza regularmente.</p>
          
          <h3 className="text-lg font-semibold">4. Limitación de responsabilidad</h3>
          <p>Acierto Cars no se hace responsable de los daños directos o indirectos que puedan derivarse del uso de este sitio web.</p>
        </div>
      )
    },
    cookies: {
      title: "Política de Cookies",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">¿Qué son las cookies?</h3>
          <p>Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.</p>
          
          <h3 className="text-lg font-semibold">Tipos de cookies que utilizamos</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento del sitio web.</li>
            <li><strong>Cookies analíticas:</strong> Nos ayudan a entender cómo interactúa con nuestro sitio web.</li>
            <li><strong>Cookies de marketing:</strong> Utilizadas para mostrar publicidad relevante.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">Gestión de cookies</h3>
          <p>Puede configurar su navegador para rechazar las cookies, aunque esto puede afectar la funcionalidad del sitio web.</p>
        </div>
      )
    }
  };

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
                <span>Lun-Vie: 10:00-14:00, 16:00-19:00</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-primary" />
                <span>Sáb-Dom: Cerrado</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-nav-muted">
              © 2025 Acierto Cars. Powered by INFINIT
            </p>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm text-nav-muted">
              <button 
                onClick={() => setOpenModal('legal')}
                className="hover:text-primary transition-colors"
              >
                Aviso Legal
              </button>
              <span>•</span>
              <button 
                onClick={() => setOpenModal('privacy')}
                className="hover:text-primary transition-colors"
              >
                Política de Privacidad
              </button>
              <span>•</span>
              <button 
                onClick={() => setOpenModal('terms')}
                className="hover:text-primary transition-colors"
              >
                Términos y Condiciones
              </button>
              <span>•</span>
              <button 
                onClick={() => setOpenModal('cookies')}
                className="hover:text-primary transition-colors"
              >
                Cookies
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Modals */}
      {Object.entries(legalContent).map(([key, content]) => (
        <Dialog 
          key={key}
          open={openModal === key} 
          onOpenChange={() => setOpenModal(null)}
        >
          <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">{content.title}</DialogTitle>
            </DialogHeader>
            <div className="mt-4 text-sm text-muted-foreground">
              {content.content}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </footer>
  );
};

export default Footer;