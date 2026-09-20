import { Link } from 'react-router-dom';
import { SITE, footerColumns, footerLegal, socialLinks } from '../../data/navigation';
import EcosystemChain from '../ui/EcosystemChain';

function FooterLink({ link }) {
  if (link.to) return <Link to={link.to}>{link.label}</Link>;
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      {link.label}
      <span className="sr-only"> (opens samsung.com in a new tab)</span>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="footer theme-dark" aria-label="Site footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__lead">
            <p className="footer__tagline">One connected world.</p>
            <EcosystemChain compact />
          </div>
        </div>

        <div className="row gy-5 footer__cols">
          {footerColumns.map((col) => (
            <div className="col-6 col-md-4 col-lg" key={col.title}>
              <h2 className="footer__title">{col.title}</h2>
              <ul className="footer__list">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <FooterLink link={l} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="col-6 col-md-4 col-lg">
            <h2 className="footer__title">Social</h2>
            <ul className="footer__list">
              {socialLinks.map((s) => (
                <li key={s.label}>
                  <FooterLink link={s} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <ul className="footer__legal">
            {footerLegal.map((l) => (
              <li key={l.label}>
                <FooterLink link={l} />
              </li>
            ))}
          </ul>
          <div className="footer__meta">
            <p className="footer__credit">
              <span>Samsung Website Redesign Concept</span>
              <span className="footer__dot" aria-hidden="true">
                ·
              </span>
              <span>{SITE.credit}</span>
            </p>
            <p className="footer__disclaimer">{SITE.disclaimer}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
