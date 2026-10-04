insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'tutor-applications',
  'tutor-applications',
  false,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'application/pdf']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Public can upload tutor application files" on storage.objects;
drop policy if exists "Public can upload tutrSTEM files" on storage.objects;
create policy "Public can upload tutrSTEM files"
on storage.objects
for insert
to anon
with check (
  bucket_id = 'tutor-applications'
  and (storage.foldername(name))[1] in ('applications', 'profile-photos', 'message-attachments')
);

drop policy if exists "Anon can create signed links for tutor application files" on storage.objects;
drop policy if exists "Anon can create signed links for tutrSTEM files" on storage.objects;
create policy "Anon can create signed links for tutrSTEM files"
on storage.objects
for select
to anon
using (
  bucket_id = 'tutor-applications'
  and (storage.foldername(name))[1] in ('applications', 'profile-photos', 'message-attachments')
);
