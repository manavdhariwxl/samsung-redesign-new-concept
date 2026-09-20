import PageHeader from '../components/layout/PageHeader';
import ProductShowcase from '../components/sections/ProductShowcase';
import ModelGrid from '../components/sections/ModelGrid';
import SplitBlock from '../components/sections/SplitBlock';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContinueBand from '../components/sections/ContinueBand';
import useQueryFilter from '../hooks/useQueryFilter';
import { byGroup } from '../data/products';
import { modelsForFilter } from '../data/models';
import { OFFICIAL } from '../data/navigation';

const filters = [
  { id: 'all', label: 'All' },
  { id: 'watch', label: 'Watch' },
  { id: 'buds', label: 'Buds' },
  { id: 'ring', label: 'Ring' },
];

const links = [
  { title: 'Smartphones', text: 'Where wearables start', to: '/smartphones' },
  { title: 'SmartThings', text: 'Wearables and the home', to: '/smartthings' },
  { title: 'Galaxy AI', text: 'AI on your wrist and in your ears', to: '/galaxy-ai' },
];

export default function Wearables() {
  const [filter, setFilter] = useQueryFilter(filters.map((f) => f.id));
  return (
    <>
      <PageHeader
        eyebrow="Wearables"
        title={['Wear the', 'Galaxy.']}
        lead="Watch, earbuds and ring — the parts of the ecosystem that stay with you all day."
        scene="scene-galaxy"
        device="galaxy-watch9"
        deviceAlt="Galaxy Watch9"
        actions={[{ label: 'Browse watches', href: OFFICIAL.watches, variant: 'ghost' }, { label: 'Browse audio', href: OFFICIAL.audio, variant: 'ghost' }]}
      />
      <ProductShowcase
        theme="gray"
        eyebrow="Wearables"
        title={['Three ways to', 'wear it.']}
        titleId="wear-title"
        items={byGroup('wearables')}
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
        external
      />
      <ModelGrid
        items={modelsForFilter('wearables', filter)}
        official={OFFICIAL.watches}
        titleId="wear-models-title"
        title={['Current', 'wearables.']}
      />
      <SplitBlock
        theme="dark"
        eyebrow="Wellness"
        title="Wellness, on your wrist."
        text="Galaxy Watch pairs with your Galaxy phone and Samsung Health, and can work with SmartThings — for example, Wearable Good Sleep can help adjust supported air conditioners around your sleep."
        points={['Samsung Health integration', 'Wearable Good Sleep with supported air conditioners', 'Notifications from your phone']}
        image="galaxy-watch9"
        alt="Galaxy Watch9"
        scene="scene-care"
        cta={{ label: 'See SmartThings', to: '/smartthings' }}
        note="Features vary by model and region."
      />
      <FeatureGrid
        eyebrow="Audio"
        title={['Sound that', 'keeps up.']}
        titleId="wear-audio-title"
        items={[
          { title: 'Two fits', text: 'Galaxy Buds4 Pro use a canal-fit design; Galaxy Buds4 use an open-fit design.' },
          { title: 'Adaptive noise control', text: 'Enhanced ANC on the Buds4 series adapts to your surroundings.' },
          { title: 'Made for Galaxy', text: 'Simple pairing and shortcuts across your Galaxy devices.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
