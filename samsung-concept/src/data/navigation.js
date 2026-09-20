export const SITE = {
  name: 'Samsung Website Redesign Concept',
  short: 'Samsung',
  disclaimer: 'Unofficial Samsung Website Redesign Concept — Not affiliated with Samsung.',
  credit: 'Designed & Developed by Manav Dhariwxl',
};

/** Official Samsung India destinations used for outbound links. */
export const OFFICIAL = {
  home: 'https://www.samsung.com/in/',
  offers: 'https://www.samsung.com/in/offer/',
  support: 'https://www.samsung.com/in/support/',
  smartphones: 'https://www.samsung.com/in/smartphones/',
  tablets: 'https://www.samsung.com/in/tablets/',
  computers: 'https://www.samsung.com/in/computers/',
  watches: 'https://www.samsung.com/in/watches/',
  audio: 'https://www.samsung.com/in/audio-devices/',
  tvs: 'https://www.samsung.com/in/tvs/',
  appliances: 'https://www.samsung.com/in/home-appliances/',
  newsroom: 'https://news.samsung.com/in/',
  sustainability: 'https://www.samsung.com/in/sustainability/',
  accessibility: 'https://www.samsung.com/in/sustainability/accessibility/overview/',
  privacy: 'https://www.samsung.com/in/info/privacy/',
  securityPrivacy: 'https://www.samsung.com/in/sustainability/security-and-privacy/',
  terms: 'https://www.samsung.com/in/termsandconditions/',
};

/** Primary navigation. Groups with `children` open a panel; others are direct links. */
export const primaryNav = [
  {
    id: 'mobile',
    label: 'Mobile',
    to: '/smartphones',
    children: [
      { label: 'Smartphones', to: '/smartphones', note: 'Galaxy S, Z and A series' },
      { label: 'Tablets', to: '/tablets', note: 'Galaxy Tab S and Tab A' },
      { label: 'Wearables', to: '/wearables', note: 'Watch, Buds and Ring' },
      { label: 'The Galaxy ecosystem', to: '/galaxy', note: 'How it all connects' },
    ],
  },
  {
    id: 'tv',
    label: 'TV & AV',
    to: '/tvs',
    children: [
      { label: 'All TVs', to: '/tvs', note: 'Every Samsung TV family' },
      { label: 'OLED', to: '/tvs?f=oled', note: 'Self-lit pixels' },
      { label: 'Neo QLED', to: '/tvs?f=neo-qled', note: 'Quantum Mini LED' },
      { label: 'The Frame', to: '/tvs?f=frame', note: 'Art-focused living' },
    ],
  },
  {
    id: 'appliances',
    label: 'Home Appliances',
    to: '/home-appliances',
    children: [
      { label: 'All appliances', to: '/home-appliances', note: 'Bespoke AI range' },
      { label: 'Refrigerators', to: '/home-appliances?f=refrigerators', note: 'Family Hub' },
      { label: 'Air conditioners', to: '/home-appliances?f=ac', note: 'WindFree' },
      { label: 'Laundry', to: '/home-appliances?f=laundry', note: 'Washers and dryers' },
    ],
  },
  {
    id: 'computing',
    label: 'Computing',
    to: '/galaxy-book',
    children: [
      { label: 'Galaxy Book', to: '/galaxy-book', note: 'Windows laptops' },
      { label: 'Galaxy Tab', to: '/tablets', note: 'Tablets for work and play' },
    ],
  },
  {
    id: 'accessories',
    label: 'Accessories',
    to: '/wearables',
    children: [
      { label: 'Galaxy Buds', to: '/wearables?f=buds', note: 'Wireless earbuds' },
      { label: 'Galaxy Watch', to: '/wearables?f=watch', note: 'Smartwatches' },
      { label: 'Galaxy Ring', to: '/wearables?f=ring', note: 'Discreet wellness' },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    to: '/galaxy-ai',
    children: [
      { label: 'Galaxy AI', to: '/galaxy-ai', note: 'On your devices' },
      { label: 'AI Home', to: '/ai-home', note: 'Future living, now' },
    ],
  },
  { id: 'smartthings', label: 'SmartThings', to: '/smartthings' },
];

export const utilityNav = [
  { label: 'Discover', to: '/discover' },
  { label: 'Support', to: '/support' },
];

export const footerColumns = [
  {
    title: 'Products',
    links: [
      { label: 'Smartphones', to: '/smartphones' },
      { label: 'Tablets', to: '/tablets' },
      { label: 'Galaxy Book', to: '/galaxy-book' },
      { label: 'Wearables', to: '/wearables' },
      { label: 'TVs', to: '/tvs' },
      { label: 'Home Appliances', to: '/home-appliances' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { label: 'Samsung India store', href: OFFICIAL.home },
      { label: 'Offers', href: OFFICIAL.offers },
      { label: 'Find your Galaxy', to: '/galaxy#find-your-galaxy' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help centre', to: '/support' },
      { label: 'Samsung India Support', href: OFFICIAL.support },
    ],
  },
  {
    title: 'Explore',
    links: [
      { label: 'The Galaxy ecosystem', to: '/galaxy' },
      { label: 'Galaxy AI', to: '/galaxy-ai' },
      { label: 'SmartThings', to: '/smartthings' },
      { label: 'AI Home', to: '/ai-home' },
      { label: 'Discover', to: '/discover' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Newsroom India', href: OFFICIAL.newsroom },
      { label: 'Samsung India', href: OFFICIAL.home },
      { label: 'Sustainability', href: OFFICIAL.sustainability },
    ],
  },
];

export const footerLegal = [
  { label: 'Privacy', href: OFFICIAL.privacy },
  { label: 'Terms', href: OFFICIAL.terms },
  { label: 'Accessibility', href: OFFICIAL.accessibility },
  { label: 'Security & privacy', href: OFFICIAL.securityPrivacy },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/samsungindia/' },
  { label: 'X', href: 'https://x.com/SamsungIndia' },
  { label: 'YouTube', href: 'https://www.youtube.com/@SamsungIndia' },
  { label: 'Facebook', href: 'https://www.facebook.com/SamsungIndia' },
];

/** Route metadata — used by the search index and page headers. */
export const routes = [
  { path: '/galaxy', title: 'The Galaxy ecosystem', description: 'Phone, watch, buds, tablet and laptop — designed to work together.', keywords: 'ecosystem connected devices galaxy' },
  { path: '/galaxy-ai', title: 'Galaxy AI', description: 'AI experiences for productivity, creativity, communication, photography and personalisation.', keywords: 'ai artificial intelligence circle to search translate' },
  { path: '/smartphones', title: 'Smartphones', description: 'Galaxy S, Z, A, M and F series.', keywords: 'phone mobile foldable flagship' },
  { path: '/tablets', title: 'Tablets', description: 'Galaxy Tab S and Tab A.', keywords: 'tab tablet s pen dex' },
  { path: '/galaxy-book', title: 'Galaxy Book', description: 'Windows laptops that connect with your Galaxy devices.', keywords: 'laptop windows computer pc notebook' },
  { path: '/wearables', title: 'Wearables', description: 'Galaxy Watch, Galaxy Buds and Galaxy Ring.', keywords: 'watch buds ring earbuds smartwatch health' },
  { path: '/tvs', title: 'TVs', description: 'OLED, Neo QLED, The Frame and Smart TVs.', keywords: 'television oled qled frame screen vision ai' },
  { path: '/home-appliances', title: 'Home Appliances', description: 'Bespoke AI refrigerators, WindFree air conditioners and laundry.', keywords: 'fridge refrigerator ac air conditioner washing machine laundry bespoke' },
  { path: '/smartthings', title: 'SmartThings', description: 'One platform for the devices in your home.', keywords: 'smart home connected iot' },
  { path: '/ai-home', title: 'AI Home', description: 'Future living, now — Ease, Care, Save and Secure.', keywords: 'bespoke ai home family hub' },
  { path: '/discover', title: 'Discover', description: 'Stories on innovation, Galaxy, AI, smart home, entertainment and technology.', keywords: 'stories editorial articles news' },
  { path: '/support', title: 'Support', description: 'Find help topics and reach official Samsung India support.', keywords: 'help warranty service register manual' },
];
