"use client"

import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRef, useState, useEffect, useCallback } from "react"

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setTargetPosition({ x, y })
  }, [])

  // Smooth interpolation for the mouse follower
  useEffect(() => {
    if (!isHovering) return

    let animationFrameId: number
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor

    const animate = () => {
      setMousePosition((prev) => ({
        x: lerp(prev.x, targetPosition.x, 0.15),
        y: lerp(prev.y, targetPosition.y, 0.15),
      }))
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrameId)
  }, [isHovering, targetPosition])

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Subtle background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Refined mouse-following spotlight effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 200, 180, 0.06), transparent 40%)`,
        }}
      />

      {/* Secondary inner glow - smaller, more defined */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(300px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(120, 200, 180, 0.08), transparent 40%)`,
        }}
      />

      {/* Subtle grid distortion effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-700"
        style={{
          opacity: isHovering ? 0.3 : 0,
          backgroundImage: `
            linear-gradient(rgba(120, 200, 180, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(120, 200, 180, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(500px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
            <span className="text-balance">Sananjayan Paramanantharajah</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            You can just call me Sanju Para!
          </p>

          <p className="text-base text-muted-foreground/80 max-w-xl mx-auto">
            Bridging Business & Tech <br></br>
            Business Information Technology student focused on building smart digital solutions. <br></br>
            Developer at Studentlab | Intern at SBB
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button asChild size="lg" className="min-w-[160px]">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-[160px]">
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Link
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Explore</span>
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
