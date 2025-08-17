export type Section =
  | "politics"
  | "business"
  | "industry"
  | "society"
  | "local"
  | "world"
  | "culture"
  | "sports"
  | "health"
  | "entertainment";

export type Subsection =
  | "presidential-office"
  | "assembly"
  | "diplomacy"
  | "defense"
  | "finance"
  | "real-estate"
  | "jobs-startup"
  | "consumer"
  | "electronics"
  | "heavy-chem"
  | "automobile"
  | "construction"
  | "energy-resources"
  | "tech-science"
  | "game"
  | "retail-service"
  | "smb-venture"
  | "bio-health"
  | "agri-livestock"
  | "marine-fishery"
  // Local (extended)
  | "gyeonggi"
  | "ulsan"
  | "gyeongnam"
  | "daegu-gyeongbuk"
  | "gwangju-jeonnam"
  | "jeonbuk"
  | "daejeon-chungnam-sejong"
  | "chungbuk"
  | "gangwon"
  | "gwangju"
  | "busan"
  | "incheon"
  | "daegu"
  | "jeju"
  | "us-na"
  | "cn"
  | "jp"
  | "asia-au"
  | "eu"
  | "latam"
  | "mea"
  | "igo"
  | "incident"
  | "court-prosecution"
  | "education"
  | "welfare-labor"
  | "environment-climate"
  | "women-children"
  | "overseas-korean"
  | "multicultural"
  | "books-lit"
  | "comics-webtoon"
  | "religion"
  | "performance-exhibition"
  | "academia-heritage"
  | "media"
  | "travel-leisure"
  | "life"
  | "broadcast"
  | "movie"
  | "kpop"
  | "global-ent"
  | "baseball"
  | "football"
  | "basketball-volleyball"
  | "golf"
  // Health
  | "health-note"
  | "weekly-health";

export interface Article {
  id: number;
  title: string;
  content: string;
  views: number;
  section: Section;
  subsection: Subsection;
  createdAt: string;
  updatedAt: string;
}

export type SortBy = "latest" | "views";

export interface ArticleListResponse {
  items: Article[];
  total: number;
  offset: number;
  limit: number;
  totalPages?: number;
}
