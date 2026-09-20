import PageHeader from '../components/layout/PageHeader';
import AIHomeSection from '../components/sections/AIHomeSection';
import SplitBlock from '../components/sections/SplitBlock';
import ContinueBand from '../components/sections/ContinueBand';
import { OFFICIAL } from '../data/navigation';

const links = [
  { title: 'Home appliances', text: 'The Bespoke AI range', to: '/home-appliances' },
  { title: 'SmartThings', text: 'Connect it all', to: '/smartthings' },
  { title: 'Galaxy AI', text: 'AI in your hand', to: '/galaxy-ai' },
];

export default function AIHome() {
  return (
    <>
      <PageHeader
        eyebrow="AI Home"
        title={['Future living,', 'now.']}
        lead="A connected living ecosystem that brings Galaxy AI, Vision AI and Bespoke AI together through SmartThings."
        scene="scene-home"
        device="family-hub-ai-vision"
        deviceAlt="Family Hub refrigerator with AI Vision"
      />
      <AIHomeSection showCta={false} />
      <SplitBlock
        theme="dark"
        eyebrow="Care"
        title="A refrigerator that pays attention."
        text="The Family Hub refrigerator with AI Vision can recognise food items, suggest recipes and support Family Care and Pet Care services."
        points={['AI Vision food recognition', 'Recipe suggestions', 'Family Care and Pet Care services']}
        image="family-hub-ai-vision"
        alt="Family Hub refrigerator with AI Vision"
        scene="scene-care"
        cta={{ label: 'See appliances on samsung.com/in', href: OFFICIAL.appliances }}
      />
      <SplitBlock
        theme="light"
        flip
        eyebrow="Save"
        title="Cooling that manages itself."
        text="WindFree air conditioners connect to SmartThings, and supported models include an AI Energy Mode to help manage energy use."
        points={['WindFree comfort', 'AI Energy Mode on supported models', 'Wearable Good Sleep with Galaxy wearables']}
        image="bespoke-ai-windfree-pro-ac"
        alt="Bespoke AI WindFree Pro AC"
        scene="scene-save"
        cta={{ label: 'Explore appliances', to: '/home-appliances?f=ac' }}
      />
      <ContinueBand links={links} />
    </>
  );
}
