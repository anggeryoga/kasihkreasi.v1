import * as React from "react";
import { cn } from "@/lib/utils";

interface StickerCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "yellow" | "blue" | "pink" | "mint" | "lavender";
  rotate?: "none" | "left" | "right" | "medium-left" | "medium-right";
  hover?: boolean;
}

const variantStyles = {
  default: "bg-card",
  yellow: "bg-primary",
  blue: "bg-secondary text-secondary-foreground",
  pink: "bg-accent",
  mint: "bg-tertiary",
  lavender: "bg-quaternary",
};

const rotateStyles = {
  none: "",
  left: "rotate-[-2deg]",
  right: "rotate-[2deg]",
  "medium-left": "rotate-[-4deg]",
  "medium-right": "rotate-[4deg]",
};

const StickerCard = React.forwardRef<HTMLDivElement, StickerCardProps>(
  ({ className, variant = "default", rotate = "none", hover = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-2 border-border rounded-2xl shadow-sm p-6 transition-all duration-200",
          variantStyles[variant],
          rotateStyles[rotate],
          hover && "hover:shadow-md hover:-translate-y-1",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

StickerCard.displayName = "StickerCard";

export { StickerCard };
