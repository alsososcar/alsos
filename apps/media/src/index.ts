import { Hono } from "hono";
import { cors } from "hono/cors";
import { Result } from "try";

const app = new Hono<{ Bindings: Env }>();

app.use(
  "*",
  cors({
    origin: (origin) => {
      const originUrl = isValidUrl(origin) ? new URL(origin) : null;

      if (originUrl) {
      }
    },
  })
);

app.get("/image/:id", async (c, next) => {
  const imageId = c.req.id;
});

function isValidUrl(urlString: string) {
  const urlResult = Result.try(() => new URL(urlString));
  return urlResult.ok;
}
