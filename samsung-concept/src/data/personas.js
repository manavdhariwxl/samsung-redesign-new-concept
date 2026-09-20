/**
 * "Find your Galaxy" — a conceptual guide, not a recommendation engine.
 * Suggestions are starting points to explore, never claims about what is "best".
 */
export const personas = [
  {
    id: 'creator',
    label: 'Creator',
    intro: 'You make things — photos, video, sketches, ideas.',
    picks: [
      { productId: 'galaxy-s', interests: ['photos', 'ai'], why: 'A flagship phone family with Galaxy AI photo editing tools such as Generative Edit.' },
      { productId: 'galaxy-tab-s', interests: ['sketching', 'notes'], why: 'A large screen with S Pen support on select models — a natural fit for sketching.' },
      { productId: 'galaxy-book', interests: ['editing', 'ai'], why: 'A bigger workspace for the projects that outgrow a phone screen.' },
      { productId: 'galaxy-buds', interests: ['audio'], why: 'Wireless earbuds that pair with Galaxy devices for reviewing and listening.' },
    ],
  },
  {
    id: 'student',
    label: 'Student',
    intro: 'You learn on the move and switch between notes, reading and research.',
    picks: [
      { productId: 'galaxy-tab-s', interests: ['notes', 'sketching'], why: 'Note-taking with S Pen support on select models, plus Galaxy AI features like Note Assist on supported devices.' },
      { productId: 'galaxy-a', interests: ['everyday', 'photos'], why: 'A wide range of Galaxy phones — worth exploring across price points on samsung.com/in.' },
      { productId: 'galaxy-tab-a', interests: ['everyday', 'reading'], why: 'An everyday tablet family for reading, learning and entertainment.' },
      { productId: 'galaxy-buds', interests: ['audio'], why: 'Wireless earbuds for lectures, playlists and focus time.' },
    ],
  },
  {
    id: 'professional',
    label: 'Professional',
    intro: 'Your day is meetings, documents and staying reachable.',
    picks: [
      { productId: 'galaxy-book', interests: ['documents', 'connected'], why: 'Windows laptops that work with Galaxy phones through connected experiences.' },
      { productId: 'galaxy-z', interests: ['multitasking', 'connected'], why: 'Foldables whose larger inner screen suits multitasking — Z Fold opens up, Z Flip folds down small.' },
      { productId: 'galaxy-watch', interests: ['wellness', 'connected'], why: 'Notifications and wellness insights on the wrist through Samsung Health.' },
      { productId: 'galaxy-s', interests: ['ai', 'connected'], why: 'Galaxy AI features such as Live Translate and Note Assist on supported devices.' },
    ],
  },
  {
    id: 'gamer',
    label: 'Gamer',
    intro: 'You play on the couch, on the go, or both.',
    picks: [
      { productId: 'galaxy-s', interests: ['mobile', 'screen'], why: 'The flagship Galaxy phone family — worth exploring if mobile play matters to you.' },
      { productId: 'tv-neo-qled', interests: ['big-screen'], why: 'A premium family of large-screen televisions for the living room.' },
      { productId: 'tv-oled', interests: ['big-screen', 'contrast'], why: 'OLED panels light each pixel individually, which suits dark, cinematic games.' },
      { productId: 'galaxy-buds', interests: ['audio', 'mobile'], why: 'Wireless earbuds designed to pair with Galaxy devices.' },
    ],
  },
  {
    id: 'everyday',
    label: 'Everyday user',
    intro: 'You want technology that simply works, at home and out of it.',
    picks: [
      { productId: 'galaxy-a', interests: ['phone', 'photos'], why: 'Galaxy experiences across a wide range of smartphones.' },
      { productId: 'galaxy-buds', interests: ['audio'], why: 'Wireless earbuds designed to pair with Galaxy devices.' },
      { productId: 'tv-smart', interests: ['home', 'entertainment'], why: 'Smart TVs with Vision AI for everyday viewing.' },
      { productId: 'home-fridge', interests: ['home'], why: 'Bespoke AI refrigerators that connect to SmartThings.' },
    ],
  },
];

export const getPersona = (id) => personas.find((p) => p.id === id);
