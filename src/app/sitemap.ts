import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site";
import { fetchArticles } from "@/lib/api";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = getSiteUrl();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${base}/`,
      changeFrequency: "hourly",
      priority: 1,
      lastModified: new Date(),
    },
  ];

  try {
    const latest = await fetchArticles({ limit: 100, sortBy: "latest" }, { revalidate: 300 });
    for (const a of latest.items) {
      routes.push({
        url: `${base}/articles/${a.id}`,
        changeFrequency: "weekly",
        priority: 0.8,
        lastModified: new Date(a.updatedAt || a.createdAt),
      });
    }
  } catch {
    // API 실패 시 기본 루트만 제공
  }

  return routes;
}


