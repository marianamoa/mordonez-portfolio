# mordonez-portfolio

Astro portfolio site for Mariana Ordonez with Neon Postgres-ready server setup.

## Routes

- `/` - Home positioning and selected proof.
- `/work/` - Case-study index.
- `/work/[slug]/` - Case-study detail pages.
- `/journal/` - SEO article index.
- `/journal/[slug]/` - Article brief pages.
- `/tools/` - Design and AI stack plus resources.
- `/play/` - Illustration and visual experiments.
- `/about/` - Remote nearshore product designer profile.
- `/rss.xml`, `/robots.txt`, `/sitemap-index.xml` - Technical SEO.

## Commands

```sh
npm install
./node_modules/.bin/astro dev --background --host 127.0.0.1
npm run build
```

## Neon

Database access uses the Neon serverless driver in `src/lib/neon.server.ts`.
The site is statically generated, and the Journal is fetched from Neon at build
time. If `DATABASE_URL` is missing, the app falls back to the static entries in
`src/data/site.ts`.

Copy `.env.example` to `.env.local` and set the Neon connection string from the
Neon Console's Connect modal:

```sh
DATABASE_URL="postgresql://<user>:<password>@<endpoint>.neon.tech/<dbname>?sslmode=require&channel_binding=require"
```

Neon does not provide built-in blob storage. Keep static assets in `public/` or
use a dedicated object-storage provider later.

### Project context

This repo is linked to Neon project `weathered-glade-61135153`, branch
`production`, in `.neon`.

```sh
npx neonctl checkout production
```

### Schema

Database schema and seed data live in `db/001_initial_neon.sql`.

Tables:

- `subscribers` - newsletter/resource subscribers.
- `journal_entries` - published Journal/blog content used by Astro at build time.

Apply the schema:

```sh
npx neonctl psql production -- -v ON_ERROR_STOP=1 -f db/001_initial_neon.sql
```

Verify:

```sh
npx neonctl psql production -- -c "select count(*) from public.journal_entries;"
```
