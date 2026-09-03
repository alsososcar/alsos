import { z } from "zod";

export const appsSchema = z.object({
  APP_URL_MARKETING: z.url(),
  APP_URL_MEDIA: z.url(),
});

export const appsClientViteSchema = z.object({
  VITE_APP_URL_MARKETING: z.url(),
  VITE_APP_URL_MEDIA: z.url(),
});

export const databaseSchema = z.object({
  DATABASE_URL: z.url(),
});

export const domainRootSchema = z.object({
  DOMAIN_ROOT: z.string().min(1),
});

export const unsecureCookieSchema = z.object({
  UNSECURE_COOKIE: z
    .string()
    .default("false")
    .transform((s, ctx) => {
      const enabled = s !== "false" && s !== "0";
      if (enabled && process.env.NODE_ENV === "production") {
        ctx.addIssue({
          // `"custom"` is the Zod v4 form; `z.ZodIssueCode.custom` is equivalent
          // but `@deprecated` in v4, so prefer the string literal.
          code: "custom",
          message:
            "UNSECURE_COOKIE must not be enabled in production — it disables the Secure cookie attribute.",
        });
        return z.NEVER;
      }
      return enabled;
    }),
});

export const sharedServerSchema = z.object({
  ...appsSchema.shape,
  ...databaseSchema.shape,
  ...domainRootSchema.shape,
  ...unsecureCookieSchema.shape,
});

export type SharedServerEnv = z.infer<typeof sharedServerSchema>;
