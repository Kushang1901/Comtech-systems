/**
 * Schema.org Structured Data & Markup Generator
 * Generates valid JSON-LD schemas matching the dynamic sitemap canonical URLs.
 */

import { SITE_CONFIG } from './seoConfig';
import { buildCanonicalUrl } from './slugManager';

export interface BreadcrumbItem {
  name: string;
  url?: string;
}

/**
 * Generates standard Schema.org BreadcrumbList markup
 */
export function generateBreadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const element: Record<string, unknown> = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };
      if (item.url) {
        element.item = item.url.startsWith('http')
          ? item.url
          : buildCanonicalUrl(item.url);
      }
      return element;
    }),
  };
}

/**
 * Generates Schema.org FAQPage markup
 */
export function generateFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates Schema.org LocalBusiness + ComputerRepairService markup
 */
export function generateLocalBusinessJsonLd() {
  const gLoc = SITE_CONFIG.locations.gurgaon;
  const nLoc = SITE_CONFIG.locations.noida;

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ComputerRepairService'],
    '@id': `${SITE_CONFIG.siteUrl}/#localbusiness`,
    name: SITE_CONFIG.name,
    legalName: SITE_CONFIG.legalName,
    url: SITE_CONFIG.siteUrl,
    logo: buildCanonicalUrl(SITE_CONFIG.logo),
    image: buildCanonicalUrl(SITE_CONFIG.defaultOgImage),
    description: SITE_CONFIG.description,
    telephone: SITE_CONFIG.contact.phoneGurgaon,
    email: SITE_CONFIG.contact.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '10:00',
        closes: '20:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: gLoc.streetAddress,
      addressLocality: gLoc.addressLocality,
      addressRegion: gLoc.addressRegion,
      postalCode: gLoc.postalCode,
      addressCountry: gLoc.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: gLoc.geo.latitude,
      longitude: gLoc.geo.longitude,
    },
    department: [
      {
        '@type': ['LocalBusiness', 'ComputerRepairService'],
        name: `${SITE_CONFIG.name} — Noida Extension Branch`,
        telephone: SITE_CONFIG.contact.phoneNoida,
        address: {
          '@type': 'PostalAddress',
          streetAddress: nLoc.streetAddress,
          addressLocality: nLoc.addressLocality,
          addressRegion: nLoc.addressRegion,
          postalCode: nLoc.postalCode,
          addressCountry: nLoc.addressCountry,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: nLoc.geo.latitude,
          longitude: nLoc.geo.longitude,
        },
      },
    ],
    sameAs: SITE_CONFIG.socials,
  };
}

/**
 * Generates Schema.org WebSite markup with Sitelinks SearchBox
 */
export function generateWebSiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_CONFIG.siteUrl}/#website`,
    url: SITE_CONFIG.siteUrl,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    publisher: {
      '@id': `${SITE_CONFIG.siteUrl}/#localbusiness`,
    },
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_CONFIG.siteUrl}/services?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generates Schema.org Service markup
 */
export function generateServiceJsonLd(params: {
  name: string;
  description: string;
  serviceType: string;
  canonicalUrl: string;
  image?: string;
  serviceAreas?: string[];
  capabilities?: Array<{ title: string; description: string }>;
}) {
  const imageUrl = params.image ? buildCanonicalUrl(params.image) : buildCanonicalUrl(SITE_CONFIG.defaultOgImage);

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${params.canonicalUrl}/#service`,
    name: params.name,
    description: params.description,
    url: params.canonicalUrl,
    image: imageUrl,
    serviceType: params.serviceType,
    provider: {
      '@type': ['LocalBusiness', 'ComputerRepairService'],
      '@id': `${SITE_CONFIG.siteUrl}/#localbusiness`,
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.siteUrl,
      telephone: SITE_CONFIG.contact.phoneGurgaon,
    },
    areaServed: (params.serviceAreas || ['Gurgaon', 'Noida Extension', 'Delhi NCR']).map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: params.capabilities?.length
      ? {
          '@type': 'OfferCatalog',
          name: `${params.name} Capabilities`,
          itemListElement: params.capabilities.map((cap) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cap.title,
              description: cap.description,
            },
          })),
        }
      : undefined,
  };
}

/**
 * Generates Schema.org BlogPosting markup
 */
export function generateBlogPostingJsonLd(params: {
  headline: string;
  description: string;
  canonicalUrl: string;
  datePublished: string | Date;
  dateModified?: string | Date;
  author: string;
  keywords?: string[];
  image?: string;
}) {
  const publishedIso = new Date(params.datePublished).toISOString();
  const modifiedIso = params.dateModified
    ? new Date(params.dateModified).toISOString()
    : publishedIso;
  const imageUrl = params.image
    ? buildCanonicalUrl(params.image)
    : buildCanonicalUrl(SITE_CONFIG.defaultOgImage);

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${params.canonicalUrl}/#article`,
    headline: params.headline,
    description: params.description,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': params.canonicalUrl,
    },
    url: params.canonicalUrl,
    image: imageUrl,
    datePublished: publishedIso,
    dateModified: modifiedIso,
    author: {
      '@type': 'Person',
      name: params.author,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_CONFIG.siteUrl}/#organization`,
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: buildCanonicalUrl(SITE_CONFIG.logo),
      },
    },
    keywords: params.keywords?.join(', '),
  };
}
