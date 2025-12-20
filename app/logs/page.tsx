import { LogItem, LogsList, BlogPost, Series } from "@/components/logs/logs-list"
import { LogsHeader } from "@/components/logs/logs-header"
import { prisma } from "@/lib/db"
import PageContainer from "@/components/ui/page-container"
import Disclaimer from "@/components/ui/disclaimer"

export default async function LogsPage() {
  const isDev = process.env.NODE_ENV === "development"

  const posts = await prisma.blog.findMany({
    where: isDev ? {} : { published: true },
    orderBy: { createdAt: "desc" },
    include: { series: true }
  })

  const items: LogItem[] = []
  const seriesMap = new Map<string, { series: Series; posts: BlogPost[] }>()

  // Group posts by series
  for (const post of posts) {
    if (post.series && post.seriesId) {
      if (!seriesMap.has(post.seriesId)) {
        seriesMap.set(post.seriesId, {
          series: {
            id: post.series.id,
            name: post.series.name,
            description: post.series.description,
            coverImage: post.series.coverImage,
            createdAt: post.series.createdAt,
            posts: []
          },
          posts: []
        })
      }
      seriesMap.get(post.seriesId)!.posts.push(post as unknown as BlogPost)
    } else {
      items.push({ type: "post", data: post as unknown as BlogPost })
    }
  }

  // Process series groups - only show as series if 2+ posts
  seriesMap.forEach(({ series, posts: seriesPosts }) => {
    if (seriesPosts.length >= 2) {
      const mostRecentPostDate = seriesPosts.reduce(
        (latest, post) => (post.createdAt > latest ? post.createdAt : latest),
        new Date(0)
      )

      items.push({
        type: "series",
        data: {
          ...series,
          posts: seriesPosts,
          createdAt: mostRecentPostDate
        }
      })
    } else {
      // Not enough posts for a series, show as individual posts
      seriesPosts.forEach((post) => {
        items.push({ type: "post", data: post })
      })
    }
  })

  // Sort all items by date (newest first)
  items.sort((a, b) => {
    const dateA = new Date(a.data.createdAt).getTime()
    const dateB = new Date(b.data.createdAt).getTime()
    return dateB - dateA
  })

  return (
    <PageContainer className="space-y-8 animate-fade-in">
      <LogsHeader />
      <Disclaimer />
      <LogsList items={items} />
    </PageContainer>
  )
}