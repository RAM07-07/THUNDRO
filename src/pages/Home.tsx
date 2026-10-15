import SEOHead from '../components/SEOHead';
import Hero from '../components/Hero';
import AskChatGPT from '../components/AskChatGPT';
import WhyChooseUs from '../components/WhyChooseUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import HowWeWork from '../components/HowWeWork';
import About from '../components/About';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://thundro.vercel.app/#website",
    "url": "https://thundro.vercel.app/",
    "name": "Thundro",
    "alternateName": ["Thundro Web Agency", "Thundro Digital"],
    "description": "Thundro is a web design and development agency building modern, responsive websites and digital experiences for businesses.",
    "publisher": {
      "@id": "https://thundro.vercel.app/#organization"
    },
    "inLanguage": "en"
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://thundro.vercel.app/#organization",
    "name": "Thundro",
    "legalName": "Thundro",
    "url": "https://thundro.vercel.app/",
    "logo": "https://thundro.vercel.app/logo-dark.png",
    "image": "https://thundro.vercel.app/og-poster.jpg",
    "description": "Independent website design and web development agency based in Coimbatore, Tamil Nadu, India, creating custom responsive websites, high-speed landing pages, and web applications for businesses.",
    "email": "thundro.web@gmail.com",
    "telephone": "+918667536503",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918667536503",
      "contactType": "customer service",
      "availableLanguage": ["English", "Tamil"]
    },
    "areaServed": [
      { "@type": "City", "name": "Coimbatore" },
      { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
      { "@type": "Country", "name": "India" }
    ],
    "knowsAbout": [
      "Web Design",
      "Website Development",
      "Responsive Web Design",
      "Front-End Development",
      "UI/UX Design",
      "Landing Page Design",
      "E-commerce Website Development"
    ],
    "sameAs": [
      "https://wa.me/918667536503"
    ]
  }
];

export default function Home() {
  return (
    <>
      <SEOHead
        title="Thundro | Web Design & Development Agency"
        description="Thundro is a web design and development agency building modern, responsive websites and digital experiences that help businesses attract customers and grow."
        canonicalPath="/"
        schema={homeSchema}
      />
      <Hero />
      <WhyChooseUs />
      <AskChatGPT />
      <Services />
      <Portfolio />
      <HowWeWork />
      <About />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
