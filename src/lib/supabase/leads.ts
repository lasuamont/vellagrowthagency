import { supabase } from './client';
import { Lead } from './types';

export async function insertLead(lead: Omit<Lead, 'id' | 'created_at'>): Promise<{ data: Lead | null; error: Error | null }> {
  const { data, error } = await supabase
    .from('leads')
    .insert([lead])
    .select()
    .single();

  if (error) {
    return { data: null, error };
  }

  return { data: data as Lead, error: null };
}
