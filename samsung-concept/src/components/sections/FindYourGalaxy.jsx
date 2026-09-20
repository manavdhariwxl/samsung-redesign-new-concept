import { useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { personas } from '../../data/personas';
import { getProduct } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';

const pretty = (s) => s.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

/** Conceptual discovery: pick who you are, then what you care about. Suggestions are starting points, not rankings. */
export default function FindYourGalaxy({ id = 'find-your-galaxy' }) {
  const [personaId, setPersonaId] = useState(personas[0].id);
  const [picked, setPicked] = useState([]);
  const tabsRef = useRef([]);

  const persona = personas.find((p) => p.id === personaId);
  const interests = useMemo(() => [...new Set(persona.picks.flatMap((p) => p.interests))], [persona]);

  const choosePersona = (next) => {
    setPersonaId(next);
    setPicked([]);
  };

  const toggle = (interest) =>
    setPicked((prev) => (prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest]));

  const ordered = useMemo(() => {
    const scored = persona.picks.map((pick, index) => ({
      pick,
      index,
      matches: pick.interests.filter((i) => picked.includes(i)).length,
    }));
    return scored.sort((a, b) => b.matches - a.matches || a.index - b.index);
  }, [persona, picked]);

  const onKeyDown = (e, i) => {
    let next = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next = (i + 1) % personas.length;
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') next = (i - 1 + personas.length) % personas.length;
    if (next === null) return;
    e.preventDefault();
    choosePersona(personas[next].id);
    tabsRef.current[next]?.focus();
  };

  return (
    <section id={id} className="section theme-dark fyg" aria-labelledby="fyg-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Find your Galaxy"
          title={['Find your', 'Galaxy.']}
          size="display"
          titleId="fyg-title"
          lead="Tell us how you spend your day. We’ll point you to the Galaxy families worth exploring first."
        />

        <div className="fyg__grid">
          <Reveal variant="up" className="fyg__controls">
            <p className="caption" id="fyg-who">
              I’m a…
            </p>
            <div className="fyg__personas" role="tablist" aria-labelledby="fyg-who" aria-orientation="vertical">
              {personas.map((p, i) => (
                <button
                  key={p.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`fyg-tab-${p.id}`}
                  aria-selected={p.id === personaId}
                  aria-controls="fyg-panel"
                  tabIndex={p.id === personaId ? 0 : -1}
                  className="fyg__persona"
                  onClick={() => choosePersona(p.id)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                >
                  {p.label}
                </button>
              ))}
            </div>

            <p className="fyg__intro">{persona.intro}</p>

            <p className="caption" id="fyg-care">
              What matters to you? <span className="muted">(optional)</span>
            </p>
            <div className="chips" role="group" aria-labelledby="fyg-care">
              {interests.map((i) => (
                <button key={i} type="button" className="chip" aria-pressed={picked.includes(i)} onClick={() => toggle(i)}>
                  {pretty(i)}
                </button>
              ))}
              {picked.length > 0 && (
                <button type="button" className="chip chip--quiet" onClick={() => setPicked([])}>
                  Clear
                </button>
              )}
            </div>
          </Reveal>

          <div id="fyg-panel" role="tabpanel" aria-labelledby={`fyg-tab-${personaId}`} className="fyg__results">
            <p className="sr-only" aria-live="polite">
              Showing {ordered.length} Galaxy families for {persona.label}
            </p>
            <ul className="fyg__list">
              {ordered.map(({ pick, matches }) => {
                const product = getProduct(pick.productId);
                const dim = picked.length > 0 && matches === 0;
                return (
                  <li key={`${personaId}-${pick.productId}`} className={`fyg__item${dim ? ' is-dim' : ''}${matches ? ' is-match' : ''}`}>
                    <div className="fyg__thumb">
                      <LazyImage name={[product.id, product.image]} alt="" />
                    </div>
                    <div className="fyg__copy">
                      <p className="fyg__cat">
                        {product.category}
                        {matches > 0 && <span className="fyg__badge">Matches your interests</span>}
                      </p>
                      <h3 className="h4">{product.name}</h3>
                      <p className="body-sm">{pick.why}</p>
                    </div>
                    <Link to={product.to} className="fyg__go" aria-label={`Explore ${product.name}`}>
                      <Icon name="arrow" size={20} />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="footnote">
              A conceptual guide — not a recommendation engine and not a ranking of what’s “best”. Explore each family on samsung.com/in
              before you decide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
