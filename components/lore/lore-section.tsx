"use client"

import { motion } from "framer-motion"

interface LoreSectionProps {
  icon: React.ReactNode
  title: string
  subtitle: string
  children: React.ReactNode
  badge?: string
}

export function LoreSection({ icon, title, subtitle, children, badge }: LoreSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="space-y-6"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-primary/10">
            {icon}
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        {badge && (
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            {badge}
          </span>
        )}
      </div>
      {children}
    </motion.section>
  )
}
