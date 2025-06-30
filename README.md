# Ceetorial

**Learn something new every day** — Ceetorial delivers daily bite-sized tutorials on web development and programming topics.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_NETLIFY_BADGE_HERE/deploy-status)](https://app.netlify.com/sites/ceetorial/deploys)

## 🚀 Demo

Live demo: https://ceetorial.netlify.app/

---

## 💡 Overview

Ceetorial offers a **Daily Challenge** page where users:

- See today’s tutorial/challenge (title, description, difficulty badge)
- Start the challenge with a smooth loading state
- Track progress with ✅ or 🔒 status
- View a countdown timer until the next challenge
- Build a streak with badges (Bronze|Silver|Gold)

### Tech Stack

| Component      | Tech                          |
|----------------|-------------------------------|
| Frontend       | React (Vite, TypeScript)      |
| Styling        | TailwindCSS                   |
| Animations     | Framer Motion                 |
| Database       | Supabase (Auth, Postgres, RLS)|
| Hosting        | Netlify                       |

---

## ⌨️ Getting Started

### 1. Clone and install

```bash
git clone https://github.com/illusies/ceetorial-bolt-new.git
cd ceetorial-bolt-new
npm install
````

### 2. Configure `.env`

Copy `.env.example` to `.env`:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_STRIPE_PUBLIC_KEY=your-public-stripe-key
```

### 3. Start development

```bash
npm run dev
```

---

## 🧪 Testing

### Unit & Integration Tests (Vitest)

```bash
npx vitest run
```

✔️ Includes UI logic and Supabase signup integration tests.

### End-to-End Tests (Playwright)

```bash
npx playwright install
npx playwright test
```

✔️ Covers homepage load, signup flow, daily challenge interactions.

---

## 🏗️ Database & Security

### Schema – `supabase/init.sql`

```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  username text unique,
  avatar_url text,
  created_at timestamptz default now()
);

alter table profiles enable row level security;
create policy "select own profile" on profiles for select using (auth.uid() = id);
create policy "update own profile" on profiles for update using (auth.uid() = id);
create policy "insert own profile" on profiles for insert with check (auth.uid() = id);
```

### RPC Function – Streak Calculation

```sql
create or replace function get_user_streak()
returns integer
language plpgsql
security definer
as $$
DECLARE
  streak int := 0;
  last_date date := current_date;
BEGIN
  FOR rec IN
    SELECT completed_at::date AS date
    FROM challenge_completions
    WHERE user_id = auth.uid()
    ORDER BY completed_at DESC
  LOOP
    IF rec.date = last_date THEN
      streak := streak + 1;
      last_date := last_date - interval '1 day';
    ELSE
      EXIT;
    END IF;
  END LOOP;
  RETURN streak;
END;
$$;
```

---

## 📦 Deployment

* Set environment variables in Netlify dashboard (`VITE_…` keys).
* Ensure Supabase tables & RLS policies are deployed.
* Continuous deployment on every push to `main`.

---

## ✅ Hackathon Rules Compliance

* **Original** work: built from scratch using Supabase and React.
* **Open source**: public GitHub repo included.
* **Fully functional demo**: live Netlify URL provided.
* **Allowed dependencies**: only OSS packages in use.
* **Clear documentation**: setup, test, and deployment instructions included.

---

## 🎯 Feature Sheet

* Daily challenges stored in Supabase `daily_challenges`
* User progress recorded in `challenge_completions`
* Countdown timer resets at midnight each day
* Streak mechanic via `get_user_streak` RPC
* UI animations using Framer Motion
* Accessible and responsive layout with TailwindCSS

---

## 📈 Roadmap Ideas

* **Leaderboard** of top streaks
* **Email reminders** on missed days
* Allow users to **submit solutions** and receive feedback
* Dark mode toggle
* Support for multi-day or community challenges

---

## 🤝 Contributing

Contributions welcome! To contribute:

1. Fork and create a new branch
2. Add your feature or fix
3. Write/update tests
4. Submit a pull request

---

## 🧑‍⚖️ License

This project is released under the **MIT License**. See `LICENSE.md` for details.

---

## 👤 Author

**illusies** – building bite-sized learning tools.

---
