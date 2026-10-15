import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: string;
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const BASE_URL = 'https://thundro.vercel.app';

export default function SEOHead({
  title,
  description,
  canonicalPath = '',
  ogType = 'website',
  schema
}: SEOHeadProps) {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // 2. Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Canonical link
    const canonicalUrl = `${BASE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`.replace(/\/$/, canonicalPath === '' ? '/' : '');
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    // 4. Open Graph tags
    const updateMeta = (attr: string, key: string, value: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', value);
    };

    updateMeta('property', 'og:title', title);
    updateMeta('property', 'og:description', description);
    updateMeta('property', 'og:url', canonicalUrl);
    updateMeta('property', 'og:type', ogType);

    // 5. Twitter tags
    updateMeta('name', 'twitter:title', title);
    updateMeta('name', 'twitter:description', description);
    updateMeta('name', 'twitter:url', canonicalUrl);

    // 6. JSON-LD structured data script
    const existingScript = document.getElementById('route-json-ld');
    if (schema) {
      const scriptContent = JSON.stringify(schema);
      if (existingScript) {
        existingScript.textContent = scriptContent;
      } else {
        const script = document.createElement('script');
        script.id = 'route-json-ld';
        script.type = 'application/ld+json';
        script.textContent = scriptContent;
        document.head.appendChild(script);
      }
    } else if (existingScript) {
      existingScript.remove();
    }
  }, [title, description, canonicalPath, ogType, schema]);

  return null;
}
