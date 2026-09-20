import useReveal from '../../hooks/useReveal';

/**
 * Scroll-triggered reveal wrapper.
 * variant: up | left | right | scale | fade | mask (line-masked headings) | image (clip + scale)
 */
export default function Reveal({
  as: Tag = 'div',
  variant = 'up',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${inView ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={{ '--d': `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
