import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-8rem)] flex flex-col justify-center max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="grid gap-16 md:grid-cols-2 md:gap-12 items-start">
        {/* Photo Section Skeleton */}
        <div className="relative w-48 h-48 mx-auto md:w-64 md:h-64 rounded-full overflow-hidden order-1 md:order-2">
          <Skeleton className="h-full w-full rounded-full" />
        </div>

        {/* Bio Section Skeleton */}
        <div className="space-y-8 order-2 md:order-1">
          <div className="space-y-4">
            <Skeleton className="h-16 w-3/4" /> {/* Title */}
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
            <div className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/6" />
            </div>
          </div>

          {/* Navigation Links Skeleton */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </div>

          {/* Social Links Skeleton */}
          <div className="flex gap-4 pt-4">
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
            <Skeleton className="h-10 w-10 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  )
}