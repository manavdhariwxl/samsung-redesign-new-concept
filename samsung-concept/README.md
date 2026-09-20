# Samsung Website Redesign Concept

> **Unofficial** redesign concept — not affiliated with, endorsed by or operated by Samsung.
> Central idea: **"One connected world."**

React + Vite + JavaScript, Bootstrap (grid + utilities only), custom SCSS design system, React Router. No TypeScript, Tailwind, UI kits or icon libraries.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

Requires Node 18+ (Node 20+ recommended).

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **Add New → Project → Import** the repository.
3. Framework preset is detected as **Vite**. Build command `npm run build`, output directory `dist` (already set in `vercel.json`).
4. Deploy. `vercel.json` rewrites every path to `index.html`, so deep links such as `/tvs?f=frame` work.

CLI alternative: `npm i -g vercel && vercel --prod`.

## Product images — official Samsung media only

The site **does not draw, generate or substitute product images**. Product slots show a neutral empty frame until an official image is added; decorative product shots (hero, page headers, split panels) are omitted until their image exists. Abstract `scene-*` gradients are the only generated artwork and are not product images.

**Included so far:** `galaxy-s26-ultra`, `galaxy-watch9`, `galaxy-buds4-pro`, `galaxy-tab-s11-ultra`, `galaxy-book6-pro`, `galaxy-z-fold8-ultra`, `tv-oled-s95h`, `galaxy-a`, `galaxy-m` (official product shots, background removed, WebP). Everything else still shows the empty frame.

1. Open **`IMAGE_MANIFEST.md`** — it lists every file name (all named models + families) with the official Samsung Mobile Press asset page / Newsroom album to download it from.
2. Save the image in **`src/assets/products/`** named exactly as listed, e.g. `galaxy-s26-ultra.webp`.
3. `npm run dev` — it appears everywhere that product is used. In dev mode empty slots print the file name they are waiting for.

Image sources are centralised in `src/data/media.js` (lookup) and `src/data/officialAssets.js` (source pages + optional `REMOTE_SRC` URLs). No component needs editing.

**Check the terms before deploying publicly.** Samsung Mobile Press restricts its materials to personal, informational, non-commercial use, and the Global Media Library says its assets are provided for media publishing only. Get Samsung's permission, or keep official-image builds private, before publishing.

## What's inside

```
src/
  main.jsx · App.jsx                 entry, router, lazy routes
  data/                              all content, separate from UI
    navigation.js  products.js  models.js  galaxyDevices.js  aiFeatures.js
    smartThings.js  stories.js  tv.js  computing.js  personas.js
    support.js  appliances.js  searchIndex.js  media.js  officialAssets.js
  hooks/                             useReveal, useParallax, usePointerParallax, useScrolled,
                                     useFocusTrap, useLockBody, useReducedMotion,
                                     useQueryFilter, usePageTitle
  components/
    layout/    Navbar  SearchOverlay  Footer  PageHeader  ScrollToTop
    ui/        Reveal  SectionHeading  MagneticButton  LazyImage  FilterChips
               EcosystemChain  Newsletter  Icon
    cards/     ProductCard  DeviceCard  StoryCard
    sections/  Hero  GalaxyAISection  EcosystemSection  ProductShowcase  ModelGrid
               SmartThingsSection  AIHomeSection  TVSection  ComputingSection
               DiscoverySection  FindYourGalaxy  FeatureGrid  SplitBlock
               ContinueBand  StoryReader
  pages/     Home  Galaxy  GalaxyAI  Smartphones  Tablets  GalaxyBook  Wearables
             TVs  HomeAppliances  SmartThings  AIHome  Discover  Support  NotFound
  styles/    main.scss  _variables  _mixins  _base  _typography  _animations  _media
             components/ _ui _navbar _hero _ai _ecosystem _showcase _sections
```

Routes: `/`, `/galaxy`, `/galaxy-ai`, `/smartphones`, `/tablets`, `/galaxy-book`, `/wearables`, `/tvs`, `/home-appliances`, `/smartthings`, `/ai-home`, `/discover`, `/support` (+ 404).

## Behaviour notes

- **Filters are linkable**: `/smartphones?f=z`, `/tvs?f=oled`, `/home-appliances?f=ac`, `/wearables?f=buds`, `/discover?c=ai`, `/discover?story=three-ais-one-idea`.
- **Search** (header icon) is client-side over pages, product families, Galaxy AI features, stories and support topics. Arrow keys move through results.
- **Reduced motion** is respected everywhere (`prefers-reduced-motion`): reveals resolve instantly, parallax and floating are off.
- **Newsletter** is front-end only — nothing is sent or stored.

## Content policy

- Product families and **model names only** — no prices, specifications, awards, reviews or statistics.
- Model names come from Samsung India newsroom announcements and are **not exhaustive** (Galaxy A/M/F models, older models and many appliance SKUs are not listed). Every tile links to the official site for the live catalogue.
- Outbound links point to samsung.com/in; please spot-check them before publishing, as Samsung reorganises its URLs.
- Galaxy AI / AI Home copy follows Samsung India's public framing (Ease, Care, Save, Secure). Feature availability varies by model, region and software.
