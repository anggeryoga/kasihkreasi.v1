import { ProcessStep } from "@/components/ProcessStep";
import { HighlightText } from "@/components/ui/highlight-text";

const steps = [
  {
    step: 1,
    title: "Discovery Call",
    description: "Ngobrol santai tentang brandmu, goals, dan tantangan yang dihadapi. Tanpa commitment.",
    rotate: "right" as const,
  },
  {
    step: 2,
    title: "Strategy & Planning",
    description: "Kami buatkan strategi yang custom sesuai kebutuhan dan budgetmu. Clear & actionable.",
    rotate: "left" as const,
  },
  {
    step: 3,
    title: "Content Creation",
    description: "Tim kreatif mulai produksi konten. Kamu tetap bisa review dan kasih feedback.",
    rotate: "right" as const,
  },
  {
    step: 4,
    title: "Launch & Optimize",
    description: "Konten live, kami monitor performanya, dan terus optimize untuk hasil terbaik.",
    rotate: "left" as const,
  },
];

export function ProcessSection() {
  return (
    <section id="proses" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary border-2 border-border rounded-full text-sm font-mono shadow-xs mb-6">
            Cara Kerja
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
            Prosesnya <HighlightText variant="yellow">simple</HighlightText>, hasilnya maksimal
          </h2>
          <p className="text-lg text-muted-foreground">
            Empat langkah menuju konten yang bekerja untuk brandmu.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                rotate={step.rotate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
