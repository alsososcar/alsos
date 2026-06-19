import type { Project } from "./types"

export const udirKunnskapsloftet: Project = {
  slug: "udir-kunnskapsloftet",
  title: "UDIR Kunnskapsløftet API",
  summary:
    "Datahenting og normalisering fra UDIR sitt Kunnskapsløftet API for læreplaner og kompetansemål.",
  description:
    "En dataintegrasjon som henter strukturert innhold fra UDIR sitt offentlige Kunnskapsløftet API. Data normaliseres til et internt format som kan brukes i læringsapplikasjoner, søk og rapportering. Løsningen håndterer inkrementelle oppdateringer, caching og feilhåndtering for robust drift mot eksternt API.",
  category: "api",
  tags: ["UDIR", "REST API", "Data", "Læreplan"],
  year: "2025",
  role: "Backend-utvikler",
  facts: [
    { label: "Kilde", value: "UDIR Kunnskapsløftet API" },
    { label: "Format", value: "JSON / REST" },
    { label: "Caching", value: "Inkrementell synk" },
    { label: "Bruk", value: "Læreplan og kompetansemål" },
    { label: "Leveranse", value: "Normalisert datasett" },
  ],
  images: [
    {
      src: "/projects/udir-kunnskapsloftet/api.svg",
      alt: "API-integrasjon mot UDIR",
    },
    {
      src: "/projects/udir-kunnskapsloftet/data.svg",
      alt: "Normalisert datastruktur for læreplaner",
    },
    {
      src: "/projects/udir-kunnskapsloftet/sync.svg",
      alt: "Synkroniseringsflyt med caching",
    },
  ],
  links: [
    {
      label: "UDIR API-dokumentasjon",
      href: "https://www.udir.no/om-udir/data-og-api/",
    },
  ],
  featured: true,
}
