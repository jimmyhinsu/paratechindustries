import { createClient } from "@supabase/supabase-js";
import fs from "fs/promises";
import path from "path";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://igpxtsbqwlavwvlvmyng.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable___-D8XF5VGN71QVsJJUT9w_O73Th1_I";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const BASE_URL = "https://paratechindustries.com";

const defaultProductsList = [
  { slug: "fiberlasermarkingmachine" },
  { slug: "fiberlasercuttingmachine" },
  { slug: "handheldfiberlaserweldingmachine" },
  { slug: "customiselasermachine" },
  { slug: "sheetpipelasercuttingmachine" },
  { slug: "onlinelasermarkingmachine" },
  { slug: "co2lasercuttingmachine" },
  { slug: "co2laserengravingmachine" },
  { slug: "dengraving" },
  { slug: "dmarking" },
  { slug: "uvlasermarkingmachine" },
  { slug: "jewellerycuttingmachine" },
  { slug: "jewellerysolderingmachine" }
];

function formatLastmod(val) {
  if (!val) return new Date().toISOString().split("T")[0];
  const d = new Date(val);
  if (!isNaN(d.getTime())) {
    return d.toISOString().split("T")[0];
  }
  return new Date().toISOString().split("T")[0];
}

async function run() {
  const today = new Date().toISOString().split("T")[0];

  const staticPages = [
    { url: `${BASE_URL}/`, lastmod: today, priority: 1.0 },
    { url: `${BASE_URL}/aboutus`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/companyprofile`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/contactus`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/catalogue.pdf`, lastmod: today, priority: 0.9 },
    { url: `${BASE_URL}/industriesweserve`, lastmod: today, priority: 0.8 },
  ];

  let products = [];
  try {
    const { data, error } = await supabase.from("products").select("*").order("id", { ascending: true });
    if (!error && data && data.length > 0) {
      products = data;
    } else {
      products = defaultProductsList;
    }
  } catch (e) {
    products = defaultProductsList;
  }

  const productEntries = products.map((p) => ({
    url: `${BASE_URL}/products/${p.slug}`,
    lastmod: formatLastmod(p.updated_at || p.created_at || today),
    priority: 0.8,
  }));

  let blogs = [];
  try {
    const { data, error } = await supabase.from("blogs").select("*").order("id", { ascending: true });
    if (!error && data) {
      blogs = data;
    }
  } catch (e) {}

  const blogEntries = blogs.map((b) => ({
    url: `${BASE_URL}/blog/${b.slug}`,
    lastmod: formatLastmod(b.updated_at || b.created_at || b.date || today),
    priority: 0.8,
  }));

  const entries = [...staticPages, ...productEntries, ...blogEntries];

  const xmlItems = entries
    .map(
      (item) => `  <url>
    <loc>${item.url}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <priority>${item.priority.toFixed(1)}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>
`;

  const destPath = path.join(process.cwd(), "public", "sitemap.xml");
  await fs.writeFile(destPath, xml, "utf8");
  console.log(`Successfully generated sitemap.xml with ${entries.length} URLs at ${destPath}`);
}

run();
