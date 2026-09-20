import { Link } from 'react-router-dom';
import { stories, storyCategories } from '../../data/stories';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import StoryCard from '../cards/StoryCard';
import MagneticButton from '../ui/MagneticButton';

/** Magazine-style editorial area for the home page. */
export default function DiscoverySection({ id = 'discover' }) {
  const [feature, ...rest] = stories;
  const standard = rest.slice(0, 2);
  const compact = rest.slice(2);

  return (
    <section id={id} className="section theme-gray disc" aria-labelledby="disc-title">
      <div className="wrap">
        <div className="disc__head">
          <SectionHeading
            eyebrow="Discover"
            title={['Stories from', 'the connected world.']}
            size="display"
            titleId="disc-title"
          />
          <Reveal variant="up" delay={200} className="disc__cats">
            <ul className="chips" aria-label="Story categories">
              {storyCategories
                .filter((c) => c.id !== 'all')
                .map((c) => (
                  <li key={c.id}>
                    <Link className="chip" to={`/discover?c=${c.id}`}>
                      {c.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </Reveal>
        </div>

        <div className="row g-4 g-lg-5 disc__grid">
          <Reveal className="col-12 col-lg-7" variant="up">
            <StoryCard story={feature} variant="feature" index={0} />
          </Reveal>
          <div className="col-12 col-lg-5 disc__side">
            {standard.map((s, i) => (
              <Reveal key={s.id} variant="up" delay={100 + i * 100}>
                <StoryCard story={s} variant="standard" index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="row g-4 disc__compact">
          {compact.map((s, i) => (
            <Reveal as="li" key={s.id} variant="up" delay={i * 100} className="col-12 col-md-4">
              <StoryCard story={s} variant="compact" index={i + 3} />
            </Reveal>
          ))}
        </ul>

        <div className="disc__more">
          <MagneticButton to="/discover" variant="ghost">
            All stories
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
