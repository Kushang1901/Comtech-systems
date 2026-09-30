/**
 * Slug Customization, Normalization & Canonical URL Engine
 * Ensures 100% slug consistency between Sitemaps, Canonical Meta, and Schema.org Markups.
 */

import { SITE_CONFIG } from './seoConfig';

/**
 * Normalizes any free-form string or slug candidate into an RFC 3986 & SEO-compliant slug:
 * - Lowercases all characters
 * - Transliterates common symbols (e.g. '&' -> 'and')
 * - Strips accents/diacritics
 * - Removes non-alphanumeric characters (except hyphens)
 * - Collapses consecutive hyphens into a single hyphen
 * - Trims leading and trailing hyphens/slashes
 */
export function slugify(input: string): string {
  if (!input) return '';

  return input
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, '-and-')
    .replace(/\+/g, '-plus-')
    .normalize('NFD') // separate accents from letters
    .replace(/[\u0300-\u036f]/g, '') // remove accent diacritics
    .replace(/[^a-z0-9\s-]/g, '') // remove disallowed punctuation
    .replace(/[\s_]+/g, '-') // collapse whitespace and underscores
    .replace(/-+/g, '-') // collapse consecutive hyphens
    .replace(/^-+|-+$/g, ''); // strip leading/trailing hyphens
}

/**
 * Validates whether a slug is properly formatted according to SEO standards.
 */
export function isValidSlug(slug: string): boolean {
  if (!slug || typeof slug !== 'string') return false;
  // Slug should only contain lowercase letters, numbers, and hyphens (not starting/ending with hyphen)
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

/**
 * Builds an absolute canonical URL ensuring consistent protocol, domain, and no double slashes.
 */
export function buildCanonicalUrl(pathOrSlug: string, basePath = ''): string {
  const base = SITE_CONFIG.siteUrl.replace(/\/+$/, '');

  // If pathOrSlug is already a full URL, ensure domain consistency
  if (pathOrSlug.startsWith('http://') || pathOrSlug.startsWith('https://')) {
    return pathOrSlug.replace(/\/+$/, '');
  }

  const cleanBase = basePath.trim().replace(/^\/+|\/+$/g, '');
  const cleanPath = pathOrSlug.trim().replace(/^\/+|\/+$/g, '');

  if (!cleanBase && !cleanPath) {
    return base;
  }

  const combined = [cleanBase, cleanPath].filter(Boolean).join('/');
  return `${base}/${combined}`;
}

/**
 * Custom Slug Overrides Table
 * Allows overriding or redirecting specific service, blog, or route slugs dynamically.
 * Key: Entity ID or original slug -> Value: Custom targeted slug
 */
export const CUSTOM_SLUG_OVERRIDES: Record<string, string> = {
  // Service slug overrides (if a customized SEO slug is preferred)
  // 'computers': 'computers-and-laptops',
  // 'printers': 'printers-and-cartridges',
};

/**
 * Resolves a customizable slug for any entity. If an override exists, it is returned;
 * otherwise the input slug is normalized and returned.
 */
export function resolveCustomizableSlug(
  identifier: string,
  fallbackSlug?: string
): string {
  const override = CUSTOM_SLUG_OVERRIDES[identifier];
  if (override) {
    return slugify(override);
  }

  const target = fallbackSlug || identifier;
  return slugify(target);
}
