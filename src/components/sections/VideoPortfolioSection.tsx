import { HighlightText } from "@/components/ui/highlight-text";
import { StickerCard } from "@/components/ui/sticker-card";
import { Play } from "lucide-react";

// Placeholder video data - replace with actual TikTok/Instagram embed URLs
const videoItems = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=600&fit=crop",
    title: "Brand Awareness Campaign",
    platform: "TikTok",
    views: "125K",
    rotate: "left" as const,
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=600&fit=crop",
    title: "Product Launch Teaser",
    platform: "Instagram",
    views: "89K",
    rotate: "right" as const,
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=600&fit=crop",
    title: "Behind The Scenes",
    platform: "TikTok",
    views: "203K",
    rotate: "left" as const,
  },
  {
    id: 4,
    thumbnail: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=400&h=600&fit=crop",
    title: "Tutorial Series",
    platform: "Instagram",
    views: "156K",
    rotate: "right" as const,
  },
];

const rotateClasses = {
  left: "-rotate-2",
  right: "rotate-2",
};

export function VideoPortfolioSection() {
  return (
    <section id="portofolio" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-quaternary border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Video Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Konten yang <HighlightText variant="pink">viral</HighlightText> & berkesan
          </h2>
          <p className="text-lg text-muted-foreground">
            Video-video yang sudah kami produksi untuk berbagai brand di TikTok dan Instagram.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {videoItems.map((video) => (
            <StickerCard
              key={video.id}
              variant="default"
              rotate={video.rotate}
              className="group cursor-pointer overflow-hidden p-0"
            >
              <div className="relative aspect-[9/16] overflow-hidden rounded-xl">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 bg-card border-2 border-border rounded-full flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 fill-foreground" />
                  </div>
                </div>
                {/* Platform badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-card/90 border border-border rounded-full text-xs font-mono backdrop-blur-sm">
                    {video.platform}
                  </span>
                </div>
                {/* Views */}
                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-1 bg-card/90 border border-border rounded-full text-xs font-mono backdrop-blur-sm">
                    {video.views} views
                  </span>
                </div>
              </div>
              <div className="p-3">
                <h4 className="font-medium text-sm truncate">{video.title}</h4>
              </div>
            </StickerCard>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          * Klik untuk melihat video lengkapnya
        </p>
      </div>
    </section>
  );
}
