import { computingBlocks } from '../../data/computing';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import { hasProductImage } from '../../data/media';
import MagneticButton from '../ui/MagneticButton';

/** Split editorial layout for Galaxy Book and Galaxy Tab. `only` limits it to one block. */
export default function ComputingSection({ only, showHeading = true, showLinks = true, id = 'computing' }) {
  const blocks = only ? computingBlocks.filter((b) => b.id === only) : computingBlocks;
  return (
    <section id={id} className="section theme-light comp" aria-labelledby="comp-title">
      <div className="wrap">
        {showHeading ? (
          <SectionHeading eyebrow="Computing" title={['Work. Create.', 'Anywhere.']} size="display" titleId="comp-title" />
        ) : (
          <h2 id="comp-title" className="sr-only">
            Galaxy computing
          </h2>
        )}

        {blocks.map((b, i) => (
          <article className={`comp__row${i % 2 ? ' is-flip' : ''}`} key={b.id}>
            <Reveal variant="image" className="comp__media media-frame">
              <LazyImage name={b.scene} className="cover" />
              {hasProductImage(b.image) && (
                <div className="comp__device">
                  <LazyImage name={b.image} alt={b.imageAlt} optional />
                </div>
              )}
            </Reveal>
            <div className="comp__text">
              <Reveal variant="fade">
                <p className="comp__idx num" aria-hidden="true">
                  {b.index}
                </p>
                <p className="eyebrow">{b.label}</p>
              </Reveal>
              <Reveal variant="up" delay={100}>
                <h3 className="h2">{b.title}</h3>
              </Reveal>
              <Reveal variant="up" delay={180}>
                <p className="lead">{b.text}</p>
                <ul className="ticks">
                  {b.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {showLinks && (
                  <MagneticButton to={b.to} variant="primary">
                    {b.cta}
                  </MagneticButton>
                )}
              </Reveal>
            </div>
          </article>
        ))}
        <p className="footnote">Features such as S Pen, DeX, Quick Share and Multi Control vary by model and software version.</p>
      </div>
    </section>
  );
}
