"use client"

import { useState } from "react"
import Link from "next/link"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { consultingProjects, programmingProjects } from "@/lib/projects-data"

type TabType = "consulting" | "programming"

export function Projects() {
  const [activeTab, setActiveTab] = useState<TabType>("consulting")

  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A selection of consulting engagements and programming projects
            showcasing my expertise and impact.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-secondary p-1">
            <button
              onClick={() => setActiveTab("consulting")}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "consulting"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Consulting
            </button>
            <button
              onClick={() => setActiveTab("programming")}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                activeTab === "programming"
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Programming
            </button>
          </div>
        </div>

        {/* Consulting Projects */}
        {activeTab === "consulting" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {consultingProjects.map((project) => (
              <Link key={project.slug} href={`/projects/consulting/${project.slug}`}>
                <Card className="group h-full bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-primary">Role:</span>
                        <span className="text-xs text-muted-foreground">
                          {project.role}
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-xs font-medium text-primary shrink-0">
                          Impact:
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {project.outcome}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <span className="text-xs text-primary font-medium group-hover:underline">
                      View Details
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        )}

        {/* Programming Projects */}
        {activeTab === "programming" && (
          <div className="grid md:grid-cols-2 gap-6">
            {programmingProjects.map((project) => (
              <Card
                key={project.slug}
                className="group bg-card border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`/projects/programming/${project.slug}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Link>
                <CardFooter className="flex gap-3">
                  {project.github && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Link
                    href={`/projects/programming/${project.slug}`}
                    className="text-xs text-primary font-medium hover:underline ml-auto self-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Details
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
