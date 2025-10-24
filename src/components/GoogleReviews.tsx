import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import googleLogo from "@/assets/google-logo.jpeg";

const GoogleReviews = () => {
  const reviews = [
    {
      name: "Victor Requejo Rodriguez-Guisado",
      review: "Compre un coche y todo fenomenal, muy serios y Juan Ramon persona de toda confianza, muy recomendables."
    },
    {
      name: "Pablo R.G",
      review: "Hace un mes compre un Kia Venga, buena relación calidad/precio del coche, el trato de 10, Juan Ramón contesto a todas mis dudas sobre el coche, y algo que me gusto mucho ha sido su sinceridad con los detalles del coche, ya he recomendad este vendedor a dos amigos más."
    },
    {
      name: "Beatriz Roman",
      review: "Buen trato y atento, el comercial se molestó bastante en buscar lo que yo buscaba y en contacto hasta que lo encontré"
    },
    {
      name: "Andres Crespo",
      review: "Muy bien atendido , la descripción del coche correspondía con su estado , y se encargan de hacer todos los trámites."
    },
    {
      name: "juanan j",
      review: "Humildad y sencillez con el vendedor.A través de coches.net tenían anunciado un CLA que me enamoro.siendo de valencia pensaba que iba a ser un poco complicado en poder hacer casi toda la gestión por teléfono pero no fue así.me facilitaron todo lo que me hiciera falta,fotos videos, documentos etc...al final fui a Illescas a constatar y comprar el coche y eso hice.Estoy muy contento y satisfecho,no tuve ningún problema.Les doy 5 estrellas porque no puedo darles mas seguir así."
    },
    {
      name: "Riccardo Accolla",
      review: "Estive muy satisfecho que mi primera compra de coche en Espana ha sido con Autosport Illescas. Juan Ramon y su team han sido muy profesionales y amables. Los recomiendo mucho"
    },
    {
      name: "Mª Carmen Baixauli",
      review: "Totalmente recomendable. Hemos comprado un coche en Autosport Illescas. Juan Ramón ha sido muy amable con nosotros y nos ha facilitado toda la información necesaria. El coche funciona muy bien y estamos muy satisfechos con la compra realizada. Su trato, amabilidad y profesionalidad han sido de 10. Muchísimas gracias Juan Ramón."
    },
    {
      name: "Sanlo",
      review: "Excepcional, gran atención y profesionalidad. Fui a la tienda por recomendación de un amigo en busca de un BMW x1 y ha sido lo mejor que he podido hacer. Los coches están impecables y la confianza que da Juan Ramón es máxima. Ya tengo coche nuevo!"
    },
    {
      name: "Fran De la Rosa",
      review: "Compré un Audi! y estamos muy contentos! Nos atendió Juanra un gran profesional y muy amable nos asesoro sobre el coche y todas sus características."
    }
  ];

  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Lo que dicen nuestros clientes de nosotros
          </h2>
          
          {/* Google Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <a
                href="https://www.google.com/maps?cid=5577598555223990958"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img 
                  src={googleLogo}
                  alt="Google"
                  className="w-6 h-6"
                />
              </a>
              <div className="w-px h-6 bg-border"></div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-foreground">4.7</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover-scale h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary font-semibold text-sm">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{review.name}</h3>
                          <div className="flex items-center gap-1 mt-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        "{review.review}"
                      </p>
                      <p className="text-xs text-muted-foreground mt-3 font-medium">
                        Reseña de Google
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background border-border shadow-md hover:bg-accent" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background border-border shadow-md hover:bg-accent" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;