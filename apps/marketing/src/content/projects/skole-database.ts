import type { Project } from "./types"

export const skoleDatabase: Project = {
  slug: "skole-database",
  title: "Skole-database",
  summary:
    "Egen PostgreSQL-database med migrasjoner, API og datamodell for skoleadministrasjon.",
  description:
    "Design og implementering av en dedikert databaseskjema for skoledata — elever, klasser, fag og vurderinger. PostgreSQL brukes som primær datalagring med versjonerte migrasjoner, indekser for ytelse, og et REST-API for frontend-applikasjoner. Løsningen følger prinsipper for dataintegritet, backup og tilgangsstyring.",
  category: "database",
  tags: ["PostgreSQL", "Drizzle", "API", "Migrasjoner"],
  year: "2024",
  role: "Database- og backend-utvikler",
  facts: [
    { label: "Database", value: "PostgreSQL 16" },
    { label: "ORM", value: "Drizzle ORM" },
    { label: "Migrasjoner", value: "Versjonert schema" },
    { label: "API", value: "REST med validering" },
    { label: "Leveranse", value: "Komplett datalag" },
  ],
  images: [
    {
      id: 10,
      alt: "Databaseskjema med tabeller og relasjoner",
    },
    {
      id: 11,
      alt: "API-endepunkter for skoledata",
    },
    {
      id: 12,
      alt: "Migrasjonsflyt for databaseskjema",
    },
  ],
  featured: true,
}
