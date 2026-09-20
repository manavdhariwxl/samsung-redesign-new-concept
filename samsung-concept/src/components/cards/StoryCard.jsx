import { Link } from 'react-router-dom';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';

/** Editorial story card. variant: feature (image-led) | standard | compact (type-led). */
export default function StoryCard({ story, variant = 'standard', index }) {
  const to = `/discover?story=${story.id}`;
  return (
    <article className={`scard scard--${variant}`}>
      {variant !== 'compact' && (
        <div className="scard__media">
          <LazyImage name={story.image} className="cover" />
        </div>
      )}
      <div className="scard__body">
        <p className="scard__meta">
          {typeof index === 'number' && <span className="scard__index num">{String(index + 1).padStart(2, '0')}</span>}
          <span>{story.categoryLabel}</span>
        </p>
        <h3 className={`scard__title ${variant === 'feature' ? 'display' : 'h3'}`}>
          <Link to={to} className="scard__link">
            {story.title}
          </Link>
        </h3>
        <p className="scard__dek">{story.dek}</p>
        <span className="scard__more" aria-hidden="true">
          Read story <Icon name="arrow" size={16} />
        </span>
      </div>
    </article>
  );
}
