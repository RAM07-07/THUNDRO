import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Dumbbell, Calendar, Users, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../config';

const gymFeatures = [
  {
    icon: Dumbbell,
    title: 'Membership Tier Breakdowns',
    description: 'Clean, transparent comparison tables highlighting monthly, quarterly, and annual gym packages with clear call-to-action buttons.'
  },
  {
    icon: Calendar,
    title: 'Class Schedules & Timetables',
    description: 'Intuitive daily and weekly schedule layouts for CrossFit, yoga, Zumba, strength conditioning, and personal training sessions.'
  },
  {
    icon: Users,
    title: 'Trainer & Coach Profiles',
    description: 'Professional profiles introducing your certified trainers, their specialties, client achievements, and personal training options.'
  },
  {
    icon: PhoneCall,
    title: 'Instant WhatsApp Free Pass Capture',
    description: 'Direct 1-click WhatsApp buttons for booking free trial passes, gym tours, or membership consultations on mobile.'
  },
  {
    icon: ShieldCheck,
    title: 'Facility & Equipment Showcases',
    description: 'Modern, high-resolution galleries and virtual walk-through sections displaying your workout floor, locker rooms, and equipment.'
  }
];

export default function GymFitnessWebsites() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://thundro.vercel.app/services/gym-fitness-websites#service",
    "name": "Gym and Fitness Website Design",
    "serviceType": "Web Design & Development",
    "description": "Specialized website design and development for gyms, fitness studios, personal trainers, and wellness centers across India by Thundro.",
    "provider": {
      "@type": "Organization",
      "@id": "https://thundro.vercel.app/#organization",
      "name": "Thundro",
      "url": "https://thundro.vercel.app/"
    },
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ]
  };

  return (
    <>
      <SEOHead
        title="Gym & Fitness Website Design | Thundro Web Studio"
        description="High-energy, modern website design for gyms, fitness studios, and wellness centers by Thundro. Mobile-optimized with membership tiers and instant WhatsApp inquiry."
        canonicalPath="/services/gym-fitness-websites"
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-text-sec hover:text-brand-accent transition-colors font-semibold"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          <header className="mb-14 sm:mb-20">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-accent uppercase mb-4 font-mono">
              SPECIALIZED VERTICAL / FITNESS &amp; WELLNESS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.1] mb-6 text-brand-text">
              Gym &amp; Fitness <span className="text-brand-accent">Website Design</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-sec leading-relaxed max-w-3xl font-normal">
              High-impact, mobile-optimized website design crafted specifically for gyms, fitness clubs, CrossFit boxes, and wellness centers in Coimbatore, Tamil Nadu, and across India.
            </p>
          </header>

          <section className="mb-16 sm:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-brand-text-sec leading-relaxed font-normal">
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-brand-text tracking-tight">
                Turn Local Fitness Seekers Into Active Members
              </h2>
              <p>
                Fitness consumers research on smartphones. When people look for a gym near them, they want immediate answers: What do membership plans cost? What equipment do you have? Who are the coaches? When are peak hours?
              </p>
              <p>
                At Thundro, we build fitness websites that capture the raw energy of your gym while giving prospective members a seamless user experience. We eliminate friction with prominent WhatsApp consultation triggers, direct trial-pass booking forms, and clear directions to your facility.
              </p>
              <p>
                Our designs are engineered with mobile-first speed, ensuring your workout schedules, photos, and membership rates load in fractions of a second on any 4G/5G mobile connection.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-brand-text mb-4">
                Key Fitness Features Included
              </h3>
              <ul className="space-y-3">
                {[
                  'Mobile-first responsive layout tailored for smartphone browsing',
                  'Interactive membership tier pricing tables',
                  'Trainer certification & coaching showcase cards',
                  'Group class schedule & timing displays',
                  'One-click WhatsApp trial session booking button',
                  'Embedded Google Maps location and operating hours'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-text-sec">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Fitness Specific Features */}
          <section className="mb-16 sm:mb-24">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-text-sec uppercase mb-4 font-mono">
              FITNESS HIGHLIGHTS
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-8 sm:mb-12 text-brand-text">
              Designed for High Engagement &amp; Retention
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gymFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-black/10 hover:border-brand-accent/40 shadow-sm hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-bg-sec border border-black/10 flex items-center justify-center text-brand-accent mb-4 group-hover:scale-105 transition-transform shadow-sm">
                    <feat.icon size={22} />
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-tight text-brand-text mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-sec leading-relaxed font-normal">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* FitZone Prototype Reference */}
          <section className="mb-16 sm:mb-24 p-8 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 inline-block mb-3 font-bold">
                  Featured Concept Demo
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-brand-text mb-2">
                  FitZone — Fitness Studio Interactive Concept
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-sec max-w-xl font-normal">
                  FitZone is an interactive website prototype crafted by Thundro to showcase high-energy visual layouts, membership cards, and trainer profiles designed for modern fitness brands.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-black/15 bg-white hover:bg-brand-text text-brand-text hover:text-white text-xs font-bold tracking-widest uppercase transition-all shrink-0 shadow-sm hover:shadow-md"
              >
                Inspect FitZone Demo <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* CTA Box */}
          <section className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-brand-bg-sec border border-black/10 text-center flex flex-col items-center shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-brand-text">
              Launch a Modern Website for Your Gym
            </h2>
            <p className="text-sm sm:text-base text-brand-text-sec max-w-xl mb-8 leading-relaxed font-normal">
              Let's build a website that puts your gym on the local map and brings new members through your doors every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20THUNDRO,%20I'd%20like%20to%20discuss%20a%20website%20for%20my%20gym/fitness%20studio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-brand-accent text-white font-bold text-xs tracking-widest uppercase hover:bg-brand-text transition-all shadow-md hover:shadow-xl"
              >
                Chat on WhatsApp
              </a>
              <Link
                to="/services/business-websites"
                className="px-8 py-3.5 rounded-full border border-black/15 bg-white hover:border-black text-brand-text font-bold text-xs tracking-widest uppercase transition-all shadow-sm"
              >
                Explore Business Websites
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
