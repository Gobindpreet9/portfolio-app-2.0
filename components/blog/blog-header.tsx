import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function BlogHeader() {
  return (
    <div className="space-y-12 mb-16">
      <div className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
          Insights & Articles
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg leading-relaxed">
          Explore the latest thoughts on technology, development, and design. Deep dives into the future of web development and artificial intelligence.
        </p>
      </div>
      <div className="relative max-w-2xl">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-12 py-6 text-lg bg-background border-2 border-muted-foreground/20 focus:border-primary"
        />
      </div>
    </div>
  )
}