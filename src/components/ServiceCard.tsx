import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "yellow" | "blue" | "pink" | "mint";
  rotate?: "none" | "left" | "right";
  className?: string;
}

const variantStyles = {
  default: "bg-card",
  yellow: "bg-primary",
  blue: "bg-secondary/10",
  pink: "bg-accent",
  mint: "bg-tertiary",
};

const iconBgStyles = {
  default: "bg-muted",
  yellow: "bg-card",
  blue: "bg-secondary text-secondary-foreground",
  pink: "bg-card",
  mint: "bg-card",
};

const rotateStyles = {
  none: "",
  left: "rotate-[-2deg] hover:rotate-0",
  right: "rotate-[2deg] hover:rotate-0",
};

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  variant = "default",
  rotate = "none",
  className 
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        "border-2 border-border rounded-2xl shadow-sm p-6 transition-all duration-300",
        variantStyles[variant],
        rotateStyles[rotate],
        "hover:shadow-lg hover:-translate-y-2",
        className
      )}
    >
      <div 
        className={cn(
          "w-14 h-14 rounded-xl border-2 border-border flex items-center justify-center mb-4",
          iconBgStyles[variant]
        )}
      >
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}
