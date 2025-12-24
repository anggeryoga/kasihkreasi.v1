import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/highlight-text";
import { StickerCard } from "@/components/ui/sticker-card";
import { Sparkles, TrendingUp, Video } from "lucide-react";

// Ganti dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBER = "6285155145788";
const WHATSAPP_MESSAGE = "Halo kasihKreasi! Saya tertarik untuk konsultasi tentang digital marketing.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function HeroSection() {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 right-[15%] w-16 h-16 bg-primary border-2 border-border rounded-2xl rotate-12 animate-float opacity-60" />
      <div className="absolute bottom-32 left-[10%] w-12 h-12 bg-accent border-2 border-border rounded-xl -rotate-6 animate-float-slow opacity-60" />
      <div className="absolute top-1/2 right-[8%] w-8 h-8 bg-tertiary border-2 border-border rounded-lg rotate-45 animate-wiggle opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-card border-2 border-border rounded-full text-sm font-mono shadow-xs">
                ✨ Digital Marketing Agency
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-balance">
              Ubah <HighlightText variant="yellow">ide kreatif</HighlightText> menjadi{" "}
              <HighlightText variant="blue">dampak nyata</HighlightText>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Kami bantu brand-mu tumbuh lewat konten yang autentik dan strategi 
              digital yang terasa manusiawi. Dari ide sampai viral.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Mulai Konsultasi
                </a>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <a href="#portofolio">
                  Lihat Portofolio
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Floating Cards */}
          <div className="relative h-[450px] hidden lg:block">
            {/* Main card */}
            <StickerCard 
              variant="yellow" 
              rotate="right"
              className="absolute top-0 left-12 w-64 animate-float"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-card border-2 border-border rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs">Social Growth</span>
              </div>
              <p className="font-serif text-2xl font-semibold">+340%</p>
              <p className="text-sm opacity-70">engagement rate</p>
            </StickerCard>

            {/* Video card */}
            <StickerCard 
              variant="pink"
              rotate="left"
              className="absolute top-24 right-0 w-56 animate-float-slow"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-card border-2 border-border rounded-xl flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs">Video Produksi</span>
              </div>
              <p className="font-serif text-lg font-semibold">Reels • TikTok • Shorts</p>
            </StickerCard>

            {/* Ideas card */}
            <StickerCard 
              variant="mint"
              rotate="medium-right"
              className="absolute bottom-12 left-0 w-60 animate-float"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-card border-2 border-border rounded-xl flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="font-mono text-xs">Ide Kreatif</span>
              </div>
              <p className="text-sm leading-relaxed">
                "Dari brief sederhana sampai viral—kami bantu kamu di setiap langkah."
              </p>
            </StickerCard>

            {/* Decorative shapes */}
            <div className="absolute bottom-0 right-20 w-24 h-24 bg-quaternary/30 border-2 border-border rounded-3xl -rotate-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
