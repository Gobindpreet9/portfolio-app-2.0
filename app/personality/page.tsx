import { PersonalityHeader } from "@/components/personality/personality-header"
import { MediaTabs } from "@/components/personality/media-tabs"
import { prisma } from "@/lib/db"

export default async function PersonalityPage() {
  const mediaItems = await prisma.mediaItem.findMany({
    orderBy: { dateConsumed: "desc" },
  })

  return (
    <div className="space-y-8 animate-fade-in">
      <PersonalityHeader />
      <MediaTabs mediaItems={mediaItems} />
    </div>
  )
}