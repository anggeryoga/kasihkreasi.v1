import { HighlightText } from "@/components/ui/highlight-text";

// Data partner (9 logo)
const partners = [
  { name: "Partner 1", logo: "/logos/1.webp" },
  { name: "Partner 2", logo: "/logos/2.webp" },
  { name: "Partner 3", logo: "/logos/3.webp" },
  { name: "Partner 4", logo: "/logos/4.webp" },
  { name: "Partner 5", logo: "/logos/5.webp" },
  { name: "Partner 6", logo: "/logos/6.webp" },
  { name: "Partner 7", logo: "/logos/7.webp" },
  { name: "Partner 8", logo: "/logos/8.webp" },
  { name: "Partner 9", logo: "/logos/9.webp" },
];

export function PartnersSection() {
  const firstRow = partners.slice(0, 5);
  const secondRow = partners.slice(5);

  return (
    <section className="py-16 md:py-20 overflow-hidden bg-background">
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

      {/* Container utama marquee */}
      <div className="relative flex flex-col gap-2 md:gap-4"> {/* Gap dikurangi sedikit karena padding row ditambah */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <MarqueeRow items={firstRow} direction="left" />
        <MarqueeRow items={secondRow} direction="right" />
      </div>
    </section>
  );
}

function MarqueeRow({ items, direction }: { items: typeof partners; direction: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    // PERBAIKAN DI SINI:
    // Tambahkan 'py-4' (padding vertical). 
    // Ini memberi ruang kosong di atas dan bawah agar saat kartu naik, tidak kena potong 'overflow-hidden'.
    <div className="flex overflow-hidden py-4">
      <div
        className="flex animate-marquee"
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {duplicatedItems.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-3 md:mx-4">
            
            <div className="w-[160px] h-[100px] md:w-[200px] md:h-[125px] bg-card border-2 border-border rounded-xl flex items-center justify-center p-0 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                />
              ) : (
                <span className="font-mono text-xs md:text-sm text-muted-foreground p-2">
                  {partner.name}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}