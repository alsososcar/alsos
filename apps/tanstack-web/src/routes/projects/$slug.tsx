import { Badge } from "@alsos/ui/components/badge";
import { Button } from "@alsos/ui/components/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@alsos/ui/components/card";
import { Separator } from "@alsos/ui/components/separator";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeftIcon } from "lucide-react";

import { placeholderProjects } from "#/routes/index";

const mediaUrl = "https://media.alsos.dev";

export const Route = createFileRoute("/projects/$slug")({
  head: ({ params }) => {
    const project = placeholderProjects.find(
      (candidate) => candidate.slug === params.slug,
    );
    return {
      meta: [
        {
          title: project
            ? `${project.title} — Oscar Krokeide Alsos`
            : "Prosjekt ikke funnet",
        },
        ...(project ? [{ name: "description", content: project.summary }] : []),
      ],
    };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = placeholderProjects.find(
    (candidate) => candidate.slug === slug,
  );

  if (!project) {
    return (
      <main className='mx-auto w-full max-w-6xl px-6 py-20'>
        <h1 className='font-heading text-3xl font-semibold uppercase'>
          Prosjekt ikke funnet
        </h1>
        <Button className='mt-8' render={<Link to='/' hash='prosjekter' />}>
          <ArrowLeftIcon data-icon='inline-start' /> Tilbake til prosjekter
        </Button>
      </main>
    );
  }

  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-12'>
      <Button
        variant='ghost'
        size='sm'
        className='mb-8'
        render={<Link to='/' hash='prosjekter' />}
      >
        <ArrowLeftIcon data-icon='inline-start' /> Tilbake til prosjekter
      </Button>
      <header className='max-w-3xl'>
        <div className='flex flex-wrap gap-2'>
          {project.tags.map((tag) => (
            <Badge key={tag} variant='secondary'>
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className='font-heading mt-4 text-3xl font-semibold tracking-wider uppercase sm:text-4xl'>
          {project.title}
        </h1>
        <p className='text-muted-foreground mt-4 text-base leading-relaxed'>
          {project.summary}
        </p>
      </header>
      <div className='mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]'>
        <div className='space-y-6'>
          {project.images.map((image) => (
            <figure key={image.id}>
              <div className='border-border bg-muted aspect-video overflow-hidden border'>
                <img
                  src={`${mediaUrl}/image/${image.id}`}
                  alt={image.alt}
                  className='size-full object-cover'
                  onError={(event) => {
                    event.currentTarget.src = "/placeholder.png";
                  }}
                />
              </div>
              <figcaption className='text-muted-foreground mt-2 font-mono text-xs'>
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
        <Card className='h-fit'>
          <CardHeader>
            <CardTitle>Fakta</CardTitle>
          </CardHeader>
          <CardContent className='space-y-4'>
            <Fact label='År' value={String(project.year)} />
            <Fact label='Rolle' value={project.role} />
            <Separator />
            {project.tags.map((tag) => (
              <Fact key={tag} label='Teknologi' value={tag} />
            ))}
          </CardContent>
        </Card>
      </div>
      <Separator className='my-12' />
      <div className='max-w-3xl'>
        <h2 className='font-heading text-lg font-semibold tracking-wider uppercase'>
          Om prosjektet
        </h2>
        <p className='text-muted-foreground mt-4 text-sm leading-relaxed'>
          {project.description}
        </p>
      </div>
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className='flex justify-between gap-4'>
      <span className='text-muted-foreground font-mono text-xs tracking-widest uppercase'>
        {label}
      </span>
      <span className='text-right text-sm'>{value}</span>
    </div>
  );
}
