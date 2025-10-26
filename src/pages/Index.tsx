import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleGallery from "@/components/VehicleGallery";
import GoogleReviews from "@/components/GoogleReviews";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VehicleGallery />
      <GoogleReviews />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
