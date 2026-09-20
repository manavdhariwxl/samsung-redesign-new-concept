import usePageTitle from '../hooks/usePageTitle';
import Hero from '../components/sections/Hero';
import GalaxyAISection from '../components/sections/GalaxyAISection';
import EcosystemSection from '../components/sections/EcosystemSection';
import ProductShowcase from '../components/sections/ProductShowcase';
import SmartThingsSection from '../components/sections/SmartThingsSection';
import AIHomeSection from '../components/sections/AIHomeSection';
import TVSection from '../components/sections/TVSection';
import ComputingSection from '../components/sections/ComputingSection';
import DiscoverySection from '../components/sections/DiscoverySection';
import FindYourGalaxy from '../components/sections/FindYourGalaxy';
import Newsletter from '../components/ui/Newsletter';
import { featuredProducts, productGroups } from '../data/products';

const filters = [{ id: 'all', label: 'All' }, ...productGroups];

export default function Home() {
  usePageTitle();
  return (
    <>
      <Hero />
      <GalaxyAISection />
      <EcosystemSection />
      <ProductShowcase
        id="featured"
        eyebrow="Featured Galaxy"
        title={['Explore the', 'Galaxy families.']}
        titleId="featured-title"
        lead="A first look at the product families across the ecosystem. Current models and offers live on samsung.com/in."
        items={featuredProducts}
        filters={filters}
        layout="rail"
      />
      <SmartThingsSection />
      <AIHomeSection />
      <TVSection />
      <ComputingSection />
      <DiscoverySection />
      <FindYourGalaxy />
      <Newsletter />
    </>
  );
}
