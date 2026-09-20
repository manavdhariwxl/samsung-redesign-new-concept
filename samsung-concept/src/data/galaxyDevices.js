/**
 * Ecosystem model. Positions are percentages within the stage (desktop).
 * Relationship copy is deliberately general — feature availability varies by model.
 */
export const ecosystemDevices = [
  {
    id: 'phone',
    name: 'Galaxy Smartphone',
    short: 'Phone',
    image: 'galaxy-s26-ultra',
    ratio: '3 / 7',
    pos: { x: 50, y: 50 },
    links: ['watch', 'buds', 'tab', 'book'],
    role: 'The centre of your Galaxy world.',
    relation:
      'Your Samsung account, Galaxy AI features and the SmartThings app all start on the phone. The rest of the ecosystem is designed to extend from it.',
    to: '/smartphones',
    cta: 'Explore smartphones',
  },
  {
    id: 'watch',
    name: 'Galaxy Watch',
    short: 'Watch',
    image: 'galaxy-watch9',
    ratio: '6 / 7',
    pos: { x: 17, y: 24 },
    links: ['phone', 'buds'],
    role: 'Your phone, on your wrist.',
    relation:
      'Pairs with a Galaxy phone for notifications and wellness insights through Samsung Health. Selected watches also work with SmartThings — for example, sleep-aware settings on supported air conditioners.',
    to: '/wearables?f=watch',
    cta: 'Explore Galaxy Watch',
  },
  {
    id: 'buds',
    name: 'Galaxy Buds',
    short: 'Buds',
    image: 'galaxy-buds4-pro',
    ratio: '3 / 4',
    pos: { x: 83, y: 24 },
    links: ['phone', 'watch'],
    role: 'Sound that follows you.',
    relation:
      'Designed to pair with Galaxy devices, so audio moves with you between the phone, watch and tablet on supported models.',
    to: '/wearables?f=buds',
    cta: 'Explore Galaxy Buds',
  },
  {
    id: 'tab',
    name: 'Galaxy Tab',
    short: 'Tab',
    image: 'galaxy-tab-s11-ultra',
    ratio: '5 / 4',
    pos: { x: 83, y: 76 },
    links: ['phone', 'book'],
    role: 'A larger canvas for the same world.',
    relation:
      'Shares your account and apps with the phone. Select Tab S models add S Pen support, and supported devices can extend to a desktop-style experience with Samsung DeX.',
    to: '/tablets',
    cta: 'Explore Galaxy Tab',
  },
  {
    id: 'book',
    name: 'Galaxy Book',
    short: 'Book',
    image: 'galaxy-book6-pro',
    ratio: '6 / 5',
    pos: { x: 17, y: 76 },
    links: ['phone', 'tab'],
    role: 'Windows, connected to Galaxy.',
    relation:
      'A Windows laptop that works alongside Galaxy phones and tablets — with connected experiences such as Quick Share and Multi Control on supported devices.',
    to: '/galaxy-book',
    cta: 'Explore Galaxy Book',
  },
];

/** Undirected edges drawn between ecosystem nodes. */
export const connections = [
  ['phone', 'watch'],
  ['phone', 'buds'],
  ['phone', 'tab'],
  ['phone', 'book'],
  ['watch', 'buds'],
  ['tab', 'book'],
];

/** "One connected world." — the chain the whole site is built around. */
export const ecosystemChain = [
  { label: 'Phone', to: '/smartphones' },
  { label: 'Watch', to: '/wearables?f=watch' },
  { label: 'Buds', to: '/wearables?f=buds' },
  { label: 'Tab', to: '/tablets' },
  { label: 'Book', to: '/galaxy-book' },
  { label: 'TV', to: '/tvs' },
  { label: 'Home', to: '/home-appliances' },
  { label: 'SmartThings', to: '/smartthings' },
  { label: 'AI', to: '/galaxy-ai' },
];
