import PageHeader from '../components/layout/PageHeader';
import ProductShowcase from '../components/sections/ProductShowcase';
import ModelGrid from '../components/sections/ModelGrid';
import SplitBlock from '../components/sections/SplitBlock';
import ContinueBand from '../components/sections/ContinueBand';
import useQueryFilter from '../hooks/useQueryFilter';
import { byGroup } from '../data/products';
import { applianceFilters, applianceHighlights } from '../data/appliances';
import { modelsForFilter } from '../data/models';
import { OFFICIAL } from '../data/navigation';

const links = [
  { title: 'AI Home', text: 'Ease, Care, Save, Secure', to: '/ai-home' },
  { title: 'SmartThings', text: 'One place for the whole home', to: '/smartthings' },
  { title: 'TVs', text: 'The screen at the centre of the room', to: '/tvs' },
];

export default function HomeAppliances() {
  const [filter, setFilter] = useQueryFilter(applianceFilters.map((f) => f.id));
  return (
    <>
      <PageHeader
        eyebrow="Home Appliances"
        title={['Appliances that', 'think ahead.']}
        lead="The Bespoke AI range brings refrigerators, air conditioners and laundry into a connected home — designed with Indian households in mind."
        scene="scene-home"
        device="family-hub-ai-vision"
        deviceAlt="Family Hub refrigerator with AI Vision"
        actions={[{ label: 'Browse on samsung.com/in', href: OFFICIAL.appliances, variant: 'ghost' }]}
      />
      <ProductShowcase
        theme="gray"
        eyebrow="Range"
        title={['Three ways to', 'run a home.']}
        titleId="app-range-title"
        items={byGroup('home')}
        filters={applianceFilters}
        filter={filter}
        onFilterChange={setFilter}
        external
      />
      <ModelGrid
        items={modelsForFilter('home', filter)}
        official={OFFICIAL.appliances}
        titleId="app-models-title"
        title={['Named', 'appliances.']}
        lead="Headline appliances from Samsung India’s 2026 Bespoke AI announcements. Washing machines, dryers and other lines are on the official site."
      />
      {applianceHighlights.map((h, i) => (
        <SplitBlock
          key={h.title}
          theme={i % 2 ? 'gray' : 'light'}
          flip={i % 2 === 1}
          eyebrow="Spotlight"
          title={h.title}
          text={h.text}
          image={h.image}
          alt={h.imageAlt}
          scene="scene-home"
          cta={{ label: 'Explore on samsung.com/in', href: OFFICIAL.appliances }}
        />
      ))}
      <ContinueBand links={links} />
    </>
  );
}
