import Link from "next/link";
import Logo from "@/components/Logo";
import { SECTION_LABEL_KO } from "@/lib/labels";
import type { Section } from "@/lib/types";

const sections: Section[] = [
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

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 sticky top-0 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-x-3">
        <Logo size={200} />
        <div className="overflow-x-auto">
          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-lg min-w-max">
            {sections.map((s) => (
              <Link
                key={s}
                href={`/?section=${s}`}
                className="whitespace-nowrap text-gray-800 hover:text-[var(--primary)]"
              >
                {SECTION_LABEL_KO[s]}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
