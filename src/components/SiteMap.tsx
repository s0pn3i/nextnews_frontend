import Link from "next/link";
import { SECTION_LABEL_KO, SUBSECTION_LABEL_KO } from "@/lib/labels";
import type { Section, Subsection } from "@/lib/types";
import { SECTION_TO_SUBSECTIONS } from "@/lib/section-map";

const SECTION_ORDER: Section[] = [
  "politics",
  "business",
  "industry",
  "society",
  "local",
  "world",
  "culture",
  "sports",
  "health",
  "entertainment",
];

export default function SiteMap() {
  return (
    <div className="bg-gray-50 border-t mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {SECTION_ORDER.map((section) => (
          <div key={section}>
            <h4 className="font-bold mb-3">
              <Link href={`/?section=${section}`} className="hover:text-black">
                {SECTION_LABEL_KO[section]}
              </Link>
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              {(SECTION_TO_SUBSECTIONS[section] as Subsection[]).map((sub) => (
                <li key={sub}>
                  <Link
                    href={`/?section=${section}&subsection=${sub}`}
                    className="hover:underline"
                  >
                    {SUBSECTION_LABEL_KO[sub]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
