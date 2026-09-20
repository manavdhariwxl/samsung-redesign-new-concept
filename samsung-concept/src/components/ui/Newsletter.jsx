import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Final call to action. Front-end only: nothing is sent or stored. */
export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | success

  const submit = (e) => {
    e.preventDefault();
    setStatus(EMAIL.test(email.trim()) ? 'success' : 'error');
  };

  const reset = () => {
    setEmail('');
    setStatus('idle');
  };

  return (
    <section className="section theme-light newsletter" aria-labelledby="newsletter-title">
      <div className="wrap newsletter__inner">
        <SectionHeading
          eyebrow="Newsletter"
          title={['Stay ahead', 'of what’s next.']}
          size="display"
          titleId="newsletter-title"
          lead="Design updates and stories from this concept, in your inbox. This form is a front-end demonstration — no email is sent or stored."
        />
        <Reveal variant="up" delay={250} className="newsletter__form-wrap">
          {status === 'success' ? (
            <div className="newsletter__success" role="status">
              <p className="h3">You’re on the list.</p>
              <p className="body-sm">
                This is a concept, so nothing was actually submitted. Thanks for exploring.
              </p>
              <button type="button" className="link-arrow" onClick={reset}>
                Use a different email
              </button>
            </div>
          ) : (
            <form className="newsletter__form" onSubmit={submit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                className="field"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                aria-invalid={status === 'error'}
                aria-describedby="newsletter-msg"
              />
              <button type="submit" className="btn btn--primary">
                <span className="btn__label">Subscribe</span>
              </button>
              <p id="newsletter-msg" className="newsletter__msg" role="alert">
                {status === 'error' ? 'Please enter a valid email address.' : ''}
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
