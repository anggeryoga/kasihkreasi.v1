import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/highlight-text";
import { StickerCard } from "@/components/ui/sticker-card";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="kontak" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Kontak
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Yuk <HighlightText variant="yellow">ngobrol</HighlightText>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ada ide? Ada pertanyaan? Atau cuma mau kenalan? Kami senang dengar dari kamu.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <StickerCard variant="default" className="p-8">
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-2">Nama</label>
                <input
                  type="text"
                  placeholder="Siapa nama kamu?"
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Pesan</label>
                <textarea
                  rows={4}
                  placeholder="Ceritain apa yang ada di pikiranmu..."
                  className="w-full px-4 py-3 bg-background border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Kirim Pesan
              </Button>
            </form>
          </StickerCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <StickerCard variant="yellow" rotate="right" className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border-2 border-border rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-lg mb-1">Email</h4>
                <p className="opacity-80">halo@jeparadigital.id</p>
              </div>
            </StickerCard>

            <StickerCard variant="mint" rotate="left" className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border-2 border-border rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-lg mb-1">WhatsApp</h4>
                <p className="opacity-80">+62 812-3456-7890</p>
              </div>
            </StickerCard>

            <StickerCard variant="lavender" rotate="right" className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border-2 border-border rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-lg mb-1">Lokasi</h4>
                <p className="opacity-80">Jepara, Jawa Tengah, Indonesia</p>
              </div>
            </StickerCard>
          </div>
        </div>
      </div>
    </section>
  );
}
