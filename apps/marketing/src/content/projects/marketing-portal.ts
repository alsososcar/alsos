import type { Project } from "./types"

export const marketingPortal: Project = {
  slug: "marketing-portal",
  title: "Marketing-portal",
  summary:
    "Responsiv marketing-side bygget med Next.js og delt designsystem for rask iterasjon.",
  description:
    "En moderne marketing-portal som viser portefølje, kompetanse og prosjekter. Siden er bygget som en del av et monorepo med delt UI-pakke, slik at design og komponenter kan gjenbrukes på tvers av apper. Fokus på ytelse, tilgjengelighet og enkelt vedlikehold av prosjektinnhold via statisk data.",
  category: "web",
  tags: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
  year: "2026",
  role: "Fullstack-utvikler",
  facts: [
    { label: "Plattform", value: "Web" },
    { label: "Rammeverk", value: "Next.js 16" },
    { label: "Styling", value: "Tailwind CSS 4 + shadcn" },
    { label: "Deploy", value: "Vercel / portless dev" },
    { label: "Leveranse", value: "Responsiv marketing-side" },
  ],
  images: [
    {
      id: 1,
      alt: "Oversikt over marketing-portalen med hero-seksjon",
    },
    {
      id: 2,
      alt: "Prosjektgrid med kort og tags",
    },
    {
      id: 3,
      alt: "Prosjektdetaljside med bildegalleri",
    },
  ],
  links: [{ label: "Live demo", href: "https://marketing.alsos.localhost" }],
  featured: true,
}
