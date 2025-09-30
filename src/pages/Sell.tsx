import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2 } from "lucide-react";

const Sell = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section with Benefits */}
        <section className="py-16 px-4 bg-muted">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left side - Title and subtitle */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Tasa y vende fácilmente
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Consigue la mejor oferta del mercado.
                </p>
              </div>

              {/* Right side - Benefits checklist */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Mejor precio</h3>
                    <p className="text-muted-foreground">Te ofrecemos la mejor valoración del mercado</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Proceso rápido</h3>
                    <p className="text-muted-foreground">Valoración en 24 horas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Sin compromiso</h3>
                    <p className="text-muted-foreground">Valoración gratuita y sin obligación</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mt-1">
                    <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-1">Cualquier vehículo</h3>
                    <p className="text-muted-foreground">Compramos todo tipo de vehículos</p>
                  </div>
                </div>
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
