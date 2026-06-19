import { ALLOWED_COUNTRIES } from "@alsos/utils/countries";
import { defaultLocale } from "@alsos/utils/locales";
import { geolocation } from "@vercel/functions";
import { NextRequest, NextResponse } from "next/server";
import { LOCALE_COOKIE } from "./i18n/request";
import { env } from "./lib/env";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  // Do not allow users outside scandinavia
  if (process.env.NODE_ENV === "production") {
    const { country } = geolocation(request);
    if (country && !ALLOWED_COUNTRIES.has(country)) {
      return new NextResponse("Not available in your region", { status: 403 });
    }
  }

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
