import PageContainer from "@/components/ui/page-container";
import PageHeader from "@/components/ui/page-header";
import { ContactForm } from "@/components/contact/contact-form";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <PageContainer className="space-y-12 animate-fade-in">
      <PageHeader
        title="Contact"
        description="Have a question or want to work together? Drop me a message."
      />

      <div className="grid gap-12 lg:grid-cols-3">
        {/* Contact Form - Takes 2 columns */}
        <div className="lg:col-span-2">
          <div className="bg-card border-2 rounded-xl p-8 shadow-lg leather-texture">
            <ContactForm />
          </div>
        </div>

        {/* Sidebar - Alternative contact methods */}
        <div className="space-y-6">
          <div className="bg-card border-2 rounded-xl p-6 shadow-lg leather-texture">
            <h3 className="text-lg font-semibold mb-4">Other Ways to Connect</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:Gobindpreet9@gmail.com">
                  <Mail className="w-4 h-4 mr-3" />
                  Gobindpreet9@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a 
                  href="https://github.com/Gobindpreet9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-3" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a 
                  href="https://www.linkedin.com/in/gobindpreet-makkar/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-3" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 rounded-xl p-6 border">
            <p className="text-sm text-muted-foreground">
              I will try to get back to you in 24-48 hours!
            </p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
