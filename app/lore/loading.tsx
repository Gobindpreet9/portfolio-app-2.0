import { Skeleton } from "@/components/ui/skeleton"

export default function LoreLoading() {
  return (
    <div className="space-y-16 animate-pulse">
      {/* Header */}
      <div className="space-y-6">
        <Skeleton className="h-12 w-[200px] sm:w-[300px]" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-full max-w-[700px]" />
          <Skeleton className="h-5 w-full max-w-[600px]" />
        </div>
      </div>

      {/* Media Sections (Reading, Watching, Playing) */}
      {[1, 2, 3].map((section) => (
        <div key={section} className="space-y-6">
          {/* Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
            <Skeleton className="h-6 w-20 rounded-full" />
          </div>

          {/* Carousel Skeleton */}
          <div className="px-1 py-2 sm:px-8">
            <div className="flex gap-4 overflow-hidden">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="flex-shrink-0 w-[280px] sm:w-[300px]">
                  <Skeleton className="h-[380px] w-full rounded-2xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Map Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-10 w-10 rounded-lg" />
            <div className="space-y-2">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
          <Skeleton className="h-6 w-20 rounded-full" />
        </div>
        <Skeleton className="h-[500px] w-full rounded-xl" />
      </div>
    </div>
  )
}
