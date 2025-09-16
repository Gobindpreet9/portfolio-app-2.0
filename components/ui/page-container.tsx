import { cn } from "@/lib/utils";

const PageContainer = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={cn("container mx-auto px-4 sm:px-6 lg:px-8 py-12", className)}>
      {children}
    </div>
  );
};

export default PageContainer;
