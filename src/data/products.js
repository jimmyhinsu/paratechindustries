import { supabase } from "@/lib/supabase";
import lasermarkingmachine from "@/assests/images/lasermarkingmachine.jpg";
import flm1 from "@/assests/images/flm1.png";
import flm2 from "@/assests/images/flm2.png";
import flm3 from "@/assests/images/flm3.png";
import flm4 from "@/assests/images/flm4.png";
import flm5 from "@/assests/images/flm5.png";
import flm6 from "@/assests/images/flm6.png";
import flm7 from "@/assests/images/flm7.png";
import flm8 from "@/assests/images/flm8.png";
import flm9 from "@/assests/images/flm9.png";
import flm10 from "@/assests/images/flm10.png";
import flm11 from "@/assests/images/flm11.png";
import flm12 from "@/assests/images/flm12.png";

import fibercutting from "@/assests/images/fiberlasercuttingmachine.jpeg";
import fc1 from "@/assests/images/fc1.png";
import fc2 from "@/assests/images/fc2.png";
import fc3 from "@/assests/images/fc3.png";

import hflwm from "@/assests/images/handheldfiberlaserweldingmachine.jpeg";
import hflm1 from "@/assests/images/hflm1.png";
import hflm2 from "@/assests/images/hflm2.png";
import hflm3 from "@/assests/images/hflm3.png";
import hflm4 from "@/assests/images/hflm4.png";
import hflm5 from "@/assests/images/hflm5.png";
import hflm6 from "@/assests/images/hflm6.png";

import clm from "@/assests/images/customiselasermachine.jpg";
import spcm from "@/assests/images/sheetpipelasercuttingmachine.jpeg";

import olmm from "@/assests/images/olmm.jpg";

import colcm from "@/assests/images/colasercuttingmachine.jpg";

import colaser from "@/assests/images/colaserengravingmachine.jpg";
import clem1 from "@/assests/images/clem1.png";
import clem2 from "@/assests/images/clem2.png";
import clem3 from "@/assests/images/clem3.png";
import clem4 from "@/assests/images/clem4.png";
import clem5 from "@/assests/images/clem5.png";
import clem6 from "@/assests/images/clem6.png";
import clem7 from "@/assests/images/clem7.png";
import clem8 from "@/assests/images/clem8.png";

import dengraving from "@/assests/images/dengraving.jpg";
import dmarking from "@/assests/images/dmarking.jpg";
import drm1 from "@/assests/images/drm1.png";
import drm2 from "@/assests/images/drm2.png";
import drm3 from "@/assests/images/drm3.png";

import uvlaser from "@/assests/images/uvlasermarkingmachine.jpeg";
import ulmem1 from "@/assests/images/ulmem1.png";
import ulmem2 from "@/assests/images/ulmem2.png";
import ulmem3 from "@/assests/images/ulmem3.png";
import ulmem4 from "@/assests/images/ulmem4.png";
import ulmem5 from "@/assests/images/ulmem5.png";
import ulmem6 from "@/assests/images/ulmem6.png";

import jcm from "@/assests/images/jcm.jpeg";
import jcm22 from "@/assests/images/jcm2.jpeg";
import jcm33 from "@/assests/images/jcm3.jpeg";
import jcm44 from "@/assests/images/jcm4.jpeg";
import jcm1 from "@/assests/images/jcm1.png";
import jcm2 from "@/assests/images/jcm2.png";
import jcm3 from "@/assests/images/jcm3.png";
import jcm4 from "@/assests/images/jcm4.png";

import jsm from "@/assests/images/jsm.jpeg";
import jsmm2 from "@/assests/images/jsmm2.jpg";
import jsmm3 from "@/assests/images/jsmm3.jpeg";
import jsmm4 from "@/assests/images/jsmm4.jpeg";
import jsmm5 from "@/assests/images/jsmm5.jpeg";
import jsm1 from "@/assests/images/jsm1.png";
import jsm2 from "@/assests/images/jsm2.png";
import jsm3 from "@/assests/images/jsm3.png";
import jsm4 from "@/assests/images/jsm4.png";
import jsm5 from "@/assests/images/jsm5.png";
import jsm6 from "@/assests/images/jsm6.png";
import jsm7 from "@/assests/images/jsm7.png";
import jsm8 from "@/assests/images/jsm8.png";
import jsm9 from "@/assests/images/jsm9.png";
import jsm10 from "@/assests/images/jsm10.png";
import jsm11 from "@/assests/images/jsm11.png";
import jsm12 from "@/assests/images/jsm12.png";

export const imageMap = {
  "lasermarkingmachine.jpg": lasermarkingmachine,
  "flm1.png": flm1, "flm2.png": flm2, "flm3.png": flm3, "flm4.png": flm4,
  "flm5.png": flm5, "flm6.png": flm6, "flm7.png": flm7, "flm8.png": flm8,
  "flm9.png": flm9, "flm10.png": flm10, "flm11.png": flm11, "flm12.png": flm12,

  "f1.png": flm1, "f2.png": flm2, "f3.png": flm3, "f4.png": flm4,
  "f5.png": flm5, "f6.png": flm6, "f7.png": flm7, "f8.png": flm8,
  "f9.png": flm9, "f10.png": flm10, "f11.png": flm11, "f12.png": flm12,

  "fiberlasercuttingmachine.jpeg": fibercutting,
  "fc1.png": fc1, "fc2.png": fc2, "fc3.png": fc3,

  "handheldfiberlaserweldingmachine.jpeg": hflwm,
  "hflm1.png": hflm1, "hflm2.png": hflm2, "hflm3.png": hflm3,
  "hflm4.png": hflm4, "hflm5.png": hflm5, "hflm6.png": hflm6,

  "customiselasermachine.jpg": clm,
  "sheetpipelasercuttingmachine.jpeg": spcm,
  "olmm.jpg": olmm,
  "colasercuttingmachine.jpg": colcm,

  "colaserengravingmachine.jpg": colaser,
  "clem1.png": clem1, "clem2.png": clem2, "clem3.png": clem3, "clem4.png": clem4,
  "clem5.png": clem5, "clem6.png": clem6, "clem7.png": clem7, "clem8.png": clem8,

  "dengraving.jpg": dengraving,
  "dmarking.jpg": dmarking,
  "drm1.png": drm1, "drm2.png": drm2, "drm3.png": drm3,

  "uvlasermarkingmachine.jpeg": uvlaser,
  "ulmem1.png": ulmem1, "ulmem2.png": ulmem2, "ulmem3.png": ulmem3,
  "ulmem4.png": ulmem4, "ulmem5.png": ulmem5, "ulmem6.png": ulmem6,

  "jcm.jpeg": jcm, "jcm2.jpeg": jcm22, "jcm3.jpeg": jcm33, "jcm4.jpeg": jcm44,
  "jcm1.png": jcm1, "jcm2.png": jcm2, "jcm3.png": jcm3, "jcm4.png": jcm4,

  "jsm.jpeg": jsm, "jsmm2.jpg": jsmm2, "jsmm3.jpeg": jsmm3, "jsmm4.jpeg": jsmm4, "jsmm5.jpeg": jsmm5,
  "jsm1.png": jsm1, "jsm2.png": jsm2, "jsm3.png": jsm3, "jsm4.png": jsm4,
  "jsm5.png": jsm5, "jsm6.png": jsm6, "jsm7.png": jsm7, "jsm8.png": jsm8,
  "jsm9.png": jsm9, "jsm10.png": jsm10, "jsm11.png": jsm11, "jsm12.png": jsm12
};

export function resolveImage(img) {
  if (!img) return null;
  if (typeof img === "object") return img;
  if (typeof img === "string") {
    const clean = img.trim();
    if (!clean) return null;
    if (clean.startsWith("data:") || clean.startsWith("http://") || clean.startsWith("https://") || clean.startsWith("/")) {
      return clean;
    }
    if (imageMap[clean]) {
      return imageMap[clean];
    }
    return clean;
  }
  return null;
}

export function resolveImageArray(arr) {
  if (!Array.isArray(arr)) return [];
  return arr.map(resolveImage).filter(Boolean);
}

export function getProductHref(slug) {
  if (!slug) return "/products";
  return `/products/${String(slug).trim().toLowerCase()}`;
}

export const defaultProductsList = [
  { id: "fiberlasermarkingmachine", slug: "fiberlasermarkingmachine", name: "Fiber Laser Marking Machine", heroTitle: "Fiber Laser Marking Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Fiber Laser Marking Machine" },
  { id: "fiberlasercuttingmachine", slug: "fiberlasercuttingmachine", name: "Fiber Laser Cutting Machine", heroTitle: "Fiber Laser Cutting Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Fiber Laser Cutting Machine" },
  { id: "handheldfiberlaserweldingmachine", slug: "handheldfiberlaserweldingmachine", name: "Handheld Fiber Laser Welding Machine", heroTitle: "Handheld Laser Welding Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Handheld Fiber Laser Welding Machine" },
  { id: "customiselasermachine", slug: "customiselasermachine", name: "Customise Laser Marking Machine", heroTitle: "Customise Laser Marking Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Customise Laser Machine" },
  { id: "sheetpipelasercuttingmachine", slug: "sheetpipelasercuttingmachine", name: "Sheet + Pipe Laser Cutting Machine", heroTitle: "Sheet & Pipe Laser Cutting Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Sheet + Pipe Laser Cutting Machine" },
  { id: "onlinelasermarkingmachine", slug: "onlinelasermarkingmachine", name: "Online Laser Marking Machine", heroTitle: "Online Laser Marking Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Online Laser Marking Machine" },
  { id: "co2lasercuttingmachine", slug: "co2lasercuttingmachine", name: "Co2 Laser Cutting & Engraving Machine", heroTitle: "Co2 Laser Cutting Machine", heroSubtitle: "Paratech Industries", quoteProductName: "CO2 Laser Cutting Machine" },
  { id: "co2laserengravingmachine", slug: "co2laserengravingmachine", name: "Co2 Laser Engraving Machine", heroTitle: "Co2 Laser Engraving Machine", heroSubtitle: "Paratech Industries", quoteProductName: "CO2 Laser Engraving Machine" },
  { id: "dengraving", slug: "dengraving", name: "3D Engraving", heroTitle: "3D Engraving", heroSubtitle: "Paratech Industries", quoteProductName: "3D Engraving Machine" },
  { id: "dmarking", slug: "dmarking", name: "3D Marking", heroTitle: "3D Marking", heroSubtitle: "Paratech Industries", quoteProductName: "3D Engraving Machine" },
  { id: "uvlasermarkingmachine", slug: "uvlasermarkingmachine", name: "UV Laser Marking Machine", heroTitle: "UV Laser Marking Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Uv Laser Marking/Engraving Machine" },
  { id: "jewellerycuttingmachine", slug: "jewellerycuttingmachine", name: "Jewellery Laser Cutting Machine", heroTitle: "Jewellery Laser Cutting Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Jewellery Laser Cutting Machine" },
  { id: "jewellerysolderingmachine", slug: "jewellerysolderingmachine", name: "Jewellery Laser Soldering Machine", heroTitle: "Jewellery Laser Soldering Machine", heroSubtitle: "Paratech Industries", quoteProductName: "Jewellery Laser Soldering Machine" }
];

export async function fetchProductsFromSupabase() {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error || !data || data.length === 0) {
      return defaultProductsList;
    }

    return data.map((item) => ({
      id: item.id,
      db_id: item.id,
      slug: item.slug,
      name: item.name,
      heroTitle: item.hero_title || item.name,
      heroSubtitle: item.hero_subtitle || "Paratech Industries",
      cardImage: resolveImage(item.card_image),
      rawCardImage: item.card_image || "",
      productImages: resolveImageArray(item.product_images),
      rawProductImages: item.product_images || [],
      materialsTitle: item.materials_title || null,
      materialsText: item.materials_text || null,
      descriptions: item.descriptions || [],
      specifications: item.specifications || [],
      applicationImages: resolveImageArray(item.application_images),
      rawApplicationImages: item.application_images || [],
      quoteProductName: item.quote_product_name || item.name,
      tag: item.tag || null,
      metaTitle: item.meta_title || null,
      metaDescription: item.meta_description || null,
      metaKeywords: item.meta_keywords || []
    }));
  } catch (err) {
    console.error("Failed to fetch products from Supabase:", err);
    return defaultProductsList;
  }
}

export async function fetchProductBySlugFromSupabase(slug) {
  if (!slug) return null;
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error || !data) {
      return null;
    }

    return {
      id: data.id,
      db_id: data.id,
      slug: data.slug,
      name: data.name,
      heroTitle: data.hero_title || data.name,
      heroSubtitle: data.hero_subtitle || "Paratech Industries",
      cardImage: resolveImage(data.card_image),
      rawCardImage: data.card_image || "",
      productImages: resolveImageArray(data.product_images),
      rawProductImages: data.product_images || [],
      materialsTitle: data.materials_title || null,
      materialsText: data.materials_text || null,
      descriptions: data.descriptions || [],
      specifications: data.specifications || [],
      applicationImages: resolveImageArray(data.application_images),
      rawApplicationImages: data.application_images || [],
      quoteProductName: data.quote_product_name || data.name,
      tag: data.tag || null,
      metaTitle: data.meta_title || null,
      metaDescription: data.meta_description || null,
      metaKeywords: data.meta_keywords || []
    };
  } catch (err) {
    console.error("Failed to fetch product by slug from Supabase:", err);
    return null;
  }
}
