-- ==========================================================================
-- SUPABASE / POSTGRESQL PRODUCTION MIGRATION
-- Project: Paratech Industries
-- Description: Add 'faqs' column to 'products' table and pre-populate FAQs
-- ==========================================================================

-- 1. Add the 'faqs' JSONB column to the 'products' table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb;

-- 2. Create a GIN index on 'faqs' for high performance querying
CREATE INDEX IF NOT EXISTS idx_products_faqs ON products USING gin (faqs);

-- 3. Populate starter / default FAQs for all product machines
-- (Uses conditional update so it won't overwrite if you already customized FAQs)

-- 3.1 Fiber Laser Marking Machine
UPDATE products
SET faqs = '[
  {
    "id": "flm-1",
    "question": "What materials can be marked with this Fiber Laser Marking Machine?",
    "answer": "This machine marks all metals including stainless steel, mild steel, aluminum, brass, copper, titanium, gold, silver, platinum, as well as selected engineering plastics and coated materials."
  },
  {
    "id": "flm-2",
    "question": "Which laser power option should I choose (20W, 30W, 50W, 100W)?",
    "answer": "20W and 30W are ideal for standard surface marking, serial numbers, barcodes, and logos. 50W and 100W provide higher marking speeds, deeper engraving, and metal cutting (such as gold/silver jewellery sheets)."
  },
  {
    "id": "flm-3",
    "question": "What is the expected lifespan and maintenance requirement?",
    "answer": "The fiber laser source has an estimated operating lifespan of up to 100,000 hours with virtually zero routine maintenance and no consumable parts required."
  },
  {
    "id": "flm-4",
    "question": "What software and file formats are supported?",
    "answer": "The machine comes with industrial marking software compatible with Windows 7/8/10/11, supporting PLT, DXF, BMP, JPG, GIF, PNG, AI, and vector graphic formats."
  },
  {
    "id": "flm-5",
    "question": "Does Paratech Industries provide training and after-sales service?",
    "answer": "Yes, we provide full on-site/remote operational training, installation support, 1-year comprehensive warranty, and lifetime technical assistance."
  }
]'::jsonb
WHERE slug = 'fiber-laser-marking-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.2 Fiber Laser Cutting Machine
UPDATE products
SET faqs = '[
  {
    "id": "flc-1",
    "question": "What sheet metal thicknesses can this fiber laser cutting machine cut?",
    "answer": "Cutting capacity depends on laser power (1kW to 12kW+). It can cut mild steel from 1mm up to 25mm+, stainless steel up to 16mm+, aluminum up to 12mm+, and brass/copper up to 8mm+."
  },
  {
    "id": "flc-2",
    "question": "What assist gases are required for cutting?",
    "answer": "Oxygen (O2) is typically used for carbon/mild steel, Nitrogen (N2) for clean, burr-free stainless steel and aluminum cuts, and high-pressure dry air for economical cutting."
  },
  {
    "id": "flc-3",
    "question": "What CNC control system is used?",
    "answer": "Our machines feature industrial CNC controllers (such as CypCut) with automatic edge finding, nesting software, and auto-focus laser cutting heads."
  },
  {
    "id": "flc-4",
    "question": "What is the cutting precision and speed?",
    "answer": "Positioning accuracy is ±0.03 mm with repeatability of ±0.02 mm, reaching high cutting speeds that drastically boost production output."
  }
]'::jsonb
WHERE slug = 'fiber-laser-cutting-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.3 Handheld Fiber Laser Welding Machine
UPDATE products
SET faqs = '[
  {
    "id": "hlw-1",
    "question": "How does laser welding compare to traditional TIG / MIG welding?",
    "answer": "Handheld laser welding is 3 to 10 times faster than TIG welding, produces minimal thermal deformation, requires no pre-grinding or post-weld polishing, and is easy to learn even for beginners."
  },
  {
    "id": "hlw-2",
    "question": "Can it weld dissimilar metals and thick materials?",
    "answer": "Yes, it can weld stainless steel, carbon steel, galvanized sheet, aluminum, and brass up to 4-5mm thickness depending on the chosen laser wattage (1kW, 1.5kW, 2kW, 3kW)."
  },
  {
    "id": "hlw-3",
    "question": "Does it support 3-in-1 functions (welding, cutting, and cleaning)?",
    "answer": "Yes, our handheld welding systems can be equipped with multifunctional nozzles for welding, light cutting, and laser surface cleaning."
  }
]'::jsonb
WHERE slug = 'handheld-fiber-laser-welding-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.4 CO2 Laser Cutting Machine
UPDATE products
SET faqs = '[
  {
    "id": "co2c-1",
    "question": "What materials can a CO2 laser cutting machine cut?",
    "answer": "It cuts non-metallic materials including acrylic, wood, MDF, leather, fabric, paper, cardboard, rubber, and certain plastic sheets with clean, polished edges."
  },
  {
    "id": "co2c-2",
    "question": "What tube wattages are available?",
    "answer": "Available from 80W, 100W, 130W, up to 150W and 180W high-power CO2 sealed glass or RF metal tubes depending on thickness requirements."
  }
]'::jsonb
WHERE slug = 'co2-laser-cutting-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.5 CO2 Laser Engraving Machine
UPDATE products
SET faqs = '[
  {
    "id": "co2e-1",
    "question": "Can this CO2 laser engrave on glass and stone?",
    "answer": "Yes, CO2 lasers produce crisp, frosted engravings on glass, acrylic, marble, granite, ceramic, wood, and coated metals."
  },
  {
    "id": "co2e-2",
    "question": "Can it handle cylindrical items like bottles and tumblers?",
    "answer": "Yes, a rotary attachment can be added for seamless 360-degree engraving on bottles, glasses, and cylindrical parts."
  }
]'::jsonb
WHERE slug = 'co2-laser-engraving-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.6 UV Laser Marking Machine
UPDATE products
SET faqs = '[
  {
    "id": "uv-1",
    "question": "What makes UV laser marking unique (Cold Marking)?",
    "answer": "UV lasers operate at 355nm wavelength with a tiny focal spot and very short pulse width, producing cold marking with virtually no heat-affected zone, preventing burning or deformation."
  },
  {
    "id": "uv-2",
    "question": "What materials require a UV laser marking machine?",
    "answer": "UV lasers are essential for sensitive plastics, medical packaging, glass, silicon wafers, electronics components, cosmetic bottles, and heat-sensitive materials."
  }
]'::jsonb
WHERE slug = 'uv-laser-marking-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.7 Jewellery Laser Cutting Machine
UPDATE products
SET faqs = '[
  {
    "id": "jlc-1",
    "question": "What precious metals can this machine cut?",
    "answer": "It is specifically engineered for cutting gold, silver, brass, copper, and platinum sheets with minimal kerf width and zero metal wastage."
  },
  {
    "id": "jlc-2",
    "question": "Does it have a precious metal collection / recovery system?",
    "answer": "Yes, our jewellery cutting machines include a specialized recovery chamber and dust extraction system to capture 99%+ of precious metal dust."
  }
]'::jsonb
WHERE slug = 'jewellery-laser-cutting-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.8 Jewellery Laser Soldering Machine
UPDATE products
SET faqs = '[
  {
    "id": "jls-1",
    "question": "Can this machine weld delicate jewellery with gemstones attached?",
    "answer": "Yes, the focused laser pulse delivers localized heat with pinpoint microscope precision, allowing repairs next to heat-sensitive stones without removing them."
  },
  {
    "id": "jls-2",
    "question": "Is stereo microscope vision included?",
    "answer": "Yes, it is equipped with a high-definition 10X/15X stereo microscope with built-in reticle crosshair and protective shutter."
  }
]'::jsonb
WHERE slug = 'jewellery-laser-soldering-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.9 Customise Laser Marking Machine
UPDATE products
SET faqs = '[
  {
    "id": "clm-1",
    "question": "What custom SPM features can Paratech Industries integrate?",
    "answer": "We build customized laser workstations including rotary indexing tables, multi-axis robotic arms, automated conveyor integration, vision inspection cameras, and auto-feeders."
  }
]'::jsonb
WHERE slug = 'customise-laser-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.10 Sheet + Pipe Laser Cutting Machine
UPDATE products
SET faqs = '[
  {
    "id": "spc-1",
    "question": "What pipe profiles and diameters can be cut?",
    "answer": "It cuts round tubes, square pipes, rectangular tubes, and oval profiles from 20mm up to 220mm diameter, alongside flat metal sheet cutting."
  }
]'::jsonb
WHERE slug = 'sheet-pipe-laser-cutting-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.11 Online Laser Marking Machine
UPDATE products
SET faqs = '[
  {
    "id": "olm-1",
    "question": "How fast can the online flying laser marking machine operate on conveyors?",
    "answer": "It can mark on moving continuous production lines at speeds up to 120-180 meters per minute for cables, pipes, pharmaceuticals, and FMCG packaging."
  }
]'::jsonb
WHERE slug = 'online-laser-marking-machine' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.12 3D Engraving Machine
UPDATE products
SET faqs = '[
  {
    "id": "3de-1",
    "question": "How does 3D laser engraving work on curved and stepped surfaces?",
    "answer": "The dynamic 3-axis focusing system automatically adjusts focal length in real-time, allowing precise engraving on slopes, spheres, cylinders, and multi-level stepped surfaces without distortion."
  }
]'::jsonb
WHERE slug = '3d-engraving' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 3.13 3D Marking Machine
UPDATE products
SET faqs = '[
  {
    "id": "3dm-1",
    "question": "What are the benefits of 3D dynamic marking?",
    "answer": "3D dynamic marking provides a larger marking field (up to 600x600mm), uniform spot size, deep 3D relief carving, and seamless marking on non-flat metal surfaces."
  }
]'::jsonb
WHERE slug = '3d-marking' AND (faqs IS NULL OR faqs = '[]'::jsonb);

-- 4. Verification Query: Run this to check all products and their FAQ counts
SELECT 
  id, 
  slug, 
  name, 
  jsonb_array_length(COALESCE(faqs, '[]'::jsonb)) AS total_faqs 
FROM products 
ORDER BY id ASC;
