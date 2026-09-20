import { Link } from 'react-router-dom';
import { ecosystemChain } from '../../data/galaxyDevices';

/** Phone → Watch → Buds → Tab → Book → TV → Home → SmartThings → AI */
export default function EcosystemChain({ compact = false, className = '' }) {
  return (
    <ol
      className={`chain${compact ? ' chain--compact' : ''}${className ? ` ${className}` : ''}`}
      aria-label="One connected world"
    >
      {ecosystemChain.map((c) => (
        <li key={c.label}>
          <Link to={c.to}>{c.label}</Link>
        </li>
      ))}
    </ol>
  );
}
