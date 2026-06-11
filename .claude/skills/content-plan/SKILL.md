---
name: content-plan
description: Plan the content for Mariana Ordoñez's portfolio/about/journal site (this repo). Interviews Mariana in her own language about goals, audience, projects, and art; audits what already exists in the repo; then writes a prioritized content plan — positioning, site map, page outlines, case studies, journal/blog topics, SEO metadata, asset checklist, phased roadmap — as Markdown planning documents under docs/ (e.g. docs/content-plan.md). Planning only: this skill writes Markdown plans, never pages, site content, or code. Use whenever Mariana wants to plan, organize, decide, or rethink what to show on her site, e.g. "what should I put on my site", "plan my portfolio content", "help me with my case studies", "what should I write about", "qué contenido pongo en mi portafolio", "organicemos el contenido del sitio" — even if she never says the word "plan".
---

# Content plan for Mariana's portfolio

> **This skill produces only Markdown planning documents under `docs/` — it plans what the site should say, it never builds the site.** Do not create or edit pages, components, content-collection entries, styles, config, or any file outside `docs/`, and do not write finished posts or case-study copy. Turning the plan into real pages or content is a separate job Mariana must request on its own, after the plan exists.

## Context: why this site exists

Mariana Ordoñez is a designer, artist, and e-commerce content specialist repositioning herself as an **AI Experience Designer · AI-Powered Experiences & E-commerce Content Expert**. This site (portfolio + about + journal) is her main tool for landing a better-paid role in the AI space.

Judge every content decision against one question: *does this help a hiring manager believe she can design AI-powered experiences?*

A better salary is her motivation, not her message. The plan should make the site radiate craft, judgment, and value — never neediness. If she drafts something that reads as "please hire me", reframe it as evidence of what she does well.

## How to work with her

- **She is a designer, not a developer.** Plain language. Say "the page that lists your projects", not "the collection route". Never make her read code.
- **Mirror her language.** If she writes in Spanish, conduct the whole conversation in Spanish and write the plan in Spanish. Same for English.
- **Interview in small doses.** 2–4 questions at a time, grouped by topic. Use the AskUserQuestion tool when available, otherwise ask in plain text. Never dump the full question bank on her at once.
- **Momentum beats completeness.** If she doesn't know an answer, or you cannot ask (running non-interactively), make a sensible call yourself, mark it inline as `[ASSUMPTION]` / `[SUPUESTO]`, and collect all of them in the plan's open-questions section so she can react later. Never stall the plan waiting for an answer.

## Process

### 1. Audit before asking

Read these first so your questions show you did the homework:

- `src/content.config.ts` — which content collections exist and what frontmatter they require
- `src/content/` — what is already published or drafted
- `src/pages/` — which pages exist today
- `docs/content-plan.md` — if it exists, you are **updating**, not starting over: read it, keep decisions she already made, and ask what has changed since.

The plan must map to reality. In the plan, note which proposed content would fit an existing collection (ready to write later) and which needs a section or page that doesn't exist yet (a build task to request separately, from Claude Code or a developer). Don't pretend a page exists when it doesn't — and don't build or write either kind here. The skill only records them in the plan.

### 2. Interview Mariana

Read `references/interview-guide.md` for the question bank and the reasoning behind each topic. Skip any topic her message already answered. Reflect back what you heard before moving on — she should feel listened to, not processed.

### 3. Write the plan

Read `references/plan-template.md` and fill it in. Save to `docs/content-plan.md` (create the `docs/` folder if needed). If the plan grows large, or Mariana prefers it, you may split it into several Markdown files under `docs/` — for example one file per case study — linked from the main `docs/content-plan.md`; everything stays Markdown under `docs/` and nothing else is touched. Write the plan in her language, translating the template headings. When updating an existing plan, preserve her past decisions unless she changed her mind, and add a dated line to the changelog at the bottom.

### 4. Hand back

End the conversation with, in her language:

1. The 3 decisions that most shape the site (so she can veto them fast)
2. The Phase 1 checklist — the minimum content to start applying for jobs
3. What only she can gather: metrics, images, links, permissions

If she wants to go further, tell her that drafting a post or building the missing sections are separate jobs she can ask for in a fresh request — this skill ends with the plan written. Do not start them here.

## Principles for a job-hunting portfolio

Apply these while drafting; they are the difference between a pretty site and one that gets interviews.

- **The 30-second test.** Recruiters skim. The home page must communicate who she is, what she designs, and one impressive proof — within seconds, without scrolling.
- **Evidence over adjectives.** "Cut product-photo cost 60% with an AI pipeline" beats "passionate about innovation". Every case study needs outcomes; if numbers are missing, the plan lists exactly which metrics she should dig up.
- **Process is the product.** For AI-experience roles, *how* she works with AI — prompts, iterations, what she rejected and why — is the differentiator. "Used Midjourney" is a commodity; her judgment is not.
- **E-commerce × AI is the niche.** Plenty of designers claim AI skills; few pair them with years of real e-commerce content operations. Lead with the intersection.
- **The journal is proof of thinking.** Short, frequent field notes about working with AI show an active mind between jobs. Plan topics she can actually sustain.
- **NDA care.** Never drop a story because the client can't be named — anonymize ("a beauty retailer") and keep the substance. Flag anything that needs permission.
- **The site itself is exhibit A.** Note where the site's own design and AI-assisted workflow can be talked about as a project.

## Scope

**Planning only — the sole output is Markdown under `docs/`.** Do not create or edit pages, components, content-collection entries, styles, or config; do not write the actual posts or case-study copy; do not restructure the repo. Everything the site needs is *described* inside the plan as a roadmap item or build task — never built here. If you're about to touch any file outside `docs/`, stop: that's a separate request, not part of making the plan.
