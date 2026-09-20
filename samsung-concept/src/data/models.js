import { OFFICIAL } from './navigation';

/**
 * Named models — names only (no prices, no specifications).
 * Compiled from Samsung India newsroom announcements. This is NOT exhaustive:
 * Samsung's range changes often, so every tile links to the official site for the live catalogue.
 *
 * `id` doubles as the image key: add  src/assets/products/<id>.webp  to show the real product image.
 */
export const models = [
  // ── Smartphones ────────────────────────────────────────────────
  { id: 'galaxy-s26-ultra', name: 'Galaxy S26 Ultra', family: 'galaxy-s', group: 'mobile' },
  { id: 'galaxy-s26-plus', name: 'Galaxy S26+', family: 'galaxy-s', group: 'mobile' },
  { id: 'galaxy-s26', name: 'Galaxy S26', family: 'galaxy-s', group: 'mobile' },
  { id: 'galaxy-s26-fe', name: 'Galaxy S26 FE', family: 'galaxy-s', group: 'mobile' },
  { id: 'galaxy-z-fold8-ultra', name: 'Galaxy Z Fold8 Ultra', family: 'galaxy-z', group: 'mobile' },
  { id: 'galaxy-z-fold8', name: 'Galaxy Z Fold8', family: 'galaxy-z', group: 'mobile' },
  { id: 'galaxy-z-flip8', name: 'Galaxy Z Flip8', family: 'galaxy-z', group: 'mobile' },

  // ── Tablets ────────────────────────────────────────────────────
  { id: 'galaxy-tab-s11-ultra', name: 'Galaxy Tab S11 Ultra', family: 'galaxy-tab-s', group: 'computing' },
  { id: 'galaxy-tab-s11', name: 'Galaxy Tab S11', family: 'galaxy-tab-s', group: 'computing' },
  { id: 'galaxy-tab-s10-fe-plus', name: 'Galaxy Tab S10 FE+', family: 'galaxy-tab-s', group: 'computing' },
  { id: 'galaxy-tab-s10-fe', name: 'Galaxy Tab S10 FE', family: 'galaxy-tab-s', group: 'computing' },
  { id: 'galaxy-tab-a11-plus', name: 'Galaxy Tab A11+', family: 'galaxy-tab-a', group: 'computing' },
  { id: 'galaxy-tab-a11', name: 'Galaxy Tab A11', family: 'galaxy-tab-a', group: 'computing' },

  // ── Laptops ────────────────────────────────────────────────────
  { id: 'galaxy-book6-ultra', name: 'Galaxy Book6 Ultra', family: 'galaxy-book', group: 'computing' },
  { id: 'galaxy-book6-pro', name: 'Galaxy Book6 Pro', family: 'galaxy-book', group: 'computing' },
  { id: 'galaxy-book6', name: 'Galaxy Book6', family: 'galaxy-book', group: 'computing' },

  // ── Wearables ──────────────────────────────────────────────────
  { id: 'galaxy-watch-ultra2', name: 'Galaxy Watch Ultra2', family: 'galaxy-watch', group: 'wearables' },
  { id: 'galaxy-watch9', name: 'Galaxy Watch9', family: 'galaxy-watch', group: 'wearables' },
  { id: 'galaxy-buds4-pro', name: 'Galaxy Buds4 Pro', family: 'galaxy-buds', group: 'wearables' },
  { id: 'galaxy-buds4', name: 'Galaxy Buds4', family: 'galaxy-buds', group: 'wearables' },

  // ── TVs (2026 Vision AI lineup, India) ─────────────────────────
  { id: 'tv-micro-rgb-r95h', name: 'Micro RGB R95H', family: 'tv-micro-rgb', group: 'tv' },
  { id: 'tv-oled-s95h', name: 'OLED S95H', family: 'tv-oled', group: 'tv' },
  { id: 'tv-oled-s90h', name: 'OLED S90H', family: 'tv-oled', group: 'tv' },
  { id: 'tv-oled-s85h', name: 'OLED S85H', family: 'tv-oled', group: 'tv' },

  // ── Home appliances (Bespoke AI) ───────────────────────────────
  { id: 'family-hub-ai-vision', name: 'Family Hub refrigerator with AI Vision', family: 'home-fridge', group: 'home' },
  { id: 'bespoke-ai-windfree-pro-ac', name: 'Bespoke AI WindFree Pro AC', family: 'home-ac', group: 'home' },
  { id: 'infinite-1-way-cassette-ac', name: 'Infinite 1-Way Cassette AC', family: 'home-ac', group: 'home' },
];

/** Where "see everything" leads for each product group. */
export const catalogueLinks = {
  mobile: OFFICIAL.smartphones,
  computing: OFFICIAL.tablets,
  wearables: OFFICIAL.watches,
  tv: OFFICIAL.tvs,
  home: OFFICIAL.appliances,
};

export const modelsFor = (predicate) => models.filter(predicate);

/** Every image key the site can use, for IMAGE_MANIFEST.md. */
export const imageKeysFor = (products) => ({
  models: models.map((m) => m.id),
  families: products.map((p) => p.id),
});

const FILTER_FAMILY = {
  s: 'galaxy-s',
  z: 'galaxy-z',
  'tab-s': 'galaxy-tab-s',
  'tab-a': 'galaxy-tab-a',
  watch: 'galaxy-watch',
  buds: 'galaxy-buds',
  oled: 'tv-oled',
  'micro-rgb': 'tv-micro-rgb',
  refrigerators: 'home-fridge',
  ac: 'home-ac',
};

/** Models for a product group, narrowed by a page filter when that filter maps to a family with named models. */
export function modelsForFilter(groups, filter) {
  const list = Array.isArray(groups) ? groups : [groups];
  const inGroups = models.filter((m) => list.includes(m.group));
  const family = FILTER_FAMILY[filter];
  if (!family) return inGroups;
  const narrowed = inGroups.filter((m) => m.family === family);
  return narrowed.length ? narrowed : inGroups;
}
