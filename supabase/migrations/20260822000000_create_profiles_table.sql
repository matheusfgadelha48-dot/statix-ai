create table if not exists public.profiles (
  id uuid references auth.users on delete cascade primary key,
  name text,
  email text,
  plan text default 'FREE',
  usage_count int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

create policy "Usuários podem ver seus próprios perfis." on public.profiles
  for select using (auth.uid() = id);

create policy "Usuários podem atualizar seus próprios perfis." on public.profiles
  for update using (auth.uid() = id);

create or replace function public.handle_new_user()
returns trigger as utf8
begin
  insert into public.profiles (id, name, email, plan)
  values (
    new.id,
    new.raw_user_meta_data->>'name',
    new.email,
    'FREE'
  );
  return new;
end;
utf8 language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
