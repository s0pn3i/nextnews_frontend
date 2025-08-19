import Link from "next/link";
import type { Article } from "@/lib/types";

export default function SidebarMostViewed({
  items,
  title = "많이 본 기사",
}: {
  items: Article[];
  title?: string;
}) {
  if (!items?.length) return null;
  return (
    <aside className="hidden sm:block card p-0 overflow-hidden">
      <div className="px-4 py-2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold">
        {title}
      </div>
      <div className="p-4">
        <ol className="space-y-3">
          {items.map((a, idx) => (
            <li key={a.id} className="flex gap-3 items-start">
              <span className="text-gray-400 tabular-nums w-6 shrink-0 text-right leading-6 mt-0.5">
                {idx + 1}
              </span>
              <Link
                href={`/articles/${a.id}`}
                className="hover:underline leading-6 line-clamp-2"
              >
                {a.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
