import Link from "next/link";
import type { Article } from "@/lib/types";
import { SECTION_LABEL_KO, SUBSECTION_LABEL_KO } from "@/lib/labels";

export default function Hero({ article }: { article: Article | null }) {
  if (!article) return null;
  return (
    <section className="py-6">
      <div className="space-y-3 card p-6">
        <div className="h-1 w-14 bg-[var(--accent)] rounded" />
        <div className="text-xs muted">
          {SECTION_LABEL_KO[article.section]} ·{" "}
          {SUBSECTION_LABEL_KO[article.subsection]}
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
          <Link href={`/articles/${article.id}`} className="link">
            {article.title}
          </Link>
        </h2>
        <p className="text-gray-700 md:text-lg line-clamp-4 korean-keep">
          {article.content}
        </p>
        <div className="text-xs muted">
          {new Date(article.createdAt).toLocaleString("ko-KR")}
        </div>
      </div>
    </section>
  );
}
