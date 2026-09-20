import { useCallback, useEffect, useRef, useState } from 'react';
import ProductCard from '../cards/ProductCard';
import SectionHeading from '../ui/SectionHeading';
import FilterChips from '../ui/FilterChips';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';

/**
 * Data-driven product showcase.
 * layout "rail": horizontal snap scroller with arrows · layout "grid": Bootstrap grid.
 * Filtering can be controlled (filter + onFilterChange, e.g. URL-synced) or internal.
 */
export default function ProductShowcase({
  items,
  eyebrow,
  title,
  lead,
  titleId = 'showcase-title',
  filters,
  filter,
  onFilterChange,
  layout = 'grid',
  external = false,
  theme = 'gray',
  id,
  size = 'h2',
}) {
  const [internal, setInternal] = useState('all');
  const value = filter ?? internal;
  const setValue = onFilterChange ?? setInternal;

  const visible =
    filters && value !== 'all' ? items.filter((p) => p.group === value || p.tags.includes(value)) : items;

  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 2,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2,
    });
  }, []);

  useEffect(() => {
    if (layout !== 'rail') return undefined;
    const el = trackRef.current;
    if (!el) return undefined;
    el.scrollTo({ left: 0 });
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [layout, value, visible.length, measure]);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' });
  };

  return (
    <section id={id} className={`section theme-${theme} showcase`} aria-labelledby={titleId}>
      <div className="wrap">
        <div className="showcase__head">
          <SectionHeading eyebrow={eyebrow} title={title} lead={lead} size={size} titleId={titleId} />
          {layout === 'rail' && (
            <div className="showcase__arrows">
              <button type="button" className="arrow-btn" onClick={() => scrollBy(-1)} disabled={edges.start} aria-label="Previous products">
                <Icon name="chevron-left" size={20} />
              </button>
              <button type="button" className="arrow-btn" onClick={() => scrollBy(1)} disabled={edges.end} aria-label="Next products">
                <Icon name="chevron-right" size={20} />
              </button>
            </div>
          )}
        </div>

        {filters && (
          <Reveal variant="fade" delay={150}>
            <FilterChips items={filters} value={value} onChange={setValue} label="Filter products" className="showcase__filters" />
          </Reveal>
        )}
        <p className="sr-only" aria-live="polite">
          {visible.length} product {visible.length === 1 ? 'family' : 'families'} shown
        </p>
      </div>

      {layout === 'rail' ? (
        <ul ref={trackRef} className="showcase__track" tabIndex={-1}>
          {visible.map((p) => (
            <li key={p.id} className="showcase__slide">
              <ProductCard product={p} external={external} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="wrap">
          <ul className="row g-4 showcase__grid">
            {visible.map((p) => (
              <li key={p.id} className="col-12 col-md-6 col-xl-4">
                <ProductCard product={p} external={external} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
