import PageContainer from "@/components/ui/page-container";
import { ExperimentsHeader } from "@/components/experiments/experiments-header"
import { ExperimentGrid } from "@/components/experiments/experiment-grid"
import { prisma } from "@/lib/db"

export default async function ExperimentsPage() {
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
    <PageContainer className="space-y-12 animate-fade-in">
      <ExperimentsHeader />
      <ExperimentGrid projects={sortedProjects} />
    </PageContainer>
  );
}