import { Geist, Geist_Mono } from "next/font/google";

import "@alsos/ui/globals.css";
import { cn } from "@alsos/ui/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/theme-provider";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Oscar Krokeide Alsos — Portfolio",
    template: "%s",
  },
  description:
    "Portfolio for Oscar Krokeide Alsos — IT-lærling med bestått fagprøve. Prosjekter innen webutvikling, integrasjoner, API-er og databasesystemer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nb"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="flex min-h-svh flex-col">
        <ThemeProvider>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
