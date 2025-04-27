"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function ProjectsHeader() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
          Projects & Work
        </h1>
        <p className="text-muted-foreground max-w-[700px] text-lg">
          A collection of my technical projects, ranging from web applications to AI/ML experiments.
          Each project represents a unique challenge and learning experience.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="pl-10 bg-background border-2"
          />
        </div>
      </div>
    </div>
  )
}