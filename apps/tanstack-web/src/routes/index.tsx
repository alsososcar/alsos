import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@alsos/ui/components/card";
import { createFileRoute } from "@tanstack/react-router";
import { DatabaseIcon, GlobeIcon, PlugIcon, ServerIcon } from "lucide-react";

import Header from "#/components/Header";
import SelectedProjects from "#/components/SelectedProjects";

// Temporary project data until projects are loaded from the real data source.
const placeholderProjects = [
  {
    slug: "portfolio-website",
    title: "Portfolio-nettside",
    summary: "En personlig portefølje for å vise frem utvalgte prosjekter.",
    description: "Midlertidig prosjektbeskrivelse.",
    tags: ["React", "TypeScript"],
    year: 2026,
    role: "Utvikler",
    images: [{ id: 1, alt: "Portfolio-nettside" }],
  },
  {
    slug: "safe-exam-browser",
    title: "Safe Exam Browser",
    summary: "Integrasjon og verktøy rundt sikre digitale eksamener.",
    description: "Midlertidig prosjektbeskrivelse.",
    tags: ["API", "Integrasjon"],
    year: 2025,
    role: "Utvikler",
    images: [{ id: 2, alt: "Safe Exam Browser" }],
  },
  {
    slug: "udir-api",
    title: "UDIR API-integrasjon",
    summary: "Henting og presentasjon av data fra offentlige API-er.",
    description: "Midlertidig prosjektbeskrivelse.",
    tags: ["API", "Data"],
    year: 2025,
    role: "Utvikler",
    images: [{ id: 3, alt: "UDIR API-integrasjon" }],
  },
  {
    slug: "database-system",
    title: "Databasesystem",
    summary: "Et eget system for strukturering og håndtering av data.",
    description: "Midlertidig prosjektbeskrivelse.",
    tags: ["PostgreSQL", "Database"],
    year: 2024,
    role: "Utvikler",
    images: [{ id: 4, alt: "Databasesystem" }],
  },
];

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const capabilities = [
    {
      icon: GlobeIcon,
      title: "Webutvikling",
      description:
        "Moderne nettsider og portaler med Next.js, Tanstack o.l., responsivt design og delte designsystemer.",
    },
    {
      icon: PlugIcon,
      title: "Integrasjon",
      description:
        "Kobling av systemer som Safe Exam Browser, LMS og tredjepartstjenester.",
    },
    {
      icon: ServerIcon,
      title: "API og data",
      description:
        "Henting, normalisering og caching av data fra offentlige API-er som UDIR.",
    },
    {
      icon: DatabaseIcon,
      title: "Database",
      description:
        "Design av skjema, migrasjoner og API-er med PostgreSQL og moderne ORM-er.",
    },
  ] as const;

  return (
    <div className='flex flex-col gap-6'>
      <Header />

      {/* Capabilities */}
      <section className=''>
        <p className='text-muted-foreground font-mono text-xs tracking-widest uppercase'>
          Kompetanse
        </p>

        <h2 className='font-heading mt-2 text-2xl font-semibold tracking-wider uppercase'>
          Hva jeg jobber med
        </h2>

        <div className='mt-10 grid gap-6 sm:grid-cols-2'>
          {capabilities.map((capability) => (
            <Card key={capability.title} size='sm'>
              <CardHeader>
                <capability.icon className='text-primary mb-2 size-5' />
                <CardTitle>{capability.title}</CardTitle>
                <CardDescription>{capability.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Selected favorite projects */}
      <section className='mt-16'>
        <SelectedProjects projects={placeholderProjects} />
      </section>
    </div>
  );
}
