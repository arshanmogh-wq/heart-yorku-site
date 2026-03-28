# HEART branch microsites — brand colors

Official palette tokens for each university branch. **Use these values** for CSS, SVG, social assets, and any new UI so all three sites stay consistent.

Implementation:

- **CSS:** each site loads `sites/<branch>/src/styles/branch-theme.css` after shared `global.css`. Tokens are defined as `--brand-*` and mapped onto shared variables (`--orange-600`, `--blue-500`, etc.) that `global.css` already uses.
- **Meta theme-color:** `themeColor` in `sites/<branch>/src/site.ts` should match the primary brand color below.

---

## York University (`sites/york/`)

| Role | Hex | Notes |
|------|-----|--------|
| **York Red** (primary) | `#E31837` | CTAs, accents, hero emphasis, links on light backgrounds |
| **White** | `#FFFFFF` | Page background, text on dark/red surfaces |
| **Black** | `#000000` | Footer bar, skip link, strong headings/body text |

**RGB (York Red):** 227, 24, 55  

Do not substitute a different red for “York Red” without updating this doc and `branch-theme.css`.

---

## Western University (`sites/western/`)

| Role | Hex | Notes |
|------|-----|--------|
| **Western Purple** (primary) | `#4F2683` | CTAs, accents, footer tone |
| **White** | `#FFFFFF` | Backgrounds, text on purple |
| **Cool Gray 10** (supporting) | `#63666A` | Muted text, borders, secondary UI |
| **Silver** (alternate grey) | `#807F83` | Optional secondary grey; prefer Cool Gray 10 for type unless design calls for Silver |

**RGB (Western Purple):** 79, 38, 131  

---

## McMaster University (`sites/mcmaster/`)

| Role | Hex | Notes |
|------|-----|--------|
| **Heritage Maroon** (primary) | `#7A003C` | CTAs, footer, core brand bar |
| **Heritage Gold** (secondary) | `#FDBF57` | Gradients with maroon, kicker/chips, highlights |
| **Heritage Grey** (supporting) | `#5E6A71` | Muted text, borders |

**RGB (Maroon):** 122, 0, 60  

In `sites/mcmaster/src/styles/branch-theme.css`, shared `global.css` gradients use `var(--blue-500)` then `var(--orange-600)`. McMaster maps that to **gold → maroon** (`#FDBF57` → `#7A003C`). Primary CTAs and the Join pill use **`--orange-600`** only, so they stay **Heritage Maroon**.

---

## Quick reference

| Branch | Primary | Secondary / grey |
|--------|---------|-------------------|
| York | `#E31837` | `#000000` / `#FFFFFF` |
| Western | `#4F2683` | `#63666A` (and optional `#807F83`) |
| McMaster | `#7A003C` | `#FDBF57`, `#5E6A71` |

When adding features (posters, event cards, new sections), pull colors from this table or from the `--brand-*` variables in the matching `branch-theme.css`, not from one-off hex values.

---

## CSS variables (by site)

These are defined in each site’s `src/styles/branch-theme.css` and mapped into the shared tokens `global.css` already consumes (`--orange-600`, `--blue-500`, `--navy`, etc.).

| Variable (York) | Hex |
|-----------------|-----|
| `--brand-york-red` | `#E31837` |
| `--brand-white` | `#FFFFFF` |
| `--brand-black` | `#000000` |

| Variable (Western) | Hex |
|--------------------|-----|
| `--brand-western-purple` | `#4F2683` |
| `--brand-white` | `#FFFFFF` |
| `--brand-grey-silver` | `#807F83` |
| `--brand-grey-cool` | `#63666A` |

| Variable (McMaster) | Hex |
|---------------------|-----|
| `--brand-maroon` | `#7A003C` |
| `--brand-gold` | `#FDBF57` |
| `--brand-grey` | `#5E6A71` |

Prefer `var(--brand-…)` in new branch-only CSS. If a component only understands `--orange-600` / `--blue-500`, rely on the mappings in `branch-theme.css` instead of duplicating hex.
