import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Car, Euro, Clock, CheckCircle2 } from "lucide-react";

const Sell = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Tasa y vende fácilmente
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Consigue la mejor oferta del mercado.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-100 p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Euro className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Mejor precio
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Te ofrecemos la mejor valoración del mercado
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-100 p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Clock className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Proceso rápido
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Valoración en 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-100 p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Sin compromiso
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Valoración gratuita y sin obligación
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover-scale overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-gray-100 p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <Car className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Cualquier vehículo
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      Compramos todo tipo de vehículos
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Solicita una valoración</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="marca">Marca *</Label>
                        <Input id="marca" placeholder="Ej: Ford, Toyota..." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="modelo">Modelo *</Label>
                        <Input id="modelo" placeholder="Ej: Focus, Corolla..." required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="ano">Año *</Label>
                        <Input id="ano" type="number" placeholder="2020" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="kilometros">Kilómetros *</Label>
                        <Input id="kilometros" type="number" placeholder="50000" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="combustible">Combustible *</Label>
                      <Input id="combustible" placeholder="Gasolina, Diésel, Híbrido..." required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="observaciones">Observaciones</Label>
                      <Textarea 
                        id="observaciones" 
                        placeholder="Cuéntanos más sobre tu vehículo..."
                        rows={4}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input id="nombre" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" type="tel" placeholder="690715080" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Solicitar valoración gratuita
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Sell;
