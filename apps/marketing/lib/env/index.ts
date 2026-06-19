import { sharedServerSchema } from "@alsos/env";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    ...sharedServerSchema.shape,
  },
  experimental__runtimeEnv: process.env,
});
