import PageContainer from "@/components/ui/page-container";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactLoading() {
  return (
    <PageContainer className="space-y-12 animate-fade-in">
      {/* Header skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-12 w-48" />
        <Skeleton className="h-6 w-96 max-w-full" />
      </div>

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Form skeleton - 2 columns */}
        <div className="lg:col-span-2">
          <div className="bg-card border-2 rounded-xl p-8 shadow-lg space-y-6">
            {/* Email and Subject row */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-10 w-full" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>

            {/* Message textarea */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-36 w-full" />
            </div>

            {/* Submit button */}
            <Skeleton className="h-12 w-40" />
          </div>
        </div>

        {/* Sidebar skeleton */}
        <div className="space-y-6">
          <div className="bg-card border-2 rounded-xl p-6 shadow-lg space-y-4">
            <Skeleton className="h-6 w-40" />
            <div className="space-y-3">
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
          <div className="rounded-xl p-6 border">
            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
