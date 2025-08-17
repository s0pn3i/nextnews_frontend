export function getSiteUrl(): string {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const url = env && env.length > 0 ? env : "http://localhost:3000";
  return url.replace(/\/$/, "");
}


