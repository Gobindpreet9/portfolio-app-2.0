import { Skeleton } from "@/components/ui/skeleton"

export default function LoreLoading() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-[150px]" />
        <Skeleton className="h-4 w-[400px]" />
      </div>

      {/* Tabs */}
      <Skeleton className="h-10 w-[400px] mb-8" />

      {/* Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-[400px] rounded-xl border-2 overflow-hidden bg-card">
            <Skeleton className="h-full w-full" />
          </div>
        ))}
      </div>
    </div>
  )
}
