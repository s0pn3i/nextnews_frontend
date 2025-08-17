import { fetchArticleById, fetchArticles } from "@/lib/api";
import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site";
import { SECTION_LABEL_KO, SUBSECTION_LABEL_KO } from "@/lib/labels";
import Container from "@/components/Container";
import SidebarMostViewed from "@/components/SidebarMostViewed";
import ArticleMetaBar from "@/components/ArticleMetaBar";

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await fetchArticleById(id, { revalidate: 300 });

  const mostViewed = await fetchArticles(
    { sortBy: "views" },
    { revalidate: 60, tags: ["articles:top:all"] }
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-6">
        <Container>
          <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
            <article>
              <nav className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                {SECTION_LABEL_KO[article.section]} &gt;{" "}
                {SUBSECTION_LABEL_KO[article.subsection]}
              </nav>
              <h1 className="article-title text-3xl md:text-4xl font-extrabold leading-tight tracking-tight mb-2">
                {article.title}
              </h1>
              <ArticleMetaBar createdAt={article.createdAt} />

              <div className="article-body prose max-w-none whitespace-pre-wrap leading-8 text-gray-900 bg-white rounded-md p-6">
                {article.content}
              </div>
            </article>
            <aside className="space-y-6">
              <SidebarMostViewed items={mostViewed.items.slice(0, 5)} />
            </aside>
          </div>
        </Container>
      </main>
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  try {
    const a = await fetchArticleById(id, { revalidate: 300 });
    const site = getSiteUrl();
    const desc = a.content.replace(/\s+/g, " ").slice(0, 120);
    return {
      title: `${a.title} - 넥스트뉴스`,
      description: desc,
      alternates: { canonical: `/articles/${id}` },
      openGraph: {
        type: "article",
        url: `${site}/articles/${id}`,
        title: a.title,
        description: desc,
        siteName: "넥스트뉴스",
        locale: "ko_KR",
      },
      twitter: {
        card: "summary_large_image",
        title: a.title,
        description: desc,
      },
    };
  } catch {
    return { title: "기사 - 넥스트뉴스" };
  }
}
