export type ProjectCategory = "web" | "integration" | "api" | "database"

export interface ProjectFact {
  label: string
  value: string
}

export interface ProjectImage {
  src: string
  alt: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface Project {
  slug: string
  title: string
  summary: string
  description: string
  category: ProjectCategory
  tags: string[]
  year: string
  role: string
  facts: ProjectFact[]
  images: ProjectImage[]
  links?: ProjectLink[]
  featured: boolean
}
