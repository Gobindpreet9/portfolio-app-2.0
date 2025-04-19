import { notFound } from "next/navigation"
import { formatDistanceToNow, format } from "date-fns"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { prisma } from "@/lib/db"

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await prisma.blog.findUnique({
    where: { id: params.id },
  })

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto animate-fade-in">
      {/* Back button */}
      <Link 
        href="/blog" 
        className="inline-flex items-center text-muted-foreground hover:text-primary mb-8"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>

      {/* Hero Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Header */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{format(new Date(post.createdAt), 'MMMM d, yyyy')}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {post.title}
        </h1>

        {/* Tags */}
        <div className="flex gap-2">
          {post.tags.split(',').map((tag) => (
            <span
              key={tag}
              className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Content */}
      <div 
        className="prose prose-lg dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Article Footer */}
      <div className="mt-16 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Last updated: {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}
          </div>
          <Link 
            href="/blog" 
            className="text-primary hover:underline"
          >
            More articles
          </Link>
        </div>
      </div>
    </article>
  )
}