import { BlogList } from "@/components/blog/blog-list"
import { BlogHeader } from "@/components/blog/blog-header"

// Dummy blog posts data
const posts = [
  {
    id: "1",
    title: "The Future of AI: Beyond ChatGPT",
    content: "An exploration of artificial intelligence developments beyond language models...",
    tags: "ai,technology,future",
    published: true,
    createdAt: new Date("2024-03-15"),
    updatedAt: new Date("2024-03-15"),
    readTime: "8 min read",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1932&auto=format&fit=crop",
    excerpt: "Exploring the future of AI beyond LLMs."
  },
  {
    id: "2",
    title: "Building with Next.js 13",
    content: "A comprehensive guide to building modern web applications...",
    tags: "nextjs,react,webdev",
    published: true,
    createdAt: new Date("2024-03-10"),
    updatedAt: new Date("2024-03-10"),
    readTime: "12 min read",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    excerpt: "Learn how to leverage Next.js features to build fast, scalable, and maintainable web applications."
  }
  // Add more posts here...
];

export default async function BlogPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <BlogHeader />
      <BlogList posts={posts} />
    </div>
  )
}