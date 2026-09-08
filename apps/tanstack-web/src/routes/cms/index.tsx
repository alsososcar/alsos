import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cms/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/cms/"!</div>;
}
