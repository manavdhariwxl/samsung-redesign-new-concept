import Reveal from '../ui/Reveal';
import LazyImage from '../ui/LazyImage';
import { hasProductImage } from '../../data/media';
import MagneticButton from '../ui/MagneticButton';

/** Image + text editorial split. Alternates sides with `flip`. */
export default function SplitBlock({
  eyebrow,
  title,
  text,
  points = [],
  image,
  scene = 'scene-galaxy',
  alt = '',
  flip = false,
  cta,
  theme = 'light',
  id,
  note,
}) {
  return (
    <section id={id} className={`section section--tight theme-${theme} split`}>
      <div className={`wrap split__row${flip ? ' is-flip' : ''}`}>
        <Reveal variant="image" className="split__media media-frame">
          <LazyImage name={scene} className="cover" />
          {hasProductImage(image) && (
            <div className="split__device">
              <LazyImage name={image} alt={alt} optional />
            </div>
          )}
        </Reveal>
        <div className="split__text">
          <Reveal variant="fade">
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal variant="up" delay={90}>
            <h2 className="h2">{title}</h2>
          </Reveal>
          <Reveal variant="up" delay={170}>
            <p className="lead">{text}</p>
            {points.length > 0 && (
              <ul className="ticks">
                {points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            {cta && (
              <MagneticButton to={cta.to} href={cta.href} variant="primary">
                {cta.label}
              </MagneticButton>
            )}
            {note && <p className="footnote">{note}</p>}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
