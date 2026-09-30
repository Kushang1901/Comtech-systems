/**
 * Dynamic Sitemap Generator & Custom URL Engine
 * Assembles dynamic routes with calibrated priorities, image sitemaps, and custom slug support.
 */

import { MetadataRoute } from 'next';
import {
  SITE_CONFIG,
  SITEMAP_PRIORITIES,
  SITEMAP_CHANGE_FREQUENCIES,
  ChangeFrequency,
} from './seoConfig';
import {
  slugify,
  buildCanonicalUrl,
  resolveCustomizableSlug,
} from './slugManager';
import { servicesData } from '@/data/servicesData';
import { blogPosts } from '@/app/blog/posts';

export interface CustomSitemapRouteOptions {
  /** The customizable slug for the URL (e.g., 'laptop-repair-gurgaon', 'printer-cartridge-refilling-noida') */
  slug: string;
  /** Route prefix/folder (e.g. '/services', '/blog', or '' for root). Defaults to '' */
  basePath?: string;
  /** Optional full path override (e.g. '/offers/diwali-corporate-gifts') */
  customPath?: string;
  /** Respected Priority (0.0 to 1.0). If omitted, inferred from category or default 0.80 */
  priority?: number;
  /** Change frequency for crawlers */
  changeFrequency?: ChangeFrequency;
  /** Last modification date (string, Date, or auto-generated dynamic date) */
  lastModified?: string | Date;
  /** Image URLs for Google Image Sitemap indexation */
  images?: string[];
  /** Classification of the route for Schema.org alignment */
  schemaType?: 'WebPage' | 'Service' | 'BlogPosting' | 'FAQPage' | 'ContactPage' | 'AboutPage';
  /** Human-readable title for logs and schema synchronization */
  title?: string;
}

/**
 * Registry of custom / programmatic landing routes.
 * Any new URL being created in the sitemap is customizable here with its respected proper slug.
 */
const customRouteRegistry: CustomSitemapRouteOptions[] = [
  // High-Intent Targeted Keyword Landing Pages (Customizable Slugs)
  {
    slug: 'laptop-repair-gurgaon',
    basePath: '/services',
    priority: SITEMAP_PRIORITIES.TARGETED_LANDING,
    changeFrequency: SITEMAP_CHANGE_FREQUENCIES.TARGETED_LANDING,
    images: ['/sales&repair.png'],
    schemaType: 'Service',
    title: 'Laptop Repair Service in Gurgaon',
  },
  {
    slug: 'printer-repair-noida-extension',
    basePath: '/services',
    priority: SITEMAP_PRIORITIES.TARGETED_LANDING,
    changeFrequency: SITEMAP_CHANGE_FREQUENCIES.TARGETED_LANDING,
    images: ['/printers&cartridges.png'],
    schemaType: 'Service',
    title: 'Printer Repair & Cartridge Refilling in Noida Extension',
  },
  {
    slug: 'corporate-it-amc-gurgaon',
    basePath: '/services',
    priority: SITEMAP_PRIORITIES.TARGETED_LANDING,
    changeFrequency: SITEMAP_CHANGE_FREQUENCIES.TARGETED_LANDING,
    images: ['/sales&repair.png'],
    schemaType: 'Service',
    title: 'Corporate IT AMC & Network Maintenance in Gurgaon',
  },
  {
    slug: 'custom-corporate-gifting-delhi-ncr',
    basePath: '/services',
    priority: SITEMAP_PRIORITIES.TARGETED_LANDING,
    changeFrequency: SITEMAP_CHANGE_FREQUENCIES.TARGETED_LANDING,
    images: ['/corporate-gifting.png'],
    schemaType: 'Service',
    title: 'Custom Corporate Gifting & Welcome Kits Delhi NCR',
  },
];

/**
 * Dynamically register a new custom URL into the sitemap with its proper customizable slug.
 */
export function registerCustomSitemapRoute(route: CustomSitemapRouteOptions): void {
  const normalizedSlug = slugify(route.slug);
  const exists = customRouteRegistry.some(
    (r) => slugify(r.slug) === normalizedSlug && (r.basePath || '') === (route.basePath || '')
  );

  if (!exists) {
    customRouteRegistry.push({
      ...route,
      slug: normalizedSlug,
    });
  }
}

/**
 * Retrieve all currently registered custom routes.
 */
export function getRegisteredCustomRoutes(): CustomSitemapRouteOptions[] {
  return [...customRouteRegistry];
}

/**
 * Builds an individual sitemap entry with sanitized slug, absolute URL, and image tags.
 */
export function createSitemapItem(options: {
  slug: string;
  basePath?: string;
  customPath?: string;
  priority: number;
  changeFrequency: ChangeFrequency;
  lastModified?: string | Date;
  images?: string[];
}): MetadataRoute.Sitemap[number] {
  const properSlug = slugify(options.slug);
  let absoluteUrl: string;

  if (options.customPath) {
    absoluteUrl = buildCanonicalUrl(options.customPath);
  } else if (properSlug) {
    absoluteUrl = buildCanonicalUrl(properSlug, options.basePath || '');
  } else {
    absoluteUrl = buildCanonicalUrl(options.basePath || '');
  }

  // Ensure fully qualified image URLs for Google Image Sitemap
  const qualifiedImages = options.images?.map((img) =>
    img.startsWith('http') ? img : buildCanonicalUrl(img)
  );

  return {
    url: absoluteUrl,
    lastModified: options.lastModified ? new Date(options.lastModified) : new Date(),
    changeFrequency: options.changeFrequency,
    priority: Math.round(options.priority * 100) / 100,
    ...(qualifiedImages && qualifiedImages.length > 0 ? { images: qualifiedImages } : {}),
  };
}

/**
 * Master Dynamic Sitemap Assembler
 * Compiles all static pages, dynamic service routes, dynamic blog posts, and customizable landing URLs.
 */
export function buildDynamicSitemap(): MetadataRoute.Sitemap {
  const dynamicNow = new Date();

  // ── 1. Core Authority & Static Pages with Respected Priorities ──
  const coreStaticPages: MetadataRoute.Sitemap = [
    createSitemapItem({
      slug: '',
      basePath: '',
      priority: SITEMAP_PRIORITIES.HOMEPAGE, // 1.00
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.HOMEPAGE,
      lastModified: dynamicNow,
      images: [SITE_CONFIG.defaultOgImage, SITE_CONFIG.logo],
    }),
    createSitemapItem({
      slug: 'services',
      priority: SITEMAP_PRIORITIES.SERVICES_INDEX, // 0.95
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.SERVICES_INDEX,
      lastModified: dynamicNow,
      images: ['/sales&repair.png', '/printers&cartridges.png'],
    }),
    createSitemapItem({
      slug: 'about',
      priority: SITEMAP_PRIORITIES.AUTHORITY_PAGES, // 0.80
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.AUTHORITY_PAGES,
      lastModified: dynamicNow,
      images: [SITE_CONFIG.logo],
    }),
    createSitemapItem({
      slug: 'contact',
      priority: SITEMAP_PRIORITIES.AUTHORITY_PAGES, // 0.80
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.AUTHORITY_PAGES,
      lastModified: dynamicNow,
    }),
    createSitemapItem({
      slug: 'blog',
      priority: SITEMAP_PRIORITIES.BLOG_INDEX, // 0.80
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.BLOG_INDEX,
      lastModified: dynamicNow,
      images: [SITE_CONFIG.defaultOgImage],
    }),
    createSitemapItem({
      slug: 'careers',
      priority: SITEMAP_PRIORITIES.CAREERS, // 0.70
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.CAREERS,
      lastModified: dynamicNow,
    }),
    createSitemapItem({
      slug: 'privacy-policy',
      priority: SITEMAP_PRIORITIES.LEGAL_COMPLIANCE, // 0.30
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.LEGAL_COMPLIANCE,
      lastModified: dynamicNow,
    }),
    createSitemapItem({
      slug: 'terms-of-service',
      priority: SITEMAP_PRIORITIES.LEGAL_COMPLIANCE, // 0.30
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.LEGAL_COMPLIANCE,
      lastModified: dynamicNow,
    }),
    createSitemapItem({
      slug: 'disclaimer',
      priority: SITEMAP_PRIORITIES.LEGAL_COMPLIANCE, // 0.30
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.LEGAL_COMPLIANCE,
      lastModified: dynamicNow,
    }),
  ];

  // ── 2. Dynamic Primary Services from servicesData (Respected Priority: 0.90) ──
  const dynamicServices: MetadataRoute.Sitemap = servicesData.map((service) => {
    const customizableSlug = resolveCustomizableSlug(service.id, service.slug);
    const serviceImages = service.image ? [service.image] : [];

    return createSitemapItem({
      slug: customizableSlug,
      basePath: '/services',
      priority: SITEMAP_PRIORITIES.PRIMARY_SERVICE, // 0.90
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.PRIMARY_SERVICE,
      lastModified: dynamicNow,
      images: serviceImages,
    });
  });

  // ── 3. Dynamic Editorial Articles from blogPosts (Respected Priority: 0.75) ──
  const dynamicPosts: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const customizableSlug = resolveCustomizableSlug(post.slug);
    // Parse real publication / modified date from blog post
    const postDate = post.date ? new Date(post.date) : dynamicNow;

    return createSitemapItem({
      slug: customizableSlug,
      basePath: '/blog',
      priority: SITEMAP_PRIORITIES.BLOG_ARTICLE, // 0.75
      changeFrequency: SITEMAP_CHANGE_FREQUENCIES.BLOG_ARTICLE,
      lastModified: isNaN(postDate.getTime()) ? dynamicNow : postDate,
      images: [SITE_CONFIG.defaultOgImage],
    });
  });

  // ── 4. Dynamic Registered Custom / Targeted Landing URLs (Respected Priority: 0.85) ──
  const customLandingRoutes: MetadataRoute.Sitemap = customRouteRegistry.map((item) =>
    createSitemapItem({
      slug: item.slug,
      basePath: item.basePath || '',
      customPath: item.customPath,
      priority: item.priority ?? SITEMAP_PRIORITIES.TARGETED_LANDING,
      changeFrequency: item.changeFrequency ?? SITEMAP_CHANGE_FREQUENCIES.TARGETED_LANDING,
      lastModified: item.lastModified ?? dynamicNow,
      images: item.images,
    })
  );

  // ── 5. Merge, Deduplicate by URL, and Sort by Priority Descending ──
  const allRoutes = [
    ...coreStaticPages,
    ...dynamicServices,
    ...customLandingRoutes,
    ...dynamicPosts,
  ];

  const uniqueUrlMap = new Map<string, MetadataRoute.Sitemap[number]>();

  for (const item of allRoutes) {
    if (!uniqueUrlMap.has(item.url)) {
      uniqueUrlMap.set(item.url, item);
    }
  }

  return Array.from(uniqueUrlMap.values()).sort(
    (a, b) => (b.priority ?? 0) - (a.priority ?? 0)
  );
}
