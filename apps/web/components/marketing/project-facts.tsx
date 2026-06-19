import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@alsos/ui/components/card"
import { Separator } from "@alsos/ui/components/separator"
import type { ProjectFact } from "@/content/projects/types"

interface ProjectFactsProps {
  facts: ProjectFact[]
  year: string
  role: string
}

function ProjectFacts({ facts, year, role }: ProjectFactsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Fakta</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between gap-4">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            År
          </span>
          <span className="text-sm">{year}</span>
        </div>
        <div className="flex justify-between gap-4">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
            Rolle
          </span>
          <span className="text-right text-sm">{role}</span>
        </div>
        <Separator />
        <dl className="space-y-3">
          {facts.map((fact) => (
            <div key={fact.label} className="flex justify-between gap-4">
              <dt className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="text-right text-sm">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  )
}

export { ProjectFacts }
