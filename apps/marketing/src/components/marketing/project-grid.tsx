import type { Project } from "@/content/projects/types"

import { ProjectCard } from "./project-card"

interface ProjectGridProps {
  projects: Project[]
}

function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  )
}

export { ProjectGrid }
