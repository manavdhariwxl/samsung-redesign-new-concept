import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import MagneticButton from '../components/ui/MagneticButton';
import Icon from '../components/ui/Icon';
import { faqs, helpTopics, supportChannels } from '../data/support';
import { OFFICIAL } from '../data/navigation';

const norm = (s) => s.toLowerCase();

export default function Support() {
  const [params] = useSearchParams();
  const [query, setQuery] = useState(params.get('q') || '');

  const topics = useMemo(() => {
    const tokens = norm(query).split(/\s+/).filter(Boolean);
    if (!tokens.length) return helpTopics;
    return helpTopics.filter((t) => {
      const hay = norm(`${t.title} ${t.text} ${t.keywords}`);
      return tokens.every((tok) => hay.includes(tok));
    });
  }, [query]);

  const exact = helpTopics.find((t) => norm(t.title) === norm(query.trim()));

  return (
    <>
      <PageHeader
        eyebrow="Support"
        title={['How can we', 'help?']}
        lead="Search common topics below, or go straight to official Samsung India support for your product."
        scene="scene-support"
        actions={[{ label: 'Open Samsung India Support', href: OFFICIAL.support }]}
      />

      <section className="section section--tight theme-light help" aria-labelledby="help-title">
        <div className="wrap help__wrap">
          <SectionHeading eyebrow="Help topics" title="Find an answer." titleId="help-title" />
          <Reveal variant="up" delay={120}>
            <form className="help__search" role="search" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="help-q" className="sr-only">
                Search help topics
              </label>
              <Icon name="search" size={22} />
              <input
                id="help-q"
                className="help__input"
                type="search"
                placeholder="Search help topics — warranty, SmartThings, software…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
            </form>
            <p className="caption help__count" aria-live="polite">
              {topics.length} {topics.length === 1 ? 'topic' : 'topics'}
            </p>
          </Reveal>

          {topics.length ? (
            <ul className="help__list">
              {topics.map((t) => (
                <li key={t.id}>
                  <details className="acc" open={exact ? exact.id === t.id : undefined}>
                    <summary>
                      <span>{t.title}</span>
                      <Icon name="plus" size={20} className="acc__plus" />
                    </summary>
                    <p>{t.text}</p>
                  </details>
                </li>
              ))}
            </ul>
          ) : (
            <p className="help__empty">
              Nothing matched “{query}”. Try a broader word, or head to official{' '}
              <a href={OFFICIAL.support} target="_blank" rel="noopener noreferrer">
                Samsung India Support
              </a>
              .
            </p>
          )}
        </div>
      </section>

      <section className="section section--tight theme-dark channels" aria-labelledby="channels-title">
        <div className="wrap">
          <SectionHeading eyebrow="Official channels" title={['Talk to', 'Samsung.']} titleId="channels-title" />
          <ul className="row g-4 channels__list">
            {supportChannels.map((c, i) => (
              <Reveal as="li" key={c.title} variant="up" delay={i * 90} className="col-12 col-md-4">
                <a className="channels__card" href={c.href} target="_blank" rel="noopener noreferrer">
                  <span className="channels__title">{c.title}</span>
                  <span className="channels__text">{c.text}</span>
                  <Icon name="arrow-up-right" size={22} />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tight theme-gray faq" aria-labelledby="faq-title">
        <div className="wrap help__wrap">
          <SectionHeading eyebrow="About this concept" title="Questions." titleId="faq-title" />
          <ul className="help__list">
            {faqs.map((f) => (
              <li key={f.q}>
                <details className="acc">
                  <summary>
                    <span>{f.q}</span>
                    <Icon name="plus" size={20} className="acc__plus" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              </li>
            ))}
          </ul>
          <div className="faq__cta">
            <MagneticButton to="/discover" variant="ghost">
              Read stories
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
