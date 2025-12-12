"use client"

import { visitedCountries } from "@/lib/travel-data"

interface TravelTooltipProps {
  countryName?: string
  visitYear?: string
  note?: string
  visited?: boolean
}

export function TravelTooltip({ countryName, visitYear, note, visited }: TravelTooltipProps) {
  const title = visited ? countryName : "My Travel Map"
  const subtitle = visited
    ? visitYear 
    : `${visitedCountries.length} countries visited. Many more to go.`

  return (
    <div className="rounded-xl border border-border/60 bg-background/80 px-4 py-3 shadow-lg backdrop-blur-sm max-w-sm">
      <p className="text-sm font-semibold text-foreground">{title}</p>
      <p className="text-sm text-muted-foreground">
        {subtitle}
        {visited && note ? ` • ${note}` : ""}
      </p>
    </div>
  )
}
