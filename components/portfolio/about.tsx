import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl -rotate-3" />
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/profile.jpg"
                alt="Profile photo"
                fill
                className="object-cover"
                priority
              />
              {/* Fallback gradient if no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <span className="text-sm font-medium text-primary tracking-widest uppercase">
                About Me
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Building Digital Products & Solutions
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
              I’m a Business Information Technology student with a strong interest in building smart digital solutions. 
              Currently, I work as a developer at Studentlab and as an intern at SBB.
            </p>

            <p>
              I enjoy combining technical skills with business thinking to create solutions that are both functional 
              and meaningful. My goal is to continuously grow, take on new challenges, and build products that have 
              a real-world impact.
            </p>

            <p>
              Outside of tech, I’m highly committed to sports, especially volleyball and fitness. Something i picked up lately is the violin.
            </p>

            <p>
              I value progress, ambition, and pushing my limits.
            </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">Software Development</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">Business Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm text-foreground">Personal Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
