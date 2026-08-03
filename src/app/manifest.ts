import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Comtech Systems',
    short_name: 'Comtech',
    description:
      'Trusted partner for computer repair, printer cartridge refilling, commercial printing, corporate gifting, and empty toner cartridge recycling buyback in Gurgaon & Noida.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b4cb4',
    lang: 'en-IN',
    dir: 'ltr',
    orientation: 'portrait-primary',
    categories: ['business', 'productivity', 'utilities'],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '48x48',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcuts: [
      {
        name: 'Services',
        short_name: 'Services',
        description: 'View all IT repair & printing services',
        url: '/services',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
      {
        name: 'Contact Us',
        short_name: 'Contact',
        description: 'Get in touch with Comtech Systems',
        url: '/contact',
        icons: [{ src: '/icon-192.png', sizes: '192x192' }],
      },
    ],
  };
}
