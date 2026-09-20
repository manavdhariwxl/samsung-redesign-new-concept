import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { search, suggestedSearches } from '../../data/searchIndex';
import useFocusTrap from '../../hooks/useFocusTrap';
import useLockBody from '../../hooks/useLockBody';
import Icon from '../ui/Icon';

export default function SearchOverlay({ open, onClose }) {
  const ref = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState('');
  const results = useMemo(() => search(query), [query]);

  useFocusTrap(ref, open, { onEscape: onClose, initialFocus: 'input' });
  useLockBody(open);

  useEffect(() => {
    if (!open) setQuery('');
  }, [open]);

  useEffect(() => {
    if (open) onClose();
    // Close whenever navigation happens.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.key]);

  const focusResult = (i) => {
    const items = ref.current?.querySelectorAll('.search__result');
    if (items && items[i]) items[i].focus();
  };

  const onInputKey = (e) => {
    if (e.key === 'ArrowDown' && results.length) {
      e.preventDefault();
      focusResult(0);
    }
  };

  const onResultKey = (e, i) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      focusResult(i + 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (i === 0) inputRef.current?.focus();
      else focusResult(i - 1);
    }
  };

  const submit = (e) => {
    e.preventDefault();
    if (results[0]) navigate(results[0].to);
  };

  const trimmed = query.trim();

  return (
    <div
      ref={ref}
      className={`search${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Search the concept"
      aria-hidden={!open}
    >
      <div className="search__scrim" onClick={onClose} />
      <div className="search__panel">
        <div className="wrap search__wrap">
          <div className="search__top">
            <p className="eyebrow">Search</p>
            <button type="button" className="nav__icon" onClick={onClose} aria-label="Close search">
              <Icon name="close" size={22} />
            </button>
          </div>

          <form className="search__form" role="search" onSubmit={submit}>
            <Icon name="search" size={28} strokeWidth={1.4} />
            <label htmlFor="site-search" className="sr-only">
              Search products, features and stories
            </label>
            <input
              id="site-search"
              ref={inputRef}
              className="search__input"
              type="search"
              autoComplete="off"
              spellCheck="false"
              placeholder="Search products, features, stories…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={onInputKey}
            />
          </form>

          <p className="sr-only" aria-live="polite">
            {trimmed ? `${results.length} result${results.length === 1 ? '' : 's'}` : ''}
          </p>

          {trimmed ? (
            results.length ? (
              <ul className="search__results">
                {results.map((r, i) => (
                  <li key={r.id}>
                    <Link
                      to={r.to}
                      className="search__result"
                      onClick={onClose}
                      onKeyDown={(e) => onResultKey(e, i)}
                    >
                      <span className="search__type">{r.type}</span>
                      <span className="search__title">{r.title}</span>
                      <span className="search__desc">{r.description}</span>
                      <Icon name="arrow" size={20} />
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="search__empty">
                No results for “{trimmed}”. Try “watch”, “TV” or “SmartThings”.
              </p>
            )
          ) : (
            <div className="search__suggest">
              <p className="caption">Popular</p>
              <ul className="chips">
                {suggestedSearches.map((s) => (
                  <li key={s.label}>
                    <Link to={s.to} className="chip" onClick={onClose}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
