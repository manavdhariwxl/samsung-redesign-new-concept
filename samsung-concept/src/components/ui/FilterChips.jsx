/** Accessible filter toggle group. Each chip is a button with aria-pressed. */
export default function FilterChips({ items, value, onChange, label = 'Filter', className = '' }) {
  return (
    <div className={`chips${className ? ` ${className}` : ''}`} role="group" aria-label={label}>
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className="chip"
          aria-pressed={value === item.id}
          onClick={() => onChange(item.id)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
