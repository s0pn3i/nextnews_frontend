import type { Section } from "./types";

type ColorSet = {
  text: string;
  badgeText: string;
  badgeBg: string;
  border: string;
  bgSoft: string;
  gradientFrom: string;
  gradientTo: string;
};

// 섹션별 컬러 팔레트 (Tailwind 클래스). 문자열은 고정이라 퍼지에 안전합니다.
export const SECTION_COLORS: Record<Section, ColorSet> = {
  politics: {
    text: "text-blue-700",
    badgeText: "text-blue-700",
    badgeBg: "bg-blue-100",
    border: "border-blue-500",
    bgSoft: "bg-blue-50",
    gradientFrom: "from-blue-500",
    gradientTo: "to-indigo-500",
  },
  business: {
    text: "text-emerald-700",
    badgeText: "text-emerald-700",
    badgeBg: "bg-emerald-100",
    border: "border-emerald-500",
    bgSoft: "bg-emerald-50",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-teal-500",
  },
  industry: {
    text: "text-amber-700",
    badgeText: "text-amber-700",
    badgeBg: "bg-amber-100",
    border: "border-amber-500",
    bgSoft: "bg-amber-50",
    gradientFrom: "from-amber-500",
    gradientTo: "to-orange-500",
  },
  society: {
    text: "text-rose-700",
    badgeText: "text-rose-700",
    badgeBg: "bg-rose-100",
    border: "border-rose-500",
    bgSoft: "bg-rose-50",
    gradientFrom: "from-rose-500",
    gradientTo: "to-pink-500",
  },
  local: {
    text: "text-teal-700",
    badgeText: "text-teal-700",
    badgeBg: "bg-teal-100",
    border: "border-teal-500",
    bgSoft: "bg-teal-50",
    gradientFrom: "from-teal-500",
    gradientTo: "to-cyan-500",
  },
  world: {
    text: "text-violet-700",
    badgeText: "text-violet-700",
    badgeBg: "bg-violet-100",
    border: "border-violet-500",
    bgSoft: "bg-violet-50",
    gradientFrom: "from-violet-500",
    gradientTo: "to-fuchsia-500",
  },
  culture: {
    text: "text-orange-700",
    badgeText: "text-orange-700",
    badgeBg: "bg-orange-100",
    border: "border-orange-500",
    bgSoft: "bg-orange-50",
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-500",
  },
  sports: {
    text: "text-green-700",
    badgeText: "text-green-700",
    badgeBg: "bg-green-100",
    border: "border-green-500",
    bgSoft: "bg-green-50",
    gradientFrom: "from-green-500",
    gradientTo: "to-emerald-500",
  },
  health: {
    text: "text-lime-700",
    badgeText: "text-lime-700",
    badgeBg: "bg-lime-100",
    border: "border-lime-500",
    bgSoft: "bg-lime-50",
    gradientFrom: "from-lime-500",
    gradientTo: "to-green-500",
  },
  entertainment: {
    text: "text-fuchsia-700",
    badgeText: "text-fuchsia-700",
    badgeBg: "bg-fuchsia-100",
    border: "border-fuchsia-500",
    bgSoft: "bg-fuchsia-50",
    gradientFrom: "from-fuchsia-500",
    gradientTo: "to-pink-500",
  },
};

export function sectionColor(section: Section): ColorSet {
  return SECTION_COLORS[section] ?? SECTION_COLORS.politics;
}
