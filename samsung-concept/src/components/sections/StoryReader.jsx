import { Link } from 'react-router-dom';
import { STORY_NOTE, stories } from '../../data/stories';
import LazyImage from '../ui/LazyImage';
import MagneticButton from '../ui/MagneticButton';
import Icon from '../ui/Icon';

/** Inline article reader used on /discover. */
export default function StoryReader({ story, onClose }) {
  const index = stories.findIndex((s) => s.id === story.id);
  const prev = stories[(index - 1 + stories.length) % stories.length];
  const next = stories[(index + 1) % stories.length];

  return (
    <section id="story-reader" className="section section--tight theme-light reader" aria-labelledby="reader-title">
      <div className="wrap reader__wrap">
        <div className="reader__top">
          <p className="eyebrow">{story.categoryLabel}</p>
          <button type="button" className="link-arrow" onClick={onClose}>
            Close story <Icon name="close" size={16} />
          </button>
        </div>
        <article className="reader__article">
          <div className="reader__media media-frame ratio-21x9">
            <LazyImage name={story.image} className="cover" eager />
          </div>
          <h2 id="reader-title" className="display reader__title">
            {story.title}
          </h2>
          <p className="lead reader__dek">{story.dek}</p>
          <div className="reader__body">
            {story.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="footnote">{STORY_NOTE}</p>
          <div className="reader__actions">
            <MagneticButton to={story.to} variant="primary">
              {story.toLabel}
            </MagneticButton>
          </div>
        </article>
        <nav className="reader__nav" aria-label="More stories">
          <Link to={`/discover?story=${prev.id}`} className="reader__pn">
            <span className="caption">Previous</span>
            <span>{prev.title}</span>
          </Link>
          <Link to={`/discover?story=${next.id}`} className="reader__pn reader__pn--next">
            <span className="caption">Next</span>
            <span>{next.title}</span>
          </Link>
        </nav>
      </div>
    </section>
  );
}
