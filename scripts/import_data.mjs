import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

// Read .env.local
const env = fs.readFileSync('.env.local', 'utf8');
const url = env.match(/NEXT_PUBLIC_SUPABASE_URL=(.*)/)?.[1]?.trim();
const key = env.match(/NEXT_PUBLIC_SUPABASE_ANON_KEY=(.*)/)?.[1]?.trim();

if (!url || !key) {
  console.error('Missing Supabase URL or Key in .env.local');
  process.exit(1);
}

const supabase = createClient(url, key);

function parseSqlInsert(sql) {
  const match = sql.match(/INSERT INTO\s+"?public"?\."?(\w+)"?\s*\(([^)]+)\)\s*VALUES\s*([\s\S]+);?\s*$/i);
  if (!match) {
    throw new Error('Failed to match INSERT INTO statement');
  }

  const tableName = match[1];
  const columns = match[2]
    .split(',')
    .map(c => c.trim().replace(/^["']|["']$/g, ''));

  const rawValues = match[3].trim();
  
  const rows = [];
  let inRow = false;
  let inString = false;
  let stringQuote = '';
  let currentVal = '';
  let currentRow = [];
  
  for (let i = 0; i < rawValues.length; i++) {
    const char = rawValues[i];
    
    if (inString) {
      if (char === "'" && rawValues[i + 1] === "'") {
        currentVal += "'";
        i++;
      } else if (char === '\\' && (rawValues[i + 1] === "'" || rawValues[i + 1] === '\\')) {
        currentVal += rawValues[i + 1];
        i++;
      } else if (char === stringQuote) {
        inString = false;
      } else {
        currentVal += char;
      }
    } else {
      if (char === '(' && !inRow) {
        inRow = true;
        currentRow = [];
        currentVal = '';
      } else if (char === ')' && inRow) {
        inRow = false;
        currentRow.push(cleanValue(currentVal));
        currentVal = '';
        
        const rowObj = {};
        columns.forEach((col, idx) => {
          rowObj[col] = currentRow[idx];
        });
        rows.push(rowObj);
      } else if (char === ',' && inRow) {
        currentRow.push(cleanValue(currentVal));
        currentVal = '';
      } else if (char === "'" || char === '"') {
        inString = true;
        stringQuote = char;
      } else if (!/\s/.test(char) || currentVal.length > 0) {
        currentVal += char;
      }
    }
  }

  return { tableName, columns, rows };
}

function cleanValue(val) {
  val = val.trim();
  if (val.toUpperCase() === 'NULL' || val === '') return null;
  if (!isNaN(val) && !val.includes('-') && !val.includes(':')) {
    return Number(val);
  }
  // Try to parse JSON array / object if applicable, or keep string
  if ((val.startsWith('[') && val.endsWith(']')) || (val.startsWith('{') && val.endsWith('}'))) {
    try {
      return JSON.parse(val);
    } catch {
      return val;
    }
  }
  return val;
}

async function run() {
  console.log('--- Step 1: Parsing products_rows.sql ---');
  const productsSql = fs.readFileSync('products_rows.sql', 'utf8');
  const productsData = parseSqlInsert(productsSql);
  console.log(`Parsed ${productsData.rows.length} products.`);

  console.log('--- Step 2: Parsing blogs_rows.sql ---');
  const blogsSql = fs.readFileSync('blogs_rows.sql', 'utf8');
  const blogsData = parseSqlInsert(blogsSql);
  console.log(`Parsed ${blogsData.rows.length} blogs.`);

  // Import products
  console.log('\n--- Step 3: Upserting Products into Supabase ---');
  for (let i = 0; i < productsData.rows.length; i += 5) {
    const chunk = productsData.rows.slice(i, i + 5);
    const { error } = await supabase.from('products').upsert(chunk, { onConflict: 'id' });
    if (error) {
      console.error(`Error inserting products chunk ${i}:`, error);
    } else {
      console.log(`Saved products ${i + 1} to ${Math.min(i + 5, productsData.rows.length)}`);
    }
  }

  // Clear existing blogs to avoid slug/id conflict with old mismatched IDs
  console.log('\n--- Step 4: Syncing Blogs into Supabase ---');
  // First, let's delete all existing rows from blogs so the IDs (12..46) and slugs match blogs_rows.sql cleanly
  const { error: delError } = await supabase.from('blogs').delete().neq('id', 0);
  if (delError) {
    console.error('Error clearing old blogs:', delError);
  } else {
    console.log('Cleared existing blogs for clean import.');
  }

  // Insert blogs in chunks
  for (let i = 0; i < blogsData.rows.length; i += 5) {
    const chunk = blogsData.rows.slice(i, i + 5);
    const { error } = await supabase.from('blogs').insert(chunk);
    if (error) {
      console.error(`Error inserting blogs chunk ${i}:`, error);
    } else {
      console.log(`Inserted blogs ${i + 1} to ${Math.min(i + 5, blogsData.rows.length)}`);
    }
  }

  console.log('\n--- Step 5: Verification ---');
  const { data: allProducts, count: pCount } = await supabase.from('products').select('id, name, slug', { count: 'exact' });
  const { data: allBlogs, count: bCount } = await supabase.from('blogs').select('id, title, slug', { count: 'exact' });

  console.log(`\nSuccessfully verified database:`);
  console.log(`- Products count: ${pCount}`);
  console.log(`- Blogs count: ${bCount}`);
}

run().catch(console.error);
