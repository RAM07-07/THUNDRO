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
          {/* Black fade overlay over the background */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
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
