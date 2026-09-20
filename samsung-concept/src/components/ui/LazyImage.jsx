import { useEffect, useRef, useState } from 'react';
import { getMedia } from '../../data/media';

/** Empty frame shown when no official image exists yet. Never draws a product. */
function ImageSlot({ mediaKey, ratio, className }) {
  return (
    <span
      className={`slot${className ? ` ${className}` : ''}`}
      style={ratio ? { '--slot-ratio': ratio } : undefined}
      aria-hidden="true"
    >
      {import.meta.env.DEV && mediaKey && <span className="slot__key">{mediaKey}</span>}
    </span>
  );
}

/**
 * Official-image loader.
 *  - `name`: media key, or an array of keys tried in order (e.g. [familyId, representativeModelId])
 *  - `src`: explicit URL (bypasses the registry)
 *  - `optional`: render nothing when there is no official image (use for purely decorative product shots)
 *  - `ratio`: aspect ratio for the empty slot, e.g. "5 / 8"
 * If a file is missing or fails to load, the empty slot is shown instead of a broken-image icon.
 */
export default function LazyImage({
  name,
  src,
  width,
  height,
  alt = '',
  eager = false,
  optional = false,
  ratio,
  className = '',
  ...rest
}) {
  const keys = Array.isArray(name) ? name : [name];
  const found = src ? null : keys.map((k) => ({ k, m: getMedia(k) })).find((x) => x.m);
  const resolved = src ? { src, width, height } : found ? found.m : null;
  const mediaKey = found ? found.k : keys[0];

  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const url = resolved ? resolved.src : null;

  useEffect(() => {
    setFailed(false);
    const img = ref.current;
    if (img && img.complete && img.naturalWidth > 0) setLoaded(true);
  }, [url]);

  if (!resolved || failed) {
    if (optional) return null;
    return <ImageSlot mediaKey={keys[0]} ratio={ratio} className={className.includes('cover') ? 'slot--fill' : ''} />;
  }

  return (
    <img
      ref={ref}
      className={`lazy${loaded ? ' is-loaded' : ''}${className ? ` ${className}` : ''}`}
      src={resolved.src}
      width={resolved.width}
      height={resolved.height}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
      {...rest}
    />
  );
}
