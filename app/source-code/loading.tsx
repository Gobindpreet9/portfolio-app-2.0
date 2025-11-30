import PageContainer from "@/components/ui/page-container"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"

export default function SourceCodeLoading() {
  return (
    <PageContainer className="space-y-16">
      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-[250px]" />
        <Skeleton className="h-4 w-[600px]" />
      </div>

      {/* Core Values */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-[150px]" />
        <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {Array.from({ length: 5 }).map((_, i) => (
             <div key={i} className="bg-card border-2 rounded-xl h-48 p-6 flex flex-col items-center gap-4">
               <Skeleton className="h-12 w-12 rounded-full" />
               <div className="space-y-2 w-full flex flex-col items-center">
                 <Skeleton className="h-5 w-24" />
                 <Skeleton className="h-4 w-full" />
                 <Skeleton className="h-4 w-3/4" />
               </div>
             </div>
          ))}
        </div>
      </div>

      <Separator />

      {/* Resume Section */}
      <div className="bg-card border-2 rounded-xl p-8 shadow-lg space-y-8">
        <div className="flex flex-col md:flex-row justify-between gap-6">
           <div className="space-y-2">
             <Skeleton className="h-10 w-[200px]" />
             <Skeleton className="h-4 w-[150px]" />
           </div>
           <Skeleton className="h-10 w-[180px]" />
        </div>
        
        <div className="space-y-6">
           <Skeleton className="h-8 w-[150px]" />
           <div className="space-y-4">
             <Skeleton className="h-24 w-full" />
             <Skeleton className="h-24 w-full" />
           </div>
        </div>
      </div>

      <Separator />

      {/* Wisdom Bites */}
      <div className="space-y-6">
        <Skeleton className="h-8 w-[180px]" />
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
           {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-card border-2 rounded-xl h-40 p-6 flex flex-col items-center justify-center gap-4">
                 <Skeleton className="h-8 w-8 rounded-full" />
                 <div className="space-y-2 w-full flex flex-col items-center">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-3 w-24" />
                 </div>
              </div>
           ))}
        </div>
      </div>
      
      {/* Contact Form */}
      <div className="space-y-8">
         <Separator className="my-8" />
         <div className="space-y-4">
            <Skeleton className="h-9 w-[200px]" />
            <Skeleton className="h-6 w-[400px]" />
         </div>
         <Skeleton className="h-[400px] w-full rounded-xl" />
      </div>

    </PageContainer>
  )
}
