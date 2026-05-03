"use client"

import { Mail, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    label: "Email",
    value: "contact@spara.ch",
    href: "mailto:contact@spara.ch",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/sanpar",
    href: "https://linkedin.com/in/sanpar",
    icon: Linkedin,
  },
  {
    label: "GitLab",
    value: "gitlab.com/sanjupara",
    href: "https://gitlab.com/sanjupara",
    icon: () => (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    ),
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {"Let's Work Together"}
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
          </p>
        </div>

        <div className="grid gap-4 max-w-xl mx-auto">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="group flex items-center justify-between p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary text-muted-foreground group-hover:text-primary transition-colors">
                  <link.icon />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="text-foreground font-medium">{link.value}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <a href="mailto:contact@spara.ch">
              <Mail className="mr-2 h-4 w-4" />
              Send Message
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
