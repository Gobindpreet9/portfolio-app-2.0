"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { SeriesPostCard, SeriesPost } from "./series-post-card"
import { X, ChevronDown } from "lucide-react"

interface SeriesCardProps {
  series: {
    id: string
    name: string
    description: string | null
    coverImage: string
    posts: SeriesPost[]
  }
  isExpanded: boolean
  onToggle: () => void
}

// Animation variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
}

export function SeriesCard({ series, isExpanded, onToggle }: SeriesCardProps) {
  // Sort posts by seriesOrder
  const sortedPosts = [...series.posts].sort((a, b) => 
    (a.seriesOrder || 0) - (b.seriesOrder || 0)
  )

  return (
    <motion.div
      layout
      layoutId={`series-container-${series.id}`}
      onClick={onToggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onToggle()
        }
      }}
      role="button"
      tabIndex={0}
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className={cn(
        "group relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-xl",
        isExpanded ? "col-span-full w-full" : "h-full min-h-[480px] max-h-[540px]"
      )}
    >
      {/* Stacked effect (only visible when collapsed) */}
      <AnimatePresence>
        {!isExpanded && (
          <>
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 8, y: 8 }}
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-xl border border-primary/10 -z-10" 
            />
            <motion.div 
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ opacity: 1, x: 16, y: 16 }}
              exit={{ opacity: 0, x: 0, y: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="absolute top-0 left-0 w-full h-full bg-primary/5 rounded-xl border border-primary/10 -z-20" 
            />
          </>
        )}
      </AnimatePresence>

      <Card className={cn(
        "overflow-hidden border-2 h-full flex flex-col relative bg-background",
        !isExpanded && "hover:border-primary/50 transition-colors duration-300"
      )}>
        {/* Badge or Close Button */}
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.button
              key="close-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => {
                e.stopPropagation()
                onToggle()
              }}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background hover:scale-110 border border-border transition-all duration-200"
              aria-label="Collapse series"
            >
              <X className="w-4 h-4" />
            </motion.button>
          ) : (
            <motion.div 
              key="badge"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 z-20"
            >
              <Badge variant="secondary" className="shadow-sm backdrop-blur-sm bg-background/80">
                Series • {series.posts.length} posts
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cover Image - separate elements for collapsed vs expanded to avoid layout issues */}
        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 overflow-hidden"
          >
            <Image
              src={series.coverImage}
              alt={series.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </motion.div>
        )}
        
        {/* Thumbnail for expanded state */}
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 350, damping: 30 }}
            className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 m-6 mb-0"
          >
            <Image
              src={series.coverImage}
              alt={series.name}
              fill
              className="object-cover"
            />
          </motion.div>
        )}
        
        {/* Title Overlay (Collapsed) - uses z-index to layer properly */}
        {!isExpanded && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 p-6 w-full z-10"
          >
            <motion.h3 
              layoutId={`series-title-${series.id}`}
              className="text-3xl font-bold tracking-tight text-foreground leading-tight"
            >
              {series.name}
            </motion.h3>
            {series.description && (
              <p className="text-muted-foreground line-clamp-2 mt-2 text-sm">
                {series.description}
              </p>
            )}
            {/* Expand hint */}
            <motion.div 
              className="flex items-center gap-1 mt-4 text-xs text-muted-foreground/70"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <ChevronDown className="w-4 h-4" />
              <span>Click to explore series</span>
            </motion.div>
          </motion.div>
        )}

        {/* Expanded Content Area */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex-1 p-6 pt-0"
            >
              {/* Header */}
              <div className="mb-8 flex items-start gap-4 sm:gap-6 mt-4">
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <motion.h2 
                        layoutId={`series-title-${series.id}`}
                        className="text-2xl sm:text-3xl font-bold"
                      >
                        {series.name}
                      </motion.h2>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground mt-2 max-w-2xl text-sm sm:text-base"
                      >
                        {series.description}
                      </motion.p>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 }}
                    >
                      <Badge variant="outline" className="text-sm flex-shrink-0">
                        {series.posts.length} Posts
                      </Badge>
                    </motion.div>
                  </div>
                </div>
              </div>
              
              {/* Posts Grid with staggered animation */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr"
              >
                {sortedPosts.map((post) => (
                  <motion.div key={post.id} variants={itemVariants} className="h-full">
                    <SeriesPostCard post={post} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}
