import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/highlight-text";
import { StickerCard } from "@/components/ui/sticker-card";
import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

// Ganti dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBER = "6285155145788";
const WHATSAPP_MESSAGE = "Halo kasihKreasi! Saya ingin tanya-tanya tentang layanan kalian.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

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
          {/* WhatsApp CTA */}
          <StickerCard variant="default" className="p-8 flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 bg-tertiary border-2 border-border rounded-2xl flex items-center justify-center mb-6">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-4">
              Chat langsung via WhatsApp
            </h3>
            <p className="text-muted-foreground mb-6">
              Paling cepat dan nyaman! Langsung ceritain kebutuhanmu, kami siap bantu.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat Sekarang
              </a>
            </Button>
          </StickerCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <StickerCard variant="yellow" rotate="right" className="flex items-start gap-4">
              <div className="w-12 h-12 bg-card border-2 border-border rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif font-semibold text-lg mb-1">Email</h4>
                <p className="opacity-80">mail@kasihkreasi.web.id</p>
              </div>
            </StickerCard>

            <StickerCard variant="mint" rotate="left" className="flex items-start gap-4">
              <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start gap-4 w-full"
              >
                <div className="w-12 h-12 bg-card border-2 border-border rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-1">WhatsApp</h4>
                  <p className="opacity-80">+62 851-5514-5788</p>
                </div>
              </a>
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
