import { Car, Shield, CreditCard, Truck, HeadphonesIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/servicios-hero.png";

const Services = () => {
  const mainServices = [
    {
      icon: Car,
      title: "Servicio VIP",
      description: "Nos encargamos de todo: recogida, entrega, limpieza y otras gestiones que necesites. Solo tendrás que preocuparte por ponerte al volante de tu nuevo vehículo."
    },
    {
      icon: Shield,
      title: "Garantía Plus hasta 3 años",
      description: "Tu vehículo de ocasión con garantía de 12 meses y hasta 3 años. Para vehículos de todo tipo como: berlinas, coupés, descapotables, deportivos, SUV, 4×4, etc."
    },
    {
      icon: Truck,
      title: "Envío a toda España",
      description: "Si no puedes venir a recoger el vehículo, no te preocupes. Nos encargamos de todo lo necesario para que lo recibas en la puerta de tu casa."
    },
    {
      icon: CreditCard,
      title: "Financiación disponible",
      description: "Trabajamos con los mejores bancos para ofrecerte opciones de financiación que se adapten a ti."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Servicios en Acierto Cars Luxury
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comercializamos e importamos vehículos premium a la carta, de ocasión, seminuevos y de KM 0 en Madrid.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src={heroImage} 
                alt="BMW blanco con logo de Acierto Cars Luxury"
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="text-center border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover-scale">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sell Your Car Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Vende tu coche sin problemas
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Asesoramos y acompañamos al cliente durante el proceso de compra/venta de su vehículo, 
            informándolo del momento idóneo para cambiar antes de que se devalúe, elección de nuevo modelo, 
            equipamiento y todo lo necesario para que su experiencia con nosotros sea un éxito.
          </p>
          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
            asChild
          >
            <a href="tel:690715080">
              Tasar mi coche
            </a>
          </Button>
        </div>
      </section>

      {/* Best Offers Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Descubre nuestras mejores ofertas
            </h2>
            <p className="text-lg text-muted-foreground">
              El mejor precio y la mejor calidad van de la mano.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-xl text-muted-foreground mb-8">
              ¿Te interesa alguno de nuestros vehículos?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
                asChild
              >
                <a href="/stock">
                  Ver stock disponible
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-3 text-lg"
                asChild
              >
                <a href="tel:690715080">
                  <HeadphonesIcon className="w-5 h-5 mr-2" />
                  Contactar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;