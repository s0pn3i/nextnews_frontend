import Link from "next/link";
import { SECTION_LABEL_KO, SUBSECTION_LABEL_KO } from "@/lib/labels";
import { sectionColor } from "@/lib/colors";
import type { Article } from "@/lib/types";

type Props = {
  article: Article;
  size?: "md" | "lg";
  className?: string;
  clampLines?: number;
};

export default function ArticleCard({
  article,
  size = "md",
  className = "",
  clampLines = 2,
}: Props) {
  const c = sectionColor(article.section);
  return (
    <article
      className={`card card-hover p-5 text-black border ${c.border} border-l-4 korean-keep ${className}`}
    >
      <div className="text-xs muted mb-2 flex items-center gap-2 korean-keep">
        <span
          className={`px-2 py-0.5 rounded-full ${c.badgeBg} ${c.badgeText}`}
        >
          {SECTION_LABEL_KO[article.section]}
        </span>
        <span className="text-gray-300">|</span>
        <span>{SECTION_LABEL_KO[article.section]}</span>
        <span className="mx-1">·</span>
        <span>{SUBSECTION_LABEL_KO[article.subsection]}</span>
        <span className="mx-1">·</span>
        <time dateTime={article.createdAt}>
          {new Date(article.createdAt).toLocaleDateString("ko-KR", {
            month: "2-digit",
            day: "2-digit",
          })}
        </time>
      </div>
      <h3
        className={`${
          size === "lg" ? "text-2xl md:text-3xl" : "text-xl"
        } font-bold mb-2 leading-snug korean-keep`}
      >
        <Link href={`/articles/${article.id}`} className="hover:underline">
          {article.title}
        </Link>
      </h3>
      <p
        className={`text-sm text-gray-700 korean-keep ${
          clampLines === 0 ? "" : `line-clamp-${clampLines}`
        }`}
      >
        {article.content}
      </p>
    </article>
  );
}
