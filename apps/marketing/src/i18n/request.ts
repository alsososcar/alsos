import { defaultLocale, locales, timeZone } from "@alsos/utils/locales";
import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const LOCALE_COOKIE = "locale";

export default getRequestConfig(async () => {
  const cookieLocale = (await cookies()).get(LOCALE_COOKIE)?.value;
  const locale = hasLocale(locales, cookieLocale)
    ? cookieLocale
    : defaultLocale;

  return {
    locale: locale,
    messages: (await import(`@/i18n/messages/${locale}.po`)).default,
    timeZone: timeZone,
  };
});
