import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';

/** Numbered three-up feature list. Used for short, factual explainers on inner pages. */
export default function FeatureGrid({ eyebrow, title, lead, items, theme = 'light', titleId = 'features-title', id }) {
  return (
    <section id={id} className={`section section--tight theme-${theme} fgrid`} aria-labelledby={titleId}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} titleId={titleId} />
        <ol className="row g-4 g-lg-5 fgrid__list">
          {items.map((item, i) => (
            <Reveal as="li" key={item.title} variant="up" delay={i * 90} className={`col-12 col-md-${12 / Math.min(items.length, 3) >= 4 ? 4 : 6} fgrid__item`}>
              <span className="fgrid__num num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="h3">{item.title}</h3>
              <p className="body-sm">{item.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
