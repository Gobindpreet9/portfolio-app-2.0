"use client"

import { useEffect, useRef } from "react"

interface Firefly {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  wanderAngle: number
}

interface FirefliesProps {
  count?: number
}

const CONFIG = {
  WANDER_SPEED: 0.02,
  WANDER_CHANGE: 0.3,
  REPEL_RADIUS: 100,
  REPEL_FORCE: 1.5,
  ATTRACT_RADIUS: 300,
  ATTRACT_FORCE: 0.5,
  FRICTION: 0.96,
  MAX_SPEED_IDLE: 2,
  MAX_SPEED_ACTIVE: 4,
  EDGE_PADDING: 50
}

export function Fireflies({ count = 15 }: FirefliesProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const requestRef = useRef<number>()
  const mouseRef = useRef({ x: -1000, y: -1000, isDown: false })
  const firefliesRef = useRef<Firefly[]>([])
  const elementsRef = useRef<(HTMLDivElement | null)[]>([])
  const boundsRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    // cached window dimensions to avoid layout thrashing
    const updateBounds = () => {
      if (typeof window !== 'undefined') {
        boundsRef.current = { 
          width: window.innerWidth, 
          height: window.innerHeight 
        }
      }
    }
    
    updateBounds() // Initial set
    
    // Initialize fireflies
    firefliesRef.current = Array.from({ length: count }).map((_, i) => {
      return {
        id: i,
        x: Math.random() * boundsRef.current.width,
        y: Math.random() * boundsRef.current.height,
        vx: 0,
        vy: 0,
        wanderAngle: Math.random() * Math.PI * 2,
      }
    })

    const animate = () => {
      const mouse = mouseRef.current
      const { width, height } = boundsRef.current

      firefliesRef.current.forEach((fly, i) => {
        // 1. Slow ambient wandering
        fly.wanderAngle += (Math.random() - 0.5) * CONFIG.WANDER_CHANGE
        fly.vx += Math.cos(fly.wanderAngle) * CONFIG.WANDER_SPEED
        fly.vy += Math.sin(fly.wanderAngle) * CONFIG.WANDER_SPEED

        // 2. Mouse interaction
        const dx = fly.x - mouse.x
        const dy = fly.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (mouse.isDown) {
          // ATTRACT
          if (dist < CONFIG.ATTRACT_RADIUS && dist > 5) {
            const force = (CONFIG.ATTRACT_RADIUS - dist) / CONFIG.ATTRACT_RADIUS
            const angle = Math.atan2(dy, dx)
            fly.vx -= Math.cos(angle) * force * CONFIG.ATTRACT_FORCE
            fly.vy -= Math.sin(angle) * force * CONFIG.ATTRACT_FORCE
          }
        } else {
          // REPEL
          if (dist < CONFIG.REPEL_RADIUS && dist > 0) {
            const force = (CONFIG.REPEL_RADIUS - dist) / CONFIG.REPEL_RADIUS
            const angle = Math.atan2(dy, dx)
            fly.vx += Math.cos(angle) * force * CONFIG.REPEL_FORCE
            fly.vy += Math.sin(angle) * force * CONFIG.REPEL_FORCE
          }
        }

        // 3. Apply friction
        fly.vx *= CONFIG.FRICTION
        fly.vy *= CONFIG.FRICTION

        // 4. Limit max speed
        const speed = Math.sqrt(fly.vx * fly.vx + fly.vy * fly.vy)
        const maxSpeed = mouse.isDown ? CONFIG.MAX_SPEED_ACTIVE : CONFIG.MAX_SPEED_IDLE
        if (speed > maxSpeed) {
          fly.vx = (fly.vx / speed) * maxSpeed
          fly.vy = (fly.vy / speed) * maxSpeed
        }

        // 5. Move
        fly.x += fly.vx
        fly.y += fly.vy

        // 6. Wrap around
        const pad = CONFIG.EDGE_PADDING
        if (fly.x < -pad) fly.x = width + pad
        if (fly.x > width + pad) fly.x = -pad
        if (fly.y < -pad) fly.y = height + pad
        if (fly.y > height + pad) fly.y = -pad

        // Update DOM
        const el = elementsRef.current[i]
        if (el) {
          el.style.left = `${fly.x}px`
          el.style.top = `${fly.y}px`
        }
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    // Event Listeners
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    const handleMouseDown = () => { mouseRef.current.isDown = true }
    const handleMouseUp = () => { mouseRef.current.isDown = false }
    
    window.addEventListener('resize', updateBounds)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    
    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', updateBounds)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      if (requestRef.current) cancelAnimationFrame(requestRef.current)
    }
  }, [count])

  // Create static elements
  const fireflyElements = Array.from({ length: count }).map((_, i) => (
    <div
      key={i}
      ref={el => { elementsRef.current[i] = el }}
      className="firefly absolute"
      style={{ left: -100, top: -100 }} // Start off-screen to avoid flash
    >
      <div 
        className="w-full h-full rounded-full bg-[#ffdd40] opacity-0 shadow-[0_0_10px_#ffdd40,0_0_20px_#ffae00]"
        style={{
          animation: `flash ${2 + Math.random() * 3}s ease infinite alternate`,
          animationDelay: `${Math.random() * -5}s`
        }}
      />
    </div>
  ))

  return (
    <div ref={containerRef} aria-hidden="true" className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {fireflyElements}
    </div>
  )
}
