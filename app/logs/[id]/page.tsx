import { notFound } from "next/navigation"
import { formatDistanceToNow, format } from "date-fns"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import ReactMarkdown from "react-markdown"
import remarkMath from "remark-math"
import rehypeKatex from "rehype-katex"
import rehypeRaw from "rehype-raw"
import rehypeSlug from "rehype-slug"
import "katex/dist/katex.min.css"
import remarkGfm from "remark-gfm"
import { prisma } from "@/lib/db"
import { MarkdownComponents } from "@/components/logs/markdown-components"

// SEO: Dynamic metadata for each blog post
import type { Metadata } from "next"

export async function generateMetadata(props: Promise<{ params: { id: string } }>): Promise<Metadata> {
  const { params } = await props;
  const { id } = await params;
  const post = await prisma.blog.findUnique({
    where: { id },
  })

  if (!post) {
    return {
      title: "Post not found | Gobind's Portfolio",
      description: "This post could not be found.",
      robots: { index: false, follow: false },
    }
  }

  // Use excerpt if available, otherwise fallback to first 150 chars of content
  const description = post.excerpt || post.content.slice(0, 150).replace(/\n/g, " ") + "..."
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${id}`

  return {
    title: post.title + " | Gobind's Portfolio",
    description,
    openGraph: {
      title: post.title,
      description,
      url,
      type: "article",
      images: post.imageUrl ? [{ url: post.imageUrl, alt: post.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: post.imageUrl ? [post.imageUrl] : [],
    },
    other: {
      // This will be injected in the <head> as a script tag by Next.js
      "application/ld+json": JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": description,
        "image": post.imageUrl ? [post.imageUrl] : [],
        "author": {
          "@type": "Person",
          "name": "Gobindpreet Makkar"
        },
        "datePublished": post.createdAt,
        "dateModified": post.updatedAt,
        "mainEntityOfPage": url
      })
    }
  }
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const { id } = await params;
  const post = await prisma.blog.findUnique({
    where: { id },
  })

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto animate-fade-in">
      {/* Back button */}
      <Link 
        href="/logs" 
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
        <h1 className="hero-title text-4xl font-bold tracking-tight leading-tight mb-2">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
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

      {/* Article Content (Markdown) */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <ReactMarkdown
          remarkPlugins={[remarkMath, remarkGfm]}
          rehypePlugins={[rehypeKatex, rehypeRaw, rehypeSlug]}
          components={MarkdownComponents}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {/* Article Footer */}
      <div className="mt-16 pt-8 border-t">
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            Last updated: {formatDistanceToNow(new Date(post.updatedAt), { addSuffix: true })}
          </div>
          <Link 
            href="/logs" 
            className="inline-flex items-center gap-2 text-primary hover:underline"
          >
            <ChevronLeft className="w-4 h-4" />
            All Posts
          </Link>
        </div>
      </div>
    </article>
  )
}