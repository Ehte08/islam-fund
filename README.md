# Project Blue

**[projectblueadopters.com →](https://projectblueadopters.com)**

I met Mitch at the mosque.

He stayed after Jumu'ah one Friday and we got talking — he was building something, a funding and networking platform for entrepreneurs, and he wanted a website that matched the vision. Not a typical fintech site with navy and gold and stock photos of handshakes. Something that actually felt like the future.

He asked if I could help. I said yes.

---

## What Project Blue Is

Project Blue connects entrepreneurs with investors and collaborators — specifically in Web3, crypto, real estate, and emerging tech. The target audience is faith-conscious founders and investors who want capital connections and a peer network in the same place. The pitch is simple: find your people, find your funding.

The landing page has one job — get a prospective member to click "Secure your spot now." Everything else exists to earn that click.

---

## The Build

The site is React with Vite, deployed on Vercel. The aesthetic is deliberately Web3-native: dark backgrounds, bold scale, motion that feels alive without being loud. No traditional Islamic geometry or calligraphy as design language — Mitch was specific about that. The community is faith-conscious but the product belongs at the frontier of the internet, not in a prayer hall.

The hero section locks to exactly `100dvh` / `100vw` on iPad, laptop, and desktop — no scroll on those viewports. Below the fold is a marquee carousel running a continuous ticker of funding stats and community proof points: the kind of numbers that signal this is a real network, not a concept.

There's a Palestine badge on the page. It sits in the top-right corner. Mitch wanted it there and so did I.

---

## Things I Learned

**Viewport locking for landing pages.** A fixed, no-scroll hero on desktop requires more deliberate layout than it sounds. `100dvh` handles browser chrome correctly on most platforms, but it still needed explicit `overflow: hidden` on the root and careful z-indexing to prevent any child from bleeding outside the viewport. The carousel at the bottom required its own scroll context within the locked frame.

**React + Vite for fast one-page builds.** For a focused landing page with no routing complexity, Vite's cold-start speed and HMR make iteration feel instant compared to a framework with a full build pipeline. The tradeoff is that you wire everything yourself — no file-based routing, no built-in image optimization. For a project this size, that tradeoff is worth it.

**Marquee animation.** A smooth, continuous CSS marquee that works correctly across browsers requires more thought than a `translateX` loop. Duplicate elements handle the seam. `animation-play-state: paused` on hover. `prefers-reduced-motion` stops it entirely. Getting each of those details right is what separates a marquee that looks finished from one that subtly flickers or jerks at the loop point.

---

## Stack

React, Vite, Tailwind CSS, Motion, Vercel.
