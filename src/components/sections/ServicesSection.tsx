import { ServiceCard } from "@/components/ServiceCard";
import { HighlightText } from "@/components/ui/highlight-text";
import { Users, Video, BarChart3, MessageCircle, Camera, Megaphone } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description: "Kelola seluruh akun sosial mediamu dengan strategi konten yang konsisten dan engaging. Dari Instagram, TikTok, sampai LinkedIn.",
    variant: "yellow" as const,
    rotate: "left" as const,
  },
  {
    icon: Video,
    title: "Video Content Production",
    description: "Produksi video pendek yang viral-ready. Reels, TikTok, YouTube Shorts—semua format yang bikin audience stay.",
    variant: "blue" as const,
    rotate: "right" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Insights yang actionable, bukan cuma angka-angka. Kami bantu kamu memahami apa yang works dan apa yang perlu diubah.",
    variant: "mint" as const,
    rotate: "left" as const,
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Bangun komunitas yang loyal dan aktif. Kami handle engagement, respons, dan nurturing audiensmu.",
    variant: "pink" as const,
    rotate: "right" as const,
  },
  {
    icon: Camera,
    title: "Content Creation",
    description: "Foto produk, lifestyle content, dan visual storytelling yang bikin brandmu terlihat premium.",
    variant: "default" as const,
    rotate: "left" as const,
  },
  {
    icon: Megaphone,
    title: "Campaign Strategy",
    description: "Kampanye digital yang terintegrasi—dari awareness sampai conversion, kami design semuanya.",
    variant: "default" as const,
    rotate: "right" as const,
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-tertiary border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Layanan Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Semua yang kamu butuhkan untuk <HighlightText variant="blue">grow digital</HighlightText>
          </h2>
          <p className="text-lg text-muted-foreground">
            Fokus ke bisnismu, biar urusan digital kami yang handle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              variant={service.variant}
              rotate={service.rotate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
