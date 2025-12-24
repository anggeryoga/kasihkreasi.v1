import { HighlightText } from "@/components/ui/highlight-text";

// Placeholder partner data - replace with actual logo images
const partners = [
  { name: "Brand Partner 1", logo: null },
  { name: "Brand Partner 2", logo: null },
  { name: "Brand Partner 3", logo: null },
  { name: "Brand Partner 4", logo: null },
  { name: "Brand Partner 5", logo: null },
  { name: "Brand Partner 6", logo: null },
  { name: "Brand Partner 7", logo: null },
  { name: "Brand Partner 8", logo: null },
];

export function PartnersSection() {
  // Duplicate partners for seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-4 py-2 bg-tertiary border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Dipercaya Oleh
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold">
            Brand yang sudah <HighlightText variant="blue">bertumbuh</HighlightText> bersama kami
          </h2>
        </div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade left */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        {/* Gradient fade right */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee track */}
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-6 md:mx-10"
            >
              <div className="w-32 md:w-40 h-16 md:h-20 bg-card border-2 border-border rounded-xl flex items-center justify-center px-4 hover:shadow-sm transition-shadow">
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all"
                  />
                ) : (
                  <span className="font-mono text-xs md:text-sm text-muted-foreground text-center">
                    {partner.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
