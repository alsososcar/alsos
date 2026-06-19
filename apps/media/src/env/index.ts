import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    DOMAIN_ROOT: z.string().min(1),
  },
  runtimeEnv: {
    DOMAIN_ROOT: process.env.DOMAIN_ROOT,
  },
  emptyStringAsUndefined: true,
});
