"use client"

import { useRef, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, StarHalf, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from "date-fns"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import type { MediaItem } from "./media-card"

interface MediaCarouselProps {
  items: MediaItem[]
}

export function MediaCarousel({ items }: MediaCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [flippedCards, setFlippedCards] = useState<string[]>([])
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const toggleCard = (id: string) => {
    setFlippedCards(prev =>
      prev.includes(id) ? prev.filter(cardId => cardId !== id) : [...prev, id]
    )
  }

  const checkScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }

  // Check scroll state on mount and when items change
  useEffect(() => {
    checkScroll()
  }, [items.length])

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return
    const scrollAmount = 320
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    })
    setTimeout(checkScroll, 300)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={`star-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    if (hasHalfStar) {
      stars.push(
        <StarHalf key="half-star" className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      )
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-star-${i}`} className="w-4 h-4 text-muted-foreground/40" />
      )
    }

    return stars
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        No items to display
      </div>
    )
  }

  return (
    <div className="relative group">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm shadow-lg border-border/50 transition-all duration-200 ${
          canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
        } hidden sm:flex`}
        onClick={() => scroll("left")}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      
      <Button
        variant="outline"
        size="icon"
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm shadow-lg border-border/50 transition-all duration-200 ${
          canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
        } hidden sm:flex`}
        onClick={() => scroll("right")}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth px-1 py-2 sm:px-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[280px] sm:w-[300px]"
          >
            <div
              className="relative h-[380px] perspective-1000"
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                className="w-full h-full relative preserve-3d cursor-pointer"
                animate={{ rotateY: flippedCards.includes(item.id) ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
                onClick={() => toggleCard(item.id)}
              >
                {/* Front of card */}
                <div className="absolute w-full h-full backface-hidden">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card shadow-md transition-all duration-300 hover:shadow-xl hover:border-primary/30">
                    <div className="absolute inset-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{item.title}</h3>
                      <p className="text-sm text-white/70 mb-3">{item.creator}</p>
                    </div>
                    
                    {/* Hover hint */}
                    <AnimatePresence>
                      {hoveredCard === item.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 flex items-center justify-center bg-black/30"
                        >
                          <span className="text-white text-sm font-medium px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                            Click to read review
                          </span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Back of card */}
                <div 
                  className="absolute w-full h-full backface-hidden"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <div className="h-full rounded-2xl border border-border/50 bg-card p-5 flex flex-col shadow-md">
                    <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.creator}</p>
                    <div className="flex items-center gap-0.5 mb-4">
                      {renderStars(item.rating)}
                    </div>
                    <p className="text-sm text-muted-foreground flex-grow overflow-y-auto leading-relaxed">{item.review}</p>
                    <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {format(item.dateConsumed, 'MMM yyyy')}
                      </span>
                      <span className="text-xs text-primary cursor-pointer hover:underline">
                        Click to flip back
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll indicator for mobile */}
      <div className="flex justify-center gap-1 mt-4 sm:hidden">
        <span className="text-xs text-muted-foreground">← Swipe to explore →</span>
      </div>
    </div>
  )
}
