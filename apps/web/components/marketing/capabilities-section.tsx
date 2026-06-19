import { DatabaseIcon, GlobeIcon, PlugIcon, ServerIcon } from "lucide-react"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@alsos/ui/components/card"

const capabilities = [
  {
    icon: GlobeIcon,
    title: "Webutvikling",
    description:
      "Moderne nettsider og portaler med Next.js, responsivt design og delte designsystemer.",
  },
  {
    icon: PlugIcon,
    title: "Integrasjon",
    description:
      "Kobling av systemer som Safe Exam Browser, LMS og tredjepartstjenester.",
  },
  {
    icon: ServerIcon,
    title: "API og data",
    description:
      "Henting, normalisering og caching av data fra offentlige API-er som UDIR.",
  },
  {
    icon: DatabaseIcon,
    title: "Database",
    description:
      "Design av skjema, migrasjoner og API-er med PostgreSQL og moderne ORM-er.",
  },
] as const

function CapabilitiesSection() {
  return (
    <section className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Kompetanse
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-wider uppercase">
          Hva jeg jobber med
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {capabilities.map((capability) => (
            <Card key={capability.title} size="sm">
              <CardHeader>
                <capability.icon className="mb-2 size-5 text-primary" />
                <CardTitle>{capability.title}</CardTitle>
                <CardDescription>{capability.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { CapabilitiesSection }
