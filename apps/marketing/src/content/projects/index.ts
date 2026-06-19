import { marketingPortal } from "./marketing-portal"
import { sebIntegrasjon } from "./seb-integrasjon"
import { skoleDatabase } from "./skole-database"
import { udirKunnskapsloftet } from "./udir-kunnskapsloftet"
import type { Project } from "./types"

export const projects: Project[] = [
  marketingPortal,
  sebIntegrasjon,
  udirKunnskapsloftet,
  skoleDatabase,
]

export type { Project, ProjectCategory, ProjectFact, ProjectImage, ProjectLink } from "./types"
