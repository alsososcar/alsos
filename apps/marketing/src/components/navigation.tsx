"use client";

import { useExtracted } from "next-intl";
import Link from "next/link";

export default function Navigation() {
  const t = useExtracted();

  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-border bg-background px-6 backdrop-blur-sm">
      <Link
        href="/"
        className="font-heading text-sm font-semibold tracking-widest uppercase"
      >
        {t("Oscar Krokeide Alsos")}
      </Link>

      <nav className="flex items-center gap-6">
        <Link
          href="/#prosjekter"
          className="text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          {t("Prosjekter")}
        </Link>
        <Link
          href="/#kontakt"
          className="text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
        >
          {t("Kontakt")}
        </Link>
      </nav>
    </header>
  );
}
