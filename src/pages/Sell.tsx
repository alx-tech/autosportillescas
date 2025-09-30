import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ArrowRight, ArrowLeft, Car, User, CheckCircle } from "lucide-react";

const Sell = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    marca: "",
    modelo: "",
    ano: "",
    kilometros: "",
    combustible: "",
    nombre: "",
    telefono: "",
    email: "",
    observaciones: ""
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the form data
    console.log("Form submitted:", formData);
    setCurrentStep(3);
  };
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

        {/* Multi-Step Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Paso {currentStep} de {totalSteps}</span>
                    <span>{Math.round(progress)}% completado</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  
                  {currentStep === 1 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Car className="w-5 h-5" />
                        <CardTitle className="text-2xl">Detalles del vehículo</CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Cuéntanos sobre tu coche para ofrecerte la mejor valoración
                      </p>
                    </div>
                  )}
                  
                  {currentStep === 2 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <User className="w-5 h-5" />
                        <CardTitle className="text-2xl">Tus datos</CardTitle>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        ¿Cómo podemos contactarte con tu valoración?
                      </p>
                    </div>
                  )}
                  
                  {currentStep === 3 && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-green-600">
                        <CheckCircle className="w-5 h-5" />
                        <CardTitle className="text-2xl">¡Solicitud recibida!</CardTitle>
                      </div>
                    </div>
                  )}
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Step 1: Vehicle Details */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="marca">Marca *</Label>
                            <Input 
                              id="marca" 
                              placeholder="Ej: Ford, Toyota..." 
                              value={formData.marca}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="modelo">Modelo *</Label>
                            <Input 
                              id="modelo" 
                              placeholder="Ej: Focus, Corolla..." 
                              value={formData.modelo}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="ano">Año *</Label>
                            <Input 
                              id="ano" 
                              type="number" 
                              placeholder="2020" 
                              value={formData.ano}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="kilometros">Kilómetros *</Label>
                            <Input 
                              id="kilometros" 
                              type="number" 
                              placeholder="50000" 
                              value={formData.kilometros}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="combustible">Combustible *</Label>
                          <Input 
                            id="combustible" 
                            placeholder="Gasolina, Diésel, Híbrido..." 
                            value={formData.combustible}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>

                        <Button 
                          type="button" 
                          onClick={handleNext} 
                          className="w-full" 
                          size="lg"
                        >
                          Continuar
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    )}

                    {/* Step 2: Contact Details */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nombre">Nombre *</Label>
                            <Input 
                              id="nombre" 
                              placeholder="Tu nombre" 
                              value={formData.nombre}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="telefono">Teléfono *</Label>
                            <Input 
                              id="telefono" 
                              type="tel" 
                              placeholder="690715080" 
                              value={formData.telefono}
                              onChange={handleInputChange}
                              required 
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input 
                            id="email" 
                            type="email" 
                            placeholder="tu@email.com" 
                            value={formData.email}
                            onChange={handleInputChange}
                            required 
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="observaciones">Información adicional</Label>
                          <Textarea 
                            id="observaciones" 
                            placeholder="¿Algo más que debamos saber sobre tu vehículo? (extras, estado, historial...)"
                            value={formData.observaciones}
                            onChange={handleInputChange}
                            rows={4}
                          />
                        </div>

                        <div className="flex gap-4">
                          <Button 
                            type="button" 
                            onClick={handleBack} 
                            variant="outline"
                            className="flex-1"
                            size="lg"
                          >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Atrás
                          </Button>
                          <Button 
                            type="submit" 
                            className="flex-1" 
                            size="lg"
                          >
                            Solicitar valoración
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Success Message */}
                    {currentStep === 3 && (
                      <div className="space-y-6 text-center py-8 animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                          <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        
                        <div className="space-y-3">
                          <h3 className="text-2xl font-bold text-foreground">
                            ¡Gracias por tu solicitud!
                          </h3>
                          <p className="text-muted-foreground max-w-md mx-auto">
                            Hemos recibido la información de tu vehículo. Nuestro equipo la está revisando 
                            y te contactaremos en las próximas <span className="font-semibold text-foreground">24 horas</span> con 
                            tu valoración personalizada.
                          </p>
                        </div>

                        <div className="bg-muted p-4 rounded-lg space-y-2">
                          <p className="text-sm font-medium text-foreground">
                            📱 ¿Necesitas respuesta urgente?
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Llámanos al <a href="tel:690715080" className="text-primary hover:underline font-medium">690 715 080</a>
                          </p>
                        </div>

                        <Button 
                          type="button" 
                          onClick={() => {
                            setCurrentStep(1);
                            setFormData({
                              marca: "",
                              modelo: "",
                              ano: "",
                              kilometros: "",
                              combustible: "",
                              nombre: "",
                              telefono: "",
                              email: "",
                              observaciones: ""
                            });
                          }}
                          variant="outline"
                          size="lg"
                        >
                          Volver al inicio
                        </Button>
                      </div>
                    )}
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
