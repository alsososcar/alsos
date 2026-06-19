import type { Project } from "./types"

export const sebIntegrasjon: Project = {
  slug: "seb-integrasjon",
  title: "Safe Exam Browser-integrasjon",
  summary:
    "Konfigurasjon og integrasjon av Safe Exam Browser for sikre digital eksamener.",
  description:
    "Implementering av Safe Exam Browser (SEB) for digital eksamen i utdanningssektoren. Løsningen omfatter generering av SEB-konfigurasjonsfiler, sikker oppstart av eksamensmiljø, og validering av at elevene kjører godkjent klient. Integrert med eksisterende læringsplattform for sømløs eksamensflyt fra innlogging til innlevering.",
  category: "integration",
  tags: ["SEB", "Eksamen", "Sikkerhet", "Utdanning"],
  year: "2025",
  role: "Integrasjonsutvikler",
  facts: [
    { label: "Verktøy", value: "Safe Exam Browser 3.x" },
    { label: "Konfigurasjon", value: "SEB .seb-filer" },
    { label: "Sikkerhet", value: "URL-filter, kiosk-modus" },
    { label: "Integrasjon", value: "LMS / eksamensportal" },
    { label: "Leveranse", value: "Komplett eksamensflyt" },
  ],
  images: [
    {
      id: 4,
      alt: "SEB-konfigurasjonsoversikt",
    },
    {
      id: 5,
      alt: "Eksamensmiljø i Safe Exam Browser",
    },
    {
      id: 6,
      alt: "Flytdiagram for eksamensoppstart",
    },
  ],
  featured: true,
}
