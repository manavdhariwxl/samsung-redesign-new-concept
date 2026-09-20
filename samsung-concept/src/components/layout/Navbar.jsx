import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { primaryNav, utilityNav } from '../../data/navigation';
import useScrolled from '../../hooks/useScrolled';
import useFocusTrap from '../../hooks/useFocusTrap';
import useLockBody from '../../hooks/useLockBody';
import Icon from '../ui/Icon';

function Wordmark() {
  return (
    <>
      <span className="nav__mark">SAMSUNG</span>
      <span className="nav__tag">Concept</span>
    </>
  );
}

export default function Navbar({ onSearch }) {
  const scrolled = useScrolled(24);
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openId, setOpenId] = useState(null);
  const [group, setGroup] = useState(null);
  const drawerRef = useRef(null);
  const closeTimer = useRef(0);

  useEffect(() => {
    setMenuOpen(false);
    setOpenId(null);
    setGroup(null);
  }, [location.key]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  useFocusTrap(drawerRef, menuOpen, { onEscape: () => setMenuOpen(false) });
  useLockBody(menuOpen);

  const openPanel = (id) => {
    clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const scheduleClose = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenId(null), 140);
  };

  const isCurrent = (item) =>
    item.children
      ? item.children.some((c) => c.to.split('?')[0] === location.pathname)
      : item.to === location.pathname;

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${menuOpen ? ' is-menu-open' : ''}`}>
      <div className="nav__bar wrap">
        <Link to="/" className="nav__brand" aria-label="Samsung Website Redesign Concept — home">
          <Wordmark />
        </Link>

        <nav className="nav__primary only-nav" aria-label="Primary">
          <ul className="nav__list">
            {primaryNav.map((item) =>
              item.children ? (
                <li
                  key={item.id}
                  className={`nav__item${openId === item.id ? ' is-open' : ''}`}
                  onPointerEnter={(e) => e.pointerType === 'mouse' && openPanel(item.id)}
                  onPointerLeave={(e) => e.pointerType === 'mouse' && scheduleClose()}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setOpenId(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Escape' && openId === item.id) {
                      setOpenId(null);
                      e.currentTarget.querySelector('button')?.focus();
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav__link${isCurrent(item) ? ' is-current' : ''}`}
                    aria-expanded={openId === item.id}
                    aria-controls={`panel-${item.id}`}
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  >
                    {item.label}
                    <Icon name="chevron-down" size={14} className="nav__chev" />
                  </button>
                  <div className="nav__panel" id={`panel-${item.id}`}>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to} className="nav__sublink">
                            <span>{c.label}</span>
                            <small>{c.note}</small>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={item.id} className="nav__item">
                  <NavLink to={item.to} className={({ isActive }) => `nav__link${isActive ? ' is-current' : ''}`}>
                    {item.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

        <div className="nav__actions">
          <ul className="nav__utility only-nav">
            {utilityNav.map((u) => (
              <li key={u.to}>
                <NavLink to={u.to} className={({ isActive }) => `nav__link nav__link--quiet${isActive ? ' is-current' : ''}`}>
                  {u.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <button type="button" className="nav__icon" onClick={onSearch} aria-label="Search">
            <Icon name="search" size={20} />
          </button>
          <button
            type="button"
            className="nav__icon only-compact"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        ref={drawerRef}
        className={`drawer${menuOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        aria-hidden={!menuOpen}
      >
        <div className="drawer__scrim" onClick={() => setMenuOpen(false)} />
        <div className="drawer__panel">
          <div className="drawer__head">
            <span className="drawer__brand">
              <Wordmark />
            </span>
            <button type="button" className="nav__icon" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
              <Icon name="close" size={22} />
            </button>
          </div>
          <nav aria-label="Mobile">
            <ul className="drawer__list">
              {primaryNav.map((item) =>
                item.children ? (
                  <li key={item.id} className={`drawer__item${group === item.id ? ' is-open' : ''}`}>
                    <button
                      type="button"
                      className="drawer__link"
                      aria-expanded={group === item.id}
                      aria-controls={`drawer-${item.id}`}
                      onClick={() => setGroup(group === item.id ? null : item.id)}
                    >
                      <span>{item.label}</span>
                      <Icon name={group === item.id ? 'minus' : 'plus'} size={20} />
                    </button>
                    <div className="drawer__sub" id={`drawer-${item.id}`}>
                      <ul>
                        {item.children.map((c) => (
                          <li key={c.to}>
                            <Link to={c.to} className="drawer__sublink">
                              {c.label}
                              <small>{c.note}</small>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.id} className="drawer__item">
                    <Link to={item.to} className="drawer__link">
                      <span>{item.label}</span>
                      <Icon name="arrow" size={20} />
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="drawer__foot">
            {utilityNav.map((u) => (
              <Link key={u.to} to={u.to} className="drawer__quiet">
                {u.label}
              </Link>
            ))}
            <button
              type="button"
              className="drawer__quiet"
              onClick={() => {
                setMenuOpen(false);
                onSearch();
              }}
            >
              <Icon name="search" size={18} /> Search
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
