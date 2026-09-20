export const storyCategories = [
  { id: 'all', label: 'All' },
  { id: 'innovation', label: 'Innovation' },
  { id: 'galaxy', label: 'Galaxy' },
  { id: 'ai', label: 'AI' },
  { id: 'smart-home', label: 'Smart Home' },
  { id: 'entertainment', label: 'Entertainment' },
  { id: 'technology', label: 'Technology' },
];

export const STORY_NOTE =
  'Concept editorial. This piece summarises publicly available Samsung information for the purposes of a design study; it is not an official Samsung publication.';

export const stories = [
  {
    id: 'what-connected-means',
    category: 'innovation',
    categoryLabel: 'Innovation',
    title: 'What “connected” should really mean',
    dek: 'A connected home is not a home full of apps. It is one that understands how you live.',
    image: 'scene-story-1',
    to: '/smartthings',
    toLabel: 'Explore SmartThings',
    body: [
      'For years, “smart” has meant one more app to open. Samsung’s SmartThings platform takes a different starting point: bring Samsung devices, and supported third-party devices, into a single place.',
      'Once devices share a home, AI can do more than obey commands. Connected appliances can learn routines and usage patterns, automate everyday tasks and help manage energy — the idea behind Samsung’s AI Home direction.',
    ],
  },
  {
    id: 'one-account-many-screens',
    category: 'galaxy',
    categoryLabel: 'Galaxy',
    title: 'One account, many screens',
    dek: 'Phone, watch, buds, tablet and laptop — the Galaxy ecosystem is built to feel like one thing.',
    image: 'scene-story-2',
    to: '/galaxy',
    toLabel: 'See the ecosystem',
    body: [
      'A Galaxy phone can be the centre of a small constellation of devices: a Galaxy Watch for wellness insights through Samsung Health, Galaxy Buds for audio, a Galaxy Tab for a larger canvas and a Galaxy Book for Windows work.',
      'On supported devices, connected experiences such as Quick Share and Multi Control are designed to let content and control move between them. Availability varies by model and software version.',
    ],
  },
  {
    id: 'three-ais-one-idea',
    category: 'ai',
    categoryLabel: 'AI',
    title: 'Three AIs, one idea',
    dek: 'Galaxy AI, Vision AI and Bespoke AI: different names for AI that meets you wherever you are.',
    image: 'scene-story-3',
    to: '/galaxy-ai',
    toLabel: 'Discover Galaxy AI',
    body: [
      'Samsung describes its connected-living vision as a combination of Galaxy AI on mobile devices, Vision AI on screens and Bespoke AI on home appliances — linked together through SmartThings.',
      'The point is continuity: the intelligence you use on a phone should not stop at the front door. Each layer is designed for the device it lives on, and SmartThings is the thread between them.',
    ],
  },
  {
    id: 'inside-bespoke-ai',
    category: 'smart-home',
    categoryLabel: 'Smart Home',
    title: 'Inside the Bespoke AI range',
    dek: 'Refrigerators, air conditioners and laundry — designed with Indian homes in mind.',
    image: 'scene-story-4',
    to: '/home-appliances',
    toLabel: 'Explore home appliances',
    body: [
      'Samsung India’s Bespoke AI appliances are positioned around four ideas — Ease, Care, Save and Secure. The lineup includes refrigerators such as the Family Hub with AI Vision, WindFree air conditioners and laundry appliances.',
      'Services such as Family Care and Pet Care were introduced with Indian households in mind, and an AI Energy Mode on supported air conditioners aims to help manage energy use.',
    ],
  },
  {
    id: 'when-your-tv-becomes-a-canvas',
    category: 'entertainment',
    categoryLabel: 'Entertainment',
    title: 'When your TV becomes a canvas',
    dek: 'The best screen in the room does not have to disappear when you switch it off.',
    image: 'scene-story-5',
    to: '/tvs',
    toLabel: 'Explore TVs',
    body: [
      'Samsung’s TV range spans OLED, Neo QLED, and lifestyle models such as The Frame, which is designed to display artwork when you are not watching.',
      'Vision AI brings intelligence to the screen itself. Whether you are streaming, gaming or simply setting the mood of a room, the television is meant to fit the way you live.',
    ],
  },
  {
    id: 'privacy-starts-with-security',
    category: 'technology',
    categoryLabel: 'Technology',
    title: 'Privacy starts with security',
    dek: 'Samsung’s stated position: there is no privacy without strong security.',
    image: 'scene-story-6',
    to: '/galaxy-ai',
    toLabel: 'Explore Galaxy AI',
    body: [
      'Samsung says it aims to show clearly how your information is used and to give you control over what you share, including which apps can access your data.',
      'That approach is built on Samsung Knox, alongside on-device AI processing for supported features. Knox is also part of how Samsung positions the “Secure” theme in its AI Home direction.',
    ],
  },
];

export const getStory = (id) => stories.find((s) => s.id === id);
