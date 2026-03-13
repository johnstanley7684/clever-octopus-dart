import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// We use a placeholder if the URL is missing to prevent the app from crashing immediately,
// but we log a clear warning so you know why the database isn't working.
const isConfigured = supabaseUrl && supabaseKey;

if (!isConfigured) {
  console.error("Supabase Error: VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY is missing from environment variables.");
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co', 
  supabaseKey || 'placeholder-key'
);

export { isConfigured };