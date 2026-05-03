"use client"

import { useState } from "react"
import Image from "next/image"
import { Camera, Video, Trophy, RotateCcw } from "lucide-react"

interface InterestCardProps {
  title: string
  description: string
  icon: React.ElementType
  color: string
  iconColor: string
  backContent: {
    type: "images"
    images: string[]
  }
}

function InterestCard({
  title,
  description,
  icon: Icon,
  color,
  iconColor,
  backContent,
}: InterestCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-80 cursor-pointer group perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front of card */}
        <div
          className="absolute inset-0 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors overflow-hidden backface-hidden"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Gradient background */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          />

          <div className="relative p-8 h-full flex flex-col">
            <div
              className={`inline-flex p-3 rounded-xl bg-secondary ${iconColor} mb-6 w-fit`}
            >
              <Icon className="h-6 w-6" />
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              {title}
            </h3>

            <p className="text-muted-foreground leading-relaxed flex-grow">
              {description}
            </p>

            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-4 pt-4 border-t border-border">
              <RotateCcw className="h-3 w-3" />
              <span>Click to see more</span>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div
          className="absolute inset-0 rounded-2xl bg-card border border-primary/50 overflow-hidden backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="grid grid-cols-2 gap-1 h-full p-1">
            {backContent.images.map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-lg">
                <Image
                  src={src}
                  alt={`${title} photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Flip back hint */}
          <div className="absolute top-3 right-3 p-2 rounded-full bg-background/80 text-muted-foreground">
            <RotateCcw className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

const interests = [
  {
    title: "Volleyball",
    description:
      "Competitive player with a passion for team sports. Regular participation in local leagues and tournaments, fostering teamwork and strategic thinking.",
    icon: Trophy,
    color: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-500",
    backContent: {
      type: "images" as const,
      images: [
        "/interests/volleyball-1.jpg",
        "/interests/volleyball-2.jpg",
        "/interests/volleyball-3.jpg",
        "/interests/volleyball-4.jpg",
      ],
    },
  },
  {
    title: "Photography and Videography",
    description:
      "Capturing moments and stories through the lens. Specializing in landscape and street photography, always seeking the perfect composition.",
    icon: Camera,
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
    backContent: {
      type: "images" as const,
      images: [
        "/interests/photo-1.jpg",
        "/interests/photo-2.jpg",
        "/interests/photo-3.jpg",
        "/interests/photo-4.jpg",
      ],
    },
  },
  {
    title: "Violin",
    description:
      "Creating compelling visual narratives through video. From short films to documentary-style content, bringing stories to life.",
    icon: Video,
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-500",
    backContent: {
      type: "images" as const,
      images: [
        "/interests/video-1.jpg",
        "/interests/video-2.jpg",
        "/interests/video-3.jpg",
        "/interests/video-4.jpg",
      ],
    },
  },
]

export function Interests() {
  return (
    <section id="interests" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Beyond Work
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Personal Interests
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            When I&apos;m not coding or consulting, you&apos;ll find me pursuing
            these passions that keep me creative and energized.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((interest) => (
            <InterestCard key={interest.title} {...interest} />
          ))}
        </div>
      </div>
    </section>
  )
}
