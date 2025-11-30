import { Skeleton } from "@/components/ui/skeleton"

export default function LogLoading() {
  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      {/* Back button skeleton */}
      <div className="mb-8">
        <Skeleton className="h-4 w-32" />
      </div>

      {/* Hero Image skeleton */}
      <div className="aspect-video w-full overflow-hidden rounded-xl mb-8">
        <Skeleton className="h-full w-full" />
      </div>

      {/* Article Header skeleton */}
      <div className="space-y-4 mb-8">
        {/* Date and read time */}
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-4 w-20" />
        </div>
        
        {/* Title */}
        <div className="space-y-2">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-10 w-1/2" />
        </div>

        {/* Tags */}
        <div className="flex gap-2">
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-24 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="space-y-6">
        {/* Paragraph 1 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[90%]" />
          <Skeleton className="h-4 w-[95%]" />
        </div>

        {/* Heading placeholder */}
        <Skeleton className="h-8 w-1/3 mt-8" />

        {/* Paragraph 2 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[98%]" />
          <Skeleton className="h-4 w-[92%]" />
        </div>

        {/* Image placeholder */}
        <Skeleton className="aspect-video w-full rounded-lg mt-4" />

        {/* Paragraph 3 */}
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[85%]" />
          <Skeleton className="h-4 w-full" />
        </div>
      </div>
    </div>
  )
}
