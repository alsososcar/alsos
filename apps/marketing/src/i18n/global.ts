import { locales, timeZone } from "@alsos/utils/locales";

declare module "next-intl" {
  interface AppConfig {
    Locale: (typeof locales)[number];
    timeZone: typeof timeZone;
  }
}
