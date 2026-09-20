import PageHeader from '../components/layout/PageHeader';
import EcosystemSection from '../components/sections/EcosystemSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import ModelGrid from '../components/sections/ModelGrid';
import FindYourGalaxy from '../components/sections/FindYourGalaxy';
import ContinueBand from '../components/sections/ContinueBand';
import { modelsForFilter } from '../data/models';
import { OFFICIAL } from '../data/navigation';

const links = [
  { title: 'Galaxy AI', text: 'AI across your devices', to: '/galaxy-ai' },
  { title: 'SmartThings', text: 'Extend the ecosystem to your home', to: '/smartthings' },
  { title: 'Discover', text: 'Stories from the connected world', to: '/discover' },
];

export default function Galaxy() {
  return (
    <>
      <PageHeader
        eyebrow="Galaxy"
        title={['The Galaxy', 'ecosystem.']}
        lead="Phone, watch, earbuds, tablet and laptop — designed so that each one makes the others more useful."
        scene="scene-galaxy"
        device="galaxy-s26-ultra"
        deviceAlt="Galaxy S26 Ultra"
        actions={[{ label: 'Find your Galaxy', to: '/galaxy#find-your-galaxy' }]}
      />
      <EcosystemSection showCta={false} />
      <FeatureGrid
        theme="light"
        eyebrow="Better together"
        title={['One world,', 'three ideas.']}
        titleId="together-title"
        items={[
          { title: 'One account', text: 'Sign in with your Samsung account and your Galaxy devices start from the same place.' },
          { title: 'Moving between screens', text: 'Connected experiences such as Quick Share and Multi Control are designed to let content and control move between supported devices.' },
          { title: 'AI throughout', text: 'Galaxy AI features arrive across phones, tablets and wearables, with availability varying by model.' },
        ]}
      />
      <ModelGrid
        theme="gray"
        id="models"
        items={modelsForFilter(['mobile', 'computing', 'wearables'], 'all')}
        official={OFFICIAL.home}
        title={['The Galaxy line-up,', 'by name.']}
      />
      <FindYourGalaxy />
      <ContinueBand links={links} />
    </>
  );
}
