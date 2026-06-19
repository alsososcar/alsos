import Link from "next/link"

import { Separator } from "@alsos/ui/components/separator"

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-heading text-sm font-semibold tracking-widest uppercase">
              Oscar Krokeide Alsos
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              IT-lærling med bestått fagprøve — portfolio og prosjekter.
            </p>
          </div>
          <nav className="flex gap-6">
            <Link
              href="/#prosjekter"
              className="text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              Prosjekter
            </Link>
            <Link
              href="/#kontakt"
              className="text-xs font-semibold tracking-widest text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              Kontakt
            </Link>
          </nav>
        </div>
        <Separator className="my-6" />
        <p className="font-mono text-xs text-muted-foreground">
          © {year} Oscar Krokeide Alsos. Trykk <kbd className="rounded border border-border px-1">d</kbd> for
          å bytte tema.
        </p>
      </div>
    </footer>
  )
}

export { SiteFooter }
