"use server";

import { locales, type Locale } from "@alsos/utils/locales";
import { hasLocale } from "next-intl";
import { cookies } from "next/headers";
import { LOCALE_COOKIE } from "./request";

export async function setUserLocale(locale: Locale) {
  if (!hasLocale(locales, locale)) return;

  const cookieStore = await cookies();
  cookieStore.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
}
