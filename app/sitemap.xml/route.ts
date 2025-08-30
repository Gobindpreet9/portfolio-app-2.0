import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"

export const revalidate = 172800 // Revalidate sitemap every 2 days

export async function GET() {
  // Fetch all published blog posts
  const posts = await prisma.blog.findMany({
    where: { published: true },
    select: { id: true, updatedAt: true },
  })

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  const urls = [
    {
      loc: `${baseUrl}/`,
      changefreq: "weekly",
      priority: "1.0",
    },
    {
      loc: `${baseUrl}/blog`,
      changefreq: "weekly",
      priority: "0.8",
    },
    ...posts.map(post => ({
      loc: `${baseUrl}/blog/${post.id}`,
      changefreq: "monthly",
      priority: "0.7",
      lastmod: post.updatedAt.toISOString(),
    }))
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map(url =>
      `  <url>\n` +
      `    <loc>${url.loc}</loc>\n` +
      ("lastmod" in url ? `    <lastmod>${url.lastmod}</lastmod>\n` : "") +
      `    <changefreq>${url.changefreq}</changefreq>\n` +
      `    <priority>${url.priority}</priority>\n` +
      `  </url>`
    ).join("\n") +
    `\n</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  })
}
