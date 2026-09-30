/**
 * Global SEO Configuration & Priority Calibration
 * Comtech Systems - IT Repair, Commercial Printing & Corporate Gifting
 */

export const SITE_CONFIG = {
  name: 'Comtech Systems',
  legalName: 'Comtech Systems',
  tagline: 'Leading IT Hardware Repair, Commercial Printing & Corporate Gifting',
  description:
    'Comprehensive IT hardware repair, laptop & printer service, toner refilling, commercial offset/digital printing, and customized corporate gifting solutions across Gurgaon, Noida Extension, and Delhi NCR.',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.comtech-systems.in',
  contact: {
    phoneGurgaon: '+91 98118 01340',
    phoneNoida: '+91 92896 90818',
    email: 'info@comtech-systems.in',
    alternateEmail: 'comtechsystemsgurgaon@gmail.com',
  },
  locations: {
    gurgaon: {
      name: 'Gurgaon Service Center',
      streetAddress: 'Shop No. 7, Old Railway Road, Near Dena Bank',
      addressLocality: 'Gurgaon',
      addressRegion: 'Haryana',
      postalCode: '122001',
      addressCountry: 'IN',
      geo: {
        latitude: 28.4548,
        longitude: 77.0154,
      },
    },
    noida: {
      name: 'Noida Extension Center',
      streetAddress: 'Plot No. 12, Tech Zone IV',
      addressLocality: 'Greater Noida West / Noida Extension',
      addressRegion: 'Uttar Pradesh',
      postalCode: '201306',
      addressCountry: 'IN',
      geo: {
        latitude: 28.5921,
        longitude: 77.4475,
      },
    },
  },
  socials: [
    'https://www.instagram.com/comtechsystems',
    'https://www.linkedin.com/company/comtech-systems-gurgaon',
    'https://www.facebook.com/comtechsystemsgurgaon',
    'https://github.com/Kushang1901/Comtech-systems',
  ],
  logo: '/logo.png',
  defaultOgImage: '/og-image.png',
} as const;

/**
 * Respected Priority Matrix for Search Crawlers
 * Calibrated based on business revenue intent, organic search volume, and crawl budget allocation.
 */
export const SITEMAP_PRIORITIES = {
  /** 1.00: Primary Brand Authority & Root Entry */
  HOMEPAGE: 1.0,
  /** 0.95: Core Commercial Directory / Hub */
  SERVICES_INDEX: 0.95,
  /** 0.90: Core Commercial Repair & Product Offerings */
  PRIMARY_SERVICE: 0.9,
  /** 0.85: High-Intent Keyword / Targeted Landing Pages */
  TARGETED_LANDING: 0.85,
  /** 0.80: Lead Conversion & Brand Authority Hubs */
  AUTHORITY_PAGES: 0.8,
  /** 0.80: Editorial Hub / Knowledge Center */
  BLOG_INDEX: 0.8,
  /** 0.75: In-Depth Technical Repair & How-To Guides */
  BLOG_ARTICLE: 0.75,
  /** 0.70: Corporate & Careers */
  CAREERS: 0.7,
  /** 0.30: Compliance, Disclaimers & Legal Policies */
  LEGAL_COMPLIANCE: 0.3,
} as const;

export type SitemapPriorityLevel = keyof typeof SITEMAP_PRIORITIES;

export type ChangeFrequency =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never';

/**
 * Standard Change Frequencies by Content Velocity
 */
export const SITEMAP_CHANGE_FREQUENCIES: Record<SitemapPriorityLevel, ChangeFrequency> = {
  HOMEPAGE: 'daily',
  SERVICES_INDEX: 'weekly',
  PRIMARY_SERVICE: 'weekly',
  TARGETED_LANDING: 'weekly',
  AUTHORITY_PAGES: 'monthly',
  BLOG_INDEX: 'weekly',
  BLOG_ARTICLE: 'monthly',
  CAREERS: 'monthly',
  LEGAL_COMPLIANCE: 'yearly',
};
