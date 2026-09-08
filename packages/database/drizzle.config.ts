import { defineConfig } from "drizzle-kit";

import { env } from "#env";

export default defineConfig({
  schema: "./src/schema.ts",
  dialect: "postgresql",
  out: "./migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  schemaFilter: ["public", "auth"],
});
