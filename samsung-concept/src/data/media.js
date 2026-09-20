/**
 * Central media registry.
 *
 * PRODUCT IMAGES are official Samsung media only. Nothing here draws, renders or invents a product image.
 * Lookup order for a key such as "galaxy-s26-ultra":
 *   1. a local file  src/assets/products/<key>.(webp|png|jpg|jpeg|avif|svg)
 *   2. a remote URL registered in REMOTE_SRC (src/data/officialAssets.js)
 *   3. nothing  → getMedia() returns null and the component renders a clean, labelled empty slot
 *      (or omits the image entirely when it is purely decorative).
 *
 * Where to get the files: see IMAGE_MANIFEST.md (exact file names + the official Samsung asset page for each product).
 *
 * "scene-*" keys are NOT product images. They are abstract gradient backgrounds generated in code and can
 * likewise be replaced by dropping e.g. src/assets/products/scene-tv.jpg into the folder.
 */
import { IMAGE_SIZES, REMOTE_SRC } from './officialAssets';

const REAL_FILES = import.meta.glob('../assets/products/*.{webp,png,jpg,jpeg,avif,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
});

const REAL = Object.fromEntries(
  Object.entries(REAL_FILES).map(([path, url]) => [path.split('/').pop().replace(/\.[^.]+$/, ''), url])
);

const encode = (svg) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg.replace(/\s{2,}/g, ' ').replace(/>\s+</g, '><').trim())}`;

const doc = (w, h, body, defs = '') =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">${
    defs ? `<defs>${defs}</defs>` : ''
  }${body}</svg>`;

const linear = (id, stops, x1 = 0, y1 = 0, x2 = 1, y2 = 1) =>
  `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stops
    .map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`)
    .join('')}</linearGradient>`;

const radial = (id, stops, cx = 0.5, cy = 0.5, r = 0.5) =>
  `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}">${stops
    .map(([o, c, a = 1]) => `<stop offset="${o}" stop-color="${c}" stop-opacity="${a}"/>`)
    .join('')}</radialGradient>`;

// ── Scenes (abstract art for headers, panels and stories) ───────────────────
const scene = ({ hue = 225, mode = 'rings', seed = 1 }) => {
  const c1 = `hsl(${hue} 90% 58%)`;
  const c2 = `hsl(${(hue + 46) % 360} 85% 62%)`;
  const deep = `hsl(${hue} 70% 6%)`;
  const mid = `hsl(${hue} 62% 15%)`;
  const gx = 260 + ((seed * 211) % 700);
  const gy = 220 + ((seed * 137) % 360);
  const defs = `${linear('bg', [[0, deep], [1, mid]], 0, 0, 1, 1)}
    ${radial('g1', [[0, c1, 0.6], [1, c1, 0]])}${radial('g2', [[0, c2, 0.4], [1, c2, 0]])}
    ${linear('beam', [[0, '#fff', 0.28], [1, '#fff', 0]], 0, 0, 0, 1)}`;
  let art = '';
  if (mode === 'rings') {
    for (let i = 1; i <= 8; i += 1) {
      art += `<circle cx="${gx}" cy="${gy}" r="${i * 62}" fill="none" stroke="${i % 3 === 0 ? c1 : '#fff'}" stroke-opacity="${i % 3 === 0 ? 0.35 : 0.07}" stroke-width="1.2"/>`;
    }
    art += `<ellipse cx="${gx}" cy="${gy}" rx="360" ry="300" fill="url(#g1)"/>`;
  } else if (mode === 'waves') {
    for (let i = 0; i < 12; i += 1) {
      const y = 200 + i * 34;
      art += `<path d="M-20 ${y} C 260 ${y - 110}, 560 ${y + 110}, 860 ${y - 20} S 1160 ${y + 60}, 1240 ${y - 40}" fill="none" stroke="${i % 4 === 0 ? c2 : '#fff'}" stroke-opacity="${i % 4 === 0 ? 0.4 : 0.09}" stroke-width="1.2"/>`;
    }
    art += `<ellipse cx="${gx}" cy="${gy}" rx="420" ry="220" fill="url(#g1)"/>`;
  } else if (mode === 'grid') {
    for (let i = -8; i <= 20; i += 1) {
      const x = i * 100;
      art += `<path d="M${x} 800 L${600 + (x - 600) * 0.12} 330" stroke="#fff" stroke-opacity=".08" stroke-width="1"/>`;
    }
    for (let j = 0; j < 10; j += 1) {
      const y = 330 + j * j * 5.2;
      art += `<path d="M0 ${y} H1200" stroke="${j === 9 ? c1 : '#fff'}" stroke-opacity="${j === 9 ? 0.45 : 0.08}" stroke-width="1"/>`;
    }
    art += `<ellipse cx="600" cy="300" rx="520" ry="200" fill="url(#g1)"/><circle cx="600" cy="300" r="60" fill="${c2}" opacity=".5"/>`;
  } else if (mode === 'horizon') {
    art += `<ellipse cx="600" cy="520" rx="640" ry="240" fill="url(#g1)"/><circle cx="600" cy="520" r="150" fill="${c2}" opacity=".35"/>
      <rect x="0" y="520" width="1200" height="280" fill="${deep}" opacity=".8"/>`;
    for (let i = 0; i < 9; i += 1) {
      art += `<path d="M0 ${540 + i * 30} H1200" stroke="#fff" stroke-opacity="${0.12 - i * 0.012}" stroke-width="1"/>`;
    }
  } else {
    art += `<polygon points="${gx - 60},0 ${gx + 60},0 ${gx + 420},800 ${gx - 300},800" fill="url(#beam)" opacity=".5"/>
      <polygon points="${gx + 200},0 ${gx + 260},0 ${gx + 700},800 ${gx + 420},800" fill="url(#beam)" opacity=".25"/>
      <ellipse cx="${gx}" cy="760" rx="520" ry="140" fill="url(#g2)"/><circle cx="${gx - 220}" cy="260" r="180" fill="url(#g1)"/>`;
  }
  return doc(1200, 800, `<rect width="1200" height="800" fill="url(#bg)"/>${art}`, defs);
};

const sceneDefs = {
  'scene-galaxy': { hue: 224, mode: 'rings', seed: 2 },
  'scene-ai': { hue: 238, mode: 'waves', seed: 3 },
  'scene-smartthings': { hue: 208, mode: 'grid', seed: 1 },
  'scene-home': { hue: 198, mode: 'horizon', seed: 1 },
  'scene-tv': { hue: 252, mode: 'beam', seed: 4 },
  'scene-work': { hue: 222, mode: 'grid', seed: 2 },
  'scene-discover': { hue: 232, mode: 'rings', seed: 5 },
  'scene-support': { hue: 216, mode: 'waves', seed: 6 },
  'scene-productivity': { hue: 224, mode: 'grid', seed: 3 },
  'scene-creativity': { hue: 280, mode: 'waves', seed: 4 },
  'scene-communication': { hue: 200, mode: 'rings', seed: 6 },
  'scene-photography': { hue: 248, mode: 'beam', seed: 2 },
  'scene-personalization': { hue: 218, mode: 'horizon', seed: 3 },
  'scene-ease': { hue: 214, mode: 'waves', seed: 7 },
  'scene-care': { hue: 190, mode: 'horizon', seed: 4 },
  'scene-save': { hue: 168, mode: 'rings', seed: 3 },
  'scene-secure': { hue: 236, mode: 'grid', seed: 5 },
  'scene-oled': { hue: 262, mode: 'beam', seed: 1 },
  'scene-neo': { hue: 226, mode: 'rings', seed: 4 },
  'scene-frame': { hue: 34, mode: 'horizon', seed: 2 },
  'scene-smart': { hue: 204, mode: 'waves', seed: 5 },
  'scene-micro-rgb': { hue: 300, mode: 'beam', seed: 5 },
  'scene-mini-led': { hue: 214, mode: 'grid', seed: 6 },
  'scene-story-1': { hue: 228, mode: 'rings', seed: 1 },
  'scene-story-2': { hue: 240, mode: 'waves', seed: 2 },
  'scene-story-3': { hue: 212, mode: 'grid', seed: 4 },
  'scene-story-4': { hue: 196, mode: 'horizon', seed: 5 },
  'scene-story-5': { hue: 256, mode: 'beam', seed: 3 },
  'scene-story-6': { hue: 222, mode: 'rings', seed: 7 },
};

const cache = new Map();

/**
 * Returns { src, width?, height?, real } for a media key, or null when no official image is available.
 */
export function getMedia(key) {
  if (!key) return null;
  if (REAL[key]) {
    const [width, height] = IMAGE_SIZES[key] || [];
    return { src: REAL[key], width, height, real: true };
  }
  if (REMOTE_SRC[key]) return { src: REMOTE_SRC[key], real: true };
  const def = sceneDefs[key];
  if (!def) return null;
  if (!cache.has(key)) cache.set(key, { src: encode(scene(def)), width: 1200, height: 800 });
  return cache.get(key);
}

/** True when an official image (or a decorative scene) exists for the key. */
export const hasMedia = (key) => getMedia(key) !== null;

/** True only for real, official files — never for generated scenes. */
export const hasProductImage = (key) => Boolean(key && (REAL[key] || REMOTE_SRC[key]));

export const realImageKeys = Object.keys(REAL);
export const sceneKeys = Object.keys(sceneDefs);
