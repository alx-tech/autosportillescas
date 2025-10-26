import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProductsCarousel = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros productos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Disponemos de productos Bardahl de alta calidad para el cuidado y mantenimiento de tu vehículo
          </p>
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
              {products.map((product) => (
                <CarouselItem key={product.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <CardHeader className="p-4 pb-2">
                      <div className="aspect-square overflow-hidden bg-white rounded-lg max-w-[200px] mx-auto">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-foreground mb-2 line-clamp-2">
                        {product.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {product.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <span className="text-xl font-bold text-primary">
                        {product.price}€
                      </span>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 bg-background border-border shadow-md hover:bg-accent" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 bg-background border-border shadow-md hover:bg-accent" />
          </Carousel>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" className="group">
            <a href="/store" className="flex items-center gap-2">
              Ver todos los productos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsCarousel;
