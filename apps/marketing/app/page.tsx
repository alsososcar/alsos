import { CapabilitiesSection } from "@/components/marketing/capabilities-section"
import { ContactCta } from "@/components/marketing/contact-cta"
import { HeroSection } from "@/components/marketing/hero-section"
import { ProjectGrid } from "@/components/marketing/project-grid"
import { getFeaturedProjects } from "@/lib/projects"

export default function Page() {
  const projects = getFeaturedProjects()

  return (
    <>
      <HeroSection />
      <CapabilitiesSection />
      <section id="prosjekter" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Portefølje
        </p>
        <h2 className="mt-2 font-heading text-2xl font-semibold tracking-wider uppercase">
          Utvalgte prosjekter
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Prosjekter fra læretiden og eget arbeid — klikk for bilder, tekniske
          detaljer og mer informasjon.
        </p>
        <div className="mt-10">
          <ProjectGrid projects={projects} />
        </div>
      </section>
      <ContactCta />
    </>
  )
}
