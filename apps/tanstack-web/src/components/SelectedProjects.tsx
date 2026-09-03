import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@alsos/ui/components/card";
import { Link } from "@tanstack/react-router";

import { env } from "#/lib/env";

type ProjectImage = {
  id: number;
  alt: string;
};

type SingleProject = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  year: number;
  role: string;
  images: ProjectImage[];
};

export default function SelectedProjects({
  projects,
}: {
  projects: SingleProject[];
}) {
  return (
    <div className="mx-auto grid w-1/2 grid-cols-1 gap-6 md:mx-0 md:w-full md:grid-cols-3">
      {projects.map((project) => (
        <Link
          key={project.slug}
          to="/projects/$slug"
          params={{ slug: project.slug }}
          className="group block"
        >
          <Card className="hover:border-primary h-full overflow-hidden pt-0 transition-colors">
            <div className="bg-muted aspect-square overflow-hidden">
              <img
                src={
                  project.images[0] &&
                  `${env.VITE_APP_URL_MEDIA}/image/${project.images[0].id}`
                }
                alt={project.images[0]?.alt ?? project.title}
                className="size-full object-cover transition-transform group-hover:scale-105"
                onError={(event) => {
                  event.currentTarget.src = "/placeholder.png";
                }}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{project.summary}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
