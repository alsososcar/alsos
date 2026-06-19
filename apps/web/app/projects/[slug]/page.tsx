import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ExternalLinkIcon } from "lucide-react"

import { Badge } from "@alsos/ui/components/badge"
import { Button } from "@alsos/ui/components/button"
import { Separator } from "@alsos/ui/components/separator"
import { ProjectFacts } from "@/components/marketing/project-facts"
import { ProjectGallery } from "@/components/marketing/project-gallery"
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/lib/projects"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: "Prosjekt ikke funnet" }
  }

  return {
    title: `${project.title} — Oscar Krokeide Alsos`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="mx-auto max-w-6xl px-6 py-12">
      <Button
        variant="ghost"
        size="sm"
        className="mb-8"
        render={<Link href="/#prosjekter" />}
      >
        <ArrowLeftIcon data-icon="inline-start" />
        Tilbake til prosjekter
      </Button>

      <header className="max-w-3xl">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="mt-4 font-heading text-3xl font-semibold tracking-wider uppercase sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {project.summary}
        </p>
      </header>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px]">
        <ProjectGallery images={project.images} />
        <ProjectFacts
          facts={project.facts}
          year={project.year}
          role={project.role}
        />
      </div>

      <Separator className="my-12" />

      <div className="max-w-3xl">
        <h2 className="font-heading text-lg font-semibold tracking-wider uppercase">
          Om prosjektet
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        {project.links && project.links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.map((link) => (
              <Button
                key={link.href}
                variant="outline"
                size="sm"
                render={
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
              >
                {link.label}
                <ExternalLinkIcon data-icon="inline-end" />
              </Button>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
