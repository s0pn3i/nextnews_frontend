import Link from "next/link";
import type { Article } from "@/lib/types";

export default function MiniList({
  items,
  title,
}: {
  items: Article[];
  title: string;
}) {
  if (!items?.length) return null;
  return (
    <section className="space-y-3">
      <h3 className="text-sm font-bold tracking-tight">{title}</h3>
      <ul className="space-y-2">
        {items.slice(0, 4).map((a) => (
          <li key={a.id} className="leading-snug">
            <Link
              href={`/articles/${a.id}`}
              className="hover:underline line-clamp-2"
            >
              {a.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
