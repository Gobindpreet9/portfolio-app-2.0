"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email')
    const subject = formData.get('subject')
    const message = formData.get('message')

    // Create mailto URL
    const mailtoUrl = `mailto:gobindpreet9@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(message as string)}`

    // Open default email client
    window.location.href = mailtoUrl

    setIsSubmitting(false)
    toast({
      title: "Email client opened",
      description: "Your default email client has been opened with the message.",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Your Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            className="border-2"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="What's this about?"
            required
            className="border-2"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          required
          className="border-2"
        />
      </div>

      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full sm:w-auto text-lg h-12 px-8"
      >
        <Mail className="w-5 h-5 mr-2" />
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}