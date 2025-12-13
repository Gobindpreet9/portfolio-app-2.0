import { cn } from "@/lib/utils";

const PageHeader = ({ title, description, className }: { title: string; description?: string; className?: string }) => {
  return (
    <div className={cn("space-y-4", className)}>
      <h1 className="hero-title text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="text-muted-foreground max-w-[700px] text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
