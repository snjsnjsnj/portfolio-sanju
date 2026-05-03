export const consultingProjects = [
  {
    slug: "digital-transformation-strategy",
    title: "Digital Transformation Strategy",
    description:
      "Led end-to-end digital transformation initiative for a mid-sized enterprise, modernizing legacy systems and implementing cloud-first architecture.",
    role: "Lead Consultant",
    outcome: "40% reduction in operational costs, 60% faster time-to-market",
    fullDescription: `This comprehensive digital transformation project involved a complete overhaul of the client's technology infrastructure and business processes. Working closely with stakeholders at all levels, I developed a strategic roadmap that aligned technology investments with business objectives.

The project encompassed multiple workstreams including cloud migration, legacy system modernization, process automation, and change management. A key challenge was ensuring business continuity while implementing significant changes across the organization.

Through careful planning and phased implementation, we successfully migrated critical systems to a cloud-first architecture while simultaneously introducing new tools and workflows that enhanced productivity and collaboration.`,
    challenges: [
      "Complex legacy system dependencies requiring careful migration planning",
      "Change management across multiple departments with varying technical literacy",
      "Maintaining business continuity during critical system transitions",
      "Aligning diverse stakeholder expectations with realistic timelines",
    ],
    solutions: [
      "Developed a modular migration strategy with rollback capabilities",
      "Created comprehensive training programs tailored to different user groups",
      "Implemented blue-green deployment patterns for zero-downtime transitions",
      "Established clear communication channels and regular progress updates",
    ],
    technologies: ["AWS", "Kubernetes", "Terraform", "CI/CD Pipelines", "Microservices Architecture"],
    duration: "18 months",
    teamSize: "12 consultants",
  },
  {
    slug: "ecommerce-platform-optimization",
    title: "E-Commerce Platform Optimization",
    description:
      "Redesigned and optimized e-commerce platform architecture, focusing on performance, scalability, and user experience improvements.",
    role: "Technical Advisor",
    outcome: "3x improvement in page load times, 25% increase in conversions",
    fullDescription: `Engaged as a technical advisor to transform an underperforming e-commerce platform into a high-performance, scalable solution. The existing platform suffered from slow load times, poor mobile experience, and infrastructure limitations that hindered business growth.

My role involved conducting a comprehensive technical audit, identifying bottlenecks, and architecting solutions that would deliver immediate performance gains while establishing a foundation for future scalability.

The project delivered remarkable results with a 3x improvement in page load times and a significant uplift in conversion rates, directly impacting the client's bottom line.`,
    challenges: [
      "Legacy codebase with significant technical debt",
      "High traffic volumes requiring zero-downtime improvements",
      "Mobile experience lagging behind desktop significantly",
      "Database queries causing severe performance bottlenecks",
    ],
    solutions: [
      "Implemented CDN and edge caching strategies",
      "Optimized database queries and introduced read replicas",
      "Developed responsive-first front-end architecture",
      "Introduced performance monitoring and alerting systems",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Cloudflare", "Performance Monitoring"],
    duration: "8 months",
    teamSize: "6 engineers",
  },
  {
    slug: "business-process-automation",
    title: "Business Process Automation",
    description:
      "Designed and implemented automated workflows replacing manual processes across multiple departments.",
    role: "Solution Architect",
    outcome: "Saved 2,000+ hours annually, reduced errors by 90%",
    fullDescription: `This automation initiative targeted repetitive, error-prone manual processes that were consuming valuable employee time and introducing operational risks. Working across finance, HR, and operations departments, I identified automation opportunities and designed solutions that would deliver significant efficiency gains.

The project involved detailed process mapping, requirements gathering, and the design of automated workflows using modern low-code and integration platforms. A key focus was ensuring that automated processes included appropriate controls and audit trails.

Post-implementation, the organization realized substantial time savings and a dramatic reduction in processing errors, allowing staff to focus on higher-value activities.`,
    challenges: [
      "Diverse process landscape with varying complexity levels",
      "Integration requirements across multiple disparate systems",
      "Ensuring compliance and audit trail requirements",
      "User adoption and change resistance",
    ],
    solutions: [
      "Prioritized automation candidates based on ROI and complexity",
      "Developed robust API integrations with error handling",
      "Built comprehensive logging and reporting dashboards",
      "Created user-friendly interfaces with clear documentation",
    ],
    technologies: ["Power Automate", "Zapier", "Custom APIs", "Python Scripts", "Process Mining Tools"],
    duration: "12 months",
    teamSize: "4 consultants",
  },
]

export const programmingProjects = [
  {
    slug: "task-management-platform",
    title: "Task Management Platform",
    description:
      "Full-stack project management application with real-time collaboration, Kanban boards, and analytics dashboard.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    fullDescription: `A comprehensive project management solution built to streamline team collaboration and task tracking. The platform features real-time updates, customizable Kanban boards, and detailed analytics to help teams understand their productivity patterns.

Key features include drag-and-drop task management, real-time notifications, team workload visualization, and integration capabilities with popular tools like Slack and GitHub.

The application is built with performance and scalability in mind, utilizing serverless functions for optimal resource utilization and WebSocket connections for live updates.`,
    features: [
      "Real-time collaborative Kanban boards with drag-and-drop",
      "Custom workflows and automation rules",
      "Time tracking and productivity analytics",
      "Team capacity planning and workload distribution",
      "Integration with Slack, GitHub, and calendar apps",
      "Mobile-responsive design with offline support",
    ],
    architecture: "The application follows a modern full-stack architecture with Next.js App Router for the frontend, Prisma ORM for type-safe database access, and PostgreSQL for data persistence. Real-time features are powered by WebSocket connections, and the analytics engine uses aggregated data views for performance.",
  },
  {
    slug: "ai-content-generator",
    title: "AI Content Generator",
    description:
      "SaaS application leveraging LLMs for automated content generation with custom fine-tuning capabilities.",
    techStack: ["React", "Python", "FastAPI", "OpenAI"],
    github: "https://github.com",
    demo: "https://demo.example.com",
    fullDescription: `An AI-powered content generation platform that helps businesses create high-quality written content at scale. The application combines the power of large language models with custom fine-tuning to deliver brand-consistent content across various formats.

Users can generate blog posts, social media content, email campaigns, and more while maintaining their unique brand voice. The platform includes content editing tools, plagiarism checking, and SEO optimization features.`,
    features: [
      "Multiple content types: blogs, social posts, emails, ad copy",
      "Brand voice customization and fine-tuning",
      "Built-in plagiarism detection",
      "SEO optimization suggestions",
      "Content calendar and scheduling",
      "Team collaboration with approval workflows",
    ],
    architecture: "Built with a React frontend and Python/FastAPI backend, the application interfaces with OpenAI's API while incorporating custom prompt engineering and fine-tuning pipelines. Content is stored in PostgreSQL with full-text search capabilities.",
  },
  {
    slug: "realtime-analytics-dashboard",
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive data visualization platform with live updates, custom chart builders, and export functionality.",
    techStack: ["Vue.js", "D3.js", "Node.js", "WebSocket"],
    github: "https://github.com",
    fullDescription: `A powerful analytics dashboard designed for real-time data visualization and business intelligence. The platform supports custom chart creation, live data feeds, and sophisticated filtering capabilities.

Built for performance, the dashboard can handle thousands of data points while maintaining smooth interactions and live updates. Users can create custom dashboards, set up alerts, and export reports in multiple formats.`,
    features: [
      "Custom chart builder with drag-and-drop interface",
      "Real-time data streaming and live updates",
      "Advanced filtering and drill-down capabilities",
      "Automated report generation and scheduling",
      "Role-based access control",
      "White-label customization options",
    ],
    architecture: "The frontend is built with Vue.js and D3.js for sophisticated visualizations. The backend uses Node.js with WebSocket connections for real-time updates. Data processing is handled by a dedicated pipeline for aggregations and transformations.",
  },
  {
    slug: "cli-developer-toolkit",
    title: "CLI Developer Toolkit",
    description:
      "Command-line utility suite for developers with project scaffolding, code generation, and deployment automation.",
    techStack: ["Rust", "CLI", "GitHub Actions"],
    github: "https://github.com",
    fullDescription: `A developer productivity toolkit providing command-line utilities for common development tasks. Built in Rust for maximum performance and cross-platform compatibility.

The toolkit includes project scaffolding templates, code generators, deployment automation, and various helper utilities that streamline the development workflow.`,
    features: [
      "Project scaffolding with customizable templates",
      "Code generation for common patterns",
      "Git workflow automation",
      "Deployment scripts for major cloud providers",
      "Environment management utilities",
      "Performance profiling tools",
    ],
    architecture: "Written entirely in Rust for optimal performance and memory safety. The CLI uses a modular plugin architecture allowing users to extend functionality. Configuration is managed through TOML files with sensible defaults.",
  },
]

export function getConsultingProject(slug: string) {
  return consultingProjects.find((p) => p.slug === slug)
}

export function getProgrammingProject(slug: string) {
  return programmingProjects.find((p) => p.slug === slug)
}
