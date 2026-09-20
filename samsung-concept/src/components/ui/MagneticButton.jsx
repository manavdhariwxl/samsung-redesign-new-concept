import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useReducedMotion from '../../hooks/useReducedMotion';
import Icon from './Icon';

/**
 * Button / link with a subtle magnetic pull toward the pointer.
 * Renders a router Link (`to`), an anchor (`href`) or a button.
 */
export default function MagneticButton({
  to,
  href,
  onClick,
  children,
  variant = 'primary',
  strength = 0.22,
  icon = 'arrow',
  className = '',
  type = 'button',
  ...rest
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const move = (e) => {
    if (reduced || e.pointerType !== 'mouse' || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    ref.current.style.setProperty('--mx', `${x.toFixed(1)}px`);
    ref.current.style.setProperty('--my', `${y.toFixed(1)}px`);
  };
  const leave = () => {
    if (!ref.current) return;
    ref.current.style.setProperty('--mx', '0px');
    ref.current.style.setProperty('--my', '0px');
  };

  const cls = `btn btn--${variant}${className ? ` ${className}` : ''}`;
  const content = (
    <>
      <span className="btn__label">{children}</span>
      {icon && <Icon name={href ? 'arrow-up-right' : icon} size={18} />}
    </>
  );
  const handlers = { onPointerMove: move, onPointerLeave: leave };

  if (to) {
    return (
      <Link ref={ref} to={to} className={cls} onClick={onClick} {...handlers} {...rest}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a ref={ref} href={href} className={cls} target="_blank" rel="noopener noreferrer" onClick={onClick} {...handlers} {...rest}>
        {content}
      </a>
    );
  }
  return (
    <button ref={ref} type={type} className={cls} onClick={onClick} {...handlers} {...rest}>
      {content}
    </button>
  );
}
