import { Link } from 'react-router-dom';
import LazyImage from '../ui/LazyImage';
import Icon from '../ui/Icon';

/** Data-driven product-family card. `external` links out to the official Samsung India page. */
export default function ProductCard({ product, external = false, ctaLabel }) {
  const label = ctaLabel || (external ? 'View on samsung.com/in' : 'Explore');
  return (
    <article className={`pcard pcard--${product.group}`}>
      <div className="pcard__media">
        <LazyImage name={[product.id, product.image]} alt={product.name} ratio="5 / 4" />
      </div>
      <div className="pcard__body">
        <p className="pcard__cat">{product.category}</p>
        <h3 className="pcard__name">{product.name}</h3>
        <p className="pcard__desc">{product.description}</p>
        {external ? (
          <a className="pcard__cta" href={product.official} target="_blank" rel="noopener noreferrer">
            {label}
            <Icon name="arrow-up-right" size={16} />
            <span className="sr-only"> — {product.name} (opens in a new tab)</span>
          </a>
        ) : (
          <Link className="pcard__cta" to={product.to}>
            {label}
            <Icon name="arrow" size={16} />
            <span className="sr-only"> — {product.name}</span>
          </Link>
        )}
      </div>
    </article>
  );
}
