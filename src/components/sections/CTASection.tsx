import { Button } from "@/components/ui/button";
import { HighlightText } from "@/components/ui/highlight-text";
import { ArrowRight } from "lucide-react";

// Ganti dengan nomor WhatsApp Anda (format: 628xxxxxxxxxx)
const WHATSAPP_NUMBER = "6285155145788";
const WHATSAPP_MESSAGE = "Halo kasihKreasi! Saya ingin jadwalkan konsultasi gratis untuk brand saya.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export function CTASection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="relative max-w-4xl mx-auto">
          {/* Decorative shapes */}
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-accent border-2 border-border rounded-2xl rotate-12 -z-10" />
          <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-tertiary border-2 border-border rounded-xl -rotate-6 -z-10" />
          
          <div className="bg-primary border-2 border-border rounded-3xl shadow-lg p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Siap bikin brand-mu <HighlightText variant="blue">lebih hidup</HighlightText>?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Mulai dari obrolan santai. Ceritain visimu, dan kami bantu wujudkan 
              dengan cara yang paling sesuai sama brandmu.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" size="xl" className="bg-card hover:bg-card/90" asChild>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  Jadwalkan Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-1" />
                </a>
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-70">
              Tanpa commitment. Cuma ngobrol dulu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
