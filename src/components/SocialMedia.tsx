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
            <blockquote 
              className="tiktok-embed" 
              cite="https://www.tiktok.com/@aciertocars" 
              data-unique-id="aciertocars" 
              data-embed-type="creator" 
              style={{ maxWidth: '780px', minWidth: '288px' }}
            >
              <section>
                <a 
                  target="_blank" 
                  href="https://www.tiktok.com/@aciertocars?refer=creator_embed"
                  className="block p-6 border border-border rounded-lg bg-background hover:bg-accent transition-colors text-center"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground">@aciertocars</h3>
                      <p className="text-sm text-muted-foreground">Síguenos en TikTok</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Descubre nuestros vehículos premium y contenido exclusivo
                  </p>
                </a>
              </section>
            </blockquote>
          </div>
        </div>
      </div>
      
      <script async src="https://www.tiktok.com/embed.js"></script>
    </section>
  );
};

export default SocialMedia;