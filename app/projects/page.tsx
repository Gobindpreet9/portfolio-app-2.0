import { ProjectsHeader } from "@/components/projects/projects-header"
import { ProjectGrid } from "@/components/projects/project-grid"
import { prisma } from "@/lib/db"

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  })

  return (
    <div className="space-y-12 animate-fade-in">
      <ProjectsHeader />
      <ProjectGrid projects={projects} />
    </div>
  )
}