import { ResumeSection } from "@/components/about/resume-section"
import { ContactForm } from "@/components/about/contact-form"
import { Button } from "@/components/ui/button"
import { FileDown } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-16 animate-fade-in">
      {/* Header with Download Button */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div className="space-y-4">
          <h1 className="hero-title text-4xl font-bold tracking-tight sm:text-5xl">Professional Journey</h1>
          <p className="text-muted-foreground text-lg max-w-[600px]">
            A detailed look at my experience, skills, and accomplishments.
          </p>
        </div>
        <Button 
          asChild 
          size="lg" 
          variant="outline"
          className="shadow-sm hover:shadow-md transition-all duration-300 w-full sm:w-auto"
        >
          <a href="/resume.pdf" download className="flex items-center gap-2">
            <FileDown className="w-5 h-5" />
            Download Resume
          </a>
        </Button>
      </div>

      {/* Resume Content */}
      <div className="bg-card border-2 rounded-xl p-8 shadow-lg">
        <ResumeSection />
      </div>

      {/* Contact Section */}
      <div className="space-y-8">
        <Separator className="my-8" />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="text-muted-foreground text-lg max-w-[600px]">
            Interested in working together? Feel free to reach out.
          </p>
        </div>
        <div className="bg-card border-2 rounded-xl p-8 shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}