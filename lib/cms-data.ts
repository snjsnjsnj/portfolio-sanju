export type ProgrammingProject = {
  slug: string
  title: string
  description: string
  techStack: string[]
  github?: string
  demo?: string
  fullDescription: string
  features: string[]
  architecture: string
}

export type ConsultingProject = {
  slug: string
  title: string
  description: string
  role: string
  outcome: string
  fullDescription: string
  challenges: string[]
  solutions: string[]
  technologies: string[]
  duration: string
  teamSize: string
}

export type SideMission = {
  title: string
  tagline: string
  description: string
  highlights: { label: string; value: string }[]
  services: string[]
  link: string
  color: string
  accentColor: string
}

export type CmsData = {
  programmingProjects: ProgrammingProject[]
  consultingProjects: ConsultingProject[]
  sideMissions: SideMission[]
}
