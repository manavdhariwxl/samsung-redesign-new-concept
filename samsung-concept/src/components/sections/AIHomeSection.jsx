import { useState } from 'react';
import { Link } from 'react-router-dom';
import { aiHomeThemes, aiAcross, AI_HOME_FOOTNOTE } from '../../data/aiFeatures';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import MagneticButton from '../ui/MagneticButton';
import Icon from '../ui/Icon';

/** AI Home: four themes (Ease, Care, Save, Secure) as an indexed editorial list beside a changing visual. */
export default function AIHomeSection({ showCta = true, id = 'ai-home' }) {
  const [active, setActive] = useState(aiHomeThemes[0].id);
  const current = aiHomeThemes.find((t) => t.id === active);

  return (
    <section id={id} className="section theme-gray aih" aria-labelledby="aih-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="AI Home"
          title={['AI Home.', 'Future living, now.']}
          size="display"
          titleId="aih-title"
          lead="Samsung India frames AI Home around four ideas. Each one is about the same thing: a home that quietly does more for the people in it."
        />

        <div className="aih__grid">
          <Reveal variant="image" className="aih__visual">
            {aiHomeThemes.map((t) => (
              <div key={t.id} className={`aih__scene${t.id === active ? ' is-active' : ''}`} aria-hidden="true">
                <LazyImage name={t.image} className="cover" />
              </div>
            ))}
            <p className="aih__word" aria-hidden="true">
              {aiHomeThemes.map((t) => (
                <span key={t.id} className={t.id === active ? 'is-active' : ''}>
                  {t.word}
                </span>
              ))}
            </p>
            <p className="aih__caption">{current.summary}</p>
          </Reveal>

          <ol className="aih__list">
            {aiHomeThemes.map((t, i) => {
              const on = t.id === active;
              return (
                <Reveal as="li" key={t.id} variant="up" delay={i * 80} className={`aih__row${on ? ' is-active' : ''}`}>
                  <button
                    type="button"
                    className="aih__toggle"
                    aria-expanded={on}
                    aria-controls={`aih-${t.id}`}
                    onClick={() => setActive(t.id)}
                    onFocus={() => setActive(t.id)}
                    onPointerEnter={(e) => e.pointerType === 'mouse' && setActive(t.id)}
                  >
                    <span className="aih__idx num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="aih__name">{t.title}</span>
                    <span className="aih__mark" aria-hidden="true">
                      <Icon name="arrow" size={22} />
                    </span>
                  </button>
                  <div className="aih__detail" id={`aih-${t.id}`}>
                    <div className="aih__detail-inner">
                      <p>{t.text}</p>
                      <ul className="ticks">
                        {t.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <div className="aih__across">
          <p className="eyebrow">Three AIs, connected through SmartThings</p>
          <ul className="aih__trio">
            {aiAcross.map((a) => (
              <li key={a.name}>
                <Link to={a.to} className="aih__trio-link">
                  <span className="aih__trio-name">{a.name}</span>
                  <span className="aih__trio-where">{a.where}</span>
                  <span className="aih__trio-text">{a.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="aih__foot">
          <p className="footnote">{AI_HOME_FOOTNOTE}</p>
          {showCta && (
            <MagneticButton to="/ai-home" variant="primary">
              Explore AI Home
            </MagneticButton>
          )}
        </div>
      </div>
    </section>
  );
}
