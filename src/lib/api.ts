import type {
  Article,
  ArticleListResponse,
  Section,
  Subsection,
  SortBy,
} from "./types";

const BASE_URL = (() => {
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!url) {
    throw new Error(
      "환경변수 NEXT_PUBLIC_API_BASE_URL 가 설정되어 있지 않습니다."
    );
  }
  return url;
})();

type FetchOptions = {
  limit?: number;
  offset?: number;
  sortBy?: SortBy;
  section?: Section;
  subsection?: Subsection;
};

type CacheOptions = {
  revalidate?: number;
  tags?: string[];
};

export async function fetchArticles(
  options: FetchOptions = {},
  cache: CacheOptions = {}
): Promise<ArticleListResponse> {
  const url = new URL("/articles", BASE_URL);
  const { limit, offset, sortBy, section, subsection } = options;
  if (typeof limit === "number") url.searchParams.set("limit", String(limit));
  if (typeof offset === "number")
    url.searchParams.set("offset", String(offset));
  if (sortBy) url.searchParams.set("sortBy", sortBy);
  if (section) url.searchParams.set("section", section);
  if (subsection) url.searchParams.set("subsection", subsection);

  const res = await fetch(url.toString(), {
    next: { revalidate: cache.revalidate ?? 30, tags: cache.tags },
  });
  if (!res.ok) throw new Error(`기사 목록 로드 실패: ${res.status}`);
  const data = (await res.json()) as ArticleListResponse;
  return data;
}

export async function fetchArticleById(
  id: string | number,
  cache: CacheOptions = {}
): Promise<Article> {
  const url = new URL(`/articles/${id}`, BASE_URL);
  const res = await fetch(url.toString(), {
    next: {
      revalidate: cache.revalidate ?? 300,
      tags: cache.tags ?? [`article:${id}`],
    },
  });
  if (!res.ok) throw new Error(`기사 로드 실패: ${res.status}`);
  const data = await res.json();
  return data as Article;
}
