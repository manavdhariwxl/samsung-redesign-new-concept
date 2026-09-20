import { useState } from 'react';
import { stNodes, stRooms, stSteps } from '../../data/smartThings';
import SectionHeading from '../ui/SectionHeading';
import Reveal from '../ui/Reveal';
import FilterChips from '../ui/FilterChips';
import MagneticButton from '../ui/MagneticButton';
import LazyImage from '../ui/LazyImage';
import DeviceCard from '../cards/DeviceCard';

const satellites = stNodes.filter((n) => n.id !== 'phone');

/** Curved link from the phone to a device, in stage percentages. */
const curve = (from, to) => {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2 - 8;
  return `M${from.x} ${from.y} Q${mx} ${my} ${to.x} ${to.y}`;
};

/** Immersive connected-home scene. Choose a room to see which devices work together. */
export default function SmartThingsSection({ showSteps = false, showCta = true, id = 'smartthings' }) {
  const [room, setRoom] = useState('all');
  const [focusId, setFocusId] = useState(null);
  const roomDef = stRooms.find((r) => r.id === room);
  const focus = focusId ? stNodes.find((n) => n.id === focusId) : null;

  const chooseRoom = (next) => {
    setRoom(next);
    setFocusId(null);
  };

  const nodes = stNodes.map((n) => ({ ...n, on: n.rooms.includes(room) }));
  const hubOn = nodes.find((n) => n.id === 'phone');
  const nodesById = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const litSatellites = satellites.map((n) => ({ ...n, on: nodesById[n.id].on }));

  const linesFor = (variant, pick) => (
    <svg
      className={`st__lines st__lines--${variant}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      {litSatellites.map((n) => (
        <path
          key={n.id}
          className={`st__link${n.on ? ' is-on' : ''}`}
          d={curve(pick(hubOn), pick(n))}
        />
      ))}
    </svg>
  );

  return (
    <section id={id} className="section theme-dark st" aria-labelledby="st-title">
      <div className="st__bg" aria-hidden="true">
        <LazyImage name="scene-smartthings" className="cover" />
      </div>
      <div className="wrap">
        <div className="st__head">
          <SectionHeading eyebrow="SmartThings" title={['Your home.', 'Connected.']} size="display" titleId="st-title" />
          <Reveal variant="up" delay={200} className="st__intro">
            <p className="lead">
              SmartThings brings Samsung devices — and supported third-party devices — into one place. Choose a room to see how the
              pieces fit together.
            </p>
          </Reveal>
        </div>

        <Reveal variant="fade" delay={100}>
          <FilterChips
            items={stRooms}
            value={room}
            onChange={chooseRoom}
            label="Explore by room"
            className="st__rooms"
          />
        </Reveal>

        <Reveal variant="scale" delay={150}>
          <div className="st__stage" onPointerLeave={(e) => e.pointerType === 'mouse' && setFocusId(null)}>
            <span className="st__floor" aria-hidden="true" />
            {linesFor('desktop', (n) => n.pos)}
            {linesFor('mobile', (n) => n.m)}
            {nodes.map((n) => (
              <DeviceCard
                key={n.id}
                device={n}
                variant="st"
                label={n.name}
                state={n.on ? (focusId === n.id ? 'active' : 'on') : 'off'}
                pressed={focusId === n.id}
                onActivate={setFocusId}
                style={{
                  '--x': `${n.pos.x}%`,
                  '--y': `${n.pos.y}%`,
                  '--mx': `${n.m.x}%`,
                  '--my': `${n.m.y}%`,
                }}
              />
            ))}
          </div>
        </Reveal>

        <div className="st__info" aria-live="polite" aria-atomic="true">
          <div>
            <p className="eyebrow">{focus ? focus.name : roomDef.label}</p>
            <p className="st__text">{focus ? focus.text : roomDef.text}</p>
          </div>
          {showCta && (
            <MagneticButton to="/smartthings" variant="primary">
              Explore SmartThings
            </MagneticButton>
          )}
        </div>
        <p className="footnote">
          Illustrative composition. Available features depend on the devices, models and software you own.
        </p>

        {showSteps && (
          <ol className="st__steps">
            {stSteps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} variant="up" className="st__step">
                <span className="st__step-num num">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h3">{s.title}</h3>
                <p className="body-sm">{s.text}</p>
              </Reveal>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
