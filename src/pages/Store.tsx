import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import storeHeroImage from "@/assets/store-hero.png";

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${storeHeroImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Nuestra Tienda
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
            Productos Bardahl de alta calidad para el cuidado y mantenimiento de tu vehículo
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-white text-foreground hover:bg-primary/10 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <CardHeader className="p-0">
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}€
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">
                No hay productos en esta categoría
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            ¿Necesitas asesoramiento?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Nuestro equipo está disponible para ayudarte a elegir el producto adecuado para tu vehículo
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-primary text-white hover:bg-primary/90 h-11 px-8 transition-colors"
            >
              Contactar
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium border-2 border-primary text-primary hover:bg-primary hover:text-white h-11 px-8 transition-colors"
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Store;
