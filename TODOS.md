# TODOS

## Clean up dead image originals in `public/things/`

**What:** Remove `public/things/` from the passthrough copy, move source images to
`src/assets/things/`, and update all `img` src paths in the 21 Thing Markdown files.

**Why:** The `optimize-images` transform generates optimized WebP/JPEG versions in
`build/img/`. The raw originals in `public/things/` are still passthrough-copied to
`build/public/things/` but no HTML points to them — they're dead weight in the build output.

**Pros:** Eliminates ~hundreds of MB of unoptimized raw images from build output.
Cleaner build directory. Single source of truth for image paths.

**Cons:** ~21 Markdown files need their `img` src paths updated from `/public/things/foo/bar.png`
to a new convention. Requires moving all source images (~500 files across 21 directories).

**Context:** The `optimize-images` async transform was added alongside the gallery feature
(PR: conductor/image-grid-page). It intercepts `<img src="/public/things/...">` at build time
and replaces with `<picture>` pointing to optimized `/img/...` paths. The passthrough copy
is no longer needed once the transform runs, but was kept to avoid a large migration scope
in the same PR. Start in `.eleventy.js` — remove the passthrough or scope it to exclude `things/`.

**Depends on:** PR conductor/image-grid-page (merged).

---

## Gallery pagination

**What:** Add Eleventy's built-in `pagination` frontmatter to `src/photos.md` so the
gallery splits into pages of N images when the count grows large.

**Why:** A single page with 100+ images is heavy to parse and overwhelming UX-wise,
even with `loading="lazy"`.

**Pros:** Eleventy pagination is frontmatter-only config — very low effort. Improves
initial page load and browsability at scale.

**Cons:** Adds URL complexity (`/photos/`, `/photos/2/`, etc.) and requires a "next page"
navigation UI element. Not needed until image count actually warrants it.

**Context:** `src/_data/photos.json` is the data source (array of `{ src, alt }` objects).
Eleventy's `pagination` key in frontmatter can slice this array automatically.
See: https://www.11ty.dev/docs/pagination/

**Depends on:** PR conductor/image-grid-page (merged). Trigger: ~50+ photos in `photos.json`.
