import { ProjectsHeader } from "@/components/projects/projects-header"
import { ProjectGrid } from "@/components/projects/project-grid"

// Demo projects data
const projects = [
  {
    id: "1",
    title: "AI-Powered Task Manager",
    description: "A smart task management application that uses AI to prioritize and categorize tasks. Features natural language processing for task input and intelligent scheduling suggestions.",
    techStack: ["React", "Python", "TensorFlow", "FastAPI"],
    imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2070&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "AI/ML",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce businesses with real-time analytics, inventory management, and sales forecasting. Includes customizable widgets and data visualization.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com",
    category: "Web App",
    featured: true
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-12 animate-fade-in">
      <ProjectsHeader />
      <ProjectGrid projects={projects} />
    </div>
  )
}