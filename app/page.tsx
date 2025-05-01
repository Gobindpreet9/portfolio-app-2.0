"use client";

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  },
};

const photoVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const buttonHover = { 
  scale: 1.05,
  transition: { type: "spring", stiffness: 300, damping: 15 }
};

export default function Home() {
  return (
    <motion.div 
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-center max-w-4xl mx-auto px-4 py-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants} 
    >
      <motion.div 
        className="grid gap-16 md:grid-cols-2 md:gap-12 items-start"
      >
        {/* Photo Section */}
        <motion.div 
          className="relative w-48 h-48 mx-auto md:w-64 md:h-64 rounded-full overflow-hidden bg-muted order-1 md:order-2 ring-2 ring-primary/20 shadow-xl"
          variants={photoVariants}
        >
          <Image
            src="/my-photo.jpg"
            alt="Profile photo"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Bio Section */}
        <motion.div 
          className="space-y-8 order-2 md:order-1"
          variants={containerVariants} 
        >
          <motion.div className="space-y-4" variants={itemVariants}>
            <motion.h1 
              className="hero-title text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl"
              variants={itemVariants}
            >
              Hello! I am Gobind
            </motion.h1>
            <motion.div 
              className="space-y-4 text-muted-foreground leading-relaxed"
              variants={containerVariants} 
            >
              <motion.p variants={itemVariants}>
                A self-driven tech enthusiast who builds innovative solutions through code. 
                Bringing a unique perspective shaped by philosophy, psychology, and diverse 
                cultural interactions to solve complex technical challenges. Passionate about 
                making an impact in the fields of Artificial Intelligence, Quantum Computing, 
                Neuroscience and climate change.
              </motion.p>
              <motion.p variants={itemVariants}>
                Balancing full-time work with part-time studies at the University of Victoria, 
                I am constantly expanding my knowledge and skills to stay at the forefront of 
                technology.
              </motion.p>
              <motion.p variants={itemVariants}>
                When not coding, you'll find me on the soccer field, playing guitar, or 
                exploring new ideas through books - always seeking ways to blend creativity 
                with technical innovation.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.div whileHover={buttonHover}>
              <Button asChild>
                <Link href="/projects">View Projects</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={buttonHover}>
              <Button asChild variant="outline">
                <Link href="/blog">Read Blog</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex gap-4 pt-4"
            variants={itemVariants}
          >
            <motion.div whileHover={buttonHover}>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://github.com/Gobindpreet9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <span className="sr-only">GitHub</span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={buttonHover}>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="https://www.linkedin.com/in/gobindpreet-m-0a1141155/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={buttonHover}>
              <Button variant="ghost" size="icon" asChild>
                <a 
                  href="mailto:Gobindpreet9@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  <Mail className="h-6 w-6" />
                  <span className="sr-only">Email</span>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}