import { Hono } from "hono";
import { cors } from "hono/cors";
import { Result } from "try";
import { env } from "./env";
import { getImage } from "./routes/get-image";

const app = new Hono<{ Bindings: Env }>();

app.use(
  "*",
  cors({
    origin: (origin) => {
      const originUrl = isValidUrl(origin) ? new URL(origin) : null;

      if (originUrl) {
        if (
          origin === env.DOMAIN_ROOT ||
          origin.endsWith(`.${env.DOMAIN_ROOT}`)
        ) {
          return origin;
        }
      }
    },
  })
);

app.get("/image/:id", getImage);

function isValidUrl(urlString: string) {
  const urlResult = Result.try(() => new URL(urlString));
  return urlResult.ok;
}

export default app
