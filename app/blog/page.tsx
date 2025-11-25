import { BlogList } from "@/components/blog/blog-list"
import { BlogHeader } from "@/components/blog/blog-header"
import { prisma } from "@/lib/db"
import PageContainer from "@/components/ui/page-container";
import Disclaimer from "@/components/ui/disclaimer";

export default async function BlogPage() {
  const posts = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <PageContainer className="space-y-8 animate-fade-in">
      <BlogHeader />
      <Disclaimer />
      <BlogList posts={posts} />
    </PageContainer>
  );
}