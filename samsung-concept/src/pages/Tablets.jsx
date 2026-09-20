import PageHeader from '../components/layout/PageHeader';
import ProductShowcase from '../components/sections/ProductShowcase';
import ModelGrid from '../components/sections/ModelGrid';
import ComputingSection from '../components/sections/ComputingSection';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContinueBand from '../components/sections/ContinueBand';
import useQueryFilter from '../hooks/useQueryFilter';
import { byTag } from '../data/products';
import { modelsForFilter } from '../data/models';
import { OFFICIAL } from '../data/navigation';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'tab-s', label: 'Galaxy Tab S' },
  { id: 'tab-a', label: 'Galaxy Tab A' },
];

const links = [
  { title: 'Galaxy Book', text: 'Windows, connected to Galaxy', to: '/galaxy-book' },
  { title: 'Galaxy AI', text: 'Note Assist and more', to: '/galaxy-ai' },
  { title: 'The ecosystem', text: 'How it all connects', to: '/galaxy' },
];

export default function Tablets() {
  const [filter, setFilter] = useQueryFilter(filters.map((f) => f.id));
  return (
    <>
      <PageHeader
        eyebrow="Tablets"
        title={['A bigger', 'Galaxy.']}
        lead="Galaxy Tab S for work and creativity, Galaxy Tab A for everyday entertainment and learning."
        scene="scene-work"
        device="galaxy-tab-s11-ultra"
        deviceAlt="Galaxy Tab S11 Ultra"
        actions={[{ label: 'Browse on samsung.com/in', href: OFFICIAL.tablets, variant: 'ghost' }]}
      />
      <ProductShowcase
        theme="gray"
        eyebrow="Series"
        title={['Two series,', 'many uses.']}
        titleId="tab-series-title"
        items={byTag('tablets')}
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
        external
      />
      <ModelGrid
        items={modelsForFilter('computing', filter).filter((m) => m.family.startsWith('galaxy-tab'))}
        official={OFFICIAL.tablets}
        titleId="tab-models-title"
        title={['Current', 'tablets.']}
      />
      <ComputingSection only="tab" showHeading={false} />
      <FeatureGrid
        theme="dark"
        eyebrow="More than a screen"
        title={['Made for', 'how you work.']}
        titleId="tab-more-title"
        items={[
          { title: 'S Pen', text: 'Handwriting, sketching and annotation on select Tab S models.' },
          { title: 'Samsung DeX', text: 'A desktop-style experience on supported tablets.' },
          { title: 'Galaxy AI', text: 'Galaxy AI features such as Note Assist on supported devices.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
