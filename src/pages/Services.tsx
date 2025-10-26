import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/servicios-hero.png";
import bardahlImage from "@/assets/servicio-bardahl.jpg";
import pulidoImage from "@/assets/servicio-pulido.jpg";
import accesoriosImage from "@/assets/servicio-accesorios.png";
import matriculasImage from "@/assets/servicio-matriculas.png";
import compraventaImage from "@/assets/servicio-compraventa.jpg";
import enviosImage from "@/assets/servicio-envios.jpg";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestros Servicios
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            En Autosport Illescas te ofrecemos una experiencia completa con servicios diseñados para tu comodidad y tranquilidad
          </p>
        </div>
      </section>

      {/* Service 1: Bardahl */}
      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Nuestra zona Bardahl y Detail con productos Top
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Disponemos de lubricantes y aditivos de Bardahl y productos de Detail, ideales para un buen mantenimiento de los vehículos
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={bardahlImage}
                alt="Productos Bardahl y Detail"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Pulido */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:order-1">
              <img
                src={pulidoImage}
                alt="Pulido y abrillantado de carrocerías"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Pulido y abrillantado de carrocerías
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Disponemos de servicio de limpieza, pulido y abrillantado de carrocerías, para que los vehículos queden como nuevos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Accesorios */}
      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Accesorios de máxima calidad
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Venta por encargo de llantas AEZ, Momo, Ronal Dotz, de alfombrillas y protectores de maletero a medida, goma de altísima calidad. 100% europea.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={accesoriosImage}
                alt="Llantas y accesorios de calidad"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Matrículas */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:order-1">
              <img
                src={matriculasImage}
                alt="Matrículas acrílicas"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Matrículas de coche acrílicas
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Una gran ventaja respecto a las antiguas matrículas, las acrílicas son mucho más duraderas, evitando así el desgaste y la ilegibilidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 5: Compraventa */}
      <section className="py-8 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Compraventa de vehículos
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Concesionario de coches de segunda mano y premium con garantía, financiación 100% y kilómetros garantizados.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={compraventaImage}
                alt="Compraventa de vehículos premium"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service 6: Envíos */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center md:order-1">
              <img
                src={enviosImage}
                alt="Envíos a toda la península"
                className="w-full max-w-xs h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                Envíos de vehículos a toda la península
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Entregamos coches a domicilio en toda la Península. Un valor añadido que nos permite marcar la diferencia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Necesitas más información?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Nuestro equipo está disponible para resolver todas tus dudas y ayudarte a encontrar el vehículo perfecto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 transition-colors"
            >
              Contactar
            </a>
            <a
              href="/buy"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white h-11 px-8 transition-colors"
            >
              Ver vehículos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
