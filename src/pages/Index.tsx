import Header from "@/components/Header";
import Hero from "@/components/Hero";
import VehicleFilters from "@/components/VehicleFilters";
import VehicleGallery from "@/components/VehicleGallery";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VehicleFilters />
      <VehicleGallery />
      <GoogleReviews />
      <Footer />
    </div>
  );
};

export default Index;
