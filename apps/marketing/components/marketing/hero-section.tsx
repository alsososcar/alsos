import Link from "next/link"
import { ArrowDownIcon } from "lucide-react"

import { Button } from "@alsos/ui/components/button"

function HeroSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
        IT-lærling · Fagprøve bestått
      </p>
      <h1 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-wider uppercase sm:text-5xl">
        Oscar Krokeide Alsos
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
        Jeg har vært IT-lærling i to år og har bestått fagprøven. Her samler
        jeg prosjekter jeg har jobbet med — fra nettsider og Safe Exam
        Browser-integrasjon til datahenting fra offentlige API-er og egne
        databasesystemer.
      </p>
      <div className="mt-10">
        <Button render={<Link href="/#prosjekter" />}>
          Se prosjekter
          <ArrowDownIcon data-icon="inline-end" />
        </Button>
      </div>
    </section>
  )
}

export { HeroSection }
