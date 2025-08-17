import type { Section, Subsection } from "./types";

export const SECTION_TO_SUBSECTIONS: Record<Section, Subsection[]> = {
  politics: ["presidential-office", "assembly", "diplomacy", "defense"],
  business: ["finance", "real-estate", "jobs-startup", "consumer"],
  industry: [
    "electronics",
    "heavy-chem",
    "automobile",
    "construction",
    "energy-resources",
    "tech-science",
    "game",
    "retail-service",
    "smb-venture",
    "bio-health",
    "agri-livestock",
    "marine-fishery",
  ],
  society: [
    "incident",
    "court-prosecution",
    "education",
    "welfare-labor",
    "environment-climate",
    "women-children",
    "overseas-korean",
    "multicultural",
  ],
  local: [
    "gyeonggi",
    "ulsan",
    "gyeongnam",
    "daegu-gyeongbuk",
    "gwangju-jeonnam",
    "jeonbuk",
    "daejeon-chungnam-sejong",
    "chungbuk",
    "gangwon",
    "gwangju",
    "busan",
    "incheon",
    "daegu",
    "jeju",
  ],
  world: ["us-na", "cn", "jp", "asia-au", "eu", "latam", "mea", "igo"],
  culture: [
    "books-lit",
    "comics-webtoon",
    "religion",
    "performance-exhibition",
    "academia-heritage",
    "media",
    "travel-leisure",
    "life",
  ],
  sports: ["baseball", "football", "basketball-volleyball", "golf"],
  health: ["health-note", "weekly-health"],
  entertainment: ["broadcast", "movie", "kpop", "global-ent"],
};

export function getSubsectionsForSection(section?: Section): Subsection[] {
  if (!section) return [];
  return SECTION_TO_SUBSECTIONS[section] ?? [];
}
