import { useEffect } from 'react';

/** Prevents the page behind an overlay from scrolling. */
export default function useLockBody(active) {
  useEffect(() => {
    if (!active) return undefined;
    const root = document.documentElement;
    const previous = root.style.overflow;
    root.style.overflow = 'hidden';
    return () => {
      root.style.overflow = previous;
    };
  }, [active]);
}
