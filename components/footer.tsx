"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient">
              Gobindpreet Makkar
            </span>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Debugging stack traces and existential questions since '99.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex justify-center space-x-6 text-sm font-medium text-muted-foreground">
            <Link href="/logs" className="hover:text-foreground transition-colors">
              Logs
            </Link>
            <Link href="/experiments" className="hover:text-foreground transition-colors">
              Experiments
            </Link>
            <Link href="/source-code" className="hover:text-foreground transition-colors">
              Source Code
            </Link>
            <Link href="/lore" className="hover:text-foreground transition-colors">
              Lore
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="https://github.com/Gobindpreet9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/gobindpreet-m-0a1141155/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:Gobindpreet9@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Gobindpreet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
