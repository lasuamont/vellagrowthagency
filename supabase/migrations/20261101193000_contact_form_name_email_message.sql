-- Update the leads table for the simplified Name / Email / Message contact form.
-- Existing company, website, consent, and lead records are preserved.

alter table public.leads
  add column if not exists message text;

alter table public.leads
  alter column company drop not null,
  alter column website drop not null,
  alter column consent drop not null;
