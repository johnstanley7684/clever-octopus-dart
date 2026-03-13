import { supabase, isConfigured } from '@/lib/supabase';

export const syncStatsToDatabase = async (playerData: any[]) => {
  if (!isConfigured) {
    console.warn("Sync skipped: Supabase is not configured.");
    return null;
  }
  
  const { data, error } = await supabase
    .from('player_stats')
    .upsert(playerData, { onConflict: 'player_id' });

  if (error) throw error;
  return data;
};

export const getStatsFromDatabase = async () => {
  if (!isConfigured) {
    return null;
  }

  const { data, error } = await supabase
    .from('player_stats')
    .select('*')
    .order('pts', { ascending: false });

  if (error) throw error;
  return data;
};