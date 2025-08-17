import Link from "next/link";
import type { Article } from "@/lib/types";

type Props = {
  article: Article;
};

export default function ArticleRow({ article }: Props) {
  return (
    <article className="py-4">
      <Link href={`/articles/${article.id}`} className="group block">
        <h3 className="korean-keep text-base sm:text-lg font-semibold leading-snug group-hover:text-[var(--primary)]">
          {article.title}
        </h3>
        <p className="mt-1 text-sm text-gray-700 line-clamp-2 korean-keep">
          {article.content}
        </p>
        <div className="mt-1.5 text-xs text-gray-500 tabular-nums">
          {new Date(article.createdAt).toLocaleString("ko-KR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </Link>
    </article>
  );
}
