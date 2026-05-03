import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, Users, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getConsultingProject, consultingProjects } from "@/lib/projects-data"

export function generateStaticParams() {
  return consultingProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getConsultingProject(slug)
  if (!project) return { title: "Project Not Found" }
  return {
    title: `${project.title} | Consulting Project`,
    description: project.description,
  }
}

export default async function ConsultingProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getConsultingProject(slug)

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
            Consulting Project
          </span>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground text-balance">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              <span>{project.teamSize}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">Role:</span>
              <span>{project.role}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Outcome Highlight */}
        <Card className="mb-12 bg-primary/5 border-primary/20">
          <CardContent className="py-6">
            <div className="flex items-start gap-4">
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <span className="text-sm font-medium text-primary">Key Outcome</span>
                <p className="text-lg text-foreground mt-1">{project.outcome}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <div className="prose prose-invert max-w-none mb-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
          {project.fullDescription.split("\n\n").map((paragraph, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Challenges & Solutions */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-2" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg text-foreground">Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    {solution}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Technologies */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-4">Technologies & Tools</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
