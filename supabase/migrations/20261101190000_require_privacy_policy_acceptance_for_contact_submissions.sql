alter table public.leads
  add column if not exists privacy_policy_accepted boolean,
  add column if not exists privacy_policy_version text;

drop policy if exists "Allow public contact submissions" on public.leads;

create policy "Allow public contact submissions with privacy acknowledgement"
  on public.leads
  for insert
  to anon
  with check (
    privacy_policy_accepted is true
    and privacy_policy_version = '2026-10'
  );
