import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import autosportLogo from "@/assets/logo-autosport.png";

const Footer = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);

  const legalContent = {
    privacy: {
      title: "Política de Privacidad",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">2.1 Responsable del Tratamiento de Datos</h3>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p><strong>Nombre de la empresa:</strong> Autosport Illescas S.L.</p>
            <p><strong>Dirección:</strong> Avenida Los Trabajadores, 8 nave 4 (Minipark Los Pradillos) 45220 Illescas, España</p>
            <p><strong>Correo electrónico:</strong> autosportillescas@gmail.com</p>
            <p><strong>Teléfono:</strong> 925 501 794</p>
          </div>
          
          <h3 className="text-lg font-semibold">2.2 Datos que Recopilamos</h3>
          <p>Podemos recopilar los siguientes datos personales:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Nombre y apellidos</li>
            <li>CIF/NIF o número de identificación fiscal</li>
            <li>Correo electrónico y teléfono</li>
            <li>Dirección postal</li>
            <li>Datos de navegación mediante cookies (ver nuestra Política de Cookies)</li>
          </ul>
          
          <h3 className="text-lg font-semibold">2.3 Finalidad del Tratamiento</h3>
          <p>Usamos sus datos para:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Gestionar la compra y venta de vehículos</li>
            <li>Gestionar garantías, seguros y financiación</li>
            <li>Cumplir con obligaciones legales</li>
          </ul>
          
          <h3 className="text-lg font-semibold">2.4 Derechos del Usuario</h3>
          <p>Tiene derecho a acceder, rectificar, suprimir o limitar el tratamiento de sus datos enviando un correo a: <strong>autosportillescas@gmail.com</strong></p>
        </div>
      )
    },
    legal: {
      title: "Aviso Legal",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">1.1 Identificación del Titular</h3>
          <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se informa que el presente sitio web www.autosportillescas.com es propiedad de:</p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p><strong>Titular:</strong> Autosport Illescas S.L.</p>
            <p><strong>CIF/NIF:</strong> B87625190</p>
            <p><strong>Domicilio social:</strong> Avenida Los Trabajadores, 8 nave 4 (Minipark Los Pradillos) 45220 Illescas, España</p>
            <p><strong>Teléfono:</strong> 925 501 794</p>
            <p><strong>Correo electrónico:</strong> autosportillescas@gmail.com</p>
          </div>
          
          <h3 className="text-lg font-semibold">1.2 Condiciones de Uso</h3>
          <p>El acceso y uso del sitio web atribuyen la condición de usuario e implican la aceptación de las siguientes condiciones:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>El usuario se compromete a utilizar el sitio de forma lícita y conforme a la normativa vigente.</li>
            <li>La empresa puede modificar en cualquier momento los contenidos y condiciones del sitio sin previo aviso.</li>
            <li>No se garantiza la disponibilidad permanente del sitio ni la ausencia de errores.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">1.3 Propiedad Intelectual e Industrial</h3>
          <p>Todos los contenidos del sitio web (textos, imágenes, logotipos, diseños, etc.) son propiedad de Autosport Illescas S.L. o de terceros autorizados. Queda prohibida su reproducción, distribución o modificación sin autorización expresa.</p>
          
          <h3 className="text-lg font-semibold">1.4 Responsabilidad</h3>
          <p>No nos hacemos responsables del uso indebido del sitio web ni de los enlaces de terceros que puedan aparecer en él.</p>
          
          <h3 className="text-lg font-semibold">1.5 Legislación y Jurisdicción</h3>
          <p>Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los tribunales de Toledo.</p>
        </div>
      )
    },
    terms: {
      title: "Términos y Condiciones",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">4.1 Servicios Ofrecidos</h3>
          <p>A través de este sitio web, ofrecemos:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Compra y venta de vehículos.</li>
            <li>Servicios de financiación y garantías.</li>
            <li>Asesoramiento en trámites administrativos.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">4.2 Condiciones de Uso</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>El usuario se compromete a utilizar el sitio de manera legal y responsable.</li>
            <li>Nos reservamos el derecho a modificar contenido y condiciones sin previo aviso.</li>
            <li>No garantizamos la exactitud o actualización permanente de la información.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">4.3 Registro y Datos del Usuario</h3>
          <p>Para acceder a ciertos servicios, el usuario puede necesitar registrarse y proporcionar datos personales. Estos datos se tratarán conforme a nuestra Política de Privacidad.</p>
          
          <h3 className="text-lg font-semibold">4.4 Precios y Pagos</h3>
          <p>Los precios de los vehículos y servicios mostrados en la web pueden estar sujetos a cambios y no constituyen una oferta vinculante.</p>
          
          <h3 className="text-lg font-semibold">4.5 Derecho de Desistimiento</h3>
          <p>El usuario podrá ejercer su derecho de desistimiento dentro de los 14 días posteriores a la compra, conforme a la normativa vigente.</p>
          
          <h3 className="text-lg font-semibold">4.6 Legislación Aplicable y Jurisdicción</h3>
          <p>Estos términos se rigen por la legislación española. Cualquier disputa será resuelta en los tribunales de Toledo.</p>
        </div>
      )
    },
    cookies: {
      title: "Política de Cookies",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">3.1 ¿Qué son las cookies?</h3>
          <p>Las cookies son archivos que se almacenan en su dispositivo cuando visita nuestro sitio web. Nos permiten mejorar su experiencia y ofrecer publicidad relevante.</p>
          
          <h3 className="text-lg font-semibold">3.2 Tipos de cookies que usamos</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Estrictamente necesarias:</strong> Permiten el funcionamiento del sitio web.</li>
            <li><strong>De personalización:</strong> Recuerdan sus preferencias.</li>
            <li><strong>Analíticas:</strong> Nos ayudan a mejorar el sitio.</li>
            <li><strong>Publicitarias:</strong> Muestran anuncios adaptados a sus intereses.</li>
          </ul>
          
          <h3 className="text-lg font-semibold">3.3 Gestión de cookies</h3>
          <p>Puede aceptar, rechazar o configurar las cookies desde el banner de cookies o desde la configuración de su navegador.</p>
        </div>
      )
    }
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:pr-8">
            <div className="flex items-center mb-4">
              <img
                src={autosportLogo}
                alt="Autosport Illescas Logo"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4">
              Tu concesionario de confianza para vehículos premium de ocasión en Illescas, Toledo.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <div className="flex flex-col text-gray-300">
                  <span>925 501 794</span>
                  <span>647 403 012</span>
                  <span>925 501 794</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-300">autosportillescas@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="md:-ml-8">
            <h3 className="text-lg font-semibold mb-4">Dirección</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-300 leading-relaxed">
                  <p>Avenida Los Trabajadores, 8 nave 4<br />
                  (Minipark Los Pradillos)<br />
                  45220 Illescas, España</p>
                  <p className="mt-3">
                    A tan sólo 35 km de Madrid y 35 km de Toledo, Salida 35 de la A-42, dirección Esquivias-Yeles, (junto a la gasolinera BP)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col justify-between h-full">
            <div>
              <h3 className="text-lg font-semibold mb-4">Horarios</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-primary" />
                  <span>Lun-Vie: 10:00-14:00, 17:00-20:30</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-primary" />
                  <span>Sáb: 10:00-14:00</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-primary" />
                  <span>Dom: Cerrado</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.facebook.com/autosportillescas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://www.instagram.com/autosport_illescas/?hl=es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://wa.me/+34647403012?text=Hola%20Autosport%20Illescas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300">
              © 2025 Autosport Illescas. Powered by <a href="https://www.infinit.com/" target="_blank" rel="noopener noreferrer" className="underline">INFINIT</a>
            </p>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-300">
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