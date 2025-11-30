"use client"

import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const wisdoms = [
  {
    text: "Treat others as you would like to be treated.",
    source: "The Golden Rule"
  },
  
  {
    text: "Everything should be made as simple as possible, but not simpler.",
    source: "Albert Einstein"
  },
  {
    text: "An ounce of prevention is worth a pound of cure.",
    source: "Benjamin Franklin"
  },
  {
    text: "To a man with a hammer, everything looks like a nail.",
    source: "Abraham Maslow"
  }
]

export function WisdomBites() {
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
      {wisdoms.map((item, index) => (
        <Card key={index} className="bg-card border-2 transition-all duration-300 hover:shadow-xl hover:border-primary/50 hover:-translate-y-1">
          <CardContent className="flex flex-col items-center text-center p-6 gap-4 h-full justify-center">
            <Quote className="w-8 h-8 text-primary/20" />
            <div className="space-y-2">
              <p className="font-medium text-lg">{item.text}</p>
              {item.source && (
                <p className="text-sm text-muted-foreground uppercase tracking-widest text-[10px]">
                  {item.source}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
