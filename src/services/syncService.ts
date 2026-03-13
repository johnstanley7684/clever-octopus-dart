import { supabase } from '@/lib/supabase';
import { fetchLiveStats } from './statsService';

export const syncStatsToDatabase = async (playerData: any[]) => {
  // This function would take the scraped data and upsert it into Supabase
  // For now, we'll simulate the database interaction
  
  const { data, error } = await supabase
    .from('player_stats')
    .upsert(playerData, { onConflict: 'player_id' });

  if (error) throw error;
  return data;
};

export const getStatsFromDatabase = async () => {
  const { data, error } = await supabase
    .from('player_stats')
    .select('*')
    .order('pts', { ascending: false });

  if (error) throw error;
  return data;
};