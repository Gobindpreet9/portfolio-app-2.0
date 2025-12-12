"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MediaGrid } from "@/components/lore/media-grid"
import { TravelMap } from "@/components/lore/travel-map"
import type { MediaItem } from "./media-card"

interface MediaTabsProps {
  mediaItems: MediaItem[]
}

export function MediaTabs({ mediaItems }: MediaTabsProps) {
  // Split items by type
  const books = mediaItems.filter(item => item.type === "book")
  const moviesOrTv = mediaItems.filter(item => item.type === "movie" || item.type === "tv")
  const games = mediaItems.filter(item => item.type === "game")

  return (
    <Tabs defaultValue="books" className="w-full">
      <TabsList className="grid w-full max-w-[520px] grid-cols-4 mb-8">
        <TabsTrigger value="books">Books</TabsTrigger>
        <TabsTrigger value="movies">Movies & TV</TabsTrigger>
        <TabsTrigger value="games">Games</TabsTrigger>
        <TabsTrigger value="travels">Travels</TabsTrigger>
      </TabsList>
      <TabsContent value="books">
        <MediaGrid items={books} />
      </TabsContent>
      <TabsContent value="movies">
        <MediaGrid items={moviesOrTv} />
      </TabsContent>
      <TabsContent value="games">
        <MediaGrid items={games} />
      </TabsContent>
      <TabsContent value="travels">
        <TravelMap />
      </TabsContent>
    </Tabs>
  )
}