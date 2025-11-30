import PageContainer from "@/components/ui/page-container"
import { Skeleton } from "@/components/ui/skeleton"

export default function LogsLoading() {
  return (
    <PageContainer className="space-y-8">
      {/* Header Skeleton */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-[200px]" />
        <Skeleton className="h-4 w-[300px]" />
      </div>
      
      {/* Disclaimer Skeleton */}
      <Skeleton className="h-24 w-full rounded-lg" />

      {/* List Skeleton */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="border-2 rounded-xl overflow-hidden h-full min-h-[480px] flex flex-col bg-card">
            {/* Image */}
            <Skeleton className="aspect-video w-full" />
            
            {/* Content */}
            <div className="p-6 space-y-4 flex-1">
              <div className="flex gap-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-16" />
              </div>
              <Skeleton className="h-8 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            
            {/* Footer */}
            <div className="p-6 pt-0 mt-auto">
               <div className="border-t border-muted-foreground/20 mb-4" />
               <div className="flex gap-2">
                 <Skeleton className="h-6 w-16 rounded-full" />
                 <Skeleton className="h-6 w-16 rounded-full" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
