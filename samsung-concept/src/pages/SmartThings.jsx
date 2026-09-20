import PageHeader from '../components/layout/PageHeader';
import SmartThingsSection from '../components/sections/SmartThingsSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContinueBand from '../components/sections/ContinueBand';

const links = [
  { title: 'AI Home', text: 'Ease, Care, Save, Secure', to: '/ai-home' },
  { title: 'Home appliances', text: 'The Bespoke AI range', to: '/home-appliances' },
  { title: 'Support', text: 'Set up and get help', to: '/support' },
];

export default function SmartThings() {
  return (
    <>
      <PageHeader
        eyebrow="SmartThings"
        title={['Your home,', 'one place.']}
        lead="SmartThings is the thread between your phone, TV, appliances and wearables."
        scene="scene-smartthings"
        device="galaxy-s26-ultra"
        deviceAlt="Galaxy S26 Ultra"
        actions={[{ label: 'See how it fits together', to: '/smartthings#st-scene' }]}
      />
      <SmartThingsSection id="st-scene" showSteps showCta={false} />
      <FeatureGrid
        eyebrow="Open by design"
        title={['Samsung and', 'beyond.']}
        titleId="st-open-title"
        items={[
          { title: 'Samsung devices', text: 'Galaxy phones, TVs and Bespoke AI appliances share one home.' },
          { title: 'Third-party devices', text: 'SmartThings also connects supported devices from other brands.' },
          { title: 'Designed for AI', text: 'With AI, connected appliances can learn routines and help manage energy use.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
