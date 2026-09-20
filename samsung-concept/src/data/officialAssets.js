/**
 * Official Samsung media — source registry.
 *
 * This file is the single place that says where each product image comes from and where a replacement
 * goes. Every image key used by the site equals a model id (see models.js), a family id (products.js)
 * or a page-specific key.
 *
 * TWO WAYS TO SUPPLY AN IMAGE (nothing else in the codebase needs editing):
 *   1. Local file  → save it as  src/assets/products/<key>.webp  (or .png/.jpg/.avif). Preferred.
 *   2. Remote URL  → add  '<key>': 'https://…'  to REMOTE_SRC below.
 *
 * Keys with neither are rendered as a clean labelled empty slot (or omitted when decorative).
 * No product image is ever drawn, generated or substituted.
 */

export const SOURCES = {
  mobilePress: 'https://www.samsungmobilepress.com/media-assets',
  mobilePressTerms: 'https://www.samsungmobilepress.com/terms',
  newsroomLibrary: 'https://news.samsung.com/medialibrary/global/albums',
};

/** Remote image URLs (key → URL). Intentionally empty until a URL has been verified in a browser. */
export const REMOTE_SRC = {};

/**
 * Intrinsic pixel sizes of the local files in src/assets/products (width, height).
 * Optional — used to set width/height attributes so images do not shift the layout while loading.
 */
export const IMAGE_SIZES = {
  'galaxy-s26-ultra': [746, 1800],
  'galaxy-watch9': [1548, 1800],
  'galaxy-buds4-pro': [1314, 1800],
  'galaxy-tab-s11-ultra': [1800, 1419],
  'galaxy-book6-pro': [1800, 1498],
  'galaxy-z-fold8-ultra': [1633, 1800],
  'tv-oled-s95h': [977, 933],
  'galaxy-a': [527, 677],
  'galaxy-m': [151, 294],
};

/** Per-product asset pages on Samsung Mobile Press. Only pages confirmed to exist are listed. */
export const ASSET_PAGES = {
  'galaxy-s26-ultra': 'https://www.samsungmobilepress.com/media-assets/galaxy-s26-ultra',
  'galaxy-s26': 'https://www.samsungmobilepress.com/media-assets/galaxy-s26',
  'galaxy-s26-fe': 'https://www.samsungmobilepress.com/media-assets/galaxy-s26-fe',
  'galaxy-z-fold8-ultra': 'https://www.samsungmobilepress.com/media-assets/galaxy-z-fold8-ultra',
  'galaxy-z-fold8': 'https://www.samsungmobilepress.com/media-assets/galaxy-z-fold8',
  'galaxy-z-flip8': 'https://www.samsungmobilepress.com/media-assets/galaxy-z-flip8',
  'galaxy-watch9': 'https://www.samsungmobilepress.com/media-assets/galaxy-watch9',
  'galaxy-buds4-pro': 'https://www.samsungmobilepress.com/media-assets/galaxy-buds4-pro',
  'galaxy-tab-s11-ultra': 'https://www.samsungmobilepress.com/media-assets/galaxy-tab-s11-ultra',
  'galaxy-book6-pro': 'https://www.samsungmobilepress.com/media-assets/galaxy-book6-pro',
  'galaxy-book6-ultra': 'https://www.samsungmobilepress.com/media-assets/galaxy-book6-ultra',
};

/** Samsung Newsroom Global Media Library albums that contain launch imagery. */
export const ALBUMS = {
  s26: 'https://news.samsung.com/medialibrary/global/album/170',
  z: 'https://news.samsung.com/medialibrary/global/album/173',
  bespoke: 'https://news.samsung.com/medialibrary/global/album/134',
};

/** Which album to check for a given key (used only for documentation / IMAGE_MANIFEST.md). */
export const albumFor = (key) => {
  if (/^galaxy-(s26|buds4)/.test(key)) return ALBUMS.s26;
  if (/^galaxy-z-/.test(key)) return ALBUMS.z;
  if (/^(family-hub|bespoke|infinite|home-)/.test(key)) return ALBUMS.bespoke;
  return null;
};

/** Best official page for a key: its own asset page, otherwise the Mobile Press asset list. */
export const assetPageFor = (key) => ASSET_PAGES[key] || SOURCES.mobilePress;
