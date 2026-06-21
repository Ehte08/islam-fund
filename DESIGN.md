---
version: 1.0
name: Project-Blue-design-system
description: "A deep-navy Web3 marketing canvas built on #070c14 (near-void dark with a blue undertone), driven by a blue-to-cyan gradient accent system and layered neon glow effects. The system reads as frontier technology — futuristic, authoritative, and community-forward. Display type is set in Orbitron (geometric techno-sans) at 600–900 weight with wide positive tracking. Body copy runs in Barlow at 400–600. Cards sit as dark-navy panels with hairline borders that carry a faint cyan tint. Gradients replace the single-accent approach: blue→cyan is the primary brand gradient, purple→pink is the CTA gradient. Neon glow layers applied selectively to display type, hero imagery, and focus states. Page rhythm alternates dense atmospheric glow sections with clean surface-ladder card grids."

colors:
  # Brand gradients — the primary chromatic identity
  brand-cyan: "#06B6D4"
  brand-blue: "#3B82F6"
  brand-purple: "#A855F7"
  brand-pink: "#EC4899"

  # Gradient definitions (use as CSS linear-gradient values)
  gradient-primary: "linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)"
  gradient-cta: "linear-gradient(to right, #A855F7, #EC4899)"
  gradient-hero-bg: "linear-gradient(160deg, #070c14 0%, oklch(13% 0.025 232) 60%, oklch(12% 0.03 240) 100%)"
  gradient-hero-glow: "radial-gradient(ellipse 55% 65% at 82% 40%, rgba(168,85,247,0.18) 0%, rgba(6,182,212,0.12) 45%, transparent 75%)"
  gradient-card-border: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.1))"
  gradient-button-primary: "linear-gradient(to right, #3B82F6, #06B6D4)"

  # Hover/active states
  brand-cyan-hover: "#22D3EE"
  brand-blue-hover: "#60A5FA"
  brand-focus: "rgba(6,182,212,0.5)"

  # Text
  ink: "#F7F9FC"
  ink-muted: "#9DAABF"
  ink-subtle: "oklch(62% 0.015 232)"
  ink-tertiary: "#4A5568"

  # Surfaces — 4-step dark navy ladder
  canvas: "#070c14"
  surface-1: "#0c1220"
  surface-2: "#101828"
  surface-3: "#141f30"
  surface-4: "#19263a"

  # Borders — always carry a blue tint
  hairline: "rgba(6,182,212,0.12)"
  hairline-strong: "rgba(59,130,246,0.25)"
  hairline-tertiary: "rgba(6,182,212,0.08)"

  # Semantic
  semantic-success: "#22C55E"
  semantic-overlay: "#000000"

  # Neon glow presets (use as text-shadow / box-shadow / filter values)
  glow-cyan: "0 0 6px rgba(6,182,212,0.95), 0 0 18px rgba(6,182,212,0.75), 0 0 40px rgba(6,182,212,0.5)"
  glow-cyan-soft: "0 0 4px rgba(6,182,212,0.7), 0 0 10px rgba(6,182,212,0.35)"
  glow-blue: "0 0 8px rgba(59,130,246,0.8), 0 0 24px rgba(59,130,246,0.4)"
  glow-cta-box: "0 4px 30px rgba(6,182,212,0.45)"
  glow-cta-hover: "0 0 22px rgba(168,85,247,0.5)"
  glow-hero-filter: "drop-shadow(-20px 0 40px rgba(6,182,212,0.45)) drop-shadow(20px 0 40px rgba(236,72,153,0.45))"
  glow-logo-filter: "drop-shadow(0 0 10px rgba(6,182,212,0.38))"

typography:
  display-xl:
    fontFamily: Orbitron
    fontSize: 80px
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: 0.06em
  display-lg:
    fontFamily: Orbitron
    fontSize: 56px
    fontWeight: 800
    lineHeight: 1.00
    letterSpacing: 0.05em
  display-md:
    fontFamily: Orbitron
    fontSize: clamp(2.6rem, 5.5vw, 4.8rem)
    fontWeight: 900
    lineHeight: 0.95
    letterSpacing: 0.06em
  headline:
    fontFamily: Orbitron
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0.04em
  card-title:
    fontFamily: Barlow
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: -0.2px
  subhead:
    fontFamily: Barlow
    fontSize: 20px
    fontWeight: 500
    lineHeight: 1.40
    letterSpacing: -0.1px
  body-lg:
    fontFamily: Barlow
    fontSize: clamp(0.95rem, 1.2vw, 1.15rem)
    fontWeight: 400
    lineHeight: 1.60
    letterSpacing: 0.02em
  body:
    fontFamily: Barlow
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 0
  body-sm:
    fontFamily: Barlow
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0
  caption:
    fontFamily: Barlow
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.40
    letterSpacing: 0
  button:
    fontFamily: Barlow
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.20
    letterSpacing: 0
  eyebrow:
    fontFamily: Barlow
    fontSize: 12px
    fontWeight: 600
    lineHeight: 1.30
    letterSpacing: 0.18em
  mono:
    fontFamily: Share Tech Mono
    fontSize: 13px
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: 0.02em

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  xxl: 24px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  button-primary:
    background: "{colors.gradient-button-primary}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
    boxShadow: "{colors.glow-cta-box}"
    hoverTransform: "translateY(-1px)"
    hoverShadow: "{colors.glow-blue}"
  button-cta:
    background: "{colors.gradient-cta}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.pill}"
    padding: 14px 32px
    boxShadow: "{colors.glow-cta-box}"
    hoverShadow: "{colors.glow-cta-hover}"
    hoverTransform: "translateY(-1px)"
  button-secondary:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 20px
    border: "1px solid {colors.hairline-strong}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 10px 20px
  feature-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.xl}"
    padding: 28px
    border: "1px solid {colors.hairline}"
    hoverBorder: "1px solid {colors.hairline-strong}"
  stat-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.lg}"
    padding: 24px
    border: "1px solid {colors.hairline}"
  testimonial-card:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.xl}"
    padding: 32px
    border: "1px solid {colors.hairline}"
  partner-logo-tile:
    backgroundColor: "transparent"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    rounded: "{rounded.xs}"
    padding: 16px
  cta-banner:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.ink}"
    typography: "{typography.headline}"
    rounded: "{rounded.xxl}"
    padding: 64px 48px
    border: "1px solid {colors.hairline-strong}"
  eyebrow-label:
    backgroundColor: "transparent"
    textColor: "{colors.brand-cyan}"
    typography: "{typography.eyebrow}"
  text-input:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    border: "1px solid {colors.hairline}"
    focusBorder: "2px solid {colors.brand-focus}"
  top-nav:
    backgroundColor: "rgba(7,11,19,0.84)"
    backdropFilter: "blur(24px) saturate(160%)"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    height: 80px
    borderBottom: "1px solid {colors.hairline}"
  mobile-menu:
    backgroundColor: "{colors.surface-1}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    borderBottom: "1px solid {colors.hairline}"
  footer:
    backgroundColor: "rgba(0,0,0,0.35)"
    textColor: "{colors.ink-subtle}"
    typography: "{typography.caption}"
    borderTop: "1px solid {colors.hairline}"
    padding: 20px 40px
  status-badge:
    backgroundColor: "{colors.surface-2}"
    textColor: "{colors.brand-cyan}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 2px 8px
    border: "1px solid {colors.hairline}"
---

## Overview

Project Blue's marketing canvas lives on `{colors.canvas}` (#070c14) — a near-void dark with a perceptible blue undertone. Over that sits a four-step navy surface ladder (`{colors.surface-1}` through `{colors.surface-4}`) for cards, panels, and lifted tiles. Hairlines carry a faint cyan tint at 8–25% opacity, so the grid breathes as chromatic depth rather than neutral separation.

The chromatic identity is **dual-gradient**: `{colors.gradient-primary}` (blue→cyan, #3B82F6→#06B6D4) for technical/trust moments, `{colors.gradient-cta}` (purple→pink, #A855F7→#EC4899) for community/action moments. Both gradients appear as fills on buttons, as border glows on cards, and as atmospheric blur orbs in hero sections. They are never used on the canvas background directly.

**Neon glow** is a first-class design technique. `{colors.glow-cyan}` applies as `text-shadow` on display headlines. `{colors.glow-hero-filter}` wraps the hero image as a `filter: drop-shadow`. `{colors.glow-cta-box}` gives primary CTAs a floating halo. Glow is earned — it signals hierarchy, not decoration.

Display type runs **Orbitron** (geometric techno-sans) at 800–900 weight, tracking wide at +0.05–0.06em. This is the futuristic authority register — used only for H1/H2. Body copy runs **Barlow** (humanist sans) at 400–600, tracking neutral. **Share Tech Mono** (monospace) appears on technical labels, wallet addresses, ID tokens, and stat tickers.

**Key Characteristics:**
- Near-void dark canvas (#070c14) with four-step blue-tinted surface ladder.
- Dual-gradient identity: blue→cyan (trust/tech) and purple→pink (community/CTA).
- Neon glow as hierarchy signal — applied only to display text, hero imagery, and active states.
- Orbitron at 900 weight + wide tracking for all display headings — zero compromise on the futuristic register.
- Hairlines always carry a blue-tint (rgba cyan/blue at 8–25% opacity) — never neutral gray.
- Pill-rounded CTAs only — no square buttons on primary actions.
- Atmospheric glow orbs (radial gradients, pointer-events: none) define hero depth.

## Colors

### Brand Gradients
The chromatic identity is gradient-native, not single-accent.

- **Primary Gradient** (`{colors.gradient-primary}`): `linear-gradient(135deg, #3B82F6 0%, #06B6D4 100%)` — used on primary action buttons, card icon badges, progress indicators, and link underlines.
- **CTA Gradient** (`{colors.gradient-cta}`): `linear-gradient(to right, #A855F7, #EC4899)` — used on the hero Join button, closing CTA banner, and any community-register action.
- **Hero Background** (`{colors.gradient-hero-bg}`): Page-level dark gradient on the root div, imperceptible shift from near-black to slightly blue-shifted navy.
- **Hero Glow** (`{colors.gradient-hero-glow}`): Atmospheric radial gradient overlay on the hero section — purple bloom at top-right, cyan fade toward center.
- **Button Gradient** (`{colors.gradient-button-primary}`): `linear-gradient(to right, #3B82F6, #06B6D4)` — the main technical CTA (e.g., "Learn More", "View Projects").

### Brand Primaries
- **Cyan** (`{colors.brand-cyan}`): #06B6D4 — nav logo glow, eyebrow labels, neon title shadow, hairline tints, focus rings.
- **Blue** (`{colors.brand-blue}`): #3B82F6 — gradient start, icon fills, link emphasis.
- **Purple** (`{colors.brand-purple}`): #A855F7 — CTA gradient start, hero atmospheric glow.
- **Pink** (`{colors.brand-pink}`): #EC4899 — CTA gradient end, hero image drop-shadow.

### Hover States
- **Cyan Hover** (`{colors.brand-cyan-hover}`): #22D3EE — lighter cyan for hovered links and focused inputs.
- **Blue Hover** (`{colors.brand-blue-hover}`): #60A5FA — lighter blue for hovered gradient buttons.
- **Focus Ring** (`{colors.brand-focus}`): rgba(6,182,212,0.5) — 2px focus outline on all interactive elements.

### Surfaces
- **Canvas** (`{colors.canvas}`): #070c14 — the root background. Never use true black.
- **Surface 1** (`{colors.surface-1}`): #0c1220 — cards, panels, feature tiles.
- **Surface 2** (`{colors.surface-2}`): #101828 — featured/hovered cards, overlays.
- **Surface 3** (`{colors.surface-3}`): #141f30 — mobile menu, dropdown panels, nested surfaces.
- **Surface 4** (`{colors.surface-4}`): #19263a — deepest lifted surface, tooltip backgrounds.

### Borders
Hairlines always carry a blue-cyan tint. Never use neutral gray borders.
- **Hairline** (`{colors.hairline}`): `rgba(6,182,212,0.12)` — default card borders, dividers.
- **Hairline Strong** (`{colors.hairline-strong}`): `rgba(59,130,246,0.25)` — hovered card borders, focused input rings.
- **Hairline Tertiary** (`{colors.hairline-tertiary}`): `rgba(6,182,212,0.08)` — sub-dividers inside panels.

### Text
- **Ink** (`{colors.ink}`): #F7F9FC — all headlines and emphasized body. Carries a faint cold-white tint.
- **Ink Muted** (`{colors.ink-muted}`): #9DAABF — secondary body, nav links (default), meta info.
- **Ink Subtle** (`{colors.ink-subtle}`): `oklch(62% 0.015 232)` — footer columns, disabled states.
- **Ink Tertiary** (`{colors.ink-tertiary}`): #4A5568 — footnotes, placeholders.

### Neon Glows
Glow values are applied as CSS `text-shadow`, `box-shadow`, or `filter: drop-shadow`.

| Token | Value | Use |
|---|---|---|
| `{colors.glow-cyan}` | Three-layer cyan text shadow | `H1` display headlines, hero wordmark |
| `{colors.glow-cyan-soft}` | Two-layer faint cyan | Body neon-blurb text, neon-highlight spans |
| `{colors.glow-blue}` | Two-layer blue glow | Featured card hover state, active nav item |
| `{colors.glow-cta-box}` | Box shadow halo | Primary and CTA button default state |
| `{colors.glow-cta-hover}` | Stronger purple halo | CTA button hover state |
| `{colors.glow-hero-filter}` | Bilateral drop-shadow | Hero image (cyan left, pink right) |
| `{colors.glow-logo-filter}` | Soft cyan drop-shadow | Navbar logo mark |

### Semantic
- **Success** (`{colors.semantic-success}`): #22C55E — "We Stand With Palestine" badge, status pills, form validation.
- **Overlay** (`{colors.semantic-overlay}`): #000000 — modal scrims.

## Typography

### Font Families

- **Orbitron** — Geometric techno-sans from Google Fonts. Weights 600–900. Carries `{typography.display-xl}` through `{typography.headline}`. The futuristic authority register of the brand. Wide tracking (positive) is intentional.
- **Barlow** — Humanist condensable sans. Weights 400–700. Carries `{typography.card-title}` through `{typography.button}`. The readable, community-forward register.
- **Share Tech Mono** — Monospace sans. Weight 400. Used for `{typography.mono}` — wallet address previews, stat tickers, technical ID tokens, eyebrow code strings.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 80px | 900 | 0.95 | +0.06em | Hero H1 wordmark ("PROJECT") |
| `{typography.display-lg}` | 56px | 800 | 1.00 | +0.05em | Section hero headlines |
| `{typography.display-md}` | clamp(2.6rem, 5.5vw, 4.8rem) | 900 | 0.95 | +0.06em | H1 responsive variant (current impl) |
| `{typography.headline}` | 28px | 700 | 1.15 | +0.04em | Section titles, CTA banner heading |
| `{typography.card-title}` | 22px | 600 | 1.25 | -0.2px | Feature card titles |
| `{typography.subhead}` | 20px | 500 | 1.40 | -0.1px | Lead paragraphs, section intros |
| `{typography.body-lg}` | clamp(0.95rem, 1.2vw, 1.15rem) | 400 | 1.60 | +0.02em | Hero blurb (tech-mono, neon-blurb) |
| `{typography.body}` | 16px | 400 | 1.55 | 0 | Default body |
| `{typography.body-sm}` | 14px | 400 | 1.50 | 0 | Nav links, card body, footer |
| `{typography.caption}` | 12px | 400 | 1.40 | 0 | Captions, meta, badges |
| `{typography.button}` | 14px | 700 | 1.20 | 0 | Button labels |
| `{typography.eyebrow}` | 12px | 600 | 1.30 | +0.18em | Section eyebrows (e.g., "Financing & Consulting since 2018") |
| `{typography.mono}` | 13px | 400 | 1.50 | +0.02em | Share Tech Mono — stat values, wallet tokens, code |

### Principles

- **Orbitron is the authority signal.** Never use it below `{typography.headline}` (28px). It earns its place by being rare and large.
- **Wide positive tracking on display** (+0.06em) — opposite of Linear's negative tracking. Orbitron's geometry is designed to breathe at width; tight-tracking it destroys the futuristic character.
- **Barlow carries the voice.** It handles all reading-speed text. Comfortable, never distracting.
- **Share Tech Mono is the tech proof.** Appears in stats, on-chain references, version numbers. Signals precision.
- **Neon glow on Orbitron only.** Apply `{colors.glow-cyan}` as `text-shadow` only on the H1 Orbitron headline and the "BLUE" accent span. Never on Barlow body text (except the soft `neon-blurb` class at very low intensity).

## Layout

### Spacing System

- **Base unit**: 4px.
- **Tokens**: `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- Card interior padding: `{spacing.lg}` 24–28px on feature cards; `{spacing.xl}` 32px on testimonials; `{spacing.xxl}` 48px on CTA banners.
- Button padding: 14px vertical · 32px horizontal on pill CTAs.
- Nav height: 80px (current impl — taller than Linear's 56px to give the Orbitron logo room).

### Grid & Container

- Max content width: 1280px (`max-w-screen-xl`).
- Hero: 2-column split — 55% text / 45% hero image at desktop, stacked at mobile.
- Feature card grids: 3-up desktop, 2-up tablet, 1-up mobile.
- Stat strip: inline flex with `·` separators at desktop; wraps naturally on mobile.
- Partner marquee: full-width overflow scroll, 2× duplication for seamless loop.

### Whitespace Philosophy

The dark canvas IS the whitespace — the same principle as Linear but navy instead of near-black. Sections breathe via atmospheric glow radial gradients, not white space gaps. Within hero sections, generous 96px top/bottom padding. Cards use `{spacing.section}` between section groups.

### Section Rhythm

1. **Hero** — Orbitron H1 + neon glow + 55/45 split with hero image. Atmospheric radial glow overlay.
2. **Social proof strip** — inline stat row (5,000+ members · 300+ startups · $100M+ in funding connections).
3. **Feature grid** — 3-up cards on `{colors.surface-1}` with cyan hairline borders.
4. **Web3 ecosystem highlight** — full-width dark panel listing supported verticals (Crypto, NFTs, Web3, Real Estate, Tech).
5. **Community / testimonials** — 2-up testimonial cards.
6. **CTA banner** — `{colors.surface-2}` panel, `{rounded.xxl}`, purple→pink gradient button.
7. **Partner marquee footer** — animated scroll at 22s, `prefers-reduced-motion` pause.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| 0 (flat) | No shadow, no border | Hero text, footer text, eyebrows |
| 1 (navy lift) | `{colors.surface-1}` bg + 1px `{colors.hairline}` | Default cards, feature tiles |
| 2 (deeper lift) | `{colors.surface-2}` bg + 1px `{colors.hairline-strong}` | Featured card, hovered state |
| 3 (panel) | `{colors.surface-3}` bg | Mobile menu, dropdown panels |
| 4 (top) | `{colors.surface-4}` bg | Tooltips, deepest nested surfaces |
| Glow (brand) | `{colors.glow-cta-box}` box-shadow | Primary and CTA buttons |
| Focus | 2px `{colors.brand-focus}` outline | All keyboard-focused interactive elements |

Depth is carried by the surface ladder + tinted hairlines + neon glow. No drop shadows on generic cards. No neutral-gray box shadows.

### Atmospheric Depth (Hero)

The hero section uses a **single radial gradient overlay** (`pointer-events: none`, `position: absolute`, `inset-0`) for atmospheric depth:

```css
radial-gradient(
  ellipse 55% 65% at 82% 40%,
  rgba(168,85,247,0.18) 0%,
  rgba(6,182,212,0.12) 45%,
  transparent 75%
)
```

This is the only place on the page where color appears as an atmospheric wash. All other sections use surface lifts and hairlines.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Status badges, changelog rows |
| `{rounded.sm}` | 6px | Inline tags, small chips |
| `{rounded.md}` | 8px | Secondary buttons, form inputs |
| `{rounded.lg}` | 12px | Feature cards, stat cards |
| `{rounded.xl}` | 16px | Testimonial cards, hero cards |
| `{rounded.xxl}` | 24px | CTA banners |
| `{rounded.pill}` | 9999px | Primary CTAs, nav Join button, status pills, pricing toggles |
| `{rounded.full}` | 9999px | Avatar circles, logo icons |

**Critical rule**: All primary and CTA action buttons use `{rounded.pill}`. This is non-negotiable — it's the community-warmth signal inside the futuristic shell. Secondary utility buttons use `{rounded.md}`.

## Components

### Buttons

**`button-primary`** — Blue→Cyan gradient. Technical/trust actions.
- Background: `{colors.gradient-button-primary}`, text `{colors.ink}`, type `{typography.button}`, padding 14px 32px, rounded `{rounded.pill}`.
- Default shadow: `{colors.glow-cta-box}`.
- Hover: `translateY(-1px)`, shadow shifts to `{colors.glow-blue}`.
- Example: "Learn More", "View Our Work", "Explore Projects".

**`button-cta`** — Purple→Pink gradient. Community/action moments.
- Background: `{colors.gradient-cta}`, text `{colors.ink}`, type `{typography.button}`, padding 14px 32px, rounded `{rounded.pill}`.
- Default shadow: `{colors.glow-cta-box}`.
- Hover: `translateY(-1px)`, shadow shifts to `{colors.glow-cta-hover}`.
- Example: "Join", "Secure your spot now!", "Apply for Funding".

**`button-secondary`** — Dark surface button. Sign-in / secondary nav actions.
- Background `{colors.surface-1}`, text `{colors.ink}`, 1px `{colors.hairline-strong}` border, `{rounded.md}`.

**`button-ghost`** — Transparent ghost. Tertiary text links.
- Background transparent, text `{colors.ink-muted}`, `{rounded.md}`. No border.

### Navigation

**`top-nav`** — Sticky frosted-glass bar.
- Background: `rgba(7,11,19,0.84)` with `backdrop-filter: blur(24px) saturate(160%)`.
- Border bottom: 1px `{colors.hairline}`.
- Height: 80px. Max-width: 1280px.
- Logo: project-blue-logo.webp at h-20, with `{colors.glow-logo-filter}` drop-shadow.
- Desktop links: Barlow 14px/500, `{colors.ink-muted}` default, `{colors.ink}` on hover. Underline slide animation on hover/active.
- Right: ghost nav links + `button-cta` "Join" at `{rounded.pill}`.

**`mobile-menu`** — Slide-down drawer below nav.
- Background `{colors.surface-1}`. Max-height animation (0 → 280px) at 0.3s ease.
- Border bottom: 1px `{colors.hairline}`.

### Cards

**`feature-card`** — Web3 feature highlight tile.
- Background `{colors.surface-1}`, `{rounded.xl}`, padding 28px, 1px `{colors.hairline}` border.
- Hover: border shifts to `{colors.hairline-strong}`.

**`stat-card`** / **Inline stat strip** — Social proof metrics.
- Inline flex row: `strong` in `{colors.ink}` (Barlow 700) + label in `{colors.ink-muted}` (Barlow 400 14px).
- Separated by `·` in `{colors.hairline}` color. Border-top `{colors.hairline}` above the strip.
- Stat values (5,000+, 300+, $100M+) may use Share Tech Mono for the number if rendered large.

**`testimonial-card`** — Community quote card.
- Background `{colors.surface-1}`, `{rounded.xl}`, padding 32px, 1px `{colors.hairline}` border.
- Quote in `{typography.body-lg}` Barlow 400. Avatar in `{rounded.full}` at 36–40px.

**`partner-logo-tile`** — Partner in the marquee strip.
- Transparent background, 16px padding. Partner logos rendered at 32–40px height.
- No border. Logo color as-is (per partner brand); no forced monochrome.

**`cta-banner`** — Closing CTA panel.
- Background `{colors.surface-2}`, `{rounded.xxl}`, padding 64px 48px, 1px `{colors.hairline-strong}` border.
- Headline in `{typography.headline}` Orbitron 700, `{colors.ink}`.
- CTA uses `button-cta` (purple→pink).

**`eyebrow-label`** — Small section taxonomy label.
- Text `{colors.brand-cyan}`, `{typography.eyebrow}` (Barlow 600, 12px, +0.18em tracking), uppercase.
- No background, no border, no pill.

### Forms

**`text-input`** / **`text-input-focused`** — Contact/signup fields.
- Background `{colors.surface-1}`, text `{colors.ink}`, placeholder `{colors.ink-tertiary}`.
- Rounded `{rounded.md}`, padding 10px 14px, border 1px `{colors.hairline}`.
- Focused: border shifts to 2px `{colors.brand-focus}` outline.

### Footer / Marquee

**`footer`** / **Partner marquee** — Scrolling partner strip.
- Background `rgba(0,0,0,0.35)`, border-top 1px `{colors.hairline}`, padding 20px 40px.
- `animate-marquee` at 22s linear infinite. `prefers-reduced-motion: reduce` pauses animation.
- Two duplicate rows for seamless loop; second row has `aria-hidden="true"`.

**`status-badge`** — Floating identity badge (e.g., "We Stand With Palestine").
- Background `rgba(0,0,0,0.75)` with `backdrop-filter: blur(8px)`.
- Border 1px `rgba(34,197,94,0.5)`, text `{colors.semantic-success}`, `{rounded.xl}`.
- Fixed bottom-right, z-50.

## Neon Glow System

Neon glow is the most powerful tool in the brand's arsenal and must be rationed.

### Allowed Glow Contexts

| Context | Glow Token | CSS Property |
|---|---|---|
| H1 Orbitron headline ("PROJECT") | `{colors.glow-cyan}` | `text-shadow` |
| H1 accent span ("BLUE") | Stronger inline `text-shadow` with 3 cyan layers | `text-shadow` |
| Body neon-blurb paragraph | `{colors.glow-cyan-soft}` at low opacity | `text-shadow` |
| `neon-highlight` span inside body | `{colors.glow-cyan-soft}` + cyan underline | `text-shadow` |
| Hero image | `{colors.glow-hero-filter}` | `filter: drop-shadow` |
| Navbar logo | `{colors.glow-logo-filter}` | `filter: drop-shadow` |
| Primary / CTA button (default) | `{colors.glow-cta-box}` | `box-shadow` |
| CTA button hover | `{colors.glow-cta-hover}` | `box-shadow` |

### Forbidden Glow Contexts
- Never apply glow to Barlow body paragraphs (only the designated `.neon-blurb` class).
- Never apply glow to card backgrounds or surfaces.
- Never apply glow to nav links.
- Never apply text-shadow glow to anything below `{typography.headline}` 28px.

## Do's and Don'ts

### Do

- Use `{colors.canvas}` (#070c14) as the system's root background — never true black, never neutral gray.
- Use `{colors.gradient-primary}` (blue→cyan) for technical trust actions and `{colors.gradient-cta}` (purple→pink) for community/join actions.
- Apply the four-step surface ladder for hierarchy. Cards live on `{colors.surface-1}`. Never skip levels.
- Use Orbitron at 800–900 weight only for display headings. Let wide tracking breathe.
- Keep all primary CTAs as `{rounded.pill}` — this is the warmth signal inside the futuristic shell.
- Apply neon glow `{colors.glow-cyan}` to the H1 Orbitron text only.
- Use atmospheric radial gradient glow in the hero background — one per section max.
- Hairlines must carry a blue-cyan tint. Replace any neutral `#333` or `gray-700` borders with `{colors.hairline}`.
- Maintain reduced-motion support: pause `animate-marquee` for `prefers-reduced-motion: reduce`.
- Maintain WCAG AA contrast: `{colors.ink}` (#F7F9FC) on `{colors.canvas}` (#070c14) is ≥14:1. `{colors.ink-muted}` (#9DAABF) on canvas is ≥7:1.

### Don't

- Don't ship a light mode. This is a dark-only system.
- Don't use `#000000` true black as the canvas.
- Don't use neutral gray borders (`#333`, `rgba(255,255,255,0.1)`). All borders must carry blue-cyan tint.
- Don't apply gradient fills to page section backgrounds. Gradients live on buttons and decorative glow overlays only.
- Don't use Orbitron below 28px or at weight 400–500.
- Don't apply neon `text-shadow` to Barlow body text (except the specific `.neon-blurb` and `.neon-highlight` utility classes).
- Don't use `{rounded.md}` on primary CTAs. Pill only.
- Don't add a third chromatic family to the gradient system (no orange, no red, no yellow).
- Don't make the partner logos monochrome — preserve partner brand colors in the marquee.
- Don't use `box-shadow` with neutral gray values on cards. Hover glow must use `{colors.glow-blue}` or `{colors.hairline-strong}`.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Desktop-XL | 1440px | Default desktop layout |
| Desktop | 1280px | Max-width content container |
| Tablet | 1024px | Card grid 3-up → 2-up |
| Mobile-Lg | 768px | Nav hamburger, hero stacks to single column |
| Mobile | 480px | Display-xl scales: 80px → ~42px via clamp |

### Touch Targets

- All CTAs hold ≥44px tap height on touch viewports.
- Nav links hold ≥40px tap height in the hamburger menu.
- Form inputs hold ≥44px on touch.

### Collapsing Strategy

- **Top nav**: links collapse to hamburger at 768px. Mobile menu slides down via `max-height` animation.
- **Hero**: 55/45 grid → single column at 768px. Hero image stacks below text.
- **Card grids**: 3-up → 2-up at 1024px → 1-up below 768px.
- **Display type**: Orbitron `display-xl` clamps from 80px at desktop toward 42px on mobile.
- **Partner marquee**: maintains scroll at all sizes; logos may reorder but always duplicate.

### Image Behavior

- Hero image (`vr-hero.png`) maintains aspect ratio. Uses `hero-image-fade` mask for blended edges.
- Hero image glow filter (`{colors.glow-hero-filter}`) maintained at all sizes.
- Partner logos maintain their native aspect ratio at 32–40px height.

## Motion & Animation

### Marquee

```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 22s linear infinite;
  will-change: transform;
  display: flex;
  width: max-content;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee { animation: none; }
}
```

### Button Hover

- Primary / CTA buttons: `transition: box-shadow 0.2s ease, transform 0.2s ease`.
- Hover: `translateY(-1px)` + shadow shift. Release: `translateY(0)` + shadow reset.
- Never animate `background` on gradient buttons — causes color-flash on some GPUs. Animate `box-shadow` only.

### Nav Link Underline

- `::after` pseudo-element with `scaleX(0)` default → `scaleX(1)` on hover/active.
- `transform-origin: left`. Transition: `transform 0.22s cubic-bezier(0.16, 1, 0.3, 1)`.

### Mobile Menu

- `max-height: 0 → 280px` transition at `0.3s ease`. Overflow hidden.
- Hamburger bars animate via `transform` (rotate 45deg for X icon) + opacity.

### Future Scroll Animations

When adding scroll-triggered reveals:
- Use `@media (prefers-reduced-motion: no-preference)` guard.
- Prefer `opacity + translateY(24px → 0)` over scale transforms.
- Stagger card entrances at 80ms intervals.

## Web3 Identity Signals

These are the visual cues that communicate "Web3-native" without resorting to generic crypto clichés:

1. **Orbitron at extreme weight** — The geometric precision of 900-weight Orbitron reads as "protocol-level confidence". It belongs at the frontier.
2. **Dual-gradient identity** — Gradient fills communicate digital fluidity. Static single-color buttons read as Web2.
3. **Neon glow on display text** — Controlled neon communicates the blockchain aesthetic without feeling like a 2017 ICO site. The key is sparseness.
4. **Share Tech Mono for numbers** — When stat values or addresses appear in mono, it signals on-chain precision.
5. **Atmospheric radial glow in hero** — The purple-to-cyan radial bloom is the visual language of the metaverse — intentional, not accidental.
6. **Blue-tinted hairlines** — Even the borders breathe with the brand. This is the detail that separates a Web3 design system from a generic dark theme.
7. **VR / futurism imagery** — The hero image framing (bilateral drop-shadow in cyan + pink) treats the VR headset as a portal, not a product shot.

## Known Gaps

- Form error and validation styling not yet specified. When added: red glow `0 0 6px rgba(239,68,68,0.8)` on the input border, error text in `oklch(65% 0.2 25)` (warm red).
- Dark-mode is the only mode. No light-mode specification needed per PRODUCT.md anti-references.
- Pricing / tier cards not yet designed. When added: use `feature-card` spec with `button-primary` (blue→cyan) for tier CTA.
- Animation for stat number counters (scroll-triggered count-up) not yet implemented. Use Share Tech Mono for the number during animation.
- The `.neon-blurb` and `.neon-highlight` utility classes in `index.css` are the canonical implementation of soft neon on body text. Do not replicate this pattern inline.
