import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabase";

const SCHEMAS_FILE_PATH = path.join(process.cwd(), "src", "data", "product-schemas.json");

function readLocalSchemas() {
  try {
    if (fs.existsSync(SCHEMAS_FILE_PATH)) {
      const raw = fs.readFileSync(SCHEMAS_FILE_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading product-schemas.json:", err);
  }
  return {};
}

function writeLocalSchemas(data) {
  try {
    fs.writeFileSync(SCHEMAS_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing product-schemas.json:", err);
    return false;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const localMap = readLocalSchemas();

  if (!slug) {
    return NextResponse.json({ success: true, schemasMap: localMap });
  }

  const cleanSlug = String(slug).trim().toLowerCase();

  // 1. Try fetching from Supabase if custom_schema column exists
  try {
    const { data, error } = await supabase
      .from("products")
      .select("custom_schema")
      .eq("slug", cleanSlug)
      .single();

    if (!error && data && data.custom_schema) {
      return NextResponse.json({
        success: true,
        slug: cleanSlug,
        customSchema: data.custom_schema,
        source: "supabase"
      });
    }
  } catch (e) {
    // Column might not exist in Supabase yet
  }

  // 2. Fallback to local file storage
  const localEntry = localMap[cleanSlug];
  const customSchema = typeof localEntry === "string" ? localEntry : (localEntry?.customSchema || "");

  return NextResponse.json({
    success: true,
    slug: cleanSlug,
    customSchema,
    source: "local"
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { slug, customSchema } = body;

    if (!slug) {
      return NextResponse.json({ success: false, error: "Product slug is required" }, { status: 400 });
    }

    const cleanSlug = String(slug).trim().toLowerCase();
    const cleanSchema = typeof customSchema === "string" ? customSchema.trim() : "";

    // 1. Persist to local JSON storage
    const localMap = readLocalSchemas();
    if (cleanSchema) {
      localMap[cleanSlug] = cleanSchema;
    } else {
      delete localMap[cleanSlug];
    }
    const writeOk = writeLocalSchemas(localMap);

    // 2. Try updating Supabase database if column exists
    let savedToSupabase = false;
    let supabaseError = null;
    try {
      const { error } = await supabase
        .from("products")
        .update({ custom_schema: cleanSchema })
        .eq("slug", cleanSlug);

      if (!error) {
        savedToSupabase = true;
      } else {
        supabaseError = error.message;
      }
    } catch (e) {
      supabaseError = e.message;
    }

    return NextResponse.json({
      success: writeOk,
      slug: cleanSlug,
      customSchema: cleanSchema,
      savedToDatabase: savedToSupabase,
      supabaseNotice: supabaseError ? `Supabase: ${supabaseError}` : null
    });
  } catch (error) {
    console.error("Failed to update product custom schema:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
