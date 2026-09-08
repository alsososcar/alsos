import { Button } from "@alsos/ui/components/button";
import { createFileRoute, Link, redirect } from "@tanstack/react-router";

import SelectedProjects from "#/components/SelectedProjects";
import { getSession } from "#/lib/auth.functions";
import { placeholderProjects } from "#/routes/index";

export const Route = createFileRoute("/projects/")({
  beforeLoad: async () => {
    if (!(await getSession())) throw redirect({ to: "/login" });
  },
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <main className='mx-auto w-full max-w-6xl px-6 py-20'>
      <p className='text-muted-foreground font-mono text-xs tracking-widest uppercase'>
        Portefølje
      </p>
      <h1 className='font-heading mt-2 text-3xl font-semibold tracking-wider uppercase'>
        Alle prosjekter
      </h1>
      <div className='mt-10'>
        <SelectedProjects projects={placeholderProjects} />
      </div>
      <Button className='mt-8' nativeButton={false} render={<Link to='/' />}>
        Til forsiden
      </Button>
    </main>
  );
}
