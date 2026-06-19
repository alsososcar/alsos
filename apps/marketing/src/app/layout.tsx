import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/marketing/site-footer";
import Navigation from "@/components/navigation";
import { ThemeProvider } from "@/components/theme-provider";
import "@/globals.css";
import { cn } from "@alsos/ui/lib/utils";
import { NextIntlClientProvider } from "next-intl";
import { getExtracted, getLocale } from "next-intl/server";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getExtracted();

  return {
    title: {
      default: t("Oscar Krokeide Alsos - Portfolio"),
      template: "%s",
    },
    description: t(
      "Portfolio for Oscar Krokeide Alsos — Fagbrev i IT-Utvikling. Prosjekter innen webutvikling, integrasjoner, API-er og databasesystemer."
    ),
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="mx-auto flex min-h-svh w-250 flex-col">
        <NextIntlClientProvider>
          <ThemeProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
