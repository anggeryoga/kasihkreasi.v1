import { cn } from "@/lib/utils";

interface PortfolioCardProps {
  image: string;
  title: string;
  category: string;
  rotate?: "left" | "right" | "none";
  className?: string;
}

const rotateStyles = {
  none: "",
  left: "rotate-[-2deg]",
  right: "rotate-[2deg]",
};

export function PortfolioCard({ 
  image, 
  title, 
  category,
  rotate = "none",
  className 
}: PortfolioCardProps) {
  return (
    <div
      className={cn(
        "group border-2 border-border rounded-2xl shadow-sm overflow-hidden bg-card transition-all duration-300",
        rotateStyles[rotate],
        "hover:shadow-lg hover:-translate-y-2 hover:rotate-0",
        className
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-3 py-1 text-xs font-mono bg-muted rounded-full border border-border mb-2">
          {category}
        </span>
        <h4 className="font-serif font-semibold">{title}</h4>
      </div>
    </div>
  );
}
