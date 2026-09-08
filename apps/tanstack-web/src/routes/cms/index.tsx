import { createFileRoute, redirect } from "@tanstack/react-router";

import { getSession } from "#/lib/auth.functions";

export const Route = createFileRoute("/cms/")({
  beforeLoad: async () => {
    if (!(await getSession())) throw redirect({ to: "/login" });
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cms/"!</div>;
}
