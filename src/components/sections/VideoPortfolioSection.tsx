import { HighlightText } from "@/components/ui/highlight-text";
import { StickerCard } from "@/components/ui/sticker-card";
import { Eye, TrendingUp, Play, ExternalLink } from "lucide-react";

// --- DATA VIDEO ---
const videoItems = [
  {
    id: "7574276966958877960", 
    username: "@nicecoffee.official",
    title: "Nice Coffee Viral",
    views: "51M", 
    thumbnail: "/thumbnail/51jt.webp",
  },
  {
    id: "7343849809855433990", 
    username: "@youneedmie_official",
    title: "YouNeedMie Viral",
    views: "34M", 
    thumbnail: "/thumbnail/34jt.webp",
  },
  {
    id: "7441972332639374648", 
    username: "@youneedmie_official",
    title: "YouNeedMie Promo",
    views: "23M", 
    thumbnail: "/thumbnail/23jt.webp",
  },
  {
    id: "7569466570603334933", 
    username: "@youneedmie_official",
    title: "YouNeedMie Event",
    views: "2M", 
    thumbnail: "/thumbnail/2jt.webp",
  },
  {
    id: "7440347498767535415", 
    username: "@youneedmie_official",
    title: "YouNeedMie BTS",
    views: "1M", 
    thumbnail: "/thumbnail/1jt.webp",
  },
  {
    id: "7548715732658359558", 
    username: "@nicecoffee.official",
    title: "Nice Coffee Series",
    views: "980K",
    thumbnail: "/thumbnail/980k.webp",
  },
  {
    id: "7546136738557676806", 
    username: "@nicecoffee.official",
    title: "Nice Coffee Highlight",
    views: "230K",
    thumbnail: "/thumbnail/230k.webp",
  },
  {
    id: "7327067387352583429", 
    username: "@youneedmie_official",
    title: "YouNeedMie Launch",
    views: "148K",
    thumbnail: "/thumbnail/148k.webp",
  },
];

export function VideoPortfolioSection() {
  return (
    <section id="portofolio" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-quaternary border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Video Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Konten yang <HighlightText variant="pink">viral</HighlightText> & berkesan
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Strategi konten kreatif yang terbukti menghasilkan angka nyata.
          </p>

          {/* STATISTIK VIEW */}
          <div className="inline-flex items-center gap-4 bg-white border-2 border-border px-6 py-3 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Total Views</p>
              <p className="text-2xl md:text-3xl font-black font-sans text-foreground">
                {/* Saya perbaiki typo "520M++" menjadi "520M+" */}
                520M<span className="text-blue-600">+</span>
              </p>
            </div>
            <div className="h-8 w-[1px] bg-border mx-2 hidden md:block"></div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs text-muted-foreground">Organic & Ads</span>
              <span className="text-xs font-semibold">Across TikTok & IG</span>
            </div>
          </div>
        </div> 
        {/* <-- Di sini tadinya ada kelebihan </div> yang saya hapus */}

        {/* Grid Video */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {videoItems.map((video, index) => {
            // Kita buat Link manual ke TikTok
            const tiktokUrl = `https://www.tiktok.com/${video.username}/video/${video.id}`;

            return (
              <StickerCard
                key={index}
                variant="default"
                className="group overflow-hidden p-0 border-2 border-border bg-black transition-all hover:-translate-y-1"
              >
                {/* LINK AREA */}
                <a 
                  href={tiktokUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-[9/16] w-full h-full bg-gray-900 group cursor-pointer overflow-hidden"
                >
                  {/* SAMPUL VIDEO */}
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay Gelap */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                  
                  {/* BADGE VIEWS */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-black/60 text-white border border-white/20 rounded-lg text-xs font-bold font-sans backdrop-blur-md shadow-sm">
                      <Eye className="w-3.5 h-3.5 text-white" />
                      {video.views}
                    </span>
                  </div>

                  {/* ICON PLAY */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 fill-white text-white ml-1" />
                    </div>
                  </div>

                  {/* INFO USERNAME */}
                  <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 opacity-90">
                     <span className="flex items-center gap-1 text-[10px] bg-black/50 backdrop-blur-sm text-white px-2 py-0.5 rounded-full border border-white/10">
                       <ExternalLink className="w-3 h-3" />
                       {video.username}
                     </span>
                  </div>
                </a>
                
                {/* Judul kecil */}
                <div className="p-3 bg-card border-t border-border relative z-20">
                  <h4 className="font-medium text-xs md:text-sm truncate text-center text-muted-foreground group-hover:text-primary transition-colors">
                    {video.title}
                  </h4>
                </div>
              </StickerCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}