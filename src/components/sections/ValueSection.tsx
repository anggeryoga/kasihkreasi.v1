import { StickerCard } from "@/components/ui/sticker-card";
import { HighlightText } from "@/components/ui/highlight-text";
import { Target, Lightbulb, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Ide yang Relevan",
    description: "Konten yang bicara ke audiensmu dengan cara yang mereka pahami",
    variant: "yellow" as const,
    rotate: "left" as const,
  },
  {
    icon: Heart,
    title: "Pendekatan Human",
    description: "Bukan robot, bukan template—kami benar-benar peduli sama brandmu",
    variant: "pink" as const,
    rotate: "right" as const,
  },
  {
    icon: Target,
    title: "Hasil Terukur",
    description: "Data yang jelas, progress yang nyata, pertumbuhan yang konsisten",
    variant: "mint" as const,
    rotate: "left" as const,
  },
  {
    icon: Zap,
    title: "Eksekusi Cepat",
    description: "Dari konsep ke publikasi dalam waktu yang masuk akal",
    variant: "lavender" as const,
    rotate: "right" as const,
  },
];

export function ValueSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Kenapa Kami?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Ide bagus butuh <HighlightText variant="yellow">partner</HighlightText> yang tepat
          </h2>
          <p className="text-lg text-muted-foreground">
            Kami bukan cuma agency—kami perpanjangan tim kreatifmu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <StickerCard
              key={index}
              variant={value.variant}
              rotate={value.rotate}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto bg-card border-2 border-border rounded-xl flex items-center justify-center mb-4">
                <value.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm opacity-80 leading-relaxed">{value.description}</p>
            </StickerCard>
          ))}
        </div>
      </div>
    </section>
  );
}
