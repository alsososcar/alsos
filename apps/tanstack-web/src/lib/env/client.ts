import { appsClientViteSchema } from "@alsos/env";
import { createEnv } from "@t3-oss/env-core";

export const env = createEnv({
  client: {
    ...appsClientViteSchema.shape,
  },
  clientPrefix: "VITE_",
  runtimeEnv: import.meta.env,
});
