import { cn } from "@/lib/utils";

interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  rotate?: "left" | "right" | "none";
  className?: string;
}

const rotateStyles = {
  none: "",
  left: "rotate-[-3deg]",
  right: "rotate-[3deg]",
};

const bgColors = [
  "bg-primary",
  "bg-accent",
  "bg-tertiary",
  "bg-quaternary",
];

export function ProcessStep({ 
  step, 
  title, 
  description, 
  rotate = "none",
  className 
}: ProcessStepProps) {
  const bgColor = bgColors[(step - 1) % bgColors.length];
  
  return (
    <div
      className={cn(
        "border-2 border-border rounded-2xl shadow-sm p-5 transition-all duration-300",
        bgColor,
        rotateStyles[rotate],
        "hover:shadow-md hover:-translate-y-1 hover:rotate-0",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center font-mono font-bold text-sm">
          {step}
        </span>
        <div>
          <h4 className="font-serif font-semibold text-lg mb-1">{title}</h4>
          <p className="text-sm leading-relaxed opacity-80">{description}</p>
        </div>
      </div>
    </div>
  );
}
