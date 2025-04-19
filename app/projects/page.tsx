import { ProjectsHeader } from "@/components/projects/projects-header"
import { ProjectGrid } from "@/components/projects/project-grid"
import { prisma } from "@/lib/db"

export default async function ProjectsPage() {
  // Fetch all projects and sort so featured are first, then by createdAt desc
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
  })
  const sortedProjects = [...projects].sort((a, b) => {
    if (a.featured === b.featured) {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
    return a.featured ? -1 : 1;
  });

  return (
    <div className="space-y-12 animate-fade-in">
      <ProjectsHeader />
      <ProjectGrid projects={sortedProjects} />
    </div>
  )
}