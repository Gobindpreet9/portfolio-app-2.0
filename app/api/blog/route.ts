import { NextResponse } from 'next/server'

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
    excerpt: "Exploring the next frontier of AI technology and its implications for society, business, and human interaction.",
    author: "Sarah Chen",
    authorRole: "AI Researcher"
  },
  // ... other posts
];

export async function GET() {
  try {
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch blog posts' },
      { status: 500 }
    )
  }
}