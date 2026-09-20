import { routes } from './navigation';
import { products } from './products';
import { aiCategories } from './aiFeatures';
import { stories } from './stories';
import { helpTopics } from './support';
import { tvCategories } from './tv';

const items = [];

routes.forEach((r) =>
  items.push({
    id: `page-${r.path}`,
    type: 'Page',
    title: r.title,
    description: r.description,
    keywords: r.keywords,
    to: r.path,
  })
);

products.forEach((p) =>
  items.push({
    id: `product-${p.id}`,
    type: 'Product family',
    title: p.name,
    description: p.description,
    keywords: `${p.category} ${p.tags.join(' ')}`,
    to: p.to,
  })
);

aiCategories.forEach((c) =>
  c.features.forEach((f) =>
    items.push({
      id: `ai-${c.id}-${f.name}`,
      type: 'Galaxy AI',
      title: f.name,
      description: f.text,
      keywords: `${c.title} galaxy ai`,
      to: '/galaxy-ai',
    })
  )
);

tvCategories.forEach((t) =>
  items.push({
    id: `tv-${t.id}`,
    type: 'TV',
    title: t.label,
    description: t.text,
    keywords: 'television screen',
    to: t.to,
  })
);

stories.forEach((s) =>
  items.push({
    id: `story-${s.id}`,
    type: s.categoryLabel,
    title: s.title,
    description: s.dek,
    keywords: 'story article',
    to: `/discover?story=${s.id}`,
  })
);

helpTopics.forEach((h) =>
  items.push({
    id: `help-${h.id}`,
    type: 'Support',
    title: h.title,
    description: h.text,
    keywords: h.keywords,
    to: `/support?q=${encodeURIComponent(h.title)}`,
  })
);

const norm = (s) => s.toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}\s-]/gu, ' ');

const prepared = items.map((item) => ({
  ...item,
  _title: norm(item.title),
  _hay: norm(`${item.title} ${item.description} ${item.keywords} ${item.type}`),
}));

/** Client-side search: every token must match; title matches rank higher. */
export function search(query, limit = 8) {
  const tokens = norm(query).split(/\s+/).filter(Boolean);
  if (!tokens.length) return [];
  return prepared
    .map((item) => {
      let score = 0;
      for (const t of tokens) {
        if (!item._hay.includes(t)) return null;
        if (item._title.startsWith(t)) score += 4;
        else if (item._title.includes(t)) score += 3;
        else score += 1;
      }
      if (item.type === 'Page') score += 1;
      return { item, score };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((r) => r.item);
}

export const suggestedSearches = [
  { label: 'Galaxy AI', to: '/galaxy-ai' },
  { label: 'Foldable phones', to: '/smartphones?f=z' },
  { label: 'The Frame', to: '/tvs?f=frame' },
  { label: 'SmartThings', to: '/smartthings' },
  { label: 'Register a product', to: '/support?q=Register%20a%20product' },
];
