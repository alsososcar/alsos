export const locales = ["en", "nb", "nn"] as const;
export const defaultLocale = "nb";
export const timeZone = "Europe/Oslo";

export type Locale = (typeof locales)[number];

const LOCALE_CYCLE = ["nb", "en", "nn"] as const satisfies readonly Locale[];

export function getNextLocale(current: Locale): Locale {
  const index = LOCALE_CYCLE.indexOf(current);
  const nextIndex = (index + 1) % LOCALE_CYCLE.length;
  return LOCALE_CYCLE[nextIndex] ?? LOCALE_CYCLE[0];
}
