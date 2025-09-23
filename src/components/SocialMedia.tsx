const SocialMedia = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Síguenos en Redes sociales
          </h2>
          <p className="text-lg text-muted-foreground">
            <a 
              target="_blank" 
              href="https://www.tiktok.com/@aciertocars?refer=creator_embed"
              className="text-primary hover:text-primary/80 transition-colors font-medium"
            >
              @aciertocars
            </a>
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <a 
              target="_blank" 
              href="https://www.tiktok.com/@aciertocars?refer=creator_embed"
              className="block p-8 border border-border rounded-lg bg-background hover:bg-accent transition-all duration-300 hover-scale shadow-lg"
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">@aciertocars</h3>
                <p className="text-muted-foreground mb-4">
                  Descubre nuestros vehículos premium y contenido exclusivo en TikTok
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-lg font-bold text-foreground">590</p>
                    <p className="text-xs text-muted-foreground">Siguiendo</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">6.1K</p>
                    <p className="text-xs text-muted-foreground">Seguidores</p>
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">24.8K</p>
                    <p className="text-xs text-muted-foreground">Me gusta</p>
                  </div>
                </div>
                <div className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  Ver en TikTok
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;