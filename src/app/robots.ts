import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Allow all well-behaved crawlers
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/private/'],
      },
      {
        // Explicitly allow Google
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        // Explicitly allow Bing
        userAgent: 'Bingbot',
        allow: '/',
      },
      {
        // Block OpenAI AI training crawler
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        // Block Common Crawl (used for AI training datasets)
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        // Block Anthropic AI crawler
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
      {
        // Block Claude crawler
        userAgent: 'ClaudeBot',
        disallow: '/',
      },
      {
        // Block Meta AI crawler
        userAgent: 'FacebookBot',
        disallow: '/',
      },
    ],
    sitemap: 'https://www.comtech-systems.in/sitemap.xml',
    host: 'https://www.comtech-systems.in',
  };
}
