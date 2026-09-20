import { useState } from 'react';
import { ecosystemDevices, connections } from '../../data/galaxyDevices';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import MagneticButton from '../ui/MagneticButton';
import EcosystemChain from '../ui/EcosystemChain';
import DeviceCard from '../cards/DeviceCard';

const byId = Object.fromEntries(ecosystemDevices.map((d) => [d.id, d]));

/** Signature section: an interconnected composition. Hover or focus a device to trace its relationships. */
export default function EcosystemSection({ showChain = true, showCta = true, id = 'ecosystem' }) {
  const [activeId, setActiveId] = useState('phone');
  const active = byId[activeId];
  const related = new Set(active.links);

  const stateOf = (d) => {
    if (d.id === activeId) return 'active';
    return related.has(d.id) ? 'related' : 'dim';
  };

  return (
    <section id={id} className="section theme-dark eco" aria-labelledby="eco-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="The Galaxy ecosystem"
          title={['Everything Galaxy.', 'Connected.']}
          size="display"
          titleId="eco-title"
          lead="Your phone, watch, earbuds, tablet and laptop are designed to feel like one system. Hover or focus a device to see how it connects."
        />

        <Reveal variant="scale" delay={100}>
          <div className="eco__stage">
            <svg className="eco__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <ellipse className="eco__orbit" cx="50" cy="50" rx="33" ry="30" />
              <ellipse className="eco__orbit eco__orbit--outer" cx="50" cy="50" rx="47" ry="45" />
              {connections.map(([a, b]) => {
                const A = byId[a].pos;
                const B = byId[b].pos;
                const on = a === activeId || b === activeId;
                return (
                  <line
                    key={`${a}-${b}`}
                    className={`eco__edge${on ? ' is-active' : ''}`}
                    x1={A.x}
                    y1={A.y}
                    x2={B.x}
                    y2={B.y}
                  />
                );
              })}
            </svg>
            <span className="eco__pulse" aria-hidden="true" />
            {ecosystemDevices.map((d) => (
              <DeviceCard
                key={d.id}
                device={d}
                variant="eco"
                state={stateOf(d)}
                pressed={d.id === activeId}
                onActivate={setActiveId}
                style={{ '--x': `${d.pos.x}%`, '--y': `${d.pos.y}%` }}
              />
            ))}
          </div>
        </Reveal>

        <div className="eco__info" aria-live="polite" aria-atomic="true">
          <div className="eco__info-head">
            <p className="eyebrow">{active.role}</p>
            <h3 className="h2">{active.name}</h3>
          </div>
          <div className="eco__info-body">
            <p className="lead">{active.relation}</p>
            {active.links.length > 0 && (
              <p className="eco__with">
                <span>Connects with</span> {active.links.map((l) => byId[l].short).join(' · ')}
              </p>
            )}
            <MagneticButton to={active.to} variant="ghost">
              {active.cta}
            </MagneticButton>
          </div>
        </div>

        {(showChain || showCta) && (
          <div className="eco__foot">
            {showChain && (
              <div>
                <p className="caption eco__foot-label">Beyond your pocket</p>
                <EcosystemChain />
              </div>
            )}
            {showCta && (
              <MagneticButton to="/galaxy" variant="primary">
                Explore the ecosystem
              </MagneticButton>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
