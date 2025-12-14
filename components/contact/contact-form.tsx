"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Check } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const website = formData.get('website') as string // honeypot

    // Combine subject and message for DB/email
    const name = subject // Use subject as name for now, or add a name field if you prefer

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, website }), // include honeypot
      })
      if (res.ok) {
        setIsSent(true)
        toast({
          title: 'Message sent!',
          description: 'Thank you for reaching out. I will get back to you soon.',
        })
        e.currentTarget.reset()
      } else {
        const data = await res.json()
        toast({
          title: 'Error',
          description: data.error || 'Something went wrong. Please try again.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="email">
            Your Email
          </Label>
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
          <Label htmlFor="subject">
            Subject
          </Label>
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
        <Label htmlFor="message">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message..."
          rows={6}
          required
          className="border-2"
        />
      </div>

      {/* Honeypot field - hidden from users, bots will fill it */}
      <input
        type="text"
        name="website"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <Button 
        type="submit" 
        disabled={isSubmitting || isSent} 
        className="w-full sm:w-auto text-lg h-12 px-8"
      >
        {isSent ? (
          <>
            <Check className="w-5 h-5 mr-2" />
            Sent!
          </>
        ) : (
          <>
            <Mail className="w-5 h-5 mr-2" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </>
        )}
      </Button>
    </form>
  )
}
