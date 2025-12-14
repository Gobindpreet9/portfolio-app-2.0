import { ResumeSection } from "@/components/source-code/resume-section"
import { CoreValues } from "@/components/source-code/core-values"
import { WisdomBites } from "@/components/source-code/wisdom-bites"
import { Separator } from "@/components/ui/separator"
import PageContainer from "@/components/ui/page-container";
import PageHeader from "@/components/ui/page-header";

export default function SourceCodePage() {
  return (
    <PageContainer className="space-y-16 animate-fade-in">
      {/* Header */}
      <PageHeader
        title="Source Code"
        description="A detailed look at my core values, experience, and the principles that guide me."
      />

      {/* Core Values */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Core Values</h2>
        <CoreValues />
      </div>

      <Separator />

      {/* Resume Content */}
      <div className="bg-card border-2 rounded-xl p-8 shadow-lg leather-texture">
        <ResumeSection />
      </div>

      <Separator />

      {/* Wisdom Bites */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight">Wisdom Bites</h2>
        <WisdomBites />
      </div>

    </PageContainer>
  )
}