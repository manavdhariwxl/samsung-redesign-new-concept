import { OFFICIAL } from './navigation';

export const helpTopics = [
  { id: 'register', title: 'Register a product', text: 'Register your Samsung product to receive updates and personalised services. Home appliances and non-smart B2C monitors can be registered by scanning the QR code on the product.', keywords: 'register registration qr serial imei' },
  { id: 'model', title: 'Find your model number', text: 'Your product’s model and serial details are printed on a label on the product itself. Have them ready before you contact support.', keywords: 'model serial number label imei' },
  { id: 'warranty', title: 'Warranty and service', text: 'Warranty terms depend on the product and how it was purchased. Check the official Samsung India support pages for the terms that apply to your device.', keywords: 'warranty repair service centre center claim' },
  { id: 'software', title: 'Software updates', text: 'Keep your Galaxy devices up to date from Settings. Updates bring new features and security improvements.', keywords: 'update software one ui firmware upgrade' },
  { id: 'smartthings', title: 'Set up SmartThings', text: 'Add compatible Samsung and supported third-party devices to the SmartThings app to control your home from one place.', keywords: 'smartthings setup connect home app add device' },
  { id: 'accessibility', title: 'Accessibility features', text: 'Samsung products include vision, hearing, mobility and cognitive assistive features, such as TalkBack, Live Transcribe and high-contrast modes.', keywords: 'accessibility talkback captions hearing vision' },
  { id: 'privacy', title: 'Privacy and security', text: 'Samsung Knox underpins security across Galaxy devices, and you can manage which apps have access to your data from Settings.', keywords: 'privacy security knox data permissions' },
];

export const faqs = [
  { q: 'Is this the official Samsung website?', a: 'No. This is an independent redesign concept created as a design study. It is not affiliated with, endorsed by or operated by Samsung. For purchases and official support, use samsung.com/in.' },
  { q: 'Where do I find current prices and specifications?', a: 'This concept deliberately shows product families without prices or specifications. Current models, prices and offers are on the official Samsung India website.' },
  { q: 'Can I buy products here?', a: 'No. There is no checkout in this concept. Product links point back to the official Samsung India site.' },
  { q: 'What happens to the email I enter in the newsletter form?', a: 'Nothing — the form is a front-end demonstration. No email address is sent, stored or processed.' },
  { q: 'How do I contact Samsung support?', a: 'Use the official Samsung India Support pages, where you can find product help, service options and contact channels.' },
];

export const supportChannels = [
  { title: 'Samsung India Support', text: 'Product help, manuals, downloads and service.', href: OFFICIAL.support },
  { title: 'Offers and store', text: 'Buy directly and see current offers.', href: OFFICIAL.offers },
  { title: 'Newsroom India', text: 'Announcements and press information.', href: OFFICIAL.newsroom },
];
