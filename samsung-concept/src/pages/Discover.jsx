import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeader from '../components/layout/PageHeader';
import FilterChips from '../components/ui/FilterChips';
import StoryCard from '../components/cards/StoryCard';
import StoryReader from '../components/sections/StoryReader';
import ContinueBand from '../components/sections/ContinueBand';
import Reveal from '../components/ui/Reveal';
import useQueryFilter from '../hooks/useQueryFilter';
import { getStory, stories, storyCategories } from '../data/stories';

const links = [
  { title: 'Galaxy AI', text: 'See it in action', to: '/galaxy-ai' },
  { title: 'The ecosystem', text: 'Phone to home', to: '/galaxy' },
  { title: 'SmartThings', text: 'A connected home', to: '/smartthings' },
];

export default function Discover() {
  const [params, setParams] = useSearchParams();
  const [category, setCategory] = useQueryFilter(storyCategories.map((c) => c.id), { key: 'c' });
  const story = getStory(params.get('story'));
  const visible = category === 'all' ? stories : stories.filter((s) => s.category === category);

  useEffect(() => {
    if (!story) return undefined;
    const t = setTimeout(() => document.getElementById('story-reader')?.scrollIntoView(), 60);
    return () => clearTimeout(t);
  }, [story]);

  const closeStory = () =>
    setParams(
      (prev) => {
        const out = new URLSearchParams(prev);
        out.delete('story');
        return out;
      },
      { replace: true }
    );

  return (
    <>
      <PageHeader
        eyebrow="Discover"
        title={['Stories and', 'ideas.']}
        lead="Innovation, Galaxy, AI, smart home, entertainment and technology — short reads on how the pieces fit together."
        scene="scene-discover"
      />
      {story && <StoryReader story={story} onClose={closeStory} />}
      <section className="section theme-gray disc-page" aria-labelledby="stories-title">
        <div className="wrap">
          <h2 id="stories-title" className="h2 disc-page__title">
            All stories
          </h2>
          <FilterChips items={storyCategories} value={category} onChange={setCategory} label="Filter stories by category" />
          <p className="sr-only" aria-live="polite">
            {visible.length} {visible.length === 1 ? 'story' : 'stories'} shown
          </p>
          <ul className="row g-4 g-lg-5 disc-page__grid">
            {visible.map((s, i) => (
              <Reveal as="li" key={s.id} variant="up" delay={(i % 3) * 80} className="col-12 col-md-6 col-lg-4">
                <StoryCard story={s} variant="standard" index={stories.indexOf(s)} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
      <ContinueBand links={links} />
    </>
  );
}
