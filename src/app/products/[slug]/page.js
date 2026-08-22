import React from "react";
import ProductDetail from "@/components/ProductDetail";
import { fetchProductBySlugFromSupabase, fetchProductsFromSupabase } from "@/data/products";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  const allProducts = await fetchProductsFromSupabase();
  return (allProducts || []).map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const product = await fetchProductBySlugFromSupabase(slug);

  if (!product) {
    return {
      title: "Product Not Found | Paratech Industries",
    };
  }

  const tagsList = product.tag
    ? (typeof product.tag === "string" ? product.tag.split(",") : Array.isArray(product.tag) ? product.tag : [product.tag])
        .map(t => String(t).trim())
        .filter(Boolean)
    : [];

  const metaKeywords = (Array.isArray(product.metaKeywords) && product.metaKeywords.length > 0)
    ? product.metaKeywords
    : (typeof product.metaKeywords === "string" && product.metaKeywords.trim())
    ? product.metaKeywords.split(",").map(k => k.trim()).filter(Boolean)
    : [
        product.name,
        `${product.name} manufacturer`,
        `${product.name} manufacturer in India`,
        `${product.name} in Surat Gujarat`,
        `Paratech Industries ${product.name}`
      ];

  const otherMeta = {};
  if (tagsList.length > 0) {
    otherMeta["tags"] = tagsList.join(", ");
    otherMeta["product:tag"] = tagsList.join(", ");
  }

  return {
    title: product.metaTitle || `${product.heroTitle || product.name} Manufacturer, Surat | Paratech Industries`,
    description: product.metaDescription || product.descriptions?.[0]?.replace(/<[^>]*>/g, '') || `${product.name} manufacturer and exporter in Surat, Gujarat, India.`,
    keywords: metaKeywords,
    other: otherMeta,
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const product = await fetchProductBySlugFromSupabase(slug);

  return <ProductDetail product={product} slug={slug} />;
}
