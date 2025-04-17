import { PersonalityHeader } from "@/components/personality/personality-header"
import { MediaTabs } from "@/components/personality/media-tabs"

export default function PersonalityPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <PersonalityHeader />
      <MediaTabs />
    </div>
  )
}