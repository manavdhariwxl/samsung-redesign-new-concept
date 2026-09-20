import PageHeader from '../components/layout/PageHeader';
import ContinueBand from '../components/sections/ContinueBand';

const links = [
  { title: 'Home', text: 'Start from the beginning', to: '/' },
  { title: 'The Galaxy ecosystem', text: 'See how everything connects', to: '/galaxy' },
  { title: 'Support', text: 'Find help', to: '/support' },
];

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title={['This page', 'isn’t connected.']}
        lead="The page you’re looking for doesn’t exist in this concept. Try one of these instead."
        scene="scene-galaxy"
      />
      <ContinueBand links={links} title="Try these." />
    </>
  );
}
