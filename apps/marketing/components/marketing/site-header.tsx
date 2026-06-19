"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "lucide-react"

import { Button } from "@alsos/ui/components/button"
import { cn } from "@alsos/ui/lib/utils"

function SiteHeader() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-sm font-semibold tracking-widest uppercase"
        >
          Oscar Krokeide Alsos
        </Link>

        <nav className="flex items-center gap-6">
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
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Bytt tema"
          >
            <SunIcon className={cn("size-4", resolvedTheme === "dark" && "hidden")} />
            <MoonIcon
              className={cn("size-4", resolvedTheme !== "dark" && "hidden")}
            />
          </Button>
        </nav>
      </div>
    </header>
  )
}

export { SiteHeader }
