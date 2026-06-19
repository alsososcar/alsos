import { Context } from "hono";

export async function getImage(c: Context<{ Bindings: Env }>) {
  const id = c.req.param("id");

  if (!id) return c.text("400 Bad Request", 400);

  const upstream = await fetch(`https://picsum.photos/id/${id}/1200/800`);

  if (!upstream.ok || !upstream.body) {
    return c.notFound();
  }

  const headers = new Headers();
  headers.set(
    "Content-Type",
    upstream.headers.get("Content-Type") ?? "image/jpeg"
  );
  headers.set("Cache-Control", "public, max-age=300");

  return new Response(upstream.body, {
    status: 200,
    headers,
  });
}
