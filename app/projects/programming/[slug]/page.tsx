import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getProgrammingProject, programmingProjects } from "@/lib/projects-data"

export function generateStaticParams() {
  return programmingProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProgrammingProject(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | Programming Project`,
    description: project.description,
  }
}

export default async function ProgrammingProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProgrammingProject(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card/50">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/#projects">
            <Button variant="ghost" size="sm" className="gap-2 mb-6 -ml-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Programming Project
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-2 mt-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-6">
            {project.github && (
              <Button variant="outline" size="sm" asChild>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Github className="h-4 w-4" />
                  View Code
                </a>
              </Button>
            )}
            {project.demo && (
              <Button size="sm" asChild>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">About This Project</h2>
          {project.fullDescription.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Features */}
        <Card className="mb-12 bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg text-foreground flex items-center gap-2">
              <Layers className="h-5 w-5 text-primary" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid md:grid-cols-2 gap-3">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Architecture */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Architecture</h2>
          <p className="text-muted-foreground leading-relaxed">{project.architecture}</p>
        </div>
      </div>
    </main>
  )
}
