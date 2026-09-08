import { sharedServerSchema } from "@alsos/env";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    DATABASE_URL: sharedServerSchema.shape.DATABASE_URL,
  },
  runtimeEnv: process.env,

  emptyStringAsUndefined: true,
});
