import { products } from '../../data/products';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';

const familyName = Object.fromEntries(products.map((p) => [p.id, p.name]));

/**
 * Named-model tiles. Each tile shows a real product image when one has been added to
 * src/assets/products/<model-id>.webp; otherwise a neutral empty frame is shown (nothing is ever drawn).
 */
export default function ModelGrid({
  items,
  official,
  eyebrow = 'Current models',
  title = ['Named models,', 'at a glance.'],
  lead = 'Model names from Samsung India announcements. Prices, specifications and availability live on the official site.',
  theme = 'light',
  titleId = 'models-title',
  id,
}) {
  return (
    <section id={id} className={`section section--tight theme-${theme} mgrid`} aria-labelledby={titleId}>
      <div className="wrap">
        <SectionHeading eyebrow={eyebrow} title={title} lead={lead} titleId={titleId} />
        <ul className="row g-3 g-lg-4 mgrid__list">
          {items.map((m, i) => (
            <Reveal as="li" key={m.id} variant="up" delay={(i % 4) * 70} className="col-6 col-md-4 col-xl-3">
              <article className="mcard">
                <div className="mcard__media">
                  <LazyImage name={m.id} alt={m.name} />
                </div>
                <div className="mcard__body">
                  <p className="mcard__fam">{familyName[m.family]}</p>
                  <h3 className="mcard__name">{m.name}</h3>
                  <a className="mcard__link" href={official} target="_blank" rel="noopener noreferrer">
                    View on samsung.com/in
                    <Icon name="arrow-up-right" size={14} />
                    <span className="sr-only"> — {m.name} (opens in a new tab)</span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
        <p className="footnote">
          Not exhaustive — Samsung’s range changes often. Older and regional models, including Galaxy A, M and F series, are listed on samsung.com/in.
        </p>
      </div>
    </section>
  );
}
