"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Globe } from "lucide-react"
import Image from "next/image"

interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  imageUrl: string
  githubUrl: string
  liveUrl?: string | null
  category: string
  featured: boolean
}

interface ProjectGridProps {
  projects: Project[]
}

export function ExperimentGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="group"
        >
          <Card className="overflow-hidden border-2 h-full flex flex-col">
          <div className="relative aspect-[4/3] overflow-hidden">
          <Image
                src={project.imageUrl}
                alt={project.title}
                fill
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Web Link
                    </a>
                  </Button>
                )}
              </div>
            </div>

            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                {project.featured && (
                  <Badge variant="default">
                    Featured
                  </Badge>
                )}
              </div>
              <CardDescription className="h-24 overflow-y-auto card-scroll">
                {project.description}
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-grow flex flex-col">
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="secondary" className="px-2 py-1 text-xs whitespace-nowrap">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}