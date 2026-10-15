import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, Info } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../config';

const categories = ['All', 'Business', 'Fitness', 'Travel', 'Restaurant', 'E-commerce'];

const demoProjects = [
  {
    id: 1,
    title: 'FitZone',
    category: 'Fitness',
    badge: 'Concept Prototype',
    headline: 'Gym & Fitness Studio Digital Platform',
    description: 'A high-energy website concept featuring responsive class timetable layouts, interactive membership tier comparison tables, certified trainer showcases, and a one-click WhatsApp free trial pass booking flow.',
    tech: ['React', 'Mobile-First CSS', 'Responsive Grid'],
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=900&auto=format&fit=crop',
    type: 'desktop'
  },
  {
    id: 2,
    title: 'WanderWay',
    category: 'Travel',
    badge: 'Concept Prototype',
    headline: 'Boutique Tour & Travel Experience Portal',
    description: 'Designed for independent travel agencies and tour operators. Features rich visual destination highlights, curated itinerary breakdowns, seasonal tour packages, and direct travel enquiry forms.',
    tech: ['React', 'Interactive Gallery', 'Enquiry API'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=900&auto=format&fit=crop',
    type: 'mobile'
  },
  {
    id: 3,
    title: 'UrbanBites',
    category: 'Restaurant',
    badge: 'Concept Prototype',
    headline: 'Modern Restaurant & Culinary Showcase',
    description: 'A culinary web experience highlighting chef specials, structured categorised food menus, high-resolution food photography, table reservation enquiry workflows, and embedded location map details.',
    tech: ['React', 'Menu UI', 'Reservation Flow'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop',
    type: 'desktop'
  },
  {
    id: 4,
    title: 'GlowStudio',
    category: 'Business',
    badge: 'Concept Prototype',
    headline: 'Aesthetic Beauty & Salon Experience',
    description: 'Engineered for luxury salons, spas, and wellness clinics. Features an elegant treatment service menu, price indicators, customer consultation requests, and mobile-first WhatsApp booking triggers.',
    tech: ['React', 'Service Catalogue', 'Appointment CTA'],
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=900&auto=format&fit=crop',
    type: 'mobile'
  },
  {
    id: 5,
    title: 'NovaStore',
    category: 'E-commerce',
    badge: 'Concept Prototype',
    headline: 'Minimalist Online Storefront & Cart UI',
    description: 'A modern e-commerce concept focusing on fast product discovery, multi-angle product galleries, responsive shopping cart drawer, and frictionless checkout interface styling.',
    tech: ['React', 'Shopping Cart State', 'Filter Engine'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=900&auto=format&fit=crop',
    type: 'desktop'
  },
  {
    id: 6,
    title: 'EstatePro',
    category: 'Business',
    badge: 'Concept Prototype',
    headline: 'Real Estate & Property Showcase Platform',
    description: 'Created for real estate agencies and independent developers. Features clean architectural property cards, amenity specification tables, and schedule-a-viewing lead capture forms.',
    tech: ['React', 'Property Filter', 'Lead Capture'],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=900&auto=format&fit=crop',
    type: 'desktop'
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = demoProjects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://thundro.vercel.app/portfolio#webpage",
    "url": "https://thundro.vercel.app/portfolio",
    "name": "Web Design Portfolio & Concepts | Thundro",
    "description": "Representative website concept demonstrations and interactive prototypes crafted by Thundro across fitness, travel, e-commerce, and business verticals.",
    "publisher": {
      "@type": "Organization",
      "@id": "https://thundro.vercel.app/#organization",
      "name": "Thundro"
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": demoProjects.map((project, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "CreativeWork",
          "name": `${project.title} (Concept Demo)`,
          "description": project.description,
          "genre": project.category,
          "creator": {
            "@id": "https://thundro.vercel.app/#organization"
          }
        }
      }))
    }
  };

  return (
    <>
      <SEOHead
        title="Web Design Portfolio & Concepts | Thundro"
        description="Explore website design concepts, interactive demos, and prototypes created by Thundro across business, gym, salon, travel, and e-commerce verticals."
        canonicalPath="/portfolio"
        schema={schema}
      />

      <div className="py-24 sm:py-32 relative bg-transparent overflow-hidden">
        {/* Background Architectural Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-5">
          <div className="w-[1px] h-full bg-black" />
          <div className="w-[1px] h-full bg-black" />
          <div className="w-[1px] h-full bg-black hidden md:block" />
          <div className="w-[1px] h-full bg-black" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1400px] relative z-10">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-text-sec hover:text-brand-accent transition-colors font-semibold"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          <header className="mb-12 sm:mb-16">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 font-mono">
              DEMONSTRATIONS &amp; WORK SAMPLES
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.1] mb-6 text-brand-text">
              Web Design Portfolio &amp; <span className="text-brand-accent">Concept Demos</span>
            </h1>
            <p className="text-base sm:text-lg text-brand-text-sec leading-relaxed max-w-3xl font-normal mb-6">
              Explore interactive website concept prototypes engineered by Thundro. These projects illustrate our design philosophy, responsive engineering standards, and sector-specific user flows.
            </p>

            {/* Honest Demo Notice Alert Box */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-bg-sec border border-black/10 text-xs text-brand-text-sec max-w-3xl shadow-sm">
              <Info size={16} className="text-brand-accent shrink-0 mt-0.5" />
              <p>
                <strong className="text-brand-text font-semibold">Note on Transparency:</strong> The projects displayed below are concept demonstrations and interactive prototypes designed and built by Thundro to showcase our design capabilities across specific industries. They are clearly labeled as concept demos rather than commercial client commissions.
              </p>
            </div>
          </header>

          {/* Filter Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 sm:mb-16 no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`px-4 py-2 sm:px-5 sm:py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap shrink-0 ${
                  activeCategory === category
                    ? 'bg-brand-text text-white shadow-sm'
                    : 'bg-white text-brand-text-sec hover:text-brand-text border border-black/10 hover:border-black/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 sm:mb-28">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col rounded-2xl bg-white border border-black/10 overflow-hidden hover:border-brand-accent/40 shadow-sm hover:shadow-xl transition-all duration-300 group"
              >
                {/* Media Preview Box */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} Website Design Concept Demo by Thundro`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="text-[9px] font-mono font-bold tracking-wider text-brand-accent uppercase px-2.5 py-1 rounded-full border border-brand-accent/30 bg-white/95 backdrop-blur-sm shadow-sm">
                      {project.badge}
                    </span>
                    <span className="text-[9px] font-mono font-semibold tracking-wider text-brand-text uppercase px-2.5 py-1 rounded-full border border-black/10 bg-white/95 backdrop-blur-sm shadow-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-brand-text mb-2">
                    {project.title}
                  </h2>
                  <h3 className="text-xs font-mono text-brand-accent uppercase tracking-wider mb-3 font-bold">
                    {project.headline}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-sec leading-relaxed mb-6 flex-grow font-normal">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono text-brand-text-sec px-2 py-0.5 rounded bg-black/5 border border-black/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Order / Inquiry Trigger */}
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20THUNDRO,%20I'm%20interested%20in%20a%20website%20similar%20to%20the%20${project.title}%20(${project.category})%20concept.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border border-black/15 bg-white hover:bg-brand-text hover:border-brand-text text-brand-text hover:text-white text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <span>Request Similar Build</span>
                    <ShoppingCart size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Links to Services */}
          <section className="mb-16 p-8 sm:p-12 rounded-2xl bg-brand-bg-sec border border-black/10 shadow-sm">
            <h2 className="text-xl sm:text-3xl font-display font-bold uppercase text-brand-text mb-4">
              Explore Our Specific Service Solutions
            </h2>
            <p className="text-sm text-brand-text-sec mb-8 max-w-2xl font-normal">
              We provide end-to-end design and front-end development tailored to your sector's exact conversion goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                to="/services/business-websites"
                className="p-5 rounded-xl bg-white border border-black/10 hover:border-brand-accent/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <span className="text-sm font-bold text-brand-text uppercase mb-1">Business Websites</span>
                <span className="text-xs text-brand-text-sec">Custom multi-page sites →</span>
              </Link>
              <Link
                to="/services/gym-fitness-websites"
                className="p-5 rounded-xl bg-white border border-black/10 hover:border-brand-accent/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <span className="text-sm font-bold text-brand-text uppercase mb-1">Gym &amp; Fitness Design</span>
                <span className="text-xs text-brand-text-sec">Membership &amp; schedule layouts →</span>
              </Link>
              <Link
                to="/services/small-business-websites"
                className="p-5 rounded-xl bg-white border border-black/10 hover:border-brand-accent/50 transition-all flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <span className="text-sm font-bold text-brand-text uppercase mb-1">Small Business Sites</span>
                <span className="text-xs text-brand-text-sec">Fast, affordable local web solutions →</span>
              </Link>
            </div>
          </section>

          {/* CTA Box */}
          <section className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-brand-bg-sec border border-black/10 text-center flex flex-col items-center shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-brand-text">
              Have an Idea for Your Website?
            </h2>
            <p className="text-sm sm:text-base text-brand-text-sec max-w-xl mb-8 leading-relaxed font-normal">
              Whether you need inspiration from our prototypes or have an existing design ready to build, we can bring your website to life with speed and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20THUNDRO,%20I'd%20like%20to%20discuss%20a%20new%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-brand-accent text-white font-bold text-xs tracking-widest uppercase hover:bg-brand-text transition-all shadow-md hover:shadow-xl"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Project%20Enquiry`}
                className="px-8 py-3.5 rounded-full border border-black/15 bg-white hover:border-black text-brand-text font-bold text-xs tracking-widest uppercase transition-all shadow-sm"
              >
                Email Enquiry
              </a>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
