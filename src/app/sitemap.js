import { getSitemapData } from "@/lib/sitemap-generator";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function sitemap() {
  const entries = await getSitemapData();

  return entries.map((item) => ({
    url: item.url,
    lastModified: item.lastmod,
    changeFrequency: item.priority >= 0.9 ? "weekly" : "daily",
    priority: item.priority,
  }));
}
