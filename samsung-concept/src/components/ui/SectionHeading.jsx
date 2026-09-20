import Reveal from './Reveal';

/** Eyebrow + masked headline + lead. `title` may be a string or an array of lines. */
export default function SectionHeading({
  eyebrow,
  title,
  lead,
  align = 'left',
  as: Tag = 'h2',
  size = 'h2',
  titleId,
  className = '',
  children,
}) {
  const lines = Array.isArray(title) ? title : [title];
  return (
    <div className={`sh sh--${align}${className ? ` ${className}` : ''}`}>
      {eyebrow && (
        <Reveal variant="fade">
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal as={Tag} id={titleId} variant="mask" className={`sh__title ${size}`}>
        {lines.map((line, i) => (
          <span className="mask-line" key={line} style={{ '--d': `${i * 90}ms` }}>
            <span>{line}</span>
          </span>
        ))}
      </Reveal>
      {lead && (
        <Reveal variant="up" delay={200}>
          <p className="lead">{lead}</p>
        </Reveal>
      )}
      {children}
    </div>
  );
}
