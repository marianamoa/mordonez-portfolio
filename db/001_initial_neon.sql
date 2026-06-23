create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  source text not null default 'website',
  status text not null default 'active' check (status in ('active', 'unsubscribed', 'bounced')),
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists subscribers_email_lower_idx
  on public.subscribers (lower(email));

drop trigger if exists subscribers_set_updated_at on public.subscribers;
create trigger subscribers_set_updated_at
before update on public.subscribers
for each row execute function public.set_updated_at();

create table if not exists public.journal_entries (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  excerpt text not null,
  body_markdown text not null,
  primary_keyword text not null,
  meta_description text not null,
  category text not null,
  role_tags text[] not null default '{}',
  outline text[] not null default '{}',
  cover_image text,
  og_image text,
  published_at timestamptz,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists journal_entries_status_published_idx
  on public.journal_entries (status, published_at desc);

create index if not exists journal_entries_role_tags_idx
  on public.journal_entries using gin (role_tags);

drop trigger if exists journal_entries_set_updated_at on public.journal_entries;
create trigger journal_entries_set_updated_at
before update on public.journal_entries
for each row execute function public.set_updated_at();

insert into public.journal_entries (
  slug,
  title,
  excerpt,
  body_markdown,
  primary_keyword,
  meta_description,
  category,
  role_tags,
  outline,
  published_at,
  status
) values
(
  'ai-ab-tests-faster-design-craft',
  'How I Use AI to Run A/B Tests 3x Faster',
  'Where AI helps with ideation, asset variants and copy exploration, and where human taste and conversion judgment still make the call.',
  $$# How I Use AI to Run A/B Tests 3x Faster

AI is useful when it expands the number of testable directions without removing strategy, taste or quality control.

## Key points

- The old variant-production bottleneck.
- Where AI plugs in: ideation, asset generation and copy variants.
- Where humans stay in control: hypothesis, taste and QA.
- A before and after timeline for a faster testing loop.
$$,
  'AI-assisted design workflow',
  'How AI speeds A/B testing for eCommerce design without losing strategy, taste, QA or conversion craft.',
  'AI Product, AI UX, CRO',
  array['AI Product', 'AI UX', 'CRO'],
  array[
    'The old variant-production bottleneck.',
    'Where AI plugs in: ideation, asset generation and copy variants.',
    'Where humans stay in control: hypothesis, taste and QA.',
    'A before and after timeline for a faster testing loop.'
  ],
  '2026-06-01T12:00:00Z',
  'published'
),
(
  'trustworthy-ai-interfaces',
  'Designing Trustworthy AI Interfaces',
  'Explainability, confidence, graceful failure and human-in-the-loop patterns for AI features people can trust.',
  $$# Designing Trustworthy AI Interfaces

AI UX needs to communicate uncertainty as clearly as it communicates output.

## Key points

- Why AI UX is different from standard product UX.
- Patterns for confidence, uncertainty and clear next steps.
- How to design useful empty states and failure states.
- What makes human review feel safe instead of slow.
$$,
  'designing AI products',
  'AI UX patterns for explainability, confidence, graceful failure and human-in-the-loop product design.',
  'AI Product, AI UX',
  array['AI Product', 'AI UX'],
  array[
    'Why AI UX is different from standard product UX.',
    'Patterns for confidence, uncertainty and clear next steps.',
    'How to design useful empty states and failure states.',
    'What makes human review feel safe instead of slow.'
  ],
  '2026-06-02T12:00:00Z',
  'published'
),
(
  'high-converting-product-detail-page',
  'The Anatomy of a High-Converting Product Detail Page',
  'Above-the-fold hierarchy, variant selectors, trust proof and mobile-first decisions that help shoppers buy.',
  $$# The Anatomy of a High-Converting Product Detail Page

A strong PDP answers buyer doubts in the order shoppers actually feel them.

## Key points

- Above-the-fold hierarchy for fast shopper confidence.
- Variant, bundle and quantity selector patterns.
- Trust, returns and proof where buyers need it.
- Amazon A+ and Shopify differences.
$$,
  'high-converting product detail page',
  'A practical PDP design framework for eCommerce conversion, variant selectors, trust proof and mobile UX.',
  'CRO, Web',
  array['CRO', 'Web'],
  array[
    'Above-the-fold hierarchy for fast shopper confidence.',
    'Variant, bundle and quantity selector patterns.',
    'Trust, returns and proof where buyers need it.',
    'Amazon A+ and Shopify differences.'
  ],
  '2026-06-03T12:00:00Z',
  'published'
),
(
  'scalable-design-system-figma',
  'From Wireframe to Shippable: Building a Scalable Design System in Figma',
  'Tokens, components, patterns and handoff docs that make experimentation faster instead of messier.',
  $$# From Wireframe to Shippable: Building a Scalable Design System in Figma

A design system should turn repeated decisions into shared product language.

## Key points

- Start with tokens and repeated product decisions.
- Turn components into patterns, not just parts.
- Document handoff rules that developers can trust.
- Use the system to speed experimentation.
$$,
  'design system in Figma',
  'How to structure a Figma design system around tokens, components, patterns and developer handoff.',
  'Product, UI/UX',
  array['Product', 'UI/UX'],
  array[
    'Start with tokens and repeated product decisions.',
    'Turn components into patterns, not just parts.',
    'Document handoff rules that developers can trust.',
    'Use the system to speed experimentation.'
  ],
  '2026-06-04T12:00:00Z',
  'published'
),
(
  'landing-page-cro-fixes',
  'CRO Teardown: 7 Landing-Page Fixes That Lift Conversion',
  'Seven practical fixes across hierarchy, CTA clarity, friction, proof, speed, forms and mobile UX.',
  $$# CRO Teardown: 7 Landing-Page Fixes That Lift Conversion

Landing pages convert when the next decision is obvious and every proof point appears before doubt wins.

## Key points

- Make the primary action visible without hunting.
- Reduce form and checkout friction.
- Add proof close to moments of doubt.
- Design mobile first because mobile decides the sale.
$$,
  'landing page CRO',
  'Seven landing-page CRO fixes for hierarchy, CTA clarity, friction, proof, speed, forms and mobile UX.',
  'CRO, Web',
  array['CRO', 'Web'],
  array[
    'Make the primary action visible without hunting.',
    'Reduce form and checkout friction.',
    'Add proof close to moments of doubt.',
    'Design mobile first because mobile decides the sale.'
  ],
  '2026-06-05T12:00:00Z',
  'published'
),
(
  'generative-ai-toolkit-designers',
  'Prompting as a Design Skill',
  'My generative-AI toolkit for moodboards, assets, copy, research synthesis and faster production with guardrails.',
  $$# Prompting as a Design Skill

Prompting is a design skill when it makes intent clearer and production faster.

## Key points

- Prompt patterns for moodboards and directions.
- AI for copy variants and content exploration.
- Guardrails for brand consistency.
- What AI still cannot replace.
$$,
  'generative AI design tools',
  'A practical generative AI toolkit for designers covering prompts, assets, copy, synthesis and brand guardrails.',
  'AI UX, Brand',
  array['AI UX', 'Brand'],
  array[
    'Prompt patterns for moodboards and directions.',
    'AI for copy variants and content exploration.',
    'Guardrails for brand consistency.',
    'What AI still cannot replace.'
  ],
  '2026-06-06T12:00:00Z',
  'published'
)
on conflict (slug) do update set
  title = excluded.title,
  excerpt = excluded.excerpt,
  body_markdown = excluded.body_markdown,
  primary_keyword = excluded.primary_keyword,
  meta_description = excluded.meta_description,
  category = excluded.category,
  role_tags = excluded.role_tags,
  outline = excluded.outline,
  published_at = excluded.published_at,
  status = excluded.status,
  updated_at = now();
