import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactBackground from "@/assets/contact.png";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
    acceptMarketing: false,
    acceptPrivacy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acceptPrivacy) {
      toast({
        title: "Error",
        description: "Debes aceptar la política de privacidad",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would normally send the form data to your backend
    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto contigo pronto",
    });
    
    // Reset form
    setFormData({
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      mensaje: "",
      acceptMarketing: false,
      acceptPrivacy: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Llámanos",
      description: "Estamos disponible en el siguiente teléfono:",
      contact: "690715080",
      href: "tel:690715080"
    },
    {
      icon: Mail,
      title: "Escríbenos",
      description: "No dudes en contactar con nosotros en el siguiente correo o si lo prefieres, puedes rellenar el anterior formulario.",
      contact: "contacto@aciertocars.com",
      href: "mailto:contacto@aciertocars.com"
    },
    {
      icon: MapPin,
      title: "Ven a visitarnos",
      description: "Encuéntranos en C. del Rio Tormes, 83, 28110 Algete, Madrid",
      contact: "C. del Rio Tormes, 83, 28110 Algete, Madrid",
      href: "https://maps.google.com/?q=C.+del+Rio+Tormes,+83,+28110+Algete,+Madrid"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with Form */}
      <section 
        className="py-16 px-4 relative overflow-hidden min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `url(${contactBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Contacta con nosotros
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Para cualquier información sobre nosotros o cualquier vehículo no dude en contactarnos
            </p>
          </div>

          {/* Contact Form */}
          <Card className="bg-background/95 backdrop-blur-sm shadow-lg border border-border/50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="apellido">Apellido</Label>
                    <Input
                      id="apellido"
                      name="apellido"
                      value={formData.apellido}
                      onChange={handleInputChange}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefono">Teléfono</Label>
                    <div className="flex">
                      <div className="flex items-center px-3 bg-muted border border-r-0 border-border rounded-l-md">
                        <span className="text-sm text-muted-foreground">🇪🇸</span>
                      </div>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        required
                        className="bg-background rounded-l-none"
                        placeholder="666 666 666"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensaje">Mensaje</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptMarketing"
                      checked={formData.acceptMarketing}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, acceptMarketing: checked as boolean })
                      }
                    />
                    <Label htmlFor="acceptMarketing" className="text-sm text-muted-foreground">
                      Acepto las comunicaciones comerciales y de ofertas.
                    </Label>
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptPrivacy"
                      checked={formData.acceptPrivacy}
                      onCheckedChange={(checked) => 
                        setFormData({ ...formData, acceptPrivacy: checked as boolean })
                      }
                      required
                    />
                    <Label htmlFor="acceptPrivacy" className="text-sm text-muted-foreground">
                      Acepto la <a href="#" className="text-primary hover:underline">política de privacidad</a>.
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="text-center border border-border/50 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {info.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {info.description}
                    </p>
                    <a 
                      href={info.href}
                      className="text-primary hover:text-primary/80 font-medium transition-colors"
                      target={info.icon === MapPin ? "_blank" : undefined}
                      rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                    >
                      {info.contact}
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;