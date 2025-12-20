"use client"

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { formatDistanceToNow } from "date-fns"

export interface SeriesPost {
  id: string
  title: string
  excerpt: string
  imageUrl: string
  readTime: string
  createdAt: Date
  tags: string
  seriesOrder?: number | null
}

interface SeriesPostCardProps {
  post: SeriesPost
}

export function SeriesPostCard({ post }: SeriesPostCardProps) {
  return (
    <div onClick={(e) => e.stopPropagation()} className="h-full">
      <Link href={`/logs/${post.id}`} className="h-full block">
        <Card className="overflow-hidden border-2 flex flex-col h-full hover:border-primary/50 hover:shadow-lg leather-texture bg-card/50 transition-all duration-300 group">
          <div className="aspect-video relative overflow-hidden w-full flex-shrink-0">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {post.seriesOrder && (
              <div className="absolute top-2 left-2">
                <Badge variant="secondary" className="backdrop-blur-sm bg-background/80">
                  Part {post.seriesOrder}
                </Badge>
              </div>
            )}
          </div>
          <CardHeader className="space-y-2 p-4 flex-1 flex flex-col">
            <div className="flex items-center gap-2 text-xs text-muted-foreground flex-shrink-0">
              <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <CardTitle className="line-clamp-2 text-lg font-bold leading-tight flex-shrink-0">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2 text-sm flex-1">
              {post.excerpt}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  )
}
