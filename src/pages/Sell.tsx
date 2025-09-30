import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2, ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";

const Sell = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    tipoVehiculo: "",
    marca: "",
    modelo: "",
    ano: "",
    carroceria: "",
    color: "",
    combustible: "",
    tipoCambio: "",
    version: "",
    kilometraje: "",
    matricula: "",
    cuandoVender: "",
    interesIntercambio: "",
    nombre: "",
    telefono: "",
    email: ""
  });

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  // Vehicle type specific marca lists
  const marcasTurismo = [
    "Abarth", "Aiways", "Aixam", "Alfa Romeo", "Alpine", "Aro", "Asia", "Aston Martin", "Audi",
    "Baic", "Bentley", "Bestune", "BMW", "BYD", "Cadillac", "Chevrolet", "Chrysler", "Citroën",
    "Corvette", "CUPRA", "Dacia", "Daewoo", "Daihatsu", "Daimler", "Dodge", "Dongfeng", "DR AUTOMOBILES",
    "DS", "DFSK", "EBRO", "EVO", "Ferrari", "Fiat", "Fisker", "Ford", "Galloper", "Honda", "HONGQI",
    "HUMMER", "Hyundai", "Ineos", "Infiniti", "Innocenti", "Isuzu", "Iveco", "JAECOO", "Jaguar",
    "Jeep", "Kia", "KIA", "KGM", "Lada", "Lamborghini", "Lancia", "Land Rover", "Leapmotor", "Lexus",
    "Ligier", "Livan", "Lotus", "Lynk & Co", "Mahindra", "Maserati", "Maybach", "Mazda", "MCC",
    "McLaren", "Mercedes", "Mercedes-Benz", "MG", "MHero", "Micro", "MINI", "Mitsubishi", "Morgan",
    "MAXUS", "Nissan", "OMODA", "Opel", "Peugeot", "Pilote", "Polestar", "Pontiac", "Porsche",
    "Renault", "Rolls-Royce", "Rover", "Saab", "Santana", "SEAT", "SERES", "Skoda", "Skywell",
    "smart", "Smart", "SsangYong", "Subaru", "Suzuki", "SWM", "TATA", "Tesla", "Toyota", "UMM",
    "VAZ", "Volkswagen", "Volvo", "Voyah", "Weinsberg", "Xpeng", "Yooudooo", "Yudo", "Zhidou"
  ];

  const marcasIndustrial = [
    "Baic", "BYD", "Cenntro", "Citroën", "Dacia", "Daewoo", "DAF", "Daihatsu", "DFSK", "DR AUTOMOBILES",
    "DSK", "EVO", "EVUM", "Farizon", "Fiat", "Ford", "Foton", "Hyundai", "Ineos", "Isuzu", "Iveco",
    "Jeep", "KGM", "KIA", "Lada", "Land Rover", "LDV", "LEVC", "Ligier", "Livan", "Mahindra", "MAN",
    "MAXUS", "Mazda", "Mercedes", "Mercedes-Benz", "Mitsubishi", "Mitsubishi Fuso", "MW Motors",
    "Nextem", "Nissan", "Opel", "Peugeot", "Piaggio", "RAM", "Renault", "Renault Trucks", "SaIC",
    "SAIC MAXUS", "Santana", "Scania", "SEAT", "Skoda", "SsangYong", "Suzuki", "TATA", "Toyota",
    "UMM", "Volkswagen", "Volvo"
  ];

  // Generate years from 2025 down to 2000
  const years = Array.from({ length: 26 }, (_, i) => (2025 - i).toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    // Reset marca when vehicle type changes
    if (field === "tipoVehiculo") {
      setFormData({ ...formData, [field]: value, marca: "" });
    }
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
                  {currentStep === 1 && (
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">Detalles del vehículo</CardTitle>
                      <p className="text-sm text-muted-foreground">
                        Cuéntanos sobre tu coche para ofrecerte la mejor valoración
                      </p>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-2">
                      <CardTitle className="text-2xl">Tus datos</CardTitle>
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
                            <Label htmlFor="tipoVehiculo">Tipo de vehículo *</Label>
                            <Select
                              value={formData.tipoVehiculo}
                              onValueChange={(value) => handleSelectChange("tipoVehiculo", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="turismo">Turismo</SelectItem>
                                <SelectItem value="industrial">Industrial</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="marca">Marca *</Label>
                            <Select
                              value={formData.marca}
                              onValueChange={(value) => handleSelectChange("marca", value)}
                              required
                              disabled={!formData.tipoVehiculo}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona marca" />
                              </SelectTrigger>
                              <SelectContent>
                                {(formData.tipoVehiculo === "turismo" ? marcasTurismo : marcasIndustrial).map((marca) => (
                                  <SelectItem key={marca} value={marca}>{marca}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                          <div className="space-y-2">
                            <Label htmlFor="ano">Año *</Label>
                            <Select
                              value={formData.ano}
                              onValueChange={(value) => handleSelectChange("ano", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona año" />
                              </SelectTrigger>
                              <SelectContent>
                                {years.map((year) => (
                                  <SelectItem key={year} value={year}>{year}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        {formData.tipoVehiculo === "turismo" && (
                          <div className="space-y-2">
                            <Label htmlFor="carroceria">Carrocería *</Label>
                            <Select
                              value={formData.carroceria}
                              onValueChange={(value) => handleSelectChange("carroceria", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona carrocería" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="berlina">Berlina</SelectItem>
                                <SelectItem value="coupe">Coupé</SelectItem>
                                <SelectItem value="cabrio">Cabrio</SelectItem>
                                <SelectItem value="familiar">Familiar</SelectItem>
                                <SelectItem value="monovolumen">Monovolumen</SelectItem>
                                <SelectItem value="suv">SUV</SelectItem>
                                <SelectItem value="pickup">Pick Up</SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="color">Color *</Label>
                            <Input
                              id="color"
                              placeholder="Ej: Blanco, Negro..."
                              value={formData.color}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="combustible">Combustible *</Label>
                            <Select
                              value={formData.combustible}
                              onValueChange={(value) => handleSelectChange("combustible", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona combustible" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="gasolina">Gasolina</SelectItem>
                                <SelectItem value="diesel">Diésel</SelectItem>
                                <SelectItem value="hibrido">Híbrido</SelectItem>
                                <SelectItem value="hibrido-enchufable">Híbrido Enchufable</SelectItem>
                                <SelectItem value="electrico">Eléctrico</SelectItem>
                                <SelectItem value="gas">Gas (GLP/GNC)</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="tipoCambio">Tipo de cambio *</Label>
                            <Select
                              value={formData.tipoCambio}
                              onValueChange={(value) => handleSelectChange("tipoCambio", value)}
                              required
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona tipo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="manual">Manual</SelectItem>
                                <SelectItem value="automatico">Automático</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="version">Versión *</Label>
                            <Input
                              id="version"
                              placeholder="Ej: GTI, Sport..."
                              value={formData.version}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="kilometraje">Kilometraje *</Label>
                            <Input
                              id="kilometraje"
                              type="number"
                              placeholder="50000"
                              value={formData.kilometraje}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="matricula">Matrícula (opcional)</Label>
                            <Input
                              id="matricula"
                              placeholder="1234 ABC"
                              value={formData.matricula}
                              onChange={handleInputChange}
                            />
                          </div>
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
                        <div className="space-y-2">
                          <Label htmlFor="cuandoVender">¿Cuándo planeas venderlo? *</Label>
                          <Select
                            value={formData.cuandoVender}
                            onValueChange={(value) => handleSelectChange("cuandoVender", value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lo-antes-posible">Lo antes posible</SelectItem>
                              <SelectItem value="4-semanas">En las próximas 4 semanas</SelectItem>
                              <SelectItem value="4-meses">En los próximos 4 meses</SelectItem>
                              <SelectItem value="no-decidido">Aún no lo he decidido</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="interesIntercambio">¿Estás interesado en comprar un coche a cambio? *</Label>
                          <Select
                            value={formData.interesIntercambio}
                            onValueChange={(value) => handleSelectChange("interesIntercambio", value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona una opción" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="si">Sí</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

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
                            Get Tasación
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
                              tipoVehiculo: "",
                              marca: "",
                              modelo: "",
                              ano: "",
                              carroceria: "",
                              color: "",
                              combustible: "",
                              tipoCambio: "",
                              version: "",
                              kilometraje: "",
                              matricula: "",
                              cuandoVender: "",
                              interesIntercambio: "",
                              nombre: "",
                              telefono: "",
                              email: ""
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
