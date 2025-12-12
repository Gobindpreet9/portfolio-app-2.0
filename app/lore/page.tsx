import { LoreHeader } from "@/components/lore/lore-header"
import { LoreSection } from "@/components/lore/lore-section"
import { MediaCarousel } from "@/components/lore/media-carousel"
import { TravelMap } from "@/components/lore/travel-map"
import { prisma } from "@/lib/db"
import { visitedCountries } from "@/lib/travel-data"
import type { MediaItem } from "@/components/lore/media-card"
import { BookOpen, Film, Gamepad2, Globe } from "lucide-react"

export default async function LorePage() {
  const mediaItems = await prisma.mediaItem.findMany({
    orderBy: { dateConsumed: "desc" },
  })

  // Sort so favorites come first
  const sortedMediaItems = [...mediaItems].sort((a, b) => {
    if (a.isFavorite === b.isFavorite) return 0;
    return a.isFavorite ? -1 : 1;
  });

  const books = sortedMediaItems.filter(item => item.type === "book") as MediaItem[]
  const moviesOrTv = sortedMediaItems.filter(item => item.type === "movie" || item.type === "tv") as MediaItem[]
  const games = sortedMediaItems.filter(item => item.type === "game") as MediaItem[]

  return (
    <div className="space-y-16 animate-fade-in">
      <LoreHeader />
      
      <LoreSection
        icon={<BookOpen className="w-5 h-5 text-primary" />}
        title="Reading"
        subtitle="Books that shaped me"
        badge={`${books.length} books`}
      >
        <MediaCarousel items={books} />
      </LoreSection>

      <LoreSection
        icon={<Film className="w-5 h-5 text-primary" />}
        title="Watching"
        subtitle="Stories that moved me"
        badge={`${moviesOrTv.length} titles`}
      >
        <MediaCarousel items={moviesOrTv} />
      </LoreSection>

      <LoreSection
        icon={<Gamepad2 className="w-5 h-5 text-primary" />}
        title="Playing"
        subtitle="Games that awed me"
        badge={`${games.length} games`}
      >
        <MediaCarousel items={games} />
      </LoreSection>

      <LoreSection
        icon={<Globe className="w-5 h-5 text-primary" />}
        title="Adventures"
        subtitle="Places I've called home or explored. Not enough yet."
        badge={`${visitedCountries.length} countries`}
      >
        <TravelMap />
      </LoreSection>
    </div>
  )
}