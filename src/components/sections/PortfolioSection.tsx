import { PortfolioCard } from "@/components/PortfolioCard";
import { HighlightText } from "@/components/ui/highlight-text";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Social Media Revamp",
    category: "Social Media",
    rotate: "left" as const,
  },
  {
    image: portfolio2,
    title: "Video Content Series",
    category: "Video Production",
    rotate: "right" as const,
  },
  {
    image: portfolio3,
    title: "Brand Identity & Content",
    category: "Branding",
    rotate: "left" as const,
  },
];

export function PortfolioSection() {
  return (
    <section id="portofolio" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-quaternary border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Karya Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Hasil <HighlightText variant="pink">nyata</HighlightText> dari kolaborasi kreatif
          </h2>
          <p className="text-lg text-muted-foreground">
            Setiap project punya cerita. Ini beberapa yang kami banggakan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard
              key={index}
              image={item.image}
              title={item.title}
              category={item.category}
              rotate={item.rotate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
