import Link from "next/link";
import { SECTION_LABEL_KO, SUBSECTION_LABEL_KO } from "@/lib/labels";
import type { Section, Subsection } from "@/lib/types";

export function SubsectionChips({
  items,
  section,
  active,
}: {
  items: Subsection[];
  section: Section;
  active?: Subsection;
}) {
  if (!items?.length) return null;

  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-[var(--primary)] whitespace-nowrap flex-shrink-0">
          <Link href={`/?section=${section}`} className="hover:text-black">
            {SECTION_LABEL_KO[section]}
          </Link>
        </h2>
        <ul className="flex flex-wrap gap-x-4 gap-y-2 text-gray-700 text-base md:text-lg md:flex-1 min-w-0">
          {items.map((sub) => {
            const isActive = active === sub;
            return (
              <li key={sub}>
                <Link
                  href={`/?section=${section}&subsection=${sub}`}
                  className={`pb-1 text-sm ${
                    isActive
                      ? "font-semibold text-black"
                      : "text-gray-700 hover:text-black"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {SUBSECTION_LABEL_KO[sub]}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
