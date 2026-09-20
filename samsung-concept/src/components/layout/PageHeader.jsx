import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import useParallax from '../../hooks/useParallax';
import usePageTitle from '../../hooks/usePageTitle';
import LazyImage from '../ui/LazyImage';
import { hasProductImage } from '../../data/media';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';

/**
 * Header for every inner page: breadcrumb, masked H1, lead, optional actions,
 * an abstract scene background and (optionally) a floating device.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  scene = 'scene-galaxy',
  device,
  deviceAlt = '',
  actions = [],
}) {
  const ref = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const raf = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);
  useParallax(ref, { mode: 'scroll' });
  const lines = Array.isArray(title) ? title : [title];
  const label = lines.join(' ').replace(/\.$/, '');
  usePageTitle(label);

  return (
    <section ref={ref} className="page-header theme-dark" aria-labelledby="page-title">
      <div className="page-header__bg" aria-hidden="true">
        <LazyImage name={scene} eager className="cover" />
      </div>
      <div className="wrap page-header__inner">
        <nav aria-label="Breadcrumb" className="crumbs">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li aria-current="page">{label}</li>
          </ol>
        </nav>
        <div className={`page-header__grid${device && hasProductImage(device) ? ' has-device' : ''}`}>
          <div className="page-header__text">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            <h1 id="page-title" className="display">
              {lines.map((l, i) => (
                <span className={`mask-line${ready ? ' is-in' : ''}`} key={l} style={{ '--d': `${120 + i * 100}ms` }}>
                  <span>{l}</span>
                </span>
              ))}
            </h1>
            {lead && (
              <Reveal variant="up" delay={350}>
                <p className="lead">{lead}</p>
              </Reveal>
            )}
            {actions.length > 0 && (
              <Reveal variant="up" delay={450} className="page-header__actions">
                {actions.map((a) => (
                  <MagneticButton key={a.label} to={a.to} href={a.href} variant={a.variant || 'primary'}>
                    {a.label}
                  </MagneticButton>
                ))}
              </Reveal>
            )}
          </div>
          {device && hasProductImage(device) && (
            <div className="page-header__device">
              <div className="page-header__float">
                <LazyImage name={device} alt={deviceAlt} eager optional />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
