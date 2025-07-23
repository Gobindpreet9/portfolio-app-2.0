"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Star, StarHalf } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"
import { MediaItem } from "./media-card"

interface MediaGridProps {
  items: MediaItem[]
}

export function MediaGrid({ items }: MediaGridProps) {
  const [flippedCards, setFlippedCards] = useState<string[]>([])
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const toggleCard = (id: string) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    )
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 fill-accent text-accent" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 fill-accent text-accent" />
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star
          key={`empty-star-${i}`}
          className="w-4 h-4 text-muted-foreground"
        />
      )
    }

    return stars
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="relative h-[400px] perspective-1000"
          onMouseEnter={() => setHoveredCard(item.id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <motion.div
            className="w-full h-full relative preserve-3d cursor-pointer"
            animate={{ rotateY: flippedCards.includes(item.id) ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => toggleCard(item.id)}
          >
            {/* Front of card */}
            <div className="absolute w-full h-full backface-hidden">
              <div className="relative h-full overflow-hidden rounded-xl border-2 bg-card">
                <div className="absolute inset-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90 mb-2">by {item.creator}</p>
                  
                  {hoveredCard === item.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex gap-1"
                    >
                      {renderStars(item.rating)}
                    </motion.div>
                  )}
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div 
              className="absolute w-full h-full backface-hidden rotate-y-180"
              style={{ transform: "rotateY(180deg)" }}
            >
              <div className="h-full rounded-xl border-2 bg-card p-6 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(item.rating)}
                </div>
                <p className="text-muted-foreground flex-grow overflow-y-auto max-h-50 card-scroll">{item.review}</p>
                <div className="mt-4 pt-4 border-t text-sm text-muted-foreground">
                  Experienced on {format(item.dateConsumed, 'MMMM d, yyyy')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  )
}