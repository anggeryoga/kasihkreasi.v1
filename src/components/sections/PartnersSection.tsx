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
  // 1. Membagi data menjadi 2 baris
  // Baris pertama: 5 logo awal
  const firstRow = partners.slice(0, 5);
  // Baris kedua: 4 logo sisa
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

      <div className="relative flex flex-col gap-6 md:gap-8">
        {/* Gradient Fade (Overlay kiri & kanan agar terlihat halus) */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* --- ROW 1 (Gerak ke KIRI) --- */}
        <MarqueeRow items={firstRow} direction="left" />

        {/* --- ROW 2 (Gerak ke KANAN) --- */}
        <MarqueeRow items={secondRow} direction="right" />
      </div>
    </section>
  );
}

// Komponen kecil untuk membuat Baris Marquee agar kodenya rapi
function MarqueeRow({ items, direction }: { items: typeof partners; direction: "left" | "right" }) {
  // Duplikasi item agar looping mulus (min. 4x duplikasi jika item sedikit agar layar penuh)
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <div
        className="flex animate-marquee"
        // Trik CSS untuk membalik arah animasi tanpa setting Tailwind tambahan
        style={{ animationDirection: direction === "right" ? "reverse" : "normal" }}
      >
        {duplicatedItems.map((partner, index) => (
          <div key={`${partner.name}-${index}`} className="flex-shrink-0 mx-3 md:mx-4">
            {/* 
               PERBAIKAN UKURAN:
               1. w-auto: Lebar otomatis menyesuaikan rasio gambar
               2. h-20 md:h-24: Tinggi fixed agar kotak seragam
               3. min-w-[120px]: Agar logo kecil pun kotaknya tetap punya lebar minimum
               4. p-4: Padding agar logo punya ruang napas (tidak mepet border)
            */}
            <div className="h-20 md:h-24 min-w-[140px] md:min-w-[180px] bg-card border-2 border-border rounded-xl flex items-center justify-center px-6 hover:shadow-md transition-all hover:-translate-y-1">
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  // object-contain: Memastikan logo utuh (tidak terpotong/gepeng)
                  className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100"
                />
              ) : (
                <span className="font-mono text-xs md:text-sm text-muted-foreground">
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