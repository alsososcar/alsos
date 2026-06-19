import Link from "next/link";

import type { Project } from "@/content/projects/types";
import { getMediaImageUrl } from "@/lib/media";
import { AspectRatio } from "@alsos/ui/components/aspect-ratio";
import { Badge } from "@alsos/ui/components/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@alsos/ui/components/card";

interface ProjectCardProps {
  project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
  const coverImage = project.images[0];

  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <Card className="h-full transition-colors hover:ring-foreground/10">
        {coverImage ? (
          <AspectRatio ratio={16 / 9}>
            <img
              src={getMediaImageUrl(coverImage.id)}
              alt={coverImage.alt}
              className="object-cover"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </AspectRatio>
        ) : null}
        <CardHeader>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <CardTitle className="group-hover:text-primary">
            {project.title}
          </CardTitle>
          <CardDescription>{project.summary}</CardDescription>
        </CardHeader>
        <CardFooter>
          <span className="font-mono text-xs text-muted-foreground">
            {project.year} · {project.role}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}

export { ProjectCard };
