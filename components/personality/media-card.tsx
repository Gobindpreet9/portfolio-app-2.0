"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star } from "lucide-react"

export interface MediaItem {
  id: string
  type: "book" | "movie" | "game" | "tv"
  title: string
  imageUrl: string
  link: string
  rating: number
  review: string
  creator?: string
  dateConsumed: Date
  isFavorite: boolean
  year: number
}

interface MediaCardProps {
  item: MediaItem
}

export function MediaCard({ item }: MediaCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative h-[400px] w-full perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="relative w-full h-full rounded-xl overflow-hidden border-2 bg-card">
            <div className="relative aspect-[2/3] w-full h-full overflow-hidden">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-contain"
              />
              {/* Title overlay at top */}
              <div className="absolute inset-x-0 top-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.creator} • {item.year}</p>
              </div>

              {/* Rating overlay at bottom - shows on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent"
                  >
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < item.rating
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-400"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotateY-180">
          <div className="h-full w-full rounded-xl overflow-hidden border-2 bg-card p-6 flex flex-col">
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {item.creator} • {item.year}
            </p>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < item.rating
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-400"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm leading-relaxed">{item.review}</p>
            <p className="text-xs text-muted-foreground mt-auto">
              Click to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}