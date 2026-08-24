import { supabase } from "./supabase";
import { defaultProductsList } from "@/data/products";

const BASE_URL = "https://paratechindustries.com";

export function formatLastmodDate(val) {
  if (!val) return new Date().toISOString().split("T")[0];
  const d = new Date(val);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

/**
 * Fetches all URLs for the sitemap (static pages, products, blogs).
 */
export async function getSitemapData() {
  const today = new Date().toISOString().split("T")[0];

  // 1. Static Core Pages
  const staticPages = [
    { url: `${BASE_URL}/`, lastmod: today, priority: 1.0 },
    { url: `${BASE_URL}/aboutus`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/companyprofile`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/contactus`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/catalogue.pdf`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/industriesweserve`, lastmod: today, priority: 0.8 },
  ];

  // 2. Fetch Products
  let products = [];
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (!error && data && data.length > 0) {
      products = data;
    } else {
      products = defaultProductsList;
    }
  } catch (e) {
    console.error("Error fetching products for sitemap:", e);
    products = defaultProductsList;
  }

  const productEntries = (products || []).map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastmod: formatLastmodDate(p.updated_at || p.created_at || today),
    priority: 0.8,
  }));

  // 3. Fetch Blogs
  let blogs = [];
  try {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("id", { ascending: true });

    if (!error && data) {
      blogs = data;
    }
  } catch (e) {
    console.error("Error fetching blogs for sitemap:", e);
  }

  const blogEntries = (blogs || []).map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastmod: formatLastmodDate(b.updated_at || b.created_at || b.date || today),
    priority: 0.8,
  }));

  return [...staticPages, ...productEntries, ...blogEntries];
}

/**
 * Builds standard XML sitemap string from entries.
 */
export function buildSitemapXml(entries) {
  const xmlItems = entries
    .map(
      (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>
`;
}
