import { formatDistanceToNow } from "date-fns"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"

interface BlogPost {
  id: string
  title: string
  content: string
  tags: string
  published: boolean
  createdAt: Date
  updatedAt: Date
  readTime: string
  imageUrl: string
  excerpt: string
}

interface BlogListProps {
  posts: BlogPost[]
}

export function BlogList({ posts }: BlogListProps) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Card className="overflow-hidden card-hover border-2 flex flex-col h-full min-h-[480px] max-h-[540px]">
            <div className="aspect-video relative overflow-hidden w-full">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <CardHeader className="space-y-3 p-6 flex-none">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{formatDistanceToNow(post.createdAt, { addSuffix: true })}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="line-clamp-2 text-2xl font-bold">
                  {post.title}
                </CardTitle>
                <CardDescription className="line-clamp-2 text-base">
                  {post.excerpt}
                </CardDescription>
              </div>
            </CardHeader>
            <div className="mt-auto">
              <hr className="border-muted-foreground/20 mx-6" />
              <CardContent className="p-6 pt-3">
                <div className="flex flex-wrap gap-2">
                  {post.tags.split(',').map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/20 text-accent-foreground px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}