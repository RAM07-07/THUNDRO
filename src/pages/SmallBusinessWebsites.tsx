import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Store, Clock, Award, Phone, DollarSign } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../config';

const smallBizBenefits = [
  {
    icon: DollarSign,
    title: 'Upfront, Transparent Quotes',
    description: 'Clear pricing with zero surprise charges. We establish fixed scopes so you know exactly what your website will cost before we write a single line of code.'
  },
  {
    icon: Clock,
    title: 'Rapid 2–4 Week Delivery',
    description: 'We respect your time. From initial layout approval to final domain connection and testing, most small business sites are launched within 2 to 4 weeks.'
  },
  {
    icon: Store,
    title: 'Tailored for Local Visibility',
    description: 'We structure your site with clean local business markup, location information, operating hours, and Google Maps integration so nearby customers can find you easily.'
  },
  {
    icon: Phone,
    title: 'Direct WhatsApp Contact Integration',
    description: 'Make it as effortless as possible for your customers to get in touch. Every site includes a functional WhatsApp button to answer questions immediately.'
  },
  {
    icon: Award,
    title: 'Ownership & Full Control',
    description: 'You own your domain, website assets, and code. No recurring proprietary software lock-in or hostage monthly hosting fees.'
  }
];

export default function SmallBusinessWebsites() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://thundro.vercel.app/services/small-business-websites#service",
    "name": "Website Design for Small Businesses",
    "serviceType": "Web Design & Development",
    "description": "Professional, affordable, and mobile-friendly website design for small businesses, salons, travel consultancies, and clinics across India by Thundro.",
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
        title="Website Design for Small Businesses | Thundro Web Studio"
        description="Affordable, professional website design for small businesses by Thundro. Fast-loading, mobile-friendly websites with transparent pricing and direct WhatsApp customer contact."
        canonicalPath="/services/small-business-websites"
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
              SERVICES / LOCAL &amp; SMALL BUSINESS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.1] mb-6 text-brand-text">
              Website Design for <span className="text-brand-accent">Small Businesses</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-sec leading-relaxed max-w-3xl font-normal">
              High-performance, straightforward web design for small businesses in Coimbatore, Tamil Nadu, and across India looking to establish a credible online presence without unnecessary agency overhead.
            </p>
          </header>

          <section className="mb-16 sm:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-brand-text-sec leading-relaxed font-normal">
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-brand-text tracking-tight">
                Stop Losing Customers to Outdated Online Presence
              </h2>
              <p>
                As a small business owner, your website is often the first interaction someone has with your company. If your site is slow, looks broken on smartphones, or doesn't have clear contact options, potential customers will quickly bounce to a competitor.
              </p>
              <p>
                Many small business owners try DIY website builders only to find them frustratingly slow, difficult to customize, and bloated with recurring monthly subscriptions. On the other hand, large creative agencies quote prohibitively high retainers.
              </p>
              <p>
                Thundro bridges that gap. We build custom, lightweight, beautifully responsive websites at straightforward prices. We handle everything from visual styling and content structure to mobile testing and domain setup, giving you a professional digital storefront that works 24/7.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white border border-black/10 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-brand-text mb-4">
                Ideal For Local Businesses Like:
              </h3>
              <ul className="space-y-3">
                {[
                  'Medical clinics, dental practices & physiotherapy centres',
                  'Beauty salons, spas & grooming studios',
                  'Independent travel agencies & tour planners',
                  'Cafes, restaurants & catering businesses',
                  'Accounting, tax & financial consulting firms',
                  'Contractors, builders & interior design studios'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-text-sec">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Value Highlights */}
          <section className="mb-16 sm:mb-24">
            <div className="text-[10px] sm:text-xs font-bold tracking-[0.25em] text-brand-text-sec uppercase mb-4 font-mono">
              THE THUNDRO ADVANTAGE
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-8 sm:mb-12 text-brand-text">
              Why Small Business Owners Trust Thundro
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {smallBizBenefits.map((feat, idx) => (
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

          {/* Simple Process Overview */}
          <section className="mb-16 sm:mb-24 p-8 sm:p-10 rounded-2xl bg-white border border-black/10 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-brand-text mb-4">
              Our Simple 4-Step Process for Small Businesses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs sm:text-sm text-brand-text-sec font-normal">
              <div className="border-l-2 border-brand-accent pl-4">
                <span className="font-mono text-brand-accent text-xs block mb-1 font-bold">STEP 01</span>
                <strong className="text-brand-text block mb-1">Quick Discovery</strong>
                We review your goals, brand assets, and target audience over WhatsApp or email.
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <span className="font-mono text-brand-accent text-xs block mb-1 font-bold">STEP 02</span>
                <strong className="text-brand-text block mb-1">Layout &amp; Design</strong>
                We craft a clean, mobile-first design prototype for your review and approval.
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <span className="font-mono text-brand-accent text-xs block mb-1 font-bold">STEP 03</span>
                <strong className="text-brand-text block mb-1">Rapid Development</strong>
                We write clean, lightweight code and integrate your contact and booking forms.
              </div>
              <div className="border-l-2 border-brand-accent pl-4">
                <span className="font-mono text-brand-accent text-xs block mb-1 font-bold">STEP 04</span>
                <strong className="text-brand-text block mb-1">Launch &amp; Verify</strong>
                We connect your domain, run mobile speed checks, and submit your site to search engines.
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-brand-bg-sec border border-black/10 text-center flex flex-col items-center shadow-lg">
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-4 text-brand-text">
              Get an Honest Quote for Your Business
            </h2>
            <p className="text-sm sm:text-base text-brand-text-sec max-w-xl mb-8 leading-relaxed font-normal">
              No complicated sales pitches. Tell us what your business does and we'll tell you how much it costs and how quickly we can build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20THUNDRO,%20I'm%20a%20small%20business%20owner%20interested%20in%20a%20new%20website.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-brand-accent text-white font-bold text-xs tracking-widest uppercase hover:bg-brand-text transition-all shadow-md hover:shadow-xl"
              >
                Chat on WhatsApp
              </a>
              <Link
                to="/portfolio"
                className="px-8 py-3.5 rounded-full border border-black/15 bg-white hover:border-black text-brand-text font-bold text-xs tracking-widest uppercase transition-all shadow-sm"
              >
                Explore Demo Work
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
