"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { motion, LayoutGroup } from "framer-motion"
import { SeriesCard } from "./series-card"

export interface BlogPost {
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
  seriesId?: string | null
  seriesOrder?: number | null
}

export interface Series {
  id: string
  name: string
  description: string | null
  coverImage: string
  createdAt: Date
  posts: BlogPost[]
}

export type LogItem = 
  | { type: 'post', data: BlogPost }
  | { type: 'series', data: Series }

interface LogsListProps {
  items: LogItem[]
}

export function LogsList({ items }: LogsListProps) {
  const [expandedSeriesId, setExpandedSeriesId] = useState<string | null>(null)

  const toggleSeries = (id: string) => {
    setExpandedSeriesId(prev => prev === id ? null : id)
  }

  return (
    <LayoutGroup>
      <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          if (item.type === 'series') {
            return (
              <SeriesCard
                key={item.data.id}
                series={item.data}
                isExpanded={expandedSeriesId === item.data.id}
                onToggle={() => toggleSeries(item.data.id)}
              />
            )
          }

          const post = item.data
          return (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="h-full"
            >
              <Link href={`/logs/${post.id}`} className="h-full block">
                <Card className="overflow-hidden card-hover border-2 flex flex-col h-full min-h-[480px] max-h-[540px] hover:border-primary/50 leather-texture">
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
                        <span>{formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}</span>
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
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </motion.div>
    </LayoutGroup>
  )
}