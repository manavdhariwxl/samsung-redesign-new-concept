/** Galaxy AI categories. Feature names reflect Samsung's public Galaxy AI naming; availability varies. */
export const aiCategories = [
  {
    id: 'productivity',
    title: 'Productivity',
    tagline: 'Less admin. More momentum.',
    image: 'scene-productivity',
    features: [
      { name: 'Note Assist', text: 'Summarise and tidy notes on supported devices.' },
      { name: 'Transcript Assist', text: 'Turn recordings into text you can read and summarise.' },
      { name: 'Browsing Assist', text: 'Get the gist of a long web page without reading every line.' },
      { name: 'Circle to Search', text: 'Circle something on screen — or hear it, and search for it — without switching apps.' },
    ],
  },
  {
    id: 'creativity',
    title: 'Creativity',
    tagline: 'From rough idea to finished image.',
    image: 'scene-creativity',
    features: [
      { name: 'Drawing Assist', text: 'Turn a sketch into a more polished piece of art.' },
      { name: 'Generative Edit', text: 'Rework parts of a photo — move, resize or remove elements.' },
    ],
  },
  {
    id: 'communication',
    title: 'Communication',
    tagline: 'Conversations without the language barrier.',
    image: 'scene-communication',
    features: [
      { name: 'Live Translate', text: 'Translate phone calls as they happen.' },
      { name: 'Interpreter', text: 'Face-to-face conversations, translated on screen.' },
      { name: 'Chat Assist', text: 'Adjust the tone of a message before you send it.' },
    ],
  },
  {
    id: 'photography',
    title: 'Photography',
    tagline: 'Capture it. Then make it better.',
    image: 'scene-photography',
    features: [
      { name: 'Generative Edit', text: 'Clean up a frame after the shot is taken.' },
      { name: 'Instant Slow-mo', text: 'Turn a standard video into slow motion.' },
      { name: 'Audio Eraser', text: 'Reduce unwanted noise in video audio.' },
    ],
  },
  {
    id: 'personalization',
    title: 'Personalization',
    tagline: 'A phone that adapts to you.',
    image: 'scene-personalization',
    features: [
      { name: 'Now Brief', text: 'A personalised daily summary — schedule, weather and more.' },
      { name: 'Bixby', text: 'A voice assistant that can recognise individual voices and tailor its responses.' },
      { name: 'Samsung Knox', text: 'Security built into the platform, alongside on-device AI processing.' },
    ],
  },
];

export const AI_FOOTNOTE =
  'Galaxy AI feature names and availability vary by device model, region, language and software version. A Samsung account may be required. Confirm details on samsung.com/in.';

/** The three AIs Samsung connects through SmartThings. */
export const aiAcross = [
  {
    name: 'Galaxy AI',
    where: 'Phones, tablets and wearables',
    text: 'Everyday AI on the devices you carry — from translation to photo editing.',
    to: '/galaxy-ai',
  },
  {
    name: 'Vision AI',
    where: 'TVs and screens',
    text: 'Samsung Vision AI turns screens into intelligent companions for entertainment and beyond.',
    to: '/tvs',
  },
  {
    name: 'Bespoke AI',
    where: 'Home appliances',
    text: 'Appliances that learn routines and work together with SmartThings.',
    to: '/home-appliances',
  },
];

/** AI Home themes — as framed by Samsung India: Ease, Care, Save, Secure. */
export const aiHomeThemes = [
  {
    id: 'ease',
    title: 'Ease',
    word: 'Ease',
    image: 'scene-ease',
    summary: 'Everyday life that takes less effort.',
    text: 'Intuitive touchscreens, voice intelligence and inclusive design aim to make appliances easier for everyone in the household. The AI Home screen acts as a control point for appliance settings, insights, entertainment and family communication on select products.',
    points: ['Touchscreen and voice control', 'Bixby voice intelligence', 'AI Home screen on select products'],
  },
  {
    id: 'care',
    title: 'Care',
    word: 'Care',
    image: 'scene-care',
    summary: 'Looking out for the people at home.',
    text: 'Family Care and Pet Care services have been introduced with Indian homes in mind — for example, notifying you when an appliance shows unusual patterns of use. Sleep-aware features can work with Galaxy wearables to adjust air conditioner settings.',
    points: ['Family Care and Pet Care services', 'Wearable Good Sleep with Galaxy Wearables', 'Now Brief daily updates'],
  },
  {
    id: 'save',
    title: 'Save',
    word: 'Save',
    image: 'scene-save',
    summary: 'Smarter use of energy.',
    text: 'SmartThings connects appliances so they can learn usage patterns, automate routine tasks and help manage energy consumption. Supported air conditioners include an AI Energy Mode for more efficient cooling.',
    points: ['AI Energy Mode on supported ACs', 'Usage-pattern learning through SmartThings', 'Remote management from your phone'],
  },
  {
    id: 'secure',
    title: 'Secure',
    word: 'Secure',
    image: 'scene-secure',
    summary: 'Privacy and security at the core.',
    text: 'Samsung positions AI Home with security and privacy at the core, using Samsung Knox across select products in the Bespoke AI ecosystem. Samsung states that there is no privacy without strong security.',
    points: ['Samsung Knox across select products', 'Transparent data controls', 'Security built into the platform'],
  },
];

export const AI_HOME_FOOTNOTE =
  'Based on public Samsung India announcements (AI Home: Future Living, Now — September 2025; 2026 Bespoke AI range). Features vary by model. See samsung.com/in for current details.';
