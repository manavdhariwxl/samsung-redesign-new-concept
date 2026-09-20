import PageHeader from '../components/layout/PageHeader';
import ComputingSection from '../components/sections/ComputingSection';
import ModelGrid from '../components/sections/ModelGrid';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContinueBand from '../components/sections/ContinueBand';
import { models } from '../data/models';
import { OFFICIAL } from '../data/navigation';

const links = [
  { title: 'Galaxy Tab', text: 'A larger canvas', to: '/tablets' },
  { title: 'Smartphones', text: 'The centre of Galaxy', to: '/smartphones' },
  { title: 'Galaxy AI', text: 'AI across devices', to: '/galaxy-ai' },
];

export default function GalaxyBook() {
  return (
    <>
      <PageHeader
        eyebrow="Computing"
        title={['Windows, meet', 'Galaxy.']}
        lead="Galaxy Book brings Windows to the Galaxy ecosystem — with connected experiences that keep your work close to your phone."
        scene="scene-work"
        device="galaxy-book6-pro"
        deviceAlt="Galaxy Book6 Pro"
        actions={[{ label: 'Browse on samsung.com/in', href: OFFICIAL.computers, variant: 'ghost' }]}
      />
      <ComputingSection only="book" showHeading={false} />
      <ModelGrid
        theme="gray"
        items={models.filter((m) => m.family === 'galaxy-book')}
        official={OFFICIAL.computers}
        titleId="book-models-title"
        title={['The Galaxy Book6', 'series.']}
      />
      <FeatureGrid
        theme="dark"
        eyebrow="Connected experiences"
        title={['Your laptop,', 'in the loop.']}
        titleId="book-connected-title"
        items={[
          { title: 'Windows at the core', text: 'Familiar Windows apps and workflows carry over to a Galaxy device.' },
          { title: 'Quick Share', text: 'Send files between supported Galaxy devices without the usual detours.' },
          { title: 'Multi Control', text: 'Use one keyboard and mouse across supported Galaxy devices.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
