import { fetchArticles } from "@/lib/api";
import ArticleCard from "@/components/ArticleCard";
import ArticleRow from "@/components/ArticleRow";
import Hero from "@/components/Hero";
import SidebarMostViewed from "@/components/SidebarMostViewed";
import AdSlot from "@/components/AdSlot";
import { SubsectionChips } from "@/components/SectionStrip";
import Pagination from "@/components/Pagination";
import { getSubsectionsForSection } from "@/lib/section-map";
import { SECTION_LABEL_KO } from "@/lib/labels";
import type {
  Section,
  Subsection,
  SortBy,
  ArticleListResponse,
} from "@/lib/types";

type SearchParams = {
  section?: Section;
  subsection?: Subsection;
  sortBy?: SortBy;
  limit?: string;
  offset?: string;
};

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const sp = await searchParams;
  const limit = 20;
  const offset = Number(sp?.offset ?? 0);

  const heroRes = await fetchArticles(
    {
      limit: 1,
      sortBy: "views",
      section: sp?.section,
      subsection: undefined,
    },
    {
      revalidate: 600,
      tags: [sp?.section ? `articles:hero:${sp.section}` : `articles:hero:all`],
    }
  );
  const hero = heroRes.items[0] ?? null;

  const listRes: ArticleListResponse = await fetchArticles(
    {
      limit,
      offset,
      sortBy: sp?.section ? "latest" : "views",
      section: sp?.section,
      subsection: sp?.subsection,
    },
    {
      revalidate: sp?.section ? 15 : 15,
      tags: [
        "articles:list",
        sp?.section
          ? `articles:list:section:${sp.section}`
          : "articles:list:all",
        sp?.subsection ? `articles:list:sub:${sp.subsection}` : undefined,
      ].filter(Boolean) as string[],
    }
  );
  const { items, total, totalPages } = listRes;
  const rest = items.filter((a) => (hero ? a.id !== hero.id : true));
  const subs = getSubsectionsForSection(sp?.section);

  const hasSection = Boolean(sp?.section);

  return (
    <div className="min-h-screen bg-background text-foreground py-4">
      <Hero article={hero} />
      {hasSection && subs.length > 0 && (
        <div className="my-6">
          <SubsectionChips
            items={subs}
            section={sp!.section!}
            active={sp?.subsection}
          />
        </div>
      )}
      {hasSection ? (
        <div className="grid gap-8 md:grid-cols-[2fr_1fr] xl:grid-cols-[2.2fr_1fr]">
          <main>
            <h2 className="sr-only">최신기사</h2>
            <div className="h-[2px] bg-[var(--primary)]/70 my-2" />
            {rest.length === 0 ? (
              <div className="text-gray-500">표시할 기사가 없습니다.</div>
            ) : (
              <div className="divide-y divide-black/5">
                {rest.map((a) => (
                  <ArticleRow key={a.id} article={a} />
                ))}
              </div>
            )}
            <div className="my-6">
              <AdSlot height={120} />
            </div>
            <Pagination total={total} limit={limit} totalPages={totalPages} />
          </main>
          <aside className="space-y-6 hidden md:block">
            <AdSlot height={250} />
            <SidebarMostViewed
              title={`${SECTION_LABEL_KO[sp!.section!]} 많이 본 기사`}
              items={(
                await fetchArticles(
                  { sortBy: "views", section: sp!.section! },
                  { revalidate: 60, tags: [`articles:top:${sp!.section!}`] }
                )
              ).items.slice(0, 5)}
            />
            <AdSlot height={250} />
          </aside>
        </div>
      ) : (
        <div className="grid gap-8">
          <main>
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 auto-rows-fr">
              {rest.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
            <div className="my-8">
              <AdSlot height={120} />
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
