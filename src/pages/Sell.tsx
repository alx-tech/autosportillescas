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
                Vende tu coche de forma rápida y segura
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Te ofrecemos la mejor valoración por tu vehículo. Proceso simple, rápido y sin complicaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Euro className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Mejor precio</h3>
                <p className="text-sm text-muted-foreground">Te ofrecemos la mejor valoración del mercado</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Proceso rápido</h3>
                <p className="text-sm text-muted-foreground">Valoración en 24 horas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sin compromiso</h3>
                <p className="text-sm text-muted-foreground">Valoración gratuita y sin obligación</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Cualquier vehículo</h3>
                <p className="text-sm text-muted-foreground">Compramos todo tipo de vehículos</p>
              </div>
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
