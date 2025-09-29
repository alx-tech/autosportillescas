import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ChevronLeft, ChevronRight, Share2, MapPin, Phone, Calendar, Mail, User } from "lucide-react";
import { fetchCars, transformApiCarToVehicle, type Vehicle } from "@/services/carsApi";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const VehicleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { data: carsData, isLoading, error } = useQuery({
    queryKey: ['cars'],
    queryFn: fetchCars,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  const vehicle: Vehicle | undefined = carsData
    ? transformApiCarToVehicle(carsData.find(car => car.id === id)!)
    : undefined;

  useEffect(() => {
    if (!isLoading && !vehicle) {
      navigate('/stock');
    }
  }, [vehicle, isLoading, navigate]);

  if (isLoading || !vehicle) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8 bg-muted min-h-[calc(100vh-120px)]">
          <div className="animate-pulse">
            <div className="h-8 bg-muted rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-video bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-6 bg-muted rounded w-2/3"></div>
                <div className="h-4 bg-muted rounded w-1/2"></div>
                <div className="h-10 bg-muted rounded w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const monthlyPayment = Math.round(vehicle.price / 84); // 84 months financing

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${vehicle.brand} ${vehicle.model}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Enlace copiado al portapapeles");
    }
  };

  const handleReserve = () => {
    toast.success("¡Vehículo reservado! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 bg-muted min-h-[calc(100vh-120px)]">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Button
            variant="ghost"
            onClick={() => navigate('/stock')}
            className="p-0 h-auto text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="w-4 h-4 mr-1" />
            Volver al stock
          </Button>
        </nav>

        {/* Vehicle Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {vehicle.brand} {vehicle.model}
            </h1>
            <div className="flex flex-wrap gap-2 mt-2">
              <Badge variant="secondary">{vehicle.year}</Badge>
              <Badge variant="secondary">{vehicle.transmission}</Badge>
              <Badge variant="secondary">{vehicle.fuel}</Badge>
              <Badge variant="secondary">{vehicle.mileage.toLocaleString()} km</Badge>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleShare}
            className="flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" />
            Compartir
          </Button>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative aspect-video rounded-lg overflow-hidden bg-muted group">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={`${vehicle.brand} ${vehicle.model}`}
                className="w-full h-full object-cover"
              />
              
              {vehicle.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {currentImageIndex + 1} / {vehicle.images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Navigation */}
            {vehicle.images.length > 1 && (
              <div className="grid grid-cols-5 gap-2">
                {vehicle.images.slice(0, 5).map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-video rounded overflow-hidden border-2 transition-colors ${
                      currentImageIndex === index 
                        ? 'border-primary' 
                        : 'border-transparent hover:border-muted-foreground'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Vista ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Vehicle Information */}
          <div className="space-y-6">
            {/* Pricing */}
            <div>
              <div className="text-sm text-muted-foreground mb-2">Precio</div>
              <div className="text-3xl font-bold text-primary mb-4">
                {formatPrice(vehicle.price)}
              </div>
            </div>

            {/* Reserve Button */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  <span className="font-semibold">Reservar vehículo</span>
                </div>
                <p className="text-sm mb-4 opacity-90">
                  Reserva el vehículo para asegurarte de que no te lo quiten, y
                  nos pondremos en contacto contigo para ayudarte con todo el proceso de compra.
                </p>
                <Button
                  onClick={handleReserve}
                  variant="secondary"
                  className="w-full"
                >
                  Reservar ahora
                </Button>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <Button variant="outline" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Llamar ahora
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Agendar cita
              </Button>
            </div>

            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Quiero más información de este coche
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Nombre</Label>
                    <Input id="name" placeholder="Nombre" />
                  </div>
                  <div>
                    <Label htmlFor="surname">Apellido</Label>
                    <Input id="surname" placeholder="Apellido" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@gmail.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <div className="flex">
                      <div className="flex items-center px-3 border border-r-0 border-input rounded-l-md bg-muted text-sm whitespace-nowrap">
                        🇪🇸 +34
                      </div>
                      <Input 
                        id="phone" 
                        placeholder="666 666 666" 
                        className="rounded-l-none" 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message">Mensaje</Label>
                    <Textarea
                      id="message"
                      placeholder={`Estoy interesado en ${vehicle.brand} ${vehicle.model}`}
                      className="min-h-[80px]"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Enviar consulta
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Basic Data */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle>Datos básicos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">AÑO</div>
                    <div className="font-semibold">{vehicle.year}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">KILÓMETROS</div>
                    <div className="font-semibold">{vehicle.mileage.toLocaleString()} km</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">COMBUSTIBLE</div>
                    <div className="font-semibold">{vehicle.fuel.toUpperCase()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">CAMBIO</div>
                    <div className="font-semibold">{vehicle.transmission.toUpperCase()}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">CARROCERÍA</div>
                    <div className="font-semibold">{vehicle.type.toUpperCase()}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">PUERTAS</div>
                    <div className="font-semibold">5</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Details */}
          <Card>
            <CardHeader>
              <CardTitle>Detalles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <p><strong>{vehicle.brand} {vehicle.model}</strong></p>
                <p>Financiación a tu medida.</p>
                <p>En precio de venta están incluidos 12 meses de garantía. (Ampliable a 3 años)</p>
                <p>Gastos de transferencia y gestor 260€.</p>
                <p>Aceptamos vehículo como parte de pago.</p>
                <p>Entrega en toda España, consulte condiciones.</p>
                <div className="mt-4 p-3 bg-muted rounded">
                  <p className="text-xs text-muted-foreground">
                    Este anuncio no es vinculante, puede contener errores, se muestra a título informativo y no contractual.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trade-in Offer */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-2">¿Tienes un vehículo? Tásalo al mejor precio</h3>
            <p className="text-muted-foreground mb-4">
              En un cuestionario te damos un precio a descontar sobre tu compra. Se recogerá en el momento de la entrega.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Iniciar tasación
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default VehicleDetail;