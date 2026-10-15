import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

const pages = [
  {
    path: '/services/business-websites',
    title: 'Business Website Development | Thundro Web Studio',
    description: 'Custom responsive business website development by Thundro. We build high-speed, modern websites for professional companies and service businesses across India.',
    canonical: 'https://thundro.vercel.app/services/business-websites',
    schema: {
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
      ]
    },
    noscriptContent: `
      <header style="padding: 1.5rem; border-bottom: 1px solid #ccc; font-family: sans-serif;">
        <p><a href="/">← Return to Thundro Home</a></p>
        <h2>Thundro — Business Website Development</h2>
      </header>
      <main style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.6; color: #222;">
        <h1>Business Website Development | Custom Web Solutions by Thundro</h1>
        <p><strong>Thundro</strong> is an independent web design and development agency based in <strong>Coimbatore, Tamil Nadu, India</strong>. We specialize in building modern, fast, mobile-first business websites engineered to strengthen credibility and convert visitors into clients.</p>
        
        <h2>Core Capabilities for Businesses</h2>
        <ul>
          <li><strong>Custom Brand Architecture:</strong> Bespoke layouts engineered around your specific business model and customer journey.</li>
          <li><strong>Engineered for Performance:</strong> Optimized front-end code and clean asset loading that improve conversion rates and Core Web Vitals.</li>
          <li><strong>Technical SEO Foundation:</strong> Clean semantic HTML5 structure, schema markup, Open Graph tags, and mobile-friendly indexability.</li>
          <li><strong>Direct Conversion Integrations:</strong> Functional WhatsApp contact buttons, interactive consultation forms, and direct email triggers.</li>
        </ul>

        <h2>What's Included in Every Business Website</h2>
        <ul>
          <li>Custom UI/UX visual direction aligned with your brand identity</li>
          <li>Responsive layouts tested across modern smartphones, tablets, and desktops</li>
          <li>Semantic HTML, lightweight CSS, and modern React development</li>
          <li>Domain configuration, hosting deployment, and SSL certificate setup</li>
          <li>Google Search Console verification and sitemap submission</li>
        </ul>

        <p><a href="/portfolio">Explore our Portfolio &amp; Concept Demos →</a></p>
        <p><a href="/services/small-business-websites">Looking for Small Business Solutions? Read more →</a></p>

        <section style="margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1.5rem;">
          <h3>Contact Thundro for Project Enquiries</h3>
          <p><strong>WhatsApp / Phone:</strong> <a href="https://wa.me/918667536503">+91 86675 36503</a></p>
          <p><strong>Email:</strong> <a href="mailto:thundro.web@gmail.com">thundro.web@gmail.com</a></p>
          <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
        </section>
      </main>
    `
  },
  {
    path: '/services/gym-fitness-websites',
    title: 'Gym & Fitness Website Design | Thundro Web Studio',
    description: 'High-energy, modern website design for gyms, fitness studios, and wellness centers by Thundro. Mobile-optimized with membership tiers and instant WhatsApp inquiry.',
    canonical: 'https://thundro.vercel.app/services/gym-fitness-websites',
    schema: {
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
    },
    noscriptContent: `
      <header style="padding: 1.5rem; border-bottom: 1px solid #ccc; font-family: sans-serif;">
        <p><a href="/">← Return to Thundro Home</a></p>
        <h2>Thundro — Gym &amp; Fitness Website Design</h2>
      </header>
      <main style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.6; color: #222;">
        <h1>Gym &amp; Fitness Website Design | High-Performance Sites for Fitness Studios</h1>
        <p><strong>Thundro</strong> designs and builds high-impact, mobile-optimized websites for gyms, CrossFit boxes, fitness studios, and personal trainers in <strong>Coimbatore, Tamil Nadu</strong>, and across India.</p>

        <h2>Specialized Fitness Website Features</h2>
        <ul>
          <li><strong>Membership Tier Breakdowns:</strong> Clean comparison tables highlighting monthly, quarterly, and annual packages.</li>
          <li><strong>Class Schedules &amp; Timetables:</strong> Intuitive daily and weekly schedule layouts for CrossFit, yoga, and personal training.</li>
          <li><strong>Trainer Profiles:</strong> Showcases certified coaches, specialties, and training philosophies.</li>
          <li><strong>Instant WhatsApp Trial Booking:</strong> Direct 1-click WhatsApp buttons for booking free trial passes and gym tours.</li>
        </ul>

        <h2>Featured Concept Prototype: FitZone</h2>
        <p>Explore <strong>FitZone</strong>, an interactive website prototype crafted by Thundro to showcase high-energy visual layouts, membership cards, and coach directories.</p>
        <p><a href="/portfolio">Inspect the FitZone Concept on our Portfolio Page →</a></p>

        <section style="margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1.5rem;">
          <h3>Contact Thundro</h3>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/918667536503">+91 86675 36503</a></p>
          <p><strong>Email:</strong> <a href="mailto:thundro.web@gmail.com">thundro.web@gmail.com</a></p>
          <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
        </section>
      </main>
    `
  },
  {
    path: '/services/small-business-websites',
    title: 'Website Design for Small Businesses | Thundro Web Studio',
    description: 'Affordable, professional website design for small businesses by Thundro. Fast-loading, mobile-friendly websites with transparent pricing and direct WhatsApp customer contact.',
    canonical: 'https://thundro.vercel.app/services/small-business-websites',
    schema: {
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
    },
    noscriptContent: `
      <header style="padding: 1.5rem; border-bottom: 1px solid #ccc; font-family: sans-serif;">
        <p><a href="/">← Return to Thundro Home</a></p>
        <h2>Thundro — Website Design for Small Businesses</h2>
      </header>
      <main style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.6; color: #222;">
        <h1>Website Design for Small Businesses | Professional, Affordable Web Solutions</h1>
        <p><strong>Thundro</strong> builds straightforward, mobile-first websites for small businesses, salons, dental clinics, local consultants, and retailers in <strong>Coimbatore, Tamil Nadu</strong>, and across India.</p>

        <h2>Why Small Business Owners Choose Thundro</h2>
        <ul>
          <li><strong>Upfront, Transparent Quotes:</strong> Fixed project scopes with zero surprise charges.</li>
          <li><strong>Rapid 2–4 Week Turnaround:</strong> Efficient delivery from layout review to domain launch.</li>
          <li><strong>Local Search Optimization:</strong> Structured local business markup, location maps, and operating hours.</li>
          <li><strong>Direct WhatsApp Integration:</strong> Effortless customer communication directly on mobile.</li>
          <li><strong>Ownership &amp; Control:</strong> You own your domain, code, and content with no hostage fees.</li>
        </ul>

        <p><a href="/services/business-websites">Explore our Multi-Page Business Websites →</a></p>
        <p><a href="/portfolio">View interactive concepts on our Portfolio Page →</a></p>

        <section style="margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1.5rem;">
          <h3>Get an Honest Quote</h3>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/918667536503">+91 86675 36503</a></p>
          <p><strong>Email:</strong> <a href="mailto:thundro.web@gmail.com">thundro.web@gmail.com</a></p>
          <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
        </section>
      </main>
    `
  },
  {
    path: '/portfolio',
    title: 'Web Design Portfolio & Concepts | Thundro',
    description: 'Explore website design concepts, interactive demos, and prototypes created by Thundro across business, gym, salon, travel, and e-commerce verticals.',
    canonical: 'https://thundro.vercel.app/portfolio',
    schema: {
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
      }
    },
    noscriptContent: `
      <header style="padding: 1.5rem; border-bottom: 1px solid #ccc; font-family: sans-serif;">
        <p><a href="/">← Return to Thundro Home</a></p>
        <h2>Thundro — Web Design Portfolio &amp; Concept Demos</h2>
      </header>
      <main style="padding: 2rem; max-width: 900px; margin: 0 auto; font-family: sans-serif; line-height: 1.6; color: #222;">
        <h1>Web Design Portfolio &amp; Concept Demonstrations | Thundro</h1>
        <p><strong>Notice on Transparency:</strong> The projects displayed below are concept demonstrations and interactive prototypes designed and built by Thundro to illustrate our UI/UX capabilities across specific industries. They are clearly labeled as concept demos rather than commercial client commissions.</p>

        <h2>Selected Interactive Prototypes</h2>
        <ul>
          <li><strong>FitZone (Fitness &amp; Gym):</strong> Interactive class schedule, membership tier comparison table, and coach profiles.</li>
          <li><strong>WanderWay (Travel &amp; Tour):</strong> Destination exploration guides, package listings, and tour enquiry flows.</li>
          <li><strong>UrbanBites (Restaurant):</strong> Structured culinary menu, chef specials, and table reservation workflows.</li>
          <li><strong>GlowStudio (Beauty &amp; Salon):</strong> Treatment menu, pricing indicators, and WhatsApp appointment booking.</li>
          <li><strong>NovaStore (E-commerce):</strong> Clean product catalogue, gallery views, and cart checkout interface.</li>
          <li><strong>EstatePro (Real Estate):</strong> Architectural property cards, specifications, and viewing appointment forms.</li>
        </ul>

        <h2>Services We Offer</h2>
        <p>Like what you see? We can build a custom website tailored specifically for your company:</p>
        <ul>
          <li><a href="/services/business-websites">Business Website Development</a></li>
          <li><a href="/services/gym-fitness-websites">Gym &amp; Fitness Website Design</a></li>
          <li><a href="/services/small-business-websites">Website Design for Small Businesses</a></li>
        </ul>

        <section style="margin-top: 2rem; border-top: 1px solid #ccc; padding-top: 1.5rem;">
          <h3>Start Your Project</h3>
          <p><strong>WhatsApp:</strong> <a href="https://wa.me/918667536503">+91 86675 36503</a></p>
          <p><strong>Email:</strong> <a href="mailto:thundro.web@gmail.com">thundro.web@gmail.com</a></p>
          <p><strong>Location:</strong> Coimbatore, Tamil Nadu, India</p>
        </section>
      </main>
    `
  }
];

function generateHtmlForPage(page) {
  let html = baseHtml;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`);

  // Replace Meta Description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace Canonical Link
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${page.canonical}" />`
  );

  // Replace Open Graph metadata
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${page.canonical}" />`
  );

  // Replace Twitter metadata
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${page.description}" />`
  );
  html = html.replace(
    /<meta name="twitter:url" content=".*?" \/>/,
    `<meta name="twitter:url" content="${page.canonical}" />`
  );

  // Inject route-specific JSON-LD before closing </head>
  const scriptTag = `\n    <!-- Page Specific Structured Data (JSON-LD) -->\n    <script type="application/ld+json">\n    ${JSON.stringify(page.schema, null, 2)}\n    </script>\n  </head>`;
  html = html.replace('</head>', scriptTag);

  // Replace noscript content
  if (page.noscriptContent) {
    html = html.replace(
      /<noscript>[\s\S]*?<\/noscript>/,
      `<noscript>${page.noscriptContent}\n    </noscript>`
    );
  }

  return html;
}

for (const page of pages) {
  const relativeSubpath = page.path.replace(/^\//, '');
  const targetDir = path.join(distDir, relativeSubpath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.join(targetDir, 'index.html');
  const renderedHtml = generateHtmlForPage(page);
  fs.writeFileSync(targetFile, renderedHtml, 'utf-8');
  console.log(`Generated static SEO page: ${targetFile}`);
}

console.log('Static SEO page generation completed successfully.');
