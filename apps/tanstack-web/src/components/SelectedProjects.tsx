import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@alsos/ui/components/card'
import { Link } from '@tanstack/react-router'

const mediaUrl = 'https://media.alsos.dev'

type ProjectImage = {
  id: number
  alt: string
}

type SingleProject = {
  slug: string
  title: string
  summary: string
  description: string
  tags: string[]
  year: number
  role: string
  images: ProjectImage[]
}

export default function SelectedProjects({
  projects,
}: {
  projects: SingleProject[]
}) {
  return (
    <div className="mx-auto grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="group block"
        >
          <Card className="h-full overflow-hidden pt-0 transition-colors hover:border-primary">
            <div className="aspect-square overflow-hidden bg-muted">
              <img
                src={
                  project.images[0] &&
                  `${mediaUrl}/image/${project.images[0].id}`
                }
                alt={project.images[0]?.alt ?? project.title}
                className="size-full object-cover transition-transform group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src = '/placeholder.png'
                }}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.summary}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
