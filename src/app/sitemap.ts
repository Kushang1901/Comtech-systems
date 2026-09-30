import { MetadataRoute } from 'next';
import { buildDynamicSitemap } from '@/lib/seo';

/**
 * Dynamic XML Sitemap with Respected Priority Calibration
 * Automatically aggregates:
 * - Core Authority & Brand Pages (Priority 1.00 - 0.80)
 * - Dynamic Primary Services & Custom Slugs (Priority 0.90)
 * - Targeted Programmatic Landing Pages (Priority 0.85)
 * - Dynamic Technical Blog Guides with publication dates (Priority 0.75)
 * - Legal & Policy Compliance Pages (Priority 0.30)
 * - Google Image Sitemap metadata for maximum rich-snippet indexation
 *
 * Revalidates daily (86400s) to keep search crawler caches fresh.
 */
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  return buildDynamicSitemap();
}
