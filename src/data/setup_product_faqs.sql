-- ==========================================================================
-- SUPABASE / POSTGRESQL PRODUCTION MIGRATION
-- Project: Paratech Industries
-- Description: Add 'faqs' column to 'products' table (defaults to empty [])
-- Note: FAQs are managed dynamically via the Admin Panel per product.
--       If a product has no FAQs added, none will be displayed on the page.
-- ==========================================================================

-- 1. Add the 'faqs' JSONB column to the 'products' table with an empty array default
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb;

-- 2. Create a GIN index on 'faqs' for high performance querying
CREATE INDEX IF NOT EXISTS idx_products_faqs ON products USING gin (faqs);

-- 3. Reset any existing NULL faqs to empty JSON array
UPDATE products 
SET faqs = '[]'::jsonb 
WHERE faqs IS NULL;

-- 4. Verification: Check that the column was added successfully
SELECT column_name, data_type, column_default 
FROM information_schema.columns 
WHERE table_name = 'products' AND column_name = 'faqs';
