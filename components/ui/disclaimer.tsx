import { cn } from "@/lib/utils";
import { Info } from "lucide-react";

interface DisclaimerProps {
  className?: string;
}

const Disclaimer = ({ className }: DisclaimerProps) => {
  return (
    <div className={cn(
      "flex items-start gap-3 p-4 rounded-lg border border-muted bg-muted/30 text-sm text-muted-foreground leather-texture",
      "transition-all duration-300 hover:bg-muted/50 hover:border-muted-foreground/30",
      className
    )}>
      <Info className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
      <div className="space-y-1">
        <p className="font-medium text-foreground">AI Assistance Disclosure</p>
        <p className="leading-relaxed">
            AI assists in creation of these articles. However, the curation, editing, direction, core ideas are a product of my vision, hence the final quality - whether good or bad - is my responsibility.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
