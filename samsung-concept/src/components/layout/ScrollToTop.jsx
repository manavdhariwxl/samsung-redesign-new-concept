import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets scroll and moves focus to <main> on route change; honours #hash anchors. */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    let timer;
    if (hash) {
      let tries = 0;
      const seek = () => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el) el.scrollIntoView();
        else if (tries < 20) {
          tries += 1;
          timer = setTimeout(seek, 100);
        }
      };
      seek();
      return () => clearTimeout(timer);
    }

    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    root.style.scrollBehavior = previous;
    const main = document.getElementById('main');
    if (main) main.focus({ preventScroll: true });
    return undefined;
  }, [pathname, hash]);

  return null;
}
