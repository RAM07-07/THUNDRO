import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="Page Not Found | Thundro"
        description="The page you are looking for does not exist on Thundro. Return to our homepage or explore our web design services."
        canonicalPath="/404"
      />

      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24 sm:py-32 relative">
        <div className="text-brand-accent font-mono text-sm tracking-widest uppercase mb-4">
          ERROR 404
        </div>
        <h1 className="text-4xl sm:text-6xl font-display font-bold uppercase tracking-tight mb-4">
          Page Not Found
        </h1>
        <p className="text-brand-text-sec text-sm sm:text-base max-w-md mb-8 leading-relaxed">
          The requested page could not be located. It may have moved or been updated.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-accent text-[#050706] font-bold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(183,255,69,0.3)]"
          >
            <Home size={14} /> Return to Homepage
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white text-white font-bold text-xs tracking-widest uppercase transition-all"
          >
            <ArrowLeft size={14} /> View Portfolio
          </Link>
        </div>
      </div>
    </>
  );
}
