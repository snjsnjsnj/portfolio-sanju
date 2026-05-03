"use client"

import { Rocket, Instagram, TrendingUp, Users, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const sideMissions = [
  {
    title: "Social Media Marketing Agency",
    tagline: "Helping brands grow their digital presence",
    description:
      "Founded and operate a boutique social media marketing agency focused on authentic brand storytelling and data-driven growth strategies for small to medium businesses.",
    icon: Instagram,
    highlights: [
      { label: "Clients Served", value: "25+", icon: Users },
      { label: "Avg. Growth Rate", value: "340%", icon: TrendingUp },
    ],
    services: [
      "Content Strategy",
      "Brand Identity",
      "Community Management",
      "Paid Advertising",
      "Analytics & Reporting",
      "Influencer Partnerships",
    ],
    link: "#",
    color: "from-pink-500/20 to-orange-500/20",
    accentColor: "text-pink-500",
  },
]

export function SideMissions() {
  return (
    <section id="side-missions" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Ventures
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Side Missions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Beyond my main work, I pursue entrepreneurial ventures that combine
            creativity with business acumen.
          </p>
        </div>

        <div className="space-y-8">
          {sideMissions.map((mission) => (
            <div
              key={mission.title}
              className="group relative rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${mission.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8 md:p-10">
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-secondary ${mission.accentColor}`}>
                        <mission.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">
                          {mission.title}
                        </h3>
                        <p className={`text-sm ${mission.accentColor}`}>
                          {mission.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {mission.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {mission.services.map((service) => (
                        <span
                          key={service}
                          className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>

                    <Button asChild variant="outline" className="group/btn">
                      <Link href={mission.link}>
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>

                  <div className="lg:w-64 flex lg:flex-col gap-4">
                    {mission.highlights.map((highlight) => (
                      <div
                        key={highlight.label}
                        className="flex-1 p-5 rounded-xl bg-secondary/50 border border-border text-center"
                      >
                        <highlight.icon
                          className={`h-5 w-5 mx-auto mb-2 ${mission.accentColor}`}
                        />
                        <div className="text-2xl font-bold text-foreground">
                          {highlight.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {highlight.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
