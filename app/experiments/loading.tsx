import PageContainer from "@/components/ui/page-container"
import { Skeleton } from "@/components/ui/skeleton"

export default function ExperimentsLoading() {
  return (
    <PageContainer className="space-y-12">
       {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[500px]" />
      </div>

      {/* Search Bar */}
      <div className="flex gap-4">
         <Skeleton className="h-10 w-[300px]" />
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="border-2 rounded-xl overflow-hidden h-full flex flex-col bg-card">
            {/* Image */}
            <Skeleton className="aspect-[4/3] w-full" />
            
            <div className="p-6 space-y-4 flex-1">
               <div className="flex justify-between">
                 <Skeleton className="h-6 w-1/2" />
                 <Skeleton className="h-5 w-16 rounded-full" />
               </div>
               <Skeleton className="h-20 w-full" />
               <div className="flex gap-2 mt-4">
                 <Skeleton className="h-5 w-12 rounded-full" />
                 <Skeleton className="h-5 w-12 rounded-full" />
                 <Skeleton className="h-5 w-12 rounded-full" />
               </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}