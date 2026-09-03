import { Button } from "@alsos/ui/components/button";
import { createFileRoute, Link } from "@tanstack/react-router";

import SelectedProjects from "#/components/SelectedProjects";
import { placeholderProjects } from "#/routes/index";

export const Route = createFileRoute("/projects/")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-20">
      <p className="text-muted-foreground font-mono text-xs tracking-widest uppercase">
        Portefølje
      </p>
      <h1 className="font-heading mt-2 text-3xl font-semibold tracking-wider uppercase">
        Alle prosjekter
      </h1>
      <div className="mt-10">
        <SelectedProjects projects={placeholderProjects} />
      </div>
      <Button className="mt-8" render={<Link to="/" />}>
        Til forsiden
      </Button>
    </main>
  );
}
