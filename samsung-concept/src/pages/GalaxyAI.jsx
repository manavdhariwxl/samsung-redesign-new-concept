import { Link } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import GalaxyAISection from '../components/sections/GalaxyAISection';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContinueBand from '../components/sections/ContinueBand';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/ui/Reveal';
import { aiAcross } from '../data/aiFeatures';

const links = [
  { title: 'AI Home', text: 'Future living, now', to: '/ai-home' },
  { title: 'Smartphones', text: 'Galaxy S, Z and A series', to: '/smartphones' },
  { title: 'Wearables', text: 'Watch, Buds and Ring', to: '/wearables' },
];

export default function GalaxyAI() {
  return (
    <>
      <PageHeader
        eyebrow="Galaxy AI"
        title={['Galaxy AI,', 'everywhere.']}
        lead="AI that helps with the things you already do — searching, writing, translating, capturing and organising."
        scene="scene-ai"
        device="galaxy-s26-ultra"
        deviceAlt="Galaxy S26 Ultra"
      />
      <GalaxyAISection showCta={false} eyebrow="What it does" />

      <section className="section section--tight theme-dark aiw" aria-labelledby="aiw-title">
        <div className="wrap">
          <SectionHeading
            eyebrow="Beyond the phone"
            title={['Three AIs,', 'one connected world.']}
            titleId="aiw-title"
            lead="Samsung describes its AI as three layers — on mobile, on screens and in the home — linked through SmartThings."
          />
          <ul className="row g-4 aiw__list">
            {aiAcross.map((a, i) => (
              <Reveal as="li" key={a.name} variant="up" delay={i * 90} className="col-12 col-md-4">
                <Link to={a.to} className="aiw__card">
                  <span className="aiw__where">{a.where}</span>
                  <span className="aiw__name">{a.name}</span>
                  <span className="aiw__text">{a.text}</span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <FeatureGrid
        theme="light"
        eyebrow="Privacy and security"
        title={['Built on a', 'secure foundation.']}
        titleId="privacy-title"
        items={[
          { title: 'Samsung Knox', text: 'Samsung’s security platform underpins Galaxy devices and the AI features that run on them.' },
          { title: 'On-device AI', text: 'Some Galaxy AI features are processed on the device itself, for supported functions.' },
          { title: 'You stay in control', text: 'Samsung says it aims to make clear how information is used and to give you control over what you share.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
