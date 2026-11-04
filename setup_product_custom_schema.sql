-- ==========================================================================
-- SUPABASE / POSTGRESQL PRODUCTION MIGRATION
-- Project: Paratech Industries
-- Description: Add 'custom_schema' column to 'products' table & seed product schemas
-- ==========================================================================

-- 1. Add the 'custom_schema' TEXT column to the 'products' table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS custom_schema TEXT DEFAULT '';

-- 2. Populate product schemas for all 13 products
UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/fiber-laser-marking-machine#product",
      "name": "Fiber Laser Marking Machine",
      "url": "https://paratechindustries.com/products/fiber-laser-marking-machine",
      "description": "Paratech Industries manufactures and supplies fiber laser marking machines for precise and permanent marking on metals, jewellery and selected industrial materials. Available in 20W, 30W, 50W, 60W and 100W configurations, these machines support serial number marking, QR codes, barcodes, logos, product identification and industrial component marking.",
      "category": "Industrial Laser Marking Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Laser Type",
          "value": "Pulsed Fiber Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Power",
          "value": "20W, 30W, 50W, 60W and 100W"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Area",
          "value": "100 × 100 mm, 175 × 175 mm, 250 × 250 mm, 300 × 300 mm and customized"
        },
        {
          "@type": "PropertyValue",
          "name": "Wavelength",
          "value": "1064 nm"
        },
        {
          "@type": "PropertyValue",
          "name": "Operating System",
          "value": "Windows 7, 8, 10 and 11"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, DXF, BMP, JPG, GLF and PNG"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Voltage",
          "value": "Single Phase 220-230V / 50Hz"
        },
        {
          "@type": "PropertyValue",
          "name": "Power Adjusting Range",
          "value": "1-100%"
        },
        {
          "@type": "PropertyValue",
          "name": "Maximum Linear Speed",
          "value": "12000 mm/s"
        },
        {
          "@type": "PropertyValue",
          "name": "Minimum Character Height",
          "value": "0.1 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Stainless steel, mild steel, aluminium, cast iron, brass, copper, titanium, carbide, gold, silver, platinum, selected plastics and coated materials"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/fiber-laser-marking-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fiber Laser Marking Machine",
          "item": "https://paratechindustries.com/products/fiber-laser-marking-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/fiber-laser-marking-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What materials can be marked with this Fiber Laser Marking Machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This machine marks metals including stainless steel, mild steel, aluminium, brass, copper, titanium, gold, silver and platinum, as well as selected engineering plastics and coated materials."
          }
        },
        {
          "@type": "Question",
          "name": "Which laser power option should I choose (20W, 30W, 50W, 100W)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "20W and 30W are suitable for standard surface marking, serial numbers, barcodes and logos. 50W and 100W provide higher marking speeds, deeper engraving and certain metal cutting applications, such as gold and silver jewellery sheets."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see a demo of the fiber laser marking machine before purchasing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can contact Paratech Industries to discuss arranging a machine demonstration. A demo helps you understand the marking quality, operating process and suitability for your materials and production requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and after-sales support are available for the machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage and after-sales support depend on the machine model and manufacturer''s terms. Contact Paratech Industries to confirm the warranty period, technical support, maintenance services and replacement parts availability."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customise the marking area and laser power according to my requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Machine configurations can be customised according to the required marking area, laser power, material type and application. Contact Paratech Industries to discuss a suitable configuration for your manufacturing requirements."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'fiber-laser-marking-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/fiber-laser-marking-machine#product",
      "name": "Fiber Laser Marking Machine",
      "url": "https://paratechindustries.com/products/fiber-laser-marking-machine",
      "description": "Paratech Industries manufactures and supplies fiber laser marking machines for precise and permanent marking on metals, jewellery and selected industrial materials. Available in 20W, 30W, 50W, 60W and 100W configurations, these machines support serial number marking, QR codes, barcodes, logos, product identification and industrial component marking.",
      "category": "Industrial Laser Marking Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Laser Type",
          "value": "Pulsed Fiber Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Power",
          "value": "20W, 30W, 50W, 60W and 100W"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Area",
          "value": "100 × 100 mm, 175 × 175 mm, 250 × 250 mm, 300 × 300 mm and customized"
        },
        {
          "@type": "PropertyValue",
          "name": "Wavelength",
          "value": "1064 nm"
        },
        {
          "@type": "PropertyValue",
          "name": "Operating System",
          "value": "Windows 7, 8, 10 and 11"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, DXF, BMP, JPG, GLF and PNG"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Voltage",
          "value": "Single Phase 220-230V / 50Hz"
        },
        {
          "@type": "PropertyValue",
          "name": "Power Adjusting Range",
          "value": "1-100%"
        },
        {
          "@type": "PropertyValue",
          "name": "Maximum Linear Speed",
          "value": "12000 mm/s"
        },
        {
          "@type": "PropertyValue",
          "name": "Minimum Character Height",
          "value": "0.1 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Stainless steel, mild steel, aluminium, cast iron, brass, copper, titanium, carbide, gold, silver, platinum, selected plastics and coated materials"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/fiber-laser-marking-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Fiber Laser Marking Machine",
          "item": "https://paratechindustries.com/products/fiber-laser-marking-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/fiber-laser-marking-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What materials can be marked with this Fiber Laser Marking Machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "This machine marks metals including stainless steel, mild steel, aluminium, brass, copper, titanium, gold, silver and platinum, as well as selected engineering plastics and coated materials."
          }
        },
        {
          "@type": "Question",
          "name": "Which laser power option should I choose (20W, 30W, 50W, 100W)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "20W and 30W are suitable for standard surface marking, serial numbers, barcodes and logos. 50W and 100W provide higher marking speeds, deeper engraving and certain metal cutting applications, such as gold and silver jewellery sheets."
          }
        },
        {
          "@type": "Question",
          "name": "Can I see a demo of the fiber laser marking machine before purchasing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. You can contact Paratech Industries to discuss arranging a machine demonstration. A demo helps you understand the marking quality, operating process and suitability for your materials and production requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and after-sales support are available for the machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage and after-sales support depend on the machine model and manufacturer''s terms. Contact Paratech Industries to confirm the warranty period, technical support, maintenance services and replacement parts availability."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customise the marking area and laser power according to my requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Machine configurations can be customised according to the required marking area, laser power, material type and application. Contact Paratech Industries to discuss a suitable configuration for your manufacturing requirements."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'fiber-laser-cutting-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/handheld-fiber-laser-welding-machine#product",
      "name": "Handheld Fiber Laser Welding Machine",
      "url": "https://paratechindustries.com/products/handheld-fiber-laser-welding-machine",
      "description": "Paratech Industries manufactures handheld fiber laser welding machines in India, for industrial metal welding applications. Available in 1000W, 1500W and 2000W laser power configurations, these machines are designed for welding compatible materials such as stainless steel, mild steel and aluminium. Featuring a 1070nm wavelength, water cooling system, continuous and modulation working modes, and a 0–150mm cleaning width, these machines support precision metal joining and cleaning applications.",
      "category": "Industrial Handheld Fiber Laser Welding Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Machine Type",
          "value": "Handheld Fiber Laser Welding Machine"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Source",
          "value": "Fiber Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Power",
          "value": "1000W, 1500W and 2000W"
        },
        {
          "@type": "PropertyValue",
          "name": "Rated Output",
          "value": "1000W, 1500W and 2000W"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Wavelength",
          "value": "1070nm ±10nm"
        },
        {
          "@type": "PropertyValue",
          "name": "Cleaning Width",
          "value": "0–150mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Voltage",
          "value": "220V / 380V ±20V"
        },
        {
          "@type": "PropertyValue",
          "name": "Indicator Light",
          "value": "Red Light"
        },
        {
          "@type": "PropertyValue",
          "name": "Cooling Method",
          "value": "Water Cooling"
        },
        {
          "@type": "PropertyValue",
          "name": "Maximum Pressure",
          "value": "1.0 MPa"
        },
        {
          "@type": "PropertyValue",
          "name": "Total Power",
          "value": "5120W / 5580W, 7120W / 7580W and 8720W"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Mode",
          "value": "Continuous / Modulation"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Environment",
          "value": "Flat surface, free from vibration and shock"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Humidity",
          "value": "Less than 70%"
        },
        {
          "@type": "PropertyValue",
          "name": "Operating Temperature",
          "value": "10–40°C"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Stainless Steel, Mild Steel and Aluminium"
        },
        {
          "@type": "PropertyValue",
          "name": "Applications",
          "value": "Industrial Metal Welding, Metal Fabrication, Precision Welding and Compatible Metal Cleaning Applications"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "identifier": {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": "24BRAPD4073J1Z2"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/handheld-fiber-laser-welding-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Handheld Fiber Laser Welding Machine",
          "item": "https://paratechindustries.com/products/handheld-fiber-laser-welding-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/handheld-fiber-laser-welding-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I see a demonstration of the handheld fiber laser welding machine before purchasing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Paratech Industries to enquire about a machine demonstration. Seeing the welding process on your intended material can help you evaluate weld quality, ease of operation, and suitability for your production needs. Ask whether a sample welding test can be arranged before making your purchase decision."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a handheld fiber laser welding machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser source, operating conditions, frequency of use, and maintenance practices. Regular inspection, proper cooling, and following the manufacturer''s operating guidelines can help maintain performance. Consumable components may also require replacement over time."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty is provided with the handheld fiber laser welding machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage can vary according to the machine model and purchase terms. Before placing an order, contact Paratech Industries to confirm the warranty period, covered components, exclusions, and availability of technical support."
          }
        },
        {
          "@type": "Question",
          "name": "Can a handheld fiber laser welding machine weld different types of metals?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a suitably configured handheld fiber laser welding machine can weld compatible metals such as stainless steel, mild steel, and aluminium. However, the appropriate laser power and welding parameters depend on the metal type, thickness, joint design, and required weld strength. Testing your actual materials can help determine suitable settings."
          }
        },
        {
          "@type": "Question",
          "name": "What should I consider before buying a handheld fiber laser welding machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before purchasing, consider the types and thicknesses of metals you need to weld, expected production volume, required weld quality, laser power, cooling system, electrical requirements, and operator safety provisions. You should also confirm installation assistance, training, warranty coverage, and after-sales support to ensure the machine meets your business requirements."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'handheld-fiber-laser-welding-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/customise-laser-machine#product",
      "name": "Customise Laser Marking Machine",
      "url": "https://paratechindustries.com/products/customise-laser-machine",
      "description": "Paratech Industries designs and manufactures customised Fiber Laser Marking Machines in India. These industrial laser marking systems are available with 30W, 50W, 100W and 200W laser power options and configurable working areas ranging from 600 x 600 mm to 1500 x 3000 mm. Featuring encoder-synchronised motion control, continuous marking capabilities, 2–500 ns pulse repetition and air cooling, these machines are designed for large components, oversized panels, conveyor-fed parts and customised industrial production lines.",
      "category": "Custom Industrial Fiber Laser Marking Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Machine Type",
          "value": "Custom Fiber Laser Marking Machine"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Type",
          "value": "Fiber Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Power",
          "value": "30W, 50W, 100W and 200W"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Working Area",
          "value": "600 x 600 mm, 900 x 900 mm, 1200 x 1200 mm, 1300 x 2500 mm, 1500 x 3000 mm and customized configurations"
        },
        {
          "@type": "PropertyValue",
          "name": "Pulse Repetition",
          "value": "2–500 ns"
        },
        {
          "@type": "PropertyValue",
          "name": "Cooling System",
          "value": "Air Cooling"
        },
        {
          "@type": "PropertyValue",
          "name": "Motion Control",
          "value": "Encoder-Synchronised Motion Control"
        },
        {
          "@type": "PropertyValue",
          "name": "Continuous Marking",
          "value": "Encoder-synchronised motion for stitching-free large graphics"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Area Customisation",
          "value": "Available according to production and application requirements"
        },
        {
          "@type": "PropertyValue",
          "name": "Machine Configuration",
          "value": "Customised according to application, working dimensions and production line requirements"
        },
        {
          "@type": "PropertyValue",
          "name": "Applications",
          "value": "Large Component Marking, Oversized Panel Marking, Conveyor-Fed Part Marking and Industrial Product Identification"
        },
        {
          "@type": "PropertyValue",
          "name": "Manufacturer Location",
          "value": "Surat, Gujarat, India"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "identifier": {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": "24BRAPD4073J1Z2"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/customise-laser-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Customise Laser Marking Machine",
          "item": "https://paratechindustries.com/products/customise-laser-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/customise-laser-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I get a laser machine customised according to my manufacturing requirements?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can contact Paratech Industries to discuss a laser machine configuration based on your application, material, production volume, and required processing method. Sharing your product details and technical requirements will help the team understand which customisation options may be suitable."
          }
        },
        {
          "@type": "Question",
          "name": "What information do I need to provide when ordering a customised laser machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You should provide details such as the material you process, product dimensions, required marking, cutting or engraving area, production volume, and expected output. Sample products, drawings, or design files can also help the manufacturer assess your requirements more accurately."
          }
        },
        {
          "@type": "Question",
          "name": "Can a customised laser machine be integrated into an existing production line?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Integration may be possible depending on your existing equipment, production workflow, available space, and automation requirements. Before ordering, discuss conveyor systems, machine communication, product handling, and cycle time with Paratech Industries to determine the feasibility of integration."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to manufacture and install a customised laser machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The manufacturing and installation timeline depends on the machine design, degree of customisation, component availability, and testing requirements. Contact Paratech Industries with your project specifications to request an estimated delivery and installation schedule."
          }
        },
        {
          "@type": "Question",
          "name": "How can I get a quotation for a customised laser machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "To request a quotation, share your application details, material specifications, required machine functions, working dimensions, and automation needs with Paratech Industries. Providing this information helps the team assess your project and prepare a quotation based on the proposed machine configuration."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'customise-laser-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/sheet-pipe-laser-cutting-machine#product",
      "name": "Sheet & Pipe Laser Cutting Machine",
      "url": "https://paratechindustries.com/products/sheet-pipe-laser-cutting-machine",
      "description": "Paratech Industries manufactures and exports high-precision CNC Fiber Laser Cutting Machines for sheet and pipe applications in India. Available with 500W, 1KW, 1.5KW, 2KW, 3KW and 5KW laser power options using IPG, Raycus or Max fiber laser sources. The machine features a Swiss Raytools laser head, Cypcut control system, Taiwan Hiwin guide rails, Japan Yaskawa servo motors, dual-drive rack-and-pinion transmission and a 1500 x 3000 mm working area for industrial metal sheet and tube cutting applications.",
      "category": "Industrial CNC Sheet and Pipe Fiber Laser Cutting Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Machine Type",
          "value": "CNC Sheet and Pipe Fiber Laser Cutting Machine"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Source",
          "value": "IPG, Raycus and Max"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Power",
          "value": "500W, 1KW, 1.5KW, 2KW, 3KW and 5KW"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Head",
          "value": "Swiss Raytools Laser Head"
        },
        {
          "@type": "PropertyValue",
          "name": "Transmission System",
          "value": "Dual Drive Precision Rack and Pinion"
        },
        {
          "@type": "PropertyValue",
          "name": "Guide Rail",
          "value": "Taiwan Hiwin"
        },
        {
          "@type": "PropertyValue",
          "name": "Rack and Pinion",
          "value": "Taiwan YYC"
        },
        {
          "@type": "PropertyValue",
          "name": "Speed Reducer",
          "value": "Japan Shimpo"
        },
        {
          "@type": "PropertyValue",
          "name": "Servo Motor",
          "value": "Japan Yaskawa"
        },
        {
          "@type": "PropertyValue",
          "name": "Water Chiller",
          "value": "Hanli"
        },
        {
          "@type": "PropertyValue",
          "name": "Control System",
          "value": "Cypcut"
        },
        {
          "@type": "PropertyValue",
          "name": "Proportional Valve",
          "value": "Japan SMC"
        },
        {
          "@type": "PropertyValue",
          "name": "Auxiliary Parts",
          "value": "Exhaust Fan"
        },
        {
          "@type": "PropertyValue",
          "name": "Electronic Components",
          "value": "France Schneider"
        },
        {
          "@type": "PropertyValue",
          "name": "Computer",
          "value": "Yes"
        },
        {
          "@type": "PropertyValue",
          "name": "Auto Lubrication",
          "value": "Yes"
        },
        {
          "@type": "PropertyValue",
          "name": "Wireless Handle Control",
          "value": "Yes"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Area",
          "value": "1500 x 3000 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "X/Y Axis Repeat Positioning Precision",
          "value": "±0.02 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Machine Gross Weight",
          "value": "3.0 Tonnes"
        },
        {
          "@type": "PropertyValue",
          "name": "Voltage",
          "value": "Three-Phase 380V, 50/60Hz"
        },
        {
          "@type": "PropertyValue",
          "name": "Cutting Applications",
          "value": "Metal Sheet Cutting, Round Pipe Cutting, Square Tube Cutting and Rectangular Tube Cutting"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Stainless Steel, Mild Steel, Aluminium, Cast Iron, Bronze, Titanium, Copper, Brass, Carbide, Plastic, Gold, Silver, Platinum, Coated Glass and Non-Transparent Acrylic"
        },
        {
          "@type": "PropertyValue",
          "name": "Manufacturer Location",
          "value": "Surat, Gujarat, India"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "identifier": {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": "24BRAPD4073J1Z2"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/sheet-pipe-laser-cutting-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Sheet & Pipe Laser Cutting Machine",
          "item": "https://paratechindustries.com/products/sheet-pipe-laser-cutting-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/sheet-pipe-laser-cutting-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I see a demonstration of the Sheet & Pipe Laser Cutting Machine before purchasing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Paratech Industries to enquire about arranging a demonstration of the Sheet & Pipe Laser Cutting Machine. A demonstration or sample cutting test can help you evaluate how the machine cuts your metal sheets and pipes, assess the cutting quality, and determine whether the machine meets your production requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a Sheet & Pipe Laser Cutting Machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan of a Sheet & Pipe Laser Cutting Machine depends on operating hours, production workload, maintenance practices, and the condition of components such as the laser source, cutting head, and motion system. Regular servicing and following the manufacturer''s maintenance guidelines can help maintain performance and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What is the warranty period for the Sheet & Pipe Laser Cutting Machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the machine model and the manufacturer''s terms. Before purchasing from Paratech Industries, confirm the warranty period, coverage for the laser source and other components, and the availability of technical support and replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "Can a Sheet & Pipe Laser Cutting Machine process both square and round pipes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A suitable sheet and pipe laser cutting machine can process compatible round, square, and rectangular tubes, depending on its chuck design, loading system, and supported material dimensions. Before purchasing, check the machine''s pipe diameter range, maximum tube length, and material thickness capacity."
          }
        },
        {
          "@type": "Question",
          "name": "Can a Sheet & Pipe Laser Cutting Machine reduce fabrication time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, combining sheet and pipe cutting capabilities in one machine can reduce material handling and the need to move jobs between separate cutting systems. Actual time savings depend on production volume, programming, loading and unloading arrangements, and the complexity of the parts being manufactured."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'sheet-pipe-laser-cutting-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/online-laser-marking-machine#product",
      "name": "Online Laser Marking Machine",
      "url": "https://paratechindustries.com/products/online-laser-marking-machine",
      "description": "Paratech Industries manufactures Online Laser Marking Machines in India, for continuous production and packaging line applications. Available with Fiber, CO2 and UV laser sources, these flying laser marking systems mark products while they move along conveyor lines without stopping production. Depending on the laser type, power options range from 5W to 100W, with marking speeds up to 300 metres per minute. The machines support PLT, DXF, JPG and PNG file formats and are suitable for product identification, date coding, batch numbers, serial numbers, barcodes and QR code marking.",
      "category": "Industrial Online and Flying Laser Marking Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Machine Type",
          "value": "Online Laser Marking Machine"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Technologies",
          "value": "Fiber Laser, CO2 Laser and UV Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Fiber Laser Power",
          "value": "30W, optional 60W and 100W"
        },
        {
          "@type": "PropertyValue",
          "name": "CO2 Laser Power",
          "value": "30W, optional 60W"
        },
        {
          "@type": "PropertyValue",
          "name": "UV Laser Power",
          "value": "5W, optional 10W and 15W"
        },
        {
          "@type": "PropertyValue",
          "name": "Marking Speed",
          "value": "1 to 300 metres per minute"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, DXF, JPG and PNG"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Voltage",
          "value": "Single Phase 220-230V / 50Hz"
        },
        {
          "@type": "PropertyValue",
          "name": "Earthing Requirement",
          "value": "Required"
        },
        {
          "@type": "PropertyValue",
          "name": "Marking Technology",
          "value": "Flying Laser Marking"
        },
        {
          "@type": "PropertyValue",
          "name": "Production Line Integration",
          "value": "Compatible with conveyor and packaging production line integration"
        },
        {
          "@type": "PropertyValue",
          "name": "Marking Operation",
          "value": "Continuous marking on moving products without stopping the production line"
        },
        {
          "@type": "PropertyValue",
          "name": "Marking Applications",
          "value": "Date Coding, Batch Number Marking, Serial Number Marking, Barcode Marking, QR Code Marking and Product Identification"
        },
        {
          "@type": "PropertyValue",
          "name": "Manufacturer Location",
          "value": "Surat, Gujarat, India"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "identifier": {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": "24BRAPD4073J1Z2"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/online-laser-marking-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Online Laser Marking Machine",
          "item": "https://paratechindustries.com/products/online-laser-marking-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/online-laser-marking-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What warranty is provided with an online laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the selected machine model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, exclusions, and availability of technical support and replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "What information can an online laser marking machine print on products?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the machine configuration and software, an online laser marking machine can mark product names, batch numbers, manufacturing dates, serial numbers, barcodes, QR codes, and other identification details. The suitable marking method depends on the product material and the information that needs to be displayed."
          }
        },
        {
          "@type": "Question",
          "name": "Can an online laser marking machine work continuously during production?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "An appropriately configured online laser marking system can support continuous production workflows. However, its practical performance depends on the required marking speed, product spacing, laser specifications, cooling arrangements, and production-line conditions. Matching the system to your production cycle is essential."
          }
        },
        {
          "@type": "Question",
          "name": "What maintenance does an online laser marking machine require?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Routine maintenance may include cleaning the optical components according to manufacturer guidelines, checking electrical connections, inspecting sensors, and ensuring that the production-line integration remains properly aligned. Any cooling or extraction systems should also be maintained according to the equipment specifications."
          }
        },
        {
          "@type": "Question",
          "name": "What should I consider before installing an online laser marking machine on my production line?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Before installation, evaluate the product material and dimensions, conveyor speed, available installation space, marking position, required code readability, electrical supply, and communication requirements with existing equipment. Sharing these details with Paratech Industries can help determine the appropriate machine configuration."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'online-laser-marking-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/co2-laser-cutting-machine#product",
      "name": "CO2 Laser Cutting Machine",
      "url": "https://paratechindustries.com/products/co2-laser-cutting-machine",
      "description": "Paratech Industries manufactures CO2 Laser Cutting and Engraving Machines in India, for precision cutting and engraving of non-metal materials. Available with sealed glass CO2 laser tube power options of 80W, 100W, 130W, 150W and 200W, these machines offer cutting areas ranging from 600 x 900 mm to 1600 x 1000 mm and customized configurations. Featuring water cooling, strip or honeycomb working tables, optional CCD camera support and USB, U-disk and Ethernet connectivity, these machines are suitable for acrylic, wood, leather, MDF and fabric processing.",
      "category": "Industrial CO2 Laser Cutting and Engraving Machines",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Machine Type",
          "value": "CO2 Laser Cutting and Engraving Machine"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Source",
          "value": "Sealed Glass CO2 Laser Tube"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Tube Power",
          "value": "80W, 100W, 130W, 150W and 200W"
        },
        {
          "@type": "PropertyValue",
          "name": "Cutting Area",
          "value": "600 x 900 mm, 1300 x 900 mm, 1400 x 1000 mm, 1600 x 1000 mm, 1300 x 1300 mm, 1300 x 2500 mm and customized configurations"
        },
        {
          "@type": "PropertyValue",
          "name": "Cooling System",
          "value": "Water Cooling"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Table",
          "value": "Strip Table / Honeycomb Table"
        },
        {
          "@type": "PropertyValue",
          "name": "Optional Equipment",
          "value": "CCD Camera"
        },
        {
          "@type": "PropertyValue",
          "name": "Connectivity",
          "value": "USB, U-Disk and Ethernet"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, DXF, BMP, JPG, GLF and PNG"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Voltage",
          "value": "Single Phase 220-230V / 50Hz"
        },
        {
          "@type": "PropertyValue",
          "name": "Earthing Requirement",
          "value": "Required"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Acrylic, Wood, Leather, MDF and Fabric"
        },
        {
          "@type": "PropertyValue",
          "name": "Applications",
          "value": "Signage Manufacturing, Packaging, Textile Production, Acrylic Cutting, Wood Engraving, Leather Engraving and Fabric Cutting"
        },
        {
          "@type": "PropertyValue",
          "name": "Manufacturer Location",
          "value": "Surat, Gujarat, India"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "identifier": {
        "@type": "PropertyValue",
        "name": "GSTIN",
        "value": "24BRAPD4073J1Z2"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/co2-laser-cutting-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CO2 Laser Cutting Machine",
          "item": "https://paratechindustries.com/products/co2-laser-cutting-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/co2-laser-cutting-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What materials can a CO2 laser cutting machine process?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CO2 laser cutting machine can process various non-metal materials, including acrylic, wood, leather, MDF and fabric. The suitable laser power and cutting parameters depend on the material type and thickness."
          }
        },
        {
          "@type": "Question",
          "name": "What laser power options are available in Paratech Industries'' CO2 laser cutting machines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Paratech Industries offers CO2 laser cutting machines with sealed glass laser tube power options of 80W, 100W, 130W, 150W and 200W. The appropriate power depends on the material, thickness and production requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Can I get a customized cutting area for a CO2 laser cutting machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Paratech Industries offers multiple cutting area configurations, including 600 x 900 mm, 1300 x 900 mm, 1400 x 1000 mm, 1600 x 1000 mm, 1300 x 1300 mm and 1300 x 2500 mm, along with customized options according to production requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What cooling system is used in a CO2 laser cutting machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The CO2 laser cutting machine uses a water cooling system to manage heat generated during laser operation. Proper cooling helps maintain stable operating conditions and supports reliable machine performance."
          }
        },
        {
          "@type": "Question",
          "name": "Can a CO2 laser cutting machine engrave as well as cut materials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A CO2 laser cutting and engraving machine can perform both cutting and engraving operations on compatible non-metal materials such as acrylic, wood, leather, MDF and fabric. The result depends on material properties, laser power and machine settings."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'co2-laser-cutting-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/co2-laser-engraving-machine#product",
      "name": "CO2 Laser Engraving Machine",
      "url": "https://paratechindustries.com/products/co2-laser-engraving-machine",
      "description": "Paratech Industries manufactures CO2 Laser Engraving Machines in India. Available in Wood Peckert and Catwalk models, these machines offer engraving areas from 150 × 150 mm to 600 × 600 mm and laser power options of 30W, 60W, 80W and 100W. They are designed for engraving suitable non-metallic materials such as wood, acrylic, leather, glass, marble, paper and other compatible materials.",
      "category": "CO2 Laser Engraving Machine",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Machine Models",
          "value": "Wood Peckert, Catwalk"
        },
        {
          "@type": "PropertyValue",
          "name": "Engraving Area",
          "value": "150 × 150 mm, 300 × 300 mm, 450 × 450 mm, 600 × 600 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Tube Power",
          "value": "30W, 60W, 80W, 100W"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Source",
          "value": "Air-cooled metal tube or water-cooled glass tube"
        },
        {
          "@type": "PropertyValue",
          "name": "Power Adjustment",
          "value": "1% to 100%"
        },
        {
          "@type": "PropertyValue",
          "name": "Engraving Accuracy",
          "value": "Less than 0.01 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Operating System",
          "value": "Windows 7, 8, 10 and 11"
        },
        {
          "@type": "PropertyValue",
          "name": "Interface",
          "value": "U-disk, USB, Ethernet"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, DXF, BMP, JPG, GLF and PNO (as listed on the page)"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Voltage",
          "value": "Single phase, 220–230V, 50Hz"
        },
        {
          "@type": "PropertyValue",
          "name": "Optional Attachments",
          "value": "Rotary device, moving table"
        },
        {
          "@type": "PropertyValue",
          "name": "Dimensions",
          "value": "3 × 2 × 4 feet; 6 × 2 × 5 feet"
        },
        {
          "@type": "PropertyValue",
          "name": "Weight",
          "value": "125 kg, 300 kg"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/co2-laser-engraving-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "CO2 Laser Engraving Machine",
          "item": "https://paratechindustries.com/products/co2-laser-engraving-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/co2-laser-engraving-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I test my material before purchasing a CO₂ laser engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can contact Paratech Industries to enquire about testing your material. A sample engraving test can help you evaluate the design clarity, engraving depth, and surface finish before choosing a machine for your application."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a CO₂ laser engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser tube, operating hours, working environment, and maintenance practices. Regular cleaning of the optics, proper cooling, and timely inspection of machine components can help maintain engraving quality and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and after-sales support are available for a CO₂ laser engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the selected model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, technical support, and availability of replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "Which materials can be engraved using a CO₂ laser engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A CO₂ laser engraving machine can engrave many non-metallic materials, including wood, acrylic, leather, paper, cardboard, glass, and selected coated materials. Results vary depending on the material composition and surface finish. Always verify material compatibility before engraving, and never process PVC or unknown plastics that may release hazardous fumes."
          }
        },
        {
          "@type": "Question",
          "name": "Can a CO₂ laser engraving machine engrave logos, photographs, and customised designs?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a compatible CO₂ laser engraving machine can reproduce company logos, text, decorative patterns, photographs, and personalised artwork on suitable materials. The design must be prepared in a supported file format, and the final result depends on image resolution, material properties, focus, and laser settings."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'co2-laser-engraving-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/3d-engraving#product",
      "name": "3D Laser Engraving Machine",
      "url": "https://paratechindustries.com/products/3d-engraving",
      "description": "Paratech Industries manufactures 3D Laser Engraving Machines in  India. The machine uses fiber laser technology and is available with 60W standard power and optional 80W and 100W configurations. It has a 100 × 100 mm working area and supports detailed engraving applications on suitable materials.",
      "category": "3D Fiber Laser Engraving Machine",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Laser Type",
          "value": "Fiber Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Standard Laser Power",
          "value": "60W"
        },
        {
          "@type": "PropertyValue",
          "name": "Optional Laser Power",
          "value": "80W, 100W"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Area",
          "value": "100 × 100 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, SVG, DXF, JPEG, BMP, PNG"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/3d-engraving#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "3D Engraving",
          "item": "https://paratechindustries.com/products/3d-engraving"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/3d-engraving#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I test my material before purchasing a 3D engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can contact Paratech Industries to enquire about a sample engraving test. Testing your material can help you assess the engraving depth, design details, and final finish before selecting a machine for your application."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a 3D engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser source, machine configuration, operating conditions, usage frequency, and maintenance. Regular servicing, proper cleaning, and following the manufacturer''s operating guidelines can help maintain performance and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and technical support are available for a 3D engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage and technical support depend on the selected model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, installation assistance, and availability of replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "What materials can be processed using a 3D engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The materials supported depend on the machine''s laser technology and configuration. Depending on the system, 3D engraving may be possible on materials such as wood, acrylic, glass, stone, and selected metals. Confirm compatibility with the manufacturer before processing your intended material."
          }
        },
        {
          "@type": "Question",
          "name": "What should I consider before choosing a 3D engraving machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider the material you want to process, maximum engraving depth, working area, required design detail, production volume, software compatibility, and maintenance requirements. If you plan to create dimensional reliefs or detailed 3D artwork, ask the manufacturer whether the machine supports the specific engraving method your application requires."
          }
        }
      ]
    }
  ]
}' WHERE slug = '3d-engraving';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/3d-marking#product",
      "name": "3D Laser Marking Machine",
      "url": "https://paratechindustries.com/products/3d-marking",
      "description": "Paratech Industries offers 3D Laser Marking Machines in India. The machine uses fiber laser technology and is available with 60W standard power and optional 80W and 100W configurations. It has a 100 × 100 mm working area and supports PLT, SVG, DXF, JPEG, BMP and PNG file formats for suitable marking applications.",
      "category": "3D Fiber Laser Marking Machine",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Laser Type",
          "value": "Fiber Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Standard Laser Power",
          "value": "60W"
        },
        {
          "@type": "PropertyValue",
          "name": "Optional Laser Power",
          "value": "80W, 100W"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Area",
          "value": "100 × 100 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Supported File Formats",
          "value": "PLT, SVG, DXF, JPEG, BMP, PNG"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/3d-marking#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "3D Marking",
          "item": "https://paratechindustries.com/products/3d-marking"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/3d-marking#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I test my products before purchasing a 3D laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can contact Paratech Industries to enquire about a sample marking test. Testing your actual product can help you evaluate marking clarity, consistency, and suitability for your intended application before selecting a machine."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a 3D laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser source, operating conditions, production volume, and maintenance practices. Regular cleaning, proper operation, and periodic inspection of machine components can help maintain marking performance and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and technical support are available for a 3D laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the machine model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, technical support, and availability of replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I consider before choosing a 3D laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evaluate the material type, surface geometry, marking area, required detail, production speed, laser power, software compatibility, and integration requirements. If you need to mark curved or uneven products, confirm the machine''s supported height range and surface-marking capabilities before purchasing."
          }
        },
        {
          "@type": "Question",
          "name": "Can I mark complex logos and detailed designs using a 3D laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a suitably configured system can mark detailed logos, text, serial numbers, QR codes, and intricate patterns. The final result depends on the laser specifications, material properties, design resolution, and marking parameters."
          }
        }
      ]
    }
  ]
}' WHERE slug = '3d-marking';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/uv-laser-marking-machine#product",
      "name": "UV Laser Marking Machine",
      "url": "https://paratechindustries.com/products/uv-laser-marking-machine",
      "description": "Paratech Industries manufactures UV Laser Marking Machines in India. These machines use UV laser technology for high-precision marking on suitable non-metallic and heat-sensitive materials, including plastic, glass, ABS, PCB and rubber. Available laser output power options include 3W, 5W and 30W.",
      "category": "UV Laser Marking Machine",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Laser Type",
          "value": "UV Laser"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Average Output Power",
          "value": "3W, 5W, 30W"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Life",
          "value": "Approximately 30,000 hours"
        },
        {
          "@type": "PropertyValue",
          "name": "Wavelength",
          "value": "363 nm"
        },
        {
          "@type": "PropertyValue",
          "name": "Average Power Stability",
          "value": "Less than 3% over 24 hours"
        },
        {
          "@type": "PropertyValue",
          "name": "Pulse-to-Pulse Stability",
          "value": "Less than 3% RMS"
        },
        {
          "@type": "PropertyValue",
          "name": "Power Adjustment Range",
          "value": "1% to 200%"
        },
        {
          "@type": "PropertyValue",
          "name": "Beam Roundness",
          "value": "More than 90%"
        },
        {
          "@type": "PropertyValue",
          "name": "Polarization Ratio",
          "value": "100:1"
        },
        {
          "@type": "PropertyValue",
          "name": "Scanner Speed",
          "value": "12,000 mm/sec"
        },
        {
          "@type": "PropertyValue",
          "name": "Marking Area",
          "value": "150 × 160 mm standard"
        },
        {
          "@type": "PropertyValue",
          "name": "Maximum Power Consumption",
          "value": "340W"
        },
        {
          "@type": "PropertyValue",
          "name": "Warranty",
          "value": "1 year"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Plastic, glass, ABS, PCB, rubber and other suitable non-metal materials"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/uv-laser-marking-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "UV Laser Marking Machine",
          "item": "https://paratechindustries.com/products/uv-laser-marking-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/uv-laser-marking-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I test my material before purchasing a UV laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, you can contact Paratech Industries to enquire about a sample marking test. Testing your actual material helps you evaluate marking clarity, surface finish, and whether UV laser technology is suitable for your product before making a purchase decision."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a UV laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser source, operating hours, working environment, and maintenance practices. Regular cleaning of optical components, proper operation, and periodic servicing can help maintain marking quality and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and after-sales support are available for a UV laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the machine model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, technical support, and availability of replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "Does a UV laser marking machine require special maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Routine maintenance may include cleaning optical components according to manufacturer instructions, checking electrical connections, and keeping the machine''s working area clean. Cooling and ventilation systems should also be inspected where applicable. Following the recommended maintenance schedule helps support consistent performance."
          }
        },
        {
          "@type": "Question",
          "name": "What should I consider before choosing a UV laser marking machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider the material type, required marking size, desired contrast, production speed, working area, software compatibility, and operating environment. If you need to mark delicate or heat-sensitive products, request a sample test to verify the marking quality before selecting a machine."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'uv-laser-marking-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/jewellery-laser-cutting-machine#product",
      "name": "Jewellery Laser Cutting Machine",
      "url": "https://paratechindustries.com/products/jewellery-laser-cutting-machine",
      "description": "Paratech Industries manufactures Jewellery Laser Cutting Machines in India. Designed for precise and intricate cutting of precious-metal jewellery components, the machine supports detailed patterns, custom shapes, name designs, pendants, earrings, rings and bracelets. It is suitable for cutting compatible metals such as gold, silver, platinum and brass.",
      "category": "Jewellery Laser Cutting Machine",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Laser Source",
          "value": "German Source"
        },
        {
          "@type": "PropertyValue",
          "name": "Cutting Size",
          "value": "100 × 100 mm and customized"
        },
        {
          "@type": "PropertyValue",
          "name": "Cutting Depth",
          "value": "0.01 micron to 1.5 mm (as published on the product page)"
        },
        {
          "@type": "PropertyValue",
          "name": "Optional Attachments",
          "value": "Rotary, fume extractor"
        },
        {
          "@type": "PropertyValue",
          "name": "Working Voltage",
          "value": "Single phase, 220–230V, 50Hz; earthing required"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Gold, silver, platinum, brass and other compatible metals"
        },
        {
          "@type": "PropertyValue",
          "name": "Applications",
          "value": "Jewellery patterns, custom shapes, name designs, pendants, earrings, rings, bracelets and decorative components"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/jewellery-laser-cutting-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jewellery Laser Cutting Machine",
          "item": "https://paratechindustries.com/products/jewellery-laser-cutting-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/jewellery-laser-cutting-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I test my jewellery designs before purchasing a jewellery laser cutting machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Paratech Industries to enquire about a sample cutting test using your jewellery design or material. Testing helps you assess cutting precision, edge finish, and the machine''s suitability for producing intricate jewellery patterns before making a purchase decision."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a jewellery laser cutting machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser source, operating hours, production conditions, and maintenance practices. Regular servicing, proper cleaning, and following the manufacturer''s operating instructions can help maintain cutting accuracy and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and after-sales support are available for a jewellery laser cutting machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the selected machine model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, technical support, and availability of replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I check before choosing a jewellery laser cutting machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider the types of metals you work with, material thickness, cutting area, required design complexity, cutting speed, accuracy, software compatibility, and expected production volume. Testing representative jewellery designs can help you evaluate whether the machine meets your manufacturing requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Does laser cutting help reduce material waste when manufacturing jewellery",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Laser cutting can help reduce waste through precise cutting paths and efficient nesting of jewellery designs. However, actual material savings depend on the layout, spacing between designs, kerf width, and the complexity of each piece."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'jewellery-laser-cutting-machine';

UPDATE products SET custom_schema = '{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://paratechindustries.com/#organization",
      "name": "Paratech Industries",
      "url": "https://paratechindustries.com/",
      "email": "info@paratechindustries.com",
      "telephone": "+91 9879533323",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
        "addressLocality": "Surat",
        "addressRegion": "Gujarat",
        "postalCode": "395002",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "Product",
      "@id": "https://paratechindustries.com/products/jewellery-laser-soldering-machine#product",
      "name": "Jewellery Laser Soldering Machine",
      "url": "https://paratechindustries.com/products/jewellery-laser-soldering-machine",
      "description": "Paratech Industries manufactures Jewellery Laser Soldering Machines in India. The Jumbo model uses an Nd:YAG laser source and is designed for precision soldering and welding of delicate jewellery components made from compatible metals such as gold, silver and platinum.",
      "category": "Jewellery Laser Soldering Machine",
      "brand": {
        "@type": "Brand",
        "name": "Paratech Industries"
      },
      "manufacturer": {
        "@id": "https://paratechindustries.com/#organization"
      },
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Model Name",
          "value": "Jumbo"
        },
        {
          "@type": "PropertyValue",
          "name": "Output Power",
          "value": "200W"
        },
        {
          "@type": "PropertyValue",
          "name": "Single-Pulse Energy",
          "value": "110 J"
        },
        {
          "@type": "PropertyValue",
          "name": "Machine Design Type",
          "value": "Desktop / Vertical"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Source",
          "value": "Nd:YAG"
        },
        {
          "@type": "PropertyValue",
          "name": "Laser Wavelength",
          "value": "1064 nm"
        },
        {
          "@type": "PropertyValue",
          "name": "Pump Lamp",
          "value": "Pulsed Xenon Lamp"
        },
        {
          "@type": "PropertyValue",
          "name": "Pulse Duration",
          "value": "0.1–15 ms adjustable"
        },
        {
          "@type": "PropertyValue",
          "name": "Pulse Repetition Frequency",
          "value": "1–20 Hz adjustable"
        },
        {
          "@type": "PropertyValue",
          "name": "Welding Spot Diameter",
          "value": "0.1–3 mm"
        },
        {
          "@type": "PropertyValue",
          "name": "Observation System",
          "value": "Microscope / CCD based on requirement"
        },
        {
          "@type": "PropertyValue",
          "name": "Cooling System",
          "value": "Water chiller"
        },
        {
          "@type": "PropertyValue",
          "name": "Power Supply",
          "value": "Single phase AC 220V ±10%, 50Hz / 60Hz, 4kW"
        },
        {
          "@type": "PropertyValue",
          "name": "Running Environment",
          "value": "Temperature 5°C–28°C; humidity 5%–70%"
        },
        {
          "@type": "PropertyValue",
          "name": "Compatible Materials",
          "value": "Gold, silver, platinum and selected compatible jewellery alloys"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://paratechindustries.com/products/jewellery-laser-soldering-machine#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://paratechindustries.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://paratechindustries.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Jewellery Laser Soldering Machine",
          "item": "https://paratechindustries.com/products/jewellery-laser-soldering-machine"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://paratechindustries.com/products/jewellery-laser-soldering-machine#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Can I test my jewellery pieces before purchasing a jewellery laser soldering machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Paratech Industries to enquire about a sample soldering or welding test using your jewellery pieces. Testing helps you evaluate joint quality, precision, and the machine''s suitability for delicate jewellery components before making a purchase decision."
          }
        },
        {
          "@type": "Question",
          "name": "What is the expected lifespan of a jewellery laser soldering machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The lifespan depends on the laser source, operating conditions, usage frequency, and maintenance practices. Regular inspection, proper cleaning, and following the manufacturer''s maintenance guidelines can help maintain performance and extend the machine''s useful life."
          }
        },
        {
          "@type": "Question",
          "name": "What warranty and after-sales support are available for a jewellery laser soldering machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Warranty coverage depends on the selected machine model and the manufacturer''s terms. Before purchasing, contact Paratech Industries to confirm the warranty period, covered components, technical support, and availability of replacement parts."
          }
        },
        {
          "@type": "Question",
          "name": "What should I consider before choosing a jewellery laser soldering machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Consider the jewellery metals you work with, the size of the components, required joint precision, repair or production volume, available working space, and operator training requirements. Ask the supplier to demonstrate the machine on representative jewellery pieces before selecting a model."
          }
        },
        {
          "@type": "Question",
          "name": "Which jewellery materials can be joined using a laser soldering machine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depending on the machine''s capabilities and the joining method, compatible jewellery materials may include gold, silver, platinum, and selected jewellery alloys. The appropriate settings depend on the metal composition, component thickness, joint design, and whether soldering or direct fusion is required."
          }
        }
      ]
    }
  ]
}' WHERE slug = 'jewellery-laser-soldering-machine';

-- 3. Verification: Check that schemas are populated
SELECT id, slug, name, LENGTH(custom_schema) AS schema_length 
FROM products 
ORDER BY id ASC;
