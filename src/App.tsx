import { BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollSequenceBackground from './components/ScrollSequenceBackground';
import ScrollStars from './components/3d/ScrollStars';

function App() {
  return (
    <Router>
      <div className="min-h-screen text-brand-text flex flex-col font-sans relative">
        <div className="fixed inset-0 z-[-1] pointer-events-none bg-[#050706]">
          <ScrollSequenceBackground />
          <ScrollStars />
          {/* Black fade screen in front of the stars across all pages */}
          <div className="absolute inset-0 z-[2] bg-[#050706]/60 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 z-[3] bg-gradient-to-b from-[#050706]/90 via-[#050706]/40 to-[#050706]/90 pointer-events-none" />
          <div className="absolute inset-0 z-[4] bg-[radial-gradient(ellipse_at_center,transparent_20%,#050706_90%)] pointer-events-none opacity-80" />
        </div>
        <div className="relative z-0">
          <Navbar />
          <main className="flex-grow">
            <Home />
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
