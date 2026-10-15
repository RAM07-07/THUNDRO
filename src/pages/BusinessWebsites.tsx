import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Laptop, Zap, ShieldCheck, Layers, MessageSquare, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { siteConfig } from '../config';

const features = [
  {
    icon: Laptop,
    title: 'Custom Brand Architecture',
    description: 'Bespoke layouts engineered around your specific business model and customer journey. We do not use cookie-cutter templates.'
  },
  {
    icon: Zap,
    title: 'Engineered for Performance',
    description: 'Optimized front-end code, fast server response times, and clean asset loading that improve conversion rates and Core Web Vitals.'
  },
  {
    icon: ShieldCheck,
    title: 'Technical SEO Foundation',
    description: 'Clean semantic HTML5 structure, schema markup, Open Graph tags, and mobile-friendly indexability configured from day one.'
  },
  {
    icon: Layers,
    title: 'Multi-Page Information Architecture',
    description: 'Structured pages for your services, team profiles, case studies, company story, and direct inquiry capture workflows.'
  },
  {
    icon: MessageSquare,
    title: 'Direct Conversion Integrations',
    description: 'Functional WhatsApp contact buttons, interactive consultation forms, and direct email triggers that convert visitors into qualified leads.'
  }
];

const deliverables = [
  'Custom UI/UX visual direction aligned with your brand identity',
  'Responsive layouts tested across modern smartphones, tablets, and desktops',
  'Semantic HTML, lightweight CSS, and modern React development',
  'Domain configuration, hosting deployment, and SSL certificate setup',
  'Google Search Console verification and sitemap submission',
  'Direct WhatsApp & enquiry form integration for immediate lead capture'
];

export default function BusinessWebsites() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://thundro.vercel.app/services/business-websites#service",
    "name": "Business Website Development",
    "serviceType": "Web Design & Development",
    "description": "Custom multi-page responsive website design and development tailored for modern businesses, professional practices, and service providers.",
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Website Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Multi-page Business Websites"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEOHead
        title="Business Website Development | Thundro Web Studio"
        description="Custom responsive business website development by Thundro. We build high-speed, modern websites for professional companies and service businesses across India."
        canonicalPath="/services/business-websites"
        schema={schema}
      />

      <div className="py-24 sm:py-32 relative bg-transparent overflow-hidden">
        {/* Background Architectural Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none flex justify-between px-4 sm:px-6 lg:px-12 max-w-[1600px] mx-auto w-full opacity-10">
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white" />
          <div className="w-[1px] h-full bg-white hidden md:block" />
          <div className="w-[1px] h-full bg-white" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-[1200px] relative z-10">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-brand-text-sec hover:text-brand-accent transition-colors"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </div>

          {/* Hero Header */}
          <header className="mb-14 sm:mb-20">
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-accent uppercase mb-4 font-mono">
              SERVICES / BUSINESS SOLUTIONS
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[1.1] mb-6">
              Business Website <span className="text-brand-accent">Development</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-text-sec leading-relaxed max-w-3xl font-normal">
              Thundro designs and develops modern, mobile-first websites tailored for established businesses, clinics, consulting firms, and growing enterprises in Coimbatore, Tamil Nadu, and across India.
            </p>
          </header>

          {/* Core Overview Section */}
          <section className="mb-16 sm:mb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-brand-text-sec leading-relaxed">
              <h2 className="text-2xl sm:text-3xl font-display font-bold uppercase text-white tracking-tight">
                Websites Built to Strengthen Credibility &amp; Win Business
              </h2>
              <p>
                A modern business website is more than an online brochure. It is the central digital hub where potential clients evaluate your expertise, assess your trustworthiness, and decide whether to contact you over competitors.
              </p>
              <p>
                Many businesses struggle with slow, template-heavy websites that load sluggishly on mobile devices or fail to communicate their unique value. At Thundro, we build custom websites with clean code architecture, intuitive navigation, and responsive layouts that perform seamlessly on any screen size.
              </p>
              <p>
                Whether you need a comprehensive 5-to-10 page company website or a streamlined platform highlighting your service offerings, we collaborate closely with you to structure content that answers your customers' questions clearly.
              </p>
            </div>

            <div className="lg:col-span-5 bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-lg font-display font-bold uppercase tracking-wider text-white mb-4">
                What's Included in Every Build
              </h3>
              <ul className="space-y-3">
                {deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-brand-text-sec">
                    <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16 sm:mb-24">
            <div className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-brand-text-sec uppercase mb-4 font-mono">
              CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-8 sm:mb-12">
              Engineered for Real-World Business Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-brand-accent/40 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-4 group-hover:scale-105 transition-transform">
                    <feat.icon size={22} />
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase tracking-tight text-white mb-2">
                    {feat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-text-sec leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Demo Concept Showcase */}
          <section className="mb-16 sm:mb-24 p-8 sm:p-10 rounded-2xl bg-[#080B09] border border-white/10">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand-accent uppercase px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/5 inline-block mb-3">
                  Concept Demonstration
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-bold uppercase text-white mb-2">
                  EstatePro &amp; GlowStudio Interactive Prototypes
                </h3>
                <p className="text-xs sm:text-sm text-brand-text-sec max-w-xl">
                  Explore how Thundro designs multi-page service directories, inquiry workflows, and modern visual hierarchy for professional firms.
                </p>
              </div>
              <Link
                to="/portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-white/20 hover:border-brand-accent text-white hover:text-brand-accent text-xs font-bold tracking-widest uppercase transition-all shrink-0"
              >
                View Portfolio Concepts <ArrowRight size={14} />
              </Link>
            </div>
          </section>

          {/* CTA Box */}
          <section className="p-8 sm:p-12 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white/[0.05] via-transparent to-brand-accent/[0.05] border border-white/10 text-center flex flex-col items-center">
            <h2 className="text-2xl sm:text-4xl font-display font-bold uppercase tracking-tight mb-4">
              Ready to Discuss Your Business Website?
            </h2>
            <p className="text-sm sm:text-base text-brand-text-sec max-w-xl mb-8 leading-relaxed">
              We provide transparent upfront project quotes based on your specific requirements with no hidden fees. Reach out directly to start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsapp}?text=Hi%20THUNDRO,%20I'd%20like%20to%20discuss%20a%20business%20website%20project.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-full bg-brand-accent text-[#050706] font-bold text-xs tracking-widest uppercase hover:bg-white transition-all shadow-[0_0_20px_rgba(183,255,69,0.3)]"
              >
                Chat on WhatsApp
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}?subject=Business%20Website%20Enquiry`}
                className="px-8 py-3.5 rounded-full border border-white/20 hover:border-white text-white font-bold text-xs tracking-widest uppercase transition-all"
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
