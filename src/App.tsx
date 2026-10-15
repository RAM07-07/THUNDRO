import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BusinessWebsites from './pages/BusinessWebsites';
import GymFitnessWebsites from './pages/GymFitnessWebsites';
import SmallBusinessWebsites from './pages/SmallBusinessWebsites';
import PortfolioPage from './pages/PortfolioPage';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollSequenceBackground from './components/ScrollSequenceBackground';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-brand-text flex flex-col font-sans relative bg-white">
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-white">
          <div className="w-full h-full opacity-15">
            <ScrollSequenceBackground />
          </div>
          {/* White gradient overlays for bright theme readability */}
          <div className="absolute inset-0 bg-white/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#FFFFFF_90%)] pointer-events-none opacity-90" />
        </div>
        <div className="relative z-0 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/business-websites" element={<BusinessWebsites />} />
              <Route path="/services/gym-fitness-websites" element={<GymFitnessWebsites />} />
              <Route path="/services/small-business-websites" element={<SmallBusinessWebsites />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
