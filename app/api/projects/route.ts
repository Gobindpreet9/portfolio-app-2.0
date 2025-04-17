import { NextResponse } from 'next/server'

// Dummy projects data
const projects = [
  {
    id: "1",
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and categorize tasks.",
    techStack: "React,Python,TensorFlow,FastAPI",
    imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "AI/ML",
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics.",
    techStack: "Next.js,TypeScript,Tailwind CSS,Prisma",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Web App",
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export async function GET() {
  try {
    return NextResponse.json(projects)
  } catch (error) {
    console.error('Error fetching projects:', error)
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    )
  }
}