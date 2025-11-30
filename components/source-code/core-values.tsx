"use client"

import { 
  Telescope, 
  ShieldCheck, 
  Mountain, 
  Heart, 
  Zap 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Telescope,
    title: "Curiosity",
    description: "I approach the world with Socratic thinking. I challenge assumptions and ask endless questions."
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    description: "A promise made is a promise kept. I don't put my name on things I can't stand behind."
  },
  {
    icon: Mountain,
    title: "Tenacity",
    description: "Unfinished problems bother me. I stick with them even after the novelty wears off."
  },
  {
    icon: Heart,
    title: "Empathy",
    description: "The best solutions come from understanding what everyone needs."
  },
  {
    icon: Zap,
    title: "Action",
    description: "I have a bias for motion. Less meetings, more making."
  }
]

export function CoreValues() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {values.map((value) => (
        <Card key={value.title} className="bg-card border-2 h-full hover:shadow-md transition-all duration-300">
          <CardContent className="flex flex-col items-center text-center p-6 gap-4 h-full">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <value.icon className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="font-bold text-lg">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
