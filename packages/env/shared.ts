import { z } from "zod";

export const appsSchema = z.object({
  APP_URL_MARKETING: z.url(),
});

export const databaseSchema = z.object({
  DATABASE_URL: z.url(),
});

export const domainRootSchema = z.object({
  DOMAIN_ROOT: z.string().min(1),
});

export const sharedServerSchema = z.object({
  ...appsSchema.shape,
  ...databaseSchema.shape,
  ...domainRootSchema.shape,
});

export type SharedServerEnv = z.infer<typeof sharedServerSchema>;
