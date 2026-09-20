import { useRef, useState } from 'react';
import { tvCategories } from '../../data/tv';
import SectionHeading from '../ui/SectionHeading';
import LazyImage from '../ui/LazyImage';
import MagneticButton from '../ui/MagneticButton';

/** Cinematic TV section: one wide "screen" whose scene changes with the selected TV family. */
export default function TVSection({ id = 'tv', value, onChange, showHeading = true }) {
  const [internal, setInternal] = useState(tvCategories[0].id);
  const active = value || internal;
  const setActive = onChange || setInternal;
  const tabsRef = useRef([]);
  const current = tvCategories.find((t) => t.id === active) || tvCategories[0];

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight') next = (i + 1) % tvCategories.length;
    if (e.key === 'ArrowLeft') next = (i - 1 + tvCategories.length) % tvCategories.length;
    if (e.key === 'Home') next = 0;
    if (e.key === 'End') next = tvCategories.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(tvCategories[next].id);
    tabsRef.current[next]?.focus();
  };

  return (
    <section id={id} className="section theme-dark tvs" aria-labelledby="tv-title">
      {showHeading && (
        <div className="wrap">
          <SectionHeading
            eyebrow="TV & Entertainment"
            title={['Your screen.', 'Your world.']}
            size="display"
            titleId="tv-title"
          />
        </div>
      )}
      {!showHeading && (
        <h2 id="tv-title" className="sr-only">
          Samsung TV families
        </h2>
      )}

      <div className="tvs__frame wrap">
        <div className="tvs__screen">
          {tvCategories.map((t) => (
            <div key={t.id} className={`tvs__scene${t.id === current.id ? ' is-active' : ''}`} aria-hidden="true">
              <LazyImage name={t.image} className="cover" />
            </div>
          ))}
          <div className="tvs__glare" aria-hidden="true" />
          <div
            className="tvs__panel"
            role="tabpanel"
            id="tv-panel"
            aria-labelledby={`tv-tab-${current.id}`}
            tabIndex={0}
            key={current.id}
          >
            <p className="eyebrow">{current.label}</p>
            <h3 className="tvs__title display">{current.title}</h3>
            <p className="lead">{current.text}</p>
            <MagneticButton to={current.to} variant="primary">
              Explore {current.label}
            </MagneticButton>
          </div>
        </div>
        <div className="tvs__stand" aria-hidden="true" />

        <div className="tvs__tabs" role="tablist" aria-label="TV families">
          {tvCategories.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => {
                tabsRef.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`tv-tab-${t.id}`}
              aria-selected={t.id === current.id}
              aria-controls="tv-panel"
              tabIndex={t.id === current.id ? 0 : -1}
              className="tvs__tab"
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              <span className="tvs__tab-num num">{String(i + 1).padStart(2, '0')}</span>
              {t.label}
            </button>
          ))}
        </div>
        <p className="footnote">Features vary by model. Confirm details for your chosen TV on samsung.com/in.</p>
      </div>
    </section>
  );
}
