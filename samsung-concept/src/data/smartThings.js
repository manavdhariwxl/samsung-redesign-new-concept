/**
 * SmartThings room model. Positions are percentages of the stage;
 * `m` is the mobile (portrait) composition.
 */
export const stNodes = [
  {
    id: 'phone',
    name: 'Galaxy smartphone',
    image: 'galaxy-s26-ultra',
    ratio: '3 / 7',
    pos: { x: 50, y: 74 },
    m: { x: 50, y: 80 },
    size: 'lg',
    rooms: ['all', 'kitchen', 'bedroom', 'living', 'laundry'],
    text: 'The control layer. The SmartThings app brings your Samsung and supported third-party devices into one place.',
  },
  {
    id: 'tv',
    name: 'TV',
    image: 'tv-oled-s95h',
    ratio: '1 / 1',
    pos: { x: 50, y: 24 },
    m: { x: 50, y: 16 },
    size: 'xl',
    rooms: ['all', 'living'],
    text: 'Samsung TVs join the same home, with Vision AI turning the screen into an intelligent companion.',
  },
  {
    id: 'fridge',
    name: 'Refrigerator',
    image: 'family-hub-ai-vision',
    ratio: '4 / 7',
    pos: { x: 14, y: 46 },
    m: { x: 22, y: 44 },
    size: 'md',
    rooms: ['all', 'kitchen'],
    text: 'The Family Hub refrigerator with AI Vision can recognise food items, suggest recipes and help you keep track of use-by dates.',
  },
  {
    id: 'ac',
    name: 'Air conditioner',
    image: 'bespoke-ai-windfree-pro-ac',
    ratio: '5 / 2',
    pos: { x: 84, y: 40 },
    m: { x: 78, y: 36 },
    size: 'md',
    rooms: ['all', 'bedroom', 'living'],
    text: 'WindFree air conditioners support control through SmartThings, including an AI Energy Mode on supported models.',
  },
  {
    id: 'washer',
    name: 'Washing machine',
    image: 'home-laundry',
    ratio: '1 / 1',
    pos: { x: 84, y: 74 },
    m: { x: 78, y: 58 },
    size: 'md',
    rooms: ['all', 'laundry'],
    text: 'Bespoke AI laundry appliances connect through SmartThings, so you can check in from your phone.',
  },
  {
    id: 'watch',
    name: 'Galaxy Watch',
    image: 'galaxy-watch9',
    ratio: '6 / 7',
    pos: { x: 17, y: 78 },
    m: { x: 22, y: 76 },
    size: 'sm',
    rooms: ['all', 'bedroom'],
    text: 'With Wearable Good Sleep, a Galaxy wearable can help adjust air conditioner settings around individual sleep patterns.',
  },
];

export const stRooms = [
  { id: 'all', label: 'Whole home', text: 'Every device in one place. SmartThings is Samsung’s connected-home platform for phones, TVs, appliances and more.' },
  { id: 'kitchen', label: 'Kitchen', text: 'The refrigerator becomes a household hub — food recognition, recipe ideas and use-by dates on select models.' },
  { id: 'bedroom', label: 'Bedroom', text: 'Sleep-aware cooling: Wearable Good Sleep works with Galaxy wearables to adjust air conditioner settings.' },
  { id: 'living', label: 'Living room', text: 'The TV and the air conditioner share one home with your phone, so comfort and entertainment sit together.' },
  { id: 'laundry', label: 'Laundry', text: 'Keep an eye on laundry from anywhere in the house through the SmartThings app.' },
];

export const stSteps = [
  { title: 'Connect', text: 'SmartThings connects Samsung devices — and supported third-party devices — in a single app.' },
  { title: 'Understand', text: 'With AI, connected appliances can learn routines and usage patterns over time.' },
  { title: 'Automate', text: 'Routine tasks can run on their own, helping manage everyday comfort and energy consumption.' },
];
