import { createClient } from '@supabase/supabase-js';

// Use empty strings as defaults to avoid 'undefined' errors during initialization
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Only attempt to create the client if we have a URL that looks like a URL
const isValidUrl = supabaseUrl.startsWith('http');

if (!isValidUrl) {
  console.error("Supabase Error: VITE_SUPABASE_URL is missing or invalid. Please check your environment variables.");
}

// We provide a dummy URL if invalid to satisfy the library's constructor, 
// but we'll check 'isConfigured' before making actual calls.
export const supabase = createClient(
  isValidUrl ? supabaseUrl : 'https://placeholder-url.supabase.co',
  supabaseKey || 'placeholder-key'
);

export const isConfigured = isValidUrl && !!supabaseKey;