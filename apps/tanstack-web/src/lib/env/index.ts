import { sharedServerSchema } from "@alsos/env";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    ...sharedServerSchema.pick({
      DATABASE_URL: true,
    }).shape,
  },
  runtimeEnv: process.env,
});
