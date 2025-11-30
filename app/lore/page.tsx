import { LoreHeader } from "@/components/lore/lore-header"
import { MediaTabs } from "@/components/lore/media-tabs"
import { prisma } from "@/lib/db"
import type { MediaItem } from "@/components/lore/media-card"

export default async function LorePage() {
  const mediaItems = await prisma.mediaItem.findMany({
    orderBy: { dateConsumed: "desc" },
  })

  // Sort so favorites come first
  const sortedMediaItems = [...mediaItems].sort((a, b) => {
    if (a.isFavorite === b.isFavorite) return 0;
    return a.isFavorite ? -1 : 1;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <LoreHeader />
      <MediaTabs mediaItems={sortedMediaItems as MediaItem[]} />
    </div>
  )
}