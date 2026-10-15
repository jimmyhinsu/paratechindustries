import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { supabase } from "@/lib/supabase";
import { defaultProductFaqs, getDefaultFaqsForSlug } from "@/data/productFaqs";

const FAQS_FILE_PATH = path.join(process.cwd(), "src", "data", "product-faqs.json");

function readLocalFaqs() {
  try {
    if (fs.existsSync(FAQS_FILE_PATH)) {
      const raw = fs.readFileSync(FAQS_FILE_PATH, "utf-8");
      return JSON.parse(raw);
    }
  } catch (err) {
    console.error("Error reading product-faqs.json:", err);
  }
  return { ...defaultProductFaqs };
}

function writeLocalFaqs(data) {
  try {
    fs.writeFileSync(FAQS_FILE_PATH, JSON.stringify(data, null, 2), "utf-8");
    return true;
  } catch (err) {
    console.error("Error writing product-faqs.json:", err);
    return false;
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  const localMap = readLocalFaqs();

  if (!slug) {
    return NextResponse.json({ success: true, faqsMap: localMap });
  }

  const cleanSlug = String(slug).trim().toLowerCase();

  // 1. Try fetching from Supabase if faqs column exists
  try {
    const { data, error } = await supabase
      .from("products")
      .select("faqs")
      .eq("slug", cleanSlug)
      .single();

    if (!error && data && Array.isArray(data.faqs) && data.faqs.length > 0) {
      return NextResponse.json({ success: true, slug: cleanSlug, faqs: data.faqs, source: "supabase" });
    }
  } catch (e) {
    // Column might not exist in Supabase yet
  }

  // 2. Fallback to local storage or defaults
  const faqs = localMap[cleanSlug] || getDefaultFaqsForSlug(cleanSlug);
  return NextResponse.json({ success: true, slug: cleanSlug, faqs, source: "local" });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { slug, faqs } = body;

    if (!slug) {
      return NextResponse.json({ success: false, error: "Slug is required" }, { status: 400 });
    }

    const cleanSlug = String(slug).trim().toLowerCase();
    const cleanedFaqs = Array.isArray(faqs)
      ? faqs
          .map((f, i) => ({
            id: f.id || `faq-${cleanSlug}-${Date.now()}-${i}`,
            question: String(f.question || "").trim(),
            answer: String(f.answer || "").trim()
          }))
          .filter(f => f.question || f.answer)
      : [];

    // 1. Persist to local JSON
    const localMap = readLocalFaqs();
    localMap[cleanSlug] = cleanedFaqs;
    const writeOk = writeLocalFaqs(localMap);

    // 2. Try persisting to Supabase if column exists
    let savedToSupabase = false;
    let supabaseError = null;
    try {
      const { error } = await supabase
        .from("products")
        .update({ faqs: cleanedFaqs })
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
      faqs: cleanedFaqs,
      savedToDatabase: savedToSupabase,
      supabaseNotice: supabaseError ? `Supabase: ${supabaseError}` : null
    });
  } catch (error) {
    console.error("Failed to update product FAQs:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
