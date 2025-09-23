const SocialMedia = () => {
  const tiktokVideos = [
    { views: "71.2K", thumbnail: "bg-gradient-to-br from-blue-400 to-purple-600" },
    { views: "234K", thumbnail: "bg-gradient-to-br from-red-400 to-pink-600" },
    { views: "56.3K", thumbnail: "bg-gradient-to-br from-green-400 to-blue-500" },
    { views: "6.1K", thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500" },
    { views: "32.3K", thumbnail: "bg-gradient-to-br from-purple-400 to-pink-500" },
    { views: "8.6K", thumbnail: "bg-gradient-to-br from-indigo-400 to-purple-600" },
    { views: "40.4K", thumbnail: "bg-gradient-to-br from-teal-400 to-blue-500" },
    { views: "14.8K", thumbnail: "bg-gradient-to-br from-pink-400 to-red-500" },
    { views: "55.7K", thumbnail: "bg-gradient-to-br from-orange-400 to-yellow-500" }
  ];

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

        <div className="max-w-2xl mx-auto">
          {/* TikTok Profile Header */}
          <div className="bg-background rounded-t-2xl p-6 border border-border border-b-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">🚗</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">aciertocars</h3>
                <p className="text-muted-foreground">Vehículos Premium Madrid</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 text-center mb-4">
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
          </div>

          {/* TikTok Video Grid */}
          <div className="bg-background rounded-b-2xl border border-border p-4">
            <div className="grid grid-cols-3 gap-2">
              {tiktokVideos.map((video, index) => (
                <a
                  key={index}
                  href="https://www.tiktok.com/@aciertocars?refer=creator_embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-[9/16] rounded-lg overflow-hidden hover-scale transition-all duration-300 group"
                >
                  <div className={`w-full h-full ${video.thumbnail} flex items-center justify-center`}>
                    <div className="text-white text-3xl opacity-60">▶</div>
                  </div>
                  <div className="absolute bottom-2 left-2 text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">
                    {video.views}
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                </a>
              ))}
            </div>
            
            <div className="text-center mt-6">
              <a
                href="https://www.tiktok.com/@aciertocars?refer=creator_embed"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white rounded-full hover:opacity-90 transition-opacity font-medium"
              >
                <span className="text-lg">📱</span>
                Ver más en TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;