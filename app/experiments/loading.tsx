export default function ProjectsLoading() {
  return (
    <div className="space-y-12 animate-fade-in">
      <div className="space-y-4">
        <div className="h-12 w-2/3 bg-muted rounded animate-pulse" />
        <div className="h-6 w-1/2 bg-muted rounded animate-pulse" />
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-[400px] bg-muted rounded animate-pulse" />
        ))}
      </div>
    </div>
  )
}