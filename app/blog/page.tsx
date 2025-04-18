import { BlogList } from "@/components/blog/blog-list"
import { BlogHeader } from "@/components/blog/blog-header"
import { prisma } from "@/lib/db"

export default async function BlogPage() {
  const posts = await prisma.blog.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <BlogHeader />
      <BlogList posts={posts} />
    </div>
  );
}