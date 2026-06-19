import { defaultLocale } from "@alsos/utils/locales";
import { NextRequest, NextResponse } from "next/server";
import { LOCALE_COOKIE } from "./i18n/request";
import { env } from "./lib/env";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  if (!request.cookies.get(LOCALE_COOKIE)?.value) {
    response.cookies.set(LOCALE_COOKIE, defaultLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
      domain: `.${env.DOMAIN_ROOT}`,
      secure: !env.UNSECURE_COOKIE,
      httpOnly: true,
    });
  }

  return response;
}
