# AGENTS.md

Orientation for coding agents working in this repo.

## What this is

Personal site for Marcs — Eleventy 2 static site with Notes (blog), Things (projects), About/Resume, Contact, and Photos. Live SEO URL: `https://11ty.marcsist.com`.

## Run it

Node **24.x** (`package.json` engines).

```bash
npm install
npm start          # eleventy --serve
npm run build      # → build/
npm test           # eleventy --dryrun
```

Config: [`.eleventy.js`](.eleventy.js) — input `src/`, includes `src/_includes/`, output `build/`, passthrough `public/` → `build/public/`.

## Where things go

| Add… | Put it here | URL |
|------|-------------|-----|
| Note / blog post | `src/posts/YYYY/MM/slug.md` | `/posts/YYYY/MM/slug/` |
| Thing / project | `src/things/slug.md` | `/things/slug/` (list may use `link` instead) |
| Thing images | `public/things/{slug}/…` | referenced as `/public/things/{slug}/…` |
| About copy | `src/about/` | `/about/` |
| Resume | `src/about/resume.md` | `/about/resume/` |
| Contact | `src/contact.md` | `/contact/` |
| Gallery photos | `src/assets/photos/` + `src/_data/photos.json` | `/photos/` |
| Site CSS / theme JS | `public/style.css`, `public/theme-switcher.js` | `/public/…` |
| Layouts / partials | `src/_includes/layouts/` (+ `blocks/`) | — |

Directory data auto-tags content:

- `src/posts/posts.json` → `tags: ["posts"]`
- `src/things/things.json` → `tags: ["things"]`
- `src/about/about.json` → default `layout: layouts/page.njk`

## Frontmatter cheatsheets

### Note (`src/posts/YYYY/MM/slug.md`)

```yaml
---
title: …
date: YYYY-MM-DD
description: …          # subtitle under title
eleventyNavigation:
  parent: Notes
tags:
  - posts
layout: layouts/post.njk
---
```

Optional extra tags seen in the wild: `work`, `update`.

### Thing (`src/things/slug.md`)

```yaml
---
title: …
description: …          # marquee text on Things list
link: /things/slug/     # or external https://… — used by the Things list
date: YYYY-MM-DD
category: software      # software | goods | other
tags: [things]
layout: layouts/thing.njk
---
```

Use `layouts/thing-signup.njk` for Les Original (Mailchimp signup). Optional `externalLink` shows a “link->” on the detail page. `chiptype` appears on some files but is unused — ignore it.

### Listing pages (nav)

Home / Things / Notes / About set `eleventyNavigation.key` + `order` (1–4). Contact and Photos are footer-only.

## Gotchas

1. **No custom permalinks** — file path under `src/` is the URL.
2. **Collections need tags** — `posts` / `things` (usually from directory JSON). Untagged items won’t show in lists.
3. **Things list uses `link`, not page URL** — external projects set `link` to the external URL; a detail page may still build but won’t be what the index links to.
4. **Thing image optimize transform** only rewrites `<img src="/public/things/…">`. Other image paths stay as-is.
5. **Gallery images** use the `{% image %}` shortcode with paths like `./src/assets/photos/…`, not `/public/…`.
6. **Asset URLs keep `/public/`** — CSS, JS, favicon are `/public/…`.
7. **Consecutive markdown images** in content are grouped into `.image-row` at build time (max 3 per row).
8. **Post dates in list templates** use `post.data.page.date | htmlDateString`, not `post.data.date`.

## Design system

Single stylesheet: `public/style.css` (“Signal Design System — Monospace + Warm Orange”). CSS variables for theme; dark/system via `public/theme-switcher.js`. Content max width ~640px. No component framework or preprocessor.

## Key files

| File | Purpose |
|------|---------|
| `.eleventy.js` | Plugins, `posts` collection + prev/next, image transforms, I/O dirs |
| `package.json` | Scripts, deps, Node 24 |
| `src/seo.json` | Site title / description / URL for SEO plugin |
| `src/index.md` | Home + nav |
| `src/notes.md` / `src/things.md` | Notes / Things indexes |
| `src/_includes/layouts/base.njk` | HTML shell, nav, footer |
| `src/_includes/layouts/post.njk` | Single note + prev/next |
| `src/_includes/layouts/thing.njk` | Single thing |
| `src/_includes/layouts/blocks/things.njk` | Filterable Things list |
| `public/style.css` | Entire visual system |
| `TODOS.md` | Known follow-ups |
