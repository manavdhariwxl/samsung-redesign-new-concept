import { Link } from 'react-router-dom';
import Reveal from '../ui/Reveal';
import Icon from '../ui/Icon';

/** "Keep exploring" band: large editorial link rows. */
export default function ContinueBand({ links, title = 'Keep exploring.' }) {
  return (
    <section className="section section--tight theme-dark cont" aria-labelledby="cont-title">
      <div className="wrap">
        <Reveal variant="fade">
          <h2 id="cont-title" className="eyebrow">
            {title}
          </h2>
        </Reveal>
        <ul className="cont__list">
          {links.map((l, i) => (
            <Reveal as="li" key={l.to} variant="up" delay={i * 80}>
              <Link to={l.to} className="cont__link">
                <span className="cont__title">{l.title}</span>
                <span className="cont__text">{l.text}</span>
                <Icon name="arrow" size={26} />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
