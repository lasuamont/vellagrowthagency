-- Create the public contact form leads table.
-- Public visitors can submit a lead, but cannot read existing submissions.

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(btrim(name)) between 1 and 200),
  email text not null check (char_length(btrim(email)) between 3 and 320),
  message text not null check (char_length(btrim(message)) between 1 and 5000),
  created_at timestamptz not null default now()
);

alter table public.leads enable row level security;

-- New Supabase projects do not automatically expose newly created public tables.
-- Grant only the schema usage and INSERT privilege required by the browser form.
grant usage on schema public to anon;
revoke all on table public.leads from anon, authenticated;
grant insert on table public.leads to anon;

create policy "Allow public contact submissions"
  on public.leads
  for insert
  to anon
  with check (true);
