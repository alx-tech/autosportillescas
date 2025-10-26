import { Car, Truck, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Compraventa de vehículos premium",
      description: "Concesionario de coches de segunda mano y premium con garantía, financiación 100% y kilómetros garantizados."
    },
    {
      icon: Truck,
      title: "Envíos a toda la península",
      description: "Entregamos tu coche a domicilio en toda España. Un valor añadido que nos permite marcar la diferencia."
    },
    {
      icon: Sparkles,
      title: "Pulido y abrillantado profesional",
      description: "Servicio de limpieza, pulido y abrillantado de carrocerías para que tu vehículo quede como nuevo."
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros servicios en Autosport Illescas
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Somos una empresa especializada en la compra venta de coches. Disponemos de un Concesionario de coches de segundamano y premium con garantía, financiación 100% y kilómetros garantizados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-100 p-6 h-40 flex flex-col justify-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground text-center leading-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
          >
            <a href="/services">
              Más información
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;