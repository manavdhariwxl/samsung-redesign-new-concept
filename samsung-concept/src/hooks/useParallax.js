import { useEffect } from 'react';
import useReducedMotion from './useReducedMotion';

/**
 * Normalised scroll progress for parallax effects.
 *  - mode "viewport": -1.5 to 1.5 as the element travels through the viewport centre
 *  - mode "scroll":    0 to 1.2 as the page scrolls past the element's own height
 */
export function progressFor(mode, rect, viewportHeight, scrollY) {
  const vh = viewportHeight || 1;
  if (mode === 'scroll') {
    const p = scrollY / (rect.height || vh);
    return Math.max(0, Math.min(1.2, p));
  }
  const p = (rect.top + rect.height / 2 - vh / 2) / vh;
  return Math.max(-1.5, Math.min(1.5, p));
}

/**
 * Writes the progress to the `--p` CSS variable on the element.
 * Children read it in CSS, e.g. translate3d(0, calc(var(--p) * -60px), 0).
 */
export default function useParallax(ref, { mode = 'viewport' } = {}) {
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced) return undefined;

    let frame = 0;
    let visible = true;

    const update = () => {
      frame = 0;
      const p = progressFor(mode, el.getBoundingClientRect(), window.innerHeight, window.scrollY);
      el.style.setProperty('--p', p.toFixed(4));
    };

    const schedule = () => {
      if (!frame && visible) frame = requestAnimationFrame(update);
    };

    let observer = null;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          visible = entries[0].isIntersecting;
          if (visible) schedule();
        },
        { rootMargin: '25% 0px' }
      );
      observer.observe(el);
    }

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);

    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (observer) observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref, reduced, mode]);
}
