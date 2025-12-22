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
            AI may assist in creation of these articles. However, the ideas, curation, and final edits are guided by my vision, so the final quality is my responsibility.
        </p>
      </div>
    </div>
  );
};

export default Disclaimer;
