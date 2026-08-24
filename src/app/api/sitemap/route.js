import { getSitemapData, buildSitemapXml } from "@/lib/sitemap-generator";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

// GET /api/sitemap -> Returns live dynamic XML
export async function GET() {
  try {
    const data = await getSitemapData();
    const xml = buildSitemapXml(data);

    return new NextResponse(xml, {
      status: 200,
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("GET /api/sitemap error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// POST /api/sitemap -> Refreshes dynamic sitemap cache/data
export async function POST() {
  try {
    const entries = await getSitemapData();
    return NextResponse.json({
      success: true,
      count: entries.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("POST /api/sitemap error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
