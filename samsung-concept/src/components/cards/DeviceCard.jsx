import LazyImage from '../ui/LazyImage';

/**
 * Interactive device node used by the Ecosystem and SmartThings compositions.
 * Position is supplied through CSS variables (--x/--y, and --mx/--my on small screens).
 */
export default function DeviceCard({
  device,
  variant = 'eco',
  state = '',
  pressed = false,
  onActivate,
  onDeactivate,
  label,
  style,
}) {
  return (
    <button
      type="button"
      className={`dcard dcard--${variant} dcard--${device.id}${state ? ` is-${state}` : ''}`}
      style={style}
      aria-pressed={pressed}
      onPointerEnter={(e) => e.pointerType === 'mouse' && onActivate(device.id)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && onDeactivate && onDeactivate()}
      onFocus={() => onActivate(device.id)}
      onClick={() => onActivate(device.id)}
    >
      <span className="dcard__img">
        <LazyImage name={device.image} ratio={device.ratio} alt="" />
      </span>
      <span className="dcard__label">{label || device.short || device.name}</span>
    </button>
  );
}
