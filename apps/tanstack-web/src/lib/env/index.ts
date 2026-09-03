import { sharedServerSchema } from "@alsos/env";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  server: {
    ...sharedServerSchema.pick({
      APP_URL_MARKETING: true,
      APP_URL_MEDIA: true,
      DATABASE_URL: true,
    }).shape,
  },
  runtimeEnv: process.env,
});
