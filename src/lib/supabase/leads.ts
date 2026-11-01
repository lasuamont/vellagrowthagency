import { getSupabase } from './client';
import { Lead } from './types';

export async function insertLead(lead: Pick<Lead, 'name' | 'email' | 'message'>): Promise<{ data: Lead | null; error: Error | null }> {
  // Do not request the inserted row back: the public anon role is intentionally
  // allowed to INSERT leads but not SELECT them, to keep submissions private.
  const { error } = await getSupabase()
    .from('leads')
    .insert(lead);

  if (error) {
    return { data: null, error };
  }

  return { data: null, error: null };
}
