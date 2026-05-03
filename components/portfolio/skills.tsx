import { Code2, Briefcase, Wrench, Award, ExternalLink } from "lucide-react"

const certificates = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    link: "#",
  },
  {
    name: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "2023",
    link: "#",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google",
    date: "2023",
    link: "#",
  },
  {
    name: "Meta Social Media Marketing",
    issuer: "Meta",
    date: "2024",
    link: "#",
  },
]

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "GraphQL",
      "Git",
    ],
  },
  {
    title: "Product & Consulting",
    icon: Briefcase,
    skills: [
      "Product Strategy",
      "Technical Architecture",
      "Agile/Scrum",
      "Stakeholder Management",
      "Requirements Analysis",
      "Business Process Design",
      "Digital Transformation",
      "Change Management",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "VS Code",
      "Figma",
      "Docker",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "Jira",
      "Notion",
      "Slack",
      "Linear",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Skills & Technologies
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning software development, product strategy,
            and modern collaboration tools.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              Certifications
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="h-5 w-5 text-primary" />
                  <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h4 className="font-medium text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {cert.issuer}
                </p>
                <span className="mt-auto text-xs text-muted-foreground">
                  {cert.date}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
