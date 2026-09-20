import { useState } from 'react';
import { aiCategories, AI_FOOTNOTE } from '../../data/aiFeatures';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import MagneticButton from '../ui/MagneticButton';
import Icon from '../ui/Icon';

/** Editorial AI section with five expanding panels. Hover, focus or tap a panel to open it. */
export default function GalaxyAISection({ id = 'galaxy-ai', showCta = true, eyebrow = 'Galaxy AI' }) {
  const [active, setActive] = useState(aiCategories[0].id);

  return (
    <section id={id} className="section theme-light ai" aria-labelledby="ai-title">
      <div className="wrap">
        <div className="ai__head">
          <SectionHeading eyebrow={eyebrow} title={['AI that', 'works with you.']} size="display" titleId="ai-title" />
          <Reveal variant="up" delay={200} className="ai__intro">
            <p className="lead">
              From getting things done to getting creative, Galaxy AI is built into the devices you already carry — helping across
              five parts of everyday life.
            </p>
            {showCta && (
              <MagneticButton to="/galaxy-ai" variant="primary">
                Discover Galaxy AI
              </MagneticButton>
            )}
          </Reveal>
        </div>

        <Reveal variant="up" delay={100}>
          <ul className="ai__panels">
            {aiCategories.map((c, i) => {
              const on = c.id === active;
              return (
                <li
                  key={c.id}
                  className={`aip${on ? ' is-active' : ''}`}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(c.id)}
                >
                  <button
                    type="button"
                    className="aip__toggle"
                    aria-expanded={on}
                    aria-controls={`aip-${c.id}`}
                    onClick={() => setActive(c.id)}
                    onFocus={() => setActive(c.id)}
                  >
                    <span className="aip__num num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="aip__label">{c.title}</span>
                    <span className="aip__icon" aria-hidden="true">
                      <Icon name={on ? 'minus' : 'plus'} size={18} />
                    </span>
                  </button>
                  <div className="aip__body" id={`aip-${c.id}`} role="region" aria-label={`${c.title} with Galaxy AI`}>
                    <div className="aip__inner">
                      <LazyImage name={c.image} className="aip__bg cover" />
                      <div className="aip__content">
                        <p className="aip__tag h3" aria-hidden="true">
                          {c.title}
                        </p>
                        <p className="aip__line">{c.tagline}</p>
                        <ul className="aip__features">
                          {c.features.map((f) => (
                            <li key={f.name}>
                              <h4>{f.name}</h4>
                              <p>{f.text}</p>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <p className="footnote">{AI_FOOTNOTE}</p>
      </div>
    </section>
  );
}
