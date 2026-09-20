import { lazy, Suspense, useCallback, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SearchOverlay from './components/layout/SearchOverlay';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';

const Galaxy = lazy(() => import('./pages/Galaxy'));
const GalaxyAI = lazy(() => import('./pages/GalaxyAI'));
const Smartphones = lazy(() => import('./pages/Smartphones'));
const Tablets = lazy(() => import('./pages/Tablets'));
const GalaxyBook = lazy(() => import('./pages/GalaxyBook'));
const Wearables = lazy(() => import('./pages/Wearables'));
const TVs = lazy(() => import('./pages/TVs'));
const HomeAppliances = lazy(() => import('./pages/HomeAppliances'));
const SmartThings = lazy(() => import('./pages/SmartThings'));
const AIHome = lazy(() => import('./pages/AIHome'));
const Discover = lazy(() => import('./pages/Discover'));
const Support = lazy(() => import('./pages/Support'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return <div className="page-fallback" role="status" aria-label="Loading page" />;
}

export default function App() {
  const [searchOpen, setSearchOpen] = useState(false);
  const openSearch = useCallback(() => setSearchOpen(true), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar onSearch={openSearch} />
      <main id="main" tabIndex={-1}>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galaxy" element={<Galaxy />} />
            <Route path="/galaxy-ai" element={<GalaxyAI />} />
            <Route path="/smartphones" element={<Smartphones />} />
            <Route path="/tablets" element={<Tablets />} />
            <Route path="/galaxy-book" element={<GalaxyBook />} />
            <Route path="/wearables" element={<Wearables />} />
            <Route path="/tvs" element={<TVs />} />
            <Route path="/home-appliances" element={<HomeAppliances />} />
            <Route path="/smartthings" element={<SmartThings />} />
            <Route path="/ai-home" element={<AIHome />} />
            <Route path="/discover" element={<Discover />} />
            <Route path="/support" element={<Support />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <SearchOverlay open={searchOpen} onClose={closeSearch} />
    </BrowserRouter>
  );
}
