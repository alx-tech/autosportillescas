import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { CheckCircle2, Clock, Shield, TrendingDown } from "lucide-react";
import { useState } from "react";

const Financing = () => {
  const [loanAmount, setLoanAmount] = useState(15000);
  const [months, setMonths] = useState(60);
  const interestRate = 6.5; // Annual interest rate

  const calculateMonthlyPayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payment = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
                    (Math.pow(1 + monthlyRate, months) - 1);
    return Math.round(payment);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-background py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Financiación a tu medida
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Consigue el coche que deseas con las mejores condiciones de financiación del mercado.
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
                  <TrendingDown className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Cuotas reducidas</h3>
                <p className="text-sm text-muted-foreground">Desde 84 meses con tipos competitivos</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Aprobación rápida</h3>
                <p className="text-sm text-muted-foreground">Respuesta en menos de 24 horas</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sin entrada</h3>
                <p className="text-sm text-muted-foreground">Posibilidad de financiar el 100%</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Sin sorpresas</h3>
                <p className="text-sm text-muted-foreground">Condiciones claras y transparentes</p>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Calcula tu cuota</h2>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-8">
                    <div>
                      <div className="flex justify-between mb-4">
                        <Label>Importe a financiar</Label>
                        <span className="font-bold text-primary">{loanAmount.toLocaleString()} €</span>
                      </div>
                      <Slider
                        value={[loanAmount]}
                        onValueChange={(value) => setLoanAmount(value[0])}
                        min={5000}
                        max={50000}
                        step={1000}
                      />
                    </div>

                    <div>
                      <div className="flex justify-between mb-4">
                        <Label>Plazo (meses)</Label>
                        <span className="font-bold text-primary">{months} meses</span>
                      </div>
                      <Slider
                        value={[months]}
                        onValueChange={(value) => setMonths(value[0])}
                        min={12}
                        max={84}
                        step={12}
                      />
                    </div>

                    <div className="bg-muted/50 p-6 rounded-lg">
                      <div className="text-center">
                        <p className="text-muted-foreground mb-2">Tu cuota mensual estimada</p>
                        <p className="text-4xl font-bold text-primary">
                          {calculateMonthlyPayment()} €/mes
                        </p>
                        <p className="text-sm text-muted-foreground mt-4">
                          TIN {interestRate}% | Total a pagar: {(calculateMonthlyPayment() * months).toLocaleString()} €
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Solicita tu financiación</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="nombre">Nombre *</Label>
                        <Input id="nombre" placeholder="Tu nombre" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="apellidos">Apellidos *</Label>
                        <Input id="apellidos" placeholder="Tus apellidos" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="telefono">Teléfono *</Label>
                        <Input id="telefono" type="tel" placeholder="690715080" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="tu@email.com" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="vehiculo">Vehículo de interés</Label>
                      <Input id="vehiculo" placeholder="Marca y modelo" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="importe">Importe a financiar *</Label>
                      <Input id="importe" type="number" placeholder="15000" required />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Solicitar financiación
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

export default Financing;
