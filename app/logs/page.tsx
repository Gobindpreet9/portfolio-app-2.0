import { LogsList } from "@/components/logs/logs-list"
import { LogsHeader } from "@/components/logs/logs-header"
import { prisma } from "@/lib/db"
import PageContainer from "@/components/ui/page-container";
import Disclaimer from "@/components/ui/disclaimer";

export default async function LogsPage() {
  const posts = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <PageContainer className="space-y-8 animate-fade-in">
      <LogsHeader />
      <Disclaimer />
      <LogsList posts={posts} />
    </PageContainer>
  );
}