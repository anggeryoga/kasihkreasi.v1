import { cn } from "@/lib/utils";

interface HighlightTextProps {
  children: React.ReactNode;
  variant?: "yellow" | "blue" | "pink";
  className?: string;
}

const variantStyles = {
  yellow: "bg-gradient-to-r from-transparent via-primary/40 to-transparent",
  blue: "bg-gradient-to-r from-transparent via-secondary/30 to-transparent",
  pink: "bg-gradient-to-r from-transparent via-accent/50 to-transparent",
};

export function HighlightText({ children, variant = "yellow", className }: HighlightTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block px-1",
        className
      )}
    >
      <span
        className={cn(
          "absolute inset-0 top-1/2 h-1/2 -z-10 rounded-sm",
          variantStyles[variant]
        )}
        style={{
          background: variant === "yellow" 
            ? "linear-gradient(180deg, transparent 0%, hsl(var(--primary) / 0.5) 0%)"
            : variant === "blue"
            ? "linear-gradient(180deg, transparent 0%, hsl(var(--secondary) / 0.25) 0%)"
            : "linear-gradient(180deg, transparent 0%, hsl(var(--accent) / 0.6) 0%)"
        }}
      />
      {children}
    </span>
  );
}
