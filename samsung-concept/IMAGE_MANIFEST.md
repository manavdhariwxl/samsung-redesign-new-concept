# Image manifest — official Samsung media only

The site never draws, generates or substitutes a product image. A product slot shows a **neutral empty frame** until you add an official image; decorative product shots (hero, page headers, split panels) are simply **omitted** until their image exists. Nothing else in the code needs to change.

## How to add an image
1. Download the image from an official Samsung media library (links below).
2. Save it in `src/assets/products/` named **exactly** as the file name in the tables — e.g. `galaxy-s26-ultra.webp` (`.png`, `.jpg`, `.jpeg`, `.avif`, `.svg` also work).
3. Run `npm run dev` — it appears everywhere that product is used. In dev mode empty slots print the file name they are waiting for.

Alternative: put an already-verified URL in `REMOTE_SRC` in `src/data/officialAssets.js` (`'galaxy-s26-ultra': 'https://…'`). It is empty on purpose.

Recommended: transparent PNG/WebP cut-outs, long edge ≥ 1600 px, for the clean product shots used on cards and in the hero/ecosystem. Wider lifestyle photos suit `scene-*` backgrounds.

## Official sources
- Samsung Mobile Press — https://www.samsungmobilepress.com/media-assets
- Samsung Newsroom Global Media Library — https://news.samsung.com/medialibrary/global/albums

> **Read the terms before publishing.** Samsung Mobile Press states that its Materials may be used "solely for your personal, informational and non-commercial use" and prohibits displaying or publishing them for other purposes (https://www.samsungmobilepress.com/terms). The Global Media Library states its assets are "provided for the media publishing purpose only." A publicly hosted concept site may fall outside that — get Samsung's permission (or use the files only in a private/local portfolio) before deploying with official images.

## 1. Priority products
Added so far (background removed from the official studio shots, WebP up to 1800 px): **Galaxy S26 Ultra** (cobalt violet, 3/4), **Galaxy Watch9** (cream 40 mm), **Galaxy Buds4 Pro** (black, case open), **Galaxy Tab S11 Ultra** (gray, front-left 30°), **Galaxy Book6 Pro** (gray, open 3/4), **Galaxy Z Fold8 Ultra** (violet shadow, unfolded), **OLED S95H** (Samsung India product shot), **Galaxy A series** (A-series press image) and **Galaxy M series** (M47 5G, Samsung India thumbnail).

| Status | File name | Product | Mobile Press | Newsroom album |
|---|---|---|---|---|
| ✅ added | `galaxy-s26-ultra.webp` | Galaxy S26 Ultra | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-s26-ultra) | [album](https://news.samsung.com/medialibrary/global/album/170) |
| ⬜ needed | `galaxy-s26.webp` | Galaxy S26 | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-s26) | [album](https://news.samsung.com/medialibrary/global/album/170) |
| ⬜ needed | `galaxy-s26-plus.webp` | Galaxy S26+ | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | [album](https://news.samsung.com/medialibrary/global/album/170) |
| ⬜ needed | `galaxy-s26-fe.webp` | Galaxy S26 FE | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-s26-fe) | [album](https://news.samsung.com/medialibrary/global/album/170) |
| ✅ added | `galaxy-z-fold8-ultra.webp` | Galaxy Z Fold8 Ultra | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-z-fold8-ultra) | [album](https://news.samsung.com/medialibrary/global/album/173) |
| ⬜ needed | `galaxy-z-fold8.webp` | Galaxy Z Fold8 | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-z-fold8) | [album](https://news.samsung.com/medialibrary/global/album/173) |
| ⬜ needed | `galaxy-z-flip8.webp` | Galaxy Z Flip8 | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-z-flip8) | [album](https://news.samsung.com/medialibrary/global/album/173) |
| ✅ added | `galaxy-watch9.webp` | Galaxy Watch9 | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-watch9) | — |
| ✅ added | `galaxy-buds4-pro.webp` | Galaxy Buds4 Pro | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-buds4-pro) | [album](https://news.samsung.com/medialibrary/global/album/170) |
| ⬜ needed | `galaxy-buds4.webp` | Galaxy Buds4 | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | [album](https://news.samsung.com/medialibrary/global/album/170) |
| ✅ added | `galaxy-tab-s11-ultra.webp` | Galaxy Tab S11 Ultra | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-tab-s11-ultra) | — |
| ⬜ needed | `galaxy-tab-s11.webp` | Galaxy Tab S11 | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |
| ⬜ needed | `galaxy-book6-ultra.webp` | Galaxy Book6 Ultra | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-book6-ultra) | — |
| ✅ added | `galaxy-book6-pro.webp` | Galaxy Book6 Pro | [asset page](https://www.samsungmobilepress.com/media-assets/galaxy-book6-pro) | — |
| ⬜ needed | `galaxy-book6.webp` | Galaxy Book6 | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |

## 2. Other named models (12)
| Status | File name | Model | Mobile Press | Newsroom album |
|---|---|---|---|---|
| ⬜ needed | `galaxy-tab-s10-fe-plus.webp` | Galaxy Tab S10 FE+ | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |
| ⬜ needed | `galaxy-tab-s10-fe.webp` | Galaxy Tab S10 FE | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |
| ⬜ needed | `galaxy-tab-a11-plus.webp` | Galaxy Tab A11+ | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |
| ⬜ needed | `galaxy-tab-a11.webp` | Galaxy Tab A11 | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |
| ⬜ needed | `galaxy-watch-ultra2.webp` | Galaxy Watch Ultra2 | [asset list](https://www.samsungmobilepress.com/media-assets) (search the name) | — |
| ⬜ needed | `tv-micro-rgb-r95h.webp` | Micro RGB R95H | n/a (not a mobile product) | — |
| ✅ added | `tv-oled-s95h.webp` | OLED S95H | n/a (not a mobile product) | — |
| ⬜ needed | `tv-oled-s90h.webp` | OLED S90H | n/a (not a mobile product) | — |
| ⬜ needed | `tv-oled-s85h.webp` | OLED S85H | n/a (not a mobile product) | — |
| ⬜ needed | `family-hub-ai-vision.webp` | Family Hub refrigerator with AI Vision | n/a (not a mobile product) | [album](https://news.samsung.com/medialibrary/global/album/134) |
| ⬜ needed | `bespoke-ai-windfree-pro-ac.webp` | Bespoke AI WindFree Pro AC | n/a (not a mobile product) | [album](https://news.samsung.com/medialibrary/global/album/134) |
| ⬜ needed | `infinite-1-way-cassette-ac.webp` | Infinite 1-Way Cassette AC | n/a (not a mobile product) | [album](https://news.samsung.com/medialibrary/global/album/134) |

## 3. Family cards (20)
A family card looks for its own file first, then its representative model image (the last column). Families with no named model use their own file name.

| Status | Family file | Family | Falls back to |
|---|---|---|---|
| ✅ shows an image | `galaxy-s.webp` | Galaxy S series | `galaxy-s26-ultra.webp` |
| ✅ shows an image | `galaxy-z.webp` | Galaxy Z series | `galaxy-z-fold8-ultra.webp` |
| ✅ shows an image | `galaxy-a.webp` | Galaxy A series | `galaxy-a.webp` |
| ✅ shows an image | `galaxy-m.webp` | Galaxy M series | `galaxy-m.webp` |
| ⬜ empty frame | `galaxy-f.webp` | Galaxy F series | `galaxy-f.webp` |
| ✅ shows an image | `galaxy-tab-s.webp` | Galaxy Tab S series | `galaxy-tab-s11-ultra.webp` |
| ⬜ empty frame | `galaxy-tab-a.webp` | Galaxy Tab A series | `galaxy-tab-a11-plus.webp` |
| ✅ shows an image | `galaxy-book.webp` | Galaxy Book series | `galaxy-book6-pro.webp` |
| ✅ shows an image | `galaxy-watch.webp` | Galaxy Watch series | `galaxy-watch9.webp` |
| ✅ shows an image | `galaxy-buds.webp` | Galaxy Buds series | `galaxy-buds4-pro.webp` |
| ⬜ empty frame | `galaxy-ring.webp` | Galaxy Ring | `galaxy-ring.webp` |
| ✅ shows an image | `tv-oled.webp` | Samsung OLED | `tv-oled-s95h.webp` |
| ⬜ empty frame | `tv-neo-qled.webp` | Neo QLED | `tv-neo-qled.webp` |
| ⬜ empty frame | `tv-frame.webp` | The Frame | `tv-frame.webp` |
| ⬜ empty frame | `tv-micro-rgb.webp` | Micro RGB | `tv-micro-rgb-r95h.webp` |
| ⬜ empty frame | `tv-mini-led.webp` | Mini LED | `tv-mini-led.webp` |
| ⬜ empty frame | `tv-smart.webp` | Smart TVs with Vision AI | `tv-smart.webp` |
| ⬜ empty frame | `home-fridge.webp` | Bespoke AI refrigerators | `family-hub-ai-vision.webp` |
| ⬜ empty frame | `home-ac.webp` | WindFree air conditioners | `bespoke-ai-windfree-pro-ac.webp` |
| ⬜ empty frame | `home-laundry.webp` | Bespoke AI laundry | `home-laundry.webp` |

## 4. Decorative scenes (optional, not product images)
Abstract gradient backgrounds generated in code. Replace any of them with a wide official lifestyle photo by adding `scene-….jpg` (e.g. `scene-tv.jpg`).

`scene-galaxy`, `scene-ai`, `scene-smartthings`, `scene-home`, `scene-tv`, `scene-work`, `scene-discover`, `scene-support`, `scene-productivity`, `scene-creativity`, `scene-communication`, `scene-photography`, `scene-personalization`, `scene-ease`, `scene-care`, `scene-save`, `scene-secure`, `scene-oled`, `scene-neo`, `scene-frame`, `scene-smart`, `scene-micro-rgb`, `scene-mini-led`, `scene-story-1`, `scene-story-2`, `scene-story-3`, `scene-story-4`, `scene-story-5`, `scene-story-6`

## Where each image is used
- **Hero:** galaxy-s26-ultra, galaxy-tab-s11-ultra, galaxy-watch9, galaxy-buds4-pro (omitted until present)
- **Ecosystem section:** galaxy-s26-ultra, galaxy-watch9, galaxy-buds4-pro, galaxy-tab-s11, galaxy-book6
- **SmartThings scene:** galaxy-s26-ultra, galaxy-watch9, tv-oled-s95h, family-hub-ai-vision, bespoke-ai-windfree-pro-ac, home-laundry
- **Page headers / split panels:** the model named in each page's alt text
- **Product cards, model tiles, Find-your-Galaxy thumbnails:** per the tables above
