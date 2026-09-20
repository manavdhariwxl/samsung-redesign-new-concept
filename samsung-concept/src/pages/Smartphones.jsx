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
  { id: 's', label: 'Galaxy S' },
  { id: 'z', label: 'Galaxy Z' },
  { id: 'a', label: 'Galaxy A' },
  { id: 'm', label: 'Galaxy M' },
  { id: 'f', label: 'Galaxy F' },
];

const links = [
  { title: 'Galaxy AI', text: 'What the AI can do', to: '/galaxy-ai' },
  { title: 'Wearables', text: 'Watch, Buds and Ring', to: '/wearables' },
  { title: 'Find your Galaxy', text: 'A conceptual guide', to: '/galaxy#find-your-galaxy' },
];

export default function Smartphones() {
  const [filter, setFilter] = useQueryFilter(filters.map((f) => f.id));
  return (
    <>
      <PageHeader
        eyebrow="Mobile"
        title={['Every Galaxy', 'smartphone.']}
        lead="From the flagship S series to foldables and the everyday A series — the phone at the centre of the Galaxy ecosystem."
        scene="scene-galaxy"
        device="galaxy-s26-ultra"
        deviceAlt="Galaxy S26 Ultra"
        actions={[{ label: 'Browse on samsung.com/in', href: OFFICIAL.smartphones, variant: 'ghost' }]}
      />
      <ProductShowcase
        id="families"
        theme="gray"
        eyebrow="Series"
        title={['Choose a', 'series.']}
        titleId="series-title"
        items={byGroup('mobile')}
        filters={filters}
        filter={filter}
        onFilterChange={setFilter}
        external
      />
      <ModelGrid
        items={modelsForFilter('mobile', filter)}
        official={OFFICIAL.smartphones}
        titleId="phone-models-title"
        title={['Current', 'smartphones.']}
      />
      <SplitBlock
        theme="dark"
        eyebrow="Foldables"
        title="Two ways to fold."
        text="Galaxy Z Fold opens into a larger canvas for content and multitasking; Galaxy Z Flip folds down to pocket size, with a cover screen for quick interactions."
        points={['Z Fold8 and Z Fold8 Ultra for larger-screen work and entertainment', 'Z Flip8 with an AI-native FlexWindow cover screen', 'Galaxy AI across the range']}
        image="galaxy-z-fold8-ultra"
        alt="Galaxy Z Fold8 Ultra"
        scene="scene-ai"
        cta={{ label: 'View foldables on samsung.com/in', href: OFFICIAL.smartphones }}
      />
      <FeatureGrid
        eyebrow="Connected by design"
        title={['A phone that', 'reaches further.']}
        titleId="phone-connects-title"
        items={[
          { title: 'Watch and Buds', text: 'Pair a Galaxy Watch and Galaxy Buds for wellness insights and audio that follows you.' },
          { title: 'Tablet and laptop', text: 'Galaxy Tab and Galaxy Book share your account and connected experiences on supported devices.' },
          { title: 'Home', text: 'The SmartThings app puts your TV and Bespoke AI appliances a tap away.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
