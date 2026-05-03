import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { SideMissions } from "@/components/portfolio/side-missions"
import { Skills } from "@/components/portfolio/skills"
import { Interests } from "@/components/portfolio/interests"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <SideMissions />
      <Skills />
      <Interests />
      <Contact />
      <Footer />
    </main>
  )
}
