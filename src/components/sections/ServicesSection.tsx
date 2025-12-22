import { ServiceCard } from "@/components/ServiceCard";
import {
  Users,
  Video,
  BarChart3,
  Code,
  Mic,
  Megaphone
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description:
      "Kelola akun sosial media secara profesional dengan strategi konten yang konsisten, relevan, dan sesuai target audiens.",
    variant: "yellow" as const,
    rotate: "left" as const,
  },
  {
    icon: Video,
    title: "Video Content Production",
    description:
      "Produksi video pendek untuk Reels, TikTok, dan Shorts dengan konsep yang engaging dan siap perform.",
    variant: "blue" as const,
    rotate: "right" as const,
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Laporan performa yang jelas dan actionable untuk bantu ambil keputusan konten dan iklan lebih tepat.",
    variant: "mint" as const,
    rotate: "left" as const,
  },
  {
    icon: Code,
    title: "Web Development & Management",
    description:
      "Pembuatan dan pengelolaan website profesional—landing page, company profile, hingga web bisnis siap konversi.",
    variant: "pink" as const,
    rotate: "right" as const,
  },
  {
    icon: Mic,
    title: "Content Creation",
    description:
      "Produksi konten visual lengkap dengan copywriting dan voice over untuk meningkatkan daya tarik brand.",
    variant: "default" as const,
    rotate: "left" as const,
  },
  {
    icon: Megaphone,
    title: "Meta & TikTok Ads",
    description:
      "Strategi dan eksekusi iklan Meta Ads dan TikTok Ads untuk menjangkau audiens yang tepat dan meningkatkan conversion.",
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

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 leading-tight">
            Solusi lengkap untuk{" "}
            <span className="relative inline-block mx-1">
              Copywriting & Voice Over
              <span className="absolute left-0 bottom-1 w-full h-3 bg-blue-300/60 -z-10 rounded-sm" />
            </span>{" "}
            bisnis digitalmu
          </h2>

          <p className="text-lg text-muted-foreground">
            Dari konten, website, sampai iklan—kami bantu dari strategi sampai eksekusi.
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
