"use client"

import { useMemo, useState, useCallback } from "react"
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps"
import { motion, AnimatePresence } from "framer-motion"
import { ZoomIn, ZoomOut, RotateCcw } from "lucide-react"
import { visitedCountries } from "@/lib/travel-data"
import { TravelTooltip } from "@/components/lore/travel-tooltip"

type Feature = {
  id: string
  properties: {
    name: string
    iso_a3?: string
    ISO_A3?: string
  }
  rsmKey?: string
}

const geoUrl = "/countries-110m.json"

export function TravelMap() {
  const [hovered, setHovered] = useState<Feature | null>(null)
  const [selected, setSelected] = useState<Feature | null>(null)
  const [position, setPosition] = useState({ coordinates: [0, 20] as [number, number], zoom: 1 })

  const visitedMap = useMemo(
    () =>
      new Map(
        visitedCountries.map(country => [country.countryCode.toUpperCase(), country])
      ),
    []
  )

  // For mobile: tap to select, tap again to deselect
  const handleClick = (feature: Feature) => {
    if (selected?.id === feature.id) {
      setSelected(null)
    } else {
      setSelected(feature)
    }
  }

  // Zoom controls
  const handleZoomIn = useCallback(() => {
    if (position.zoom >= 4) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }))
  }, [position.zoom])

  const handleZoomOut = useCallback(() => {
    if (position.zoom <= 1) return
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }))
  }, [position.zoom])

  const handleReset = useCallback(() => {
    setPosition({ coordinates: [0, 20], zoom: 1 })
  }, [])

  const handleMoveEnd = useCallback((pos: { coordinates: [number, number]; zoom: number }) => {
    setPosition(pos)
  }, [])

  // Use selected on mobile, hovered on desktop
  const activeFeature = selected || hovered

  return (
    <div className="space-y-4">
      <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 dark:bg-card/30 shadow-lg backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="p-2 sm:p-4 md:p-6"
        >
          <ComposableMap
            projectionConfig={{ scale: 145 }}
            className="w-full h-auto"
          >
            <ZoomableGroup
              zoom={position.zoom}
              center={position.coordinates}
              onMoveEnd={handleMoveEnd}
              minZoom={1}
              maxZoom={4}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }: { geographies: any[] }) =>
                  geographies.map((geo: any, index: number) => {
                    const isoA3 =
                      geo.id?.toUpperCase() ||
                      geo.properties?.iso_a3?.toUpperCase() ||
                      geo.properties?.ISO_A3?.toUpperCase() ||
                      geo.properties?.name?.toUpperCase()

                    const visit = isoA3 ? visitedMap.get(isoA3) : undefined
                    const isVisited = Boolean(visit)

                    const featureForHover: Feature = {
                      id: isoA3 || geo.id || geo.properties?.name || "",
                      properties: {
                        name: geo.properties?.name,
                        iso_a3: geo.properties?.iso_a3,
                        ISO_A3: geo.properties?.ISO_A3,
                      },
                      rsmKey: geo.rsmKey,
                    }

                    return (
                      <Geography
                        key={(geo.rsmKey as string) || featureForHover.id}
                        geography={geo}
                        onMouseEnter={() => setHovered(featureForHover)}
                        onMouseLeave={() => setHovered(null)}
                        onClick={() => handleClick(featureForHover)}
                        style={{
                          default: {
                            fill: isVisited
                              ? "var(--map-visited)"
                              : "var(--map-unvisited)",
                            stroke: "var(--map-stroke)",
                            strokeWidth: 0.35 / position.zoom,
                            outline: "none",
                            transition: "fill 0.2s ease-out, filter 0.2s ease-out",
                            filter: isVisited
                              ? "drop-shadow(0 0 6px var(--map-glow))"
                              : undefined,
                          },
                          hover: {
                            fill: isVisited
                              ? "var(--map-visited-hover)"
                              : "var(--map-unvisited-hover)",
                            stroke: "var(--map-stroke)",
                            strokeWidth: 0.35 / position.zoom,
                            outline: "none",
                            filter: isVisited
                              ? "drop-shadow(0 0 10px var(--map-glow-strong))"
                              : "drop-shadow(0 0 3px var(--map-hover-shadow))",
                          },
                          pressed: {
                            fill: isVisited
                              ? "var(--map-visited-hover)"
                              : "var(--map-unvisited-hover)",
                            stroke: "var(--map-stroke)",
                            strokeWidth: 0.35 / position.zoom,
                            outline: "none",
                          },
                        }}
                        className="cursor-pointer focus:outline-none"
                      />
                    )
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
        </motion.div>

        {/* Tooltip - bottom on mobile, top-left on desktop */}
        <div className="pointer-events-none absolute left-2 right-2 bottom-12 sm:bottom-auto sm:right-auto sm:left-4 sm:top-4 z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature?.id || "default"}
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="sm:max-w-[200px]"
            >
              <TravelTooltip
                countryName={
                  activeFeature ? visitedMap.get(activeFeature.id)?.countryName || activeFeature.properties.name : undefined
                }
                visitYear={activeFeature ? visitedMap.get(activeFeature.id)?.visitYear : undefined}
                note={activeFeature ? visitedMap.get(activeFeature.id)?.note : undefined}
                visited={activeFeature ? visitedMap.has(activeFeature.id) : false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Zoom controls */}
        <div className="absolute right-2 bottom-2 sm:right-4 sm:bottom-4 flex flex-col gap-1 z-10">
          <button
            onClick={handleZoomIn}
            disabled={position.zoom >= 4}
            className="p-1.5 sm:p-2 rounded-lg bg-background/80 border border-border/60 backdrop-blur-sm shadow-sm hover:bg-accent/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </button>
          <button
            onClick={handleZoomOut}
            disabled={position.zoom <= 1}
            className="p-1.5 sm:p-2 rounded-lg bg-background/80 border border-border/60 backdrop-blur-sm shadow-sm hover:bg-accent/50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
          </button>
          {position.zoom > 1 && (
            <button
              onClick={handleReset}
              className="p-1.5 sm:p-2 rounded-lg bg-background/80 border border-border/60 backdrop-blur-sm shadow-sm hover:bg-accent/50 transition-colors"
              aria-label="Reset view"
            >
              <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
            </button>
          )}
        </div>

        {/* Mobile hint - only show on small screens when not zoomed */}
        {position.zoom === 1 && (
          <div className="sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted-foreground/70 bg-background/60 px-2 py-0.5 rounded-full backdrop-blur-sm">
            Pinch to zoom • Tap to explore
          </div>
        )}
      </div>

      {/* CSS variables for dark/light mode */}
      <style jsx global>{`
        :root {
          --map-visited: hsl(19, 75%, 48%);
          --map-visited-hover: hsl(19, 80%, 55%);
          --map-unvisited: hsl(30, 30%, 88%);
          --map-unvisited-hover: hsl(30, 25%, 80%);
          --map-stroke: hsl(25, 15%, 60%);
          --map-glow: hsla(19, 70%, 50%, 0.35);
          --map-glow-strong: hsla(19, 75%, 50%, 0.5);
          --map-hover-shadow: hsla(25, 20%, 40%, 0.2);
        }
        
        .dark {
          --map-visited: hsl(19, 70%, 52%);
          --map-visited-hover: hsl(19, 75%, 58%);
          --map-unvisited: hsl(25, 15%, 22%);
          --map-unvisited-hover: hsl(25, 18%, 30%);
          --map-stroke: hsl(25, 12%, 35%);
          --map-glow: hsla(19, 65%, 55%, 0.4);
          --map-glow-strong: hsla(19, 70%, 55%, 0.55);
          --map-hover-shadow: hsla(25, 15%, 50%, 0.25);
        }
      `}</style>
    </div>
  )
}
