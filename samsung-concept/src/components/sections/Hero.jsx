import { useEffect, useRef, useState } from 'react';
import useParallax from '../../hooks/useParallax';
import usePointerParallax from '../../hooks/usePointerParallax';
import LazyImage from '../ui/LazyImage';
import { hasProductImage } from '../../data/media';
import MagneticButton from '../ui/MagneticButton';
import EcosystemChain from '../ui/EcosystemChain';

// Official Samsung product imagery only. A device is drawn only when its image file exists
// (see IMAGE_MANIFEST.md); otherwise the hero is carried by typography and the ring motif.
const HERO_DEVICES = [
  { id: 'tab', key: 'galaxy-tab-s11-ultra', depth: 0.5, px: 8, delay: '-3s' },
  { id: 'phone', key: 'galaxy-s26-ultra', depth: 1, px: 14, alt: 'Galaxy S26 Ultra' },
  { id: 'watch', key: 'galaxy-watch9', depth: 1.6, px: 26, delay: '-5s' },
  { id: 'buds', key: 'galaxy-buds4-pro', depth: 2, px: 32, delay: '-1.5s' },
];

/** Cinematic homepage hero: flagship Galaxy device at the centre of a small connected constellation. */
export default function Hero() {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  useParallax(ref, { mode: 'scroll' });
  usePointerParallax(ref);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section ref={ref} className={`hero theme-dark${ready ? ' is-ready' : ''}`} aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />

      <div className="hero__stage">
        <div className="hero__rings" aria-hidden="true">
          <span className="ring ring--1" />
          <span className="ring ring--2" />
          <span className="ring ring--3" />
          <span className="ring ring--4" />
        </div>
        {HERO_DEVICES.filter((d) => hasProductImage(d.key)).map((d) => (
          <div
            key={d.id}
            className={`hero__dev hero__dev--${d.id}`}
            style={{ '--depth': d.depth, '--px': d.px }}
            aria-hidden={d.alt ? undefined : 'true'}
          >
            <div className="float" style={d.delay ? { animationDelay: d.delay } : undefined}>
              <LazyImage name={d.key} eager optional alt={d.alt || ''} />
            </div>
          </div>
        ))}
      </div>

      <div className={`wrap hero__content${ready ? ' is-in' : ''}`}>
        <p className="eyebrow hero__eyebrow">Samsung Website Redesign Concept</p>
        <h1 id="hero-title" className="display-xl hero__title">
          <span className="mask-line" style={{ '--d': '0ms' }}>
            <span>Meet</span>
          </span>
          <span className="mask-line" style={{ '--d': '110ms' }}>
            <span>What’s Next.</span>
          </span>
        </h1>
        <p className="lead hero__lead">
          AI-powered experiences. Connected devices. One seamless ecosystem.
        </p>
        <div className="hero__cta">
          <MagneticButton to="/galaxy" variant="primary">
            Explore Galaxy
          </MagneticButton>
          <MagneticButton to="/galaxy-ai" variant="ghost">
            Discover Galaxy AI
          </MagneticButton>
        </div>
      </div>

      <div className="wrap hero__foot">
        <EcosystemChain className="hide-md-down" />
        <span className="hero__scroll" aria-hidden="true">
          <span>Scroll</span>
          <i />
        </span>
      </div>
    </section>
  );
}
