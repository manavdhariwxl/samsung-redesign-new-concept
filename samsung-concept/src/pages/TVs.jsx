import PageHeader from '../components/layout/PageHeader';
import TVSection from '../components/sections/TVSection';
import ProductShowcase from '../components/sections/ProductShowcase';
import ModelGrid from '../components/sections/ModelGrid';
import FeatureGrid from '../components/sections/FeatureGrid';
import ContinueBand from '../components/sections/ContinueBand';
import useQueryFilter from '../hooks/useQueryFilter';
import { byGroup } from '../data/products';
import { tvCategories } from '../data/tv';
import { models } from '../data/models';
import { OFFICIAL } from '../data/navigation';

const ids = tvCategories.map((t) => t.id);
const links = [
  { title: 'SmartThings', text: 'Your TV, in a connected home', to: '/smartthings' },
  { title: 'Home appliances', text: 'Bespoke AI range', to: '/home-appliances' },
  { title: 'Galaxy ecosystem', text: 'Phone to screen', to: '/galaxy' },
];

export default function TVs() {
  const [active, setActive] = useQueryFilter(ids, { fallback: ids[0] });
  return (
    <>
      <PageHeader
        eyebrow="TV & AV"
        title={['Television,', 'reimagined.']}
        lead="Samsung’s 2026 Vision AI lineup in India spans Micro RGB, OLED, Neo QLED, The Frame, Mini LED and UHD TVs."
        scene="scene-tv"
        device="tv-oled-s95h"
        deviceAlt="Samsung OLED S95H"
        actions={[{ label: 'Browse on samsung.com/in', href: OFFICIAL.tvs, variant: 'ghost' }]}
      />
      <TVSection showHeading={false} value={active} onChange={setActive} />
      <ProductShowcase
        theme="gray"
        eyebrow="Families"
        title={['Six families,', 'one idea.']}
        titleId="tv-families-title"
        lead="Every family in the 2026 lineup shares Samsung Vision AI. Match the display to the room."
        items={byGroup('tv')}
        external
      />
      <ModelGrid
        items={models.filter((m) => m.group === 'tv')}
        official={OFFICIAL.tvs}
        titleId="tv-models-title"
        title={['Named models,', 'premium end.']}
        lead="Headline models from the 2026 Vision AI TV lineup. The full range spans 72 models across six families — see the official site for every size and model."
      />
      <FeatureGrid
        theme="dark"
        eyebrow="Vision AI"
        title={['A smarter', 'screen.']}
        titleId="tv-vision-title"
        items={[
          { title: 'Vision AI Companion', text: 'AI-powered features expanded across Samsung’s 4K-and-above TVs, helping you find and enjoy content more easily.' },
          { title: 'Art Mode', text: 'On The Frame, Art Mode turns the screen into artwork when you are not watching.' },
          { title: 'Connected home', text: 'Samsung TVs join the same SmartThings home as your phone and appliances.' },
        ]}
      />
      <ContinueBand links={links} />
    </>
  );
}
