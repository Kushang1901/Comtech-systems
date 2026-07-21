import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Computer Repair & Printing Services — Gurgaon & Noida',
  description: 'Get in touch with Comtech Systems in Gurgaon (Sector 17A) & Noida Extension. Contact us for laptop repairs, printer cartridge refilling, commercial printing, corporate gifting, or toner cartridge recycling buyback quotes across Delhi NCR.',
  keywords: [
    'Contact Comtech Systems',
    'Comtech Systems Gurgaon phone number',
    'Comtech Systems Noida contact',
    'Gurgaon Computer Repair Contact',
    'Noida Printer Service Phone Number',
    'WhatsApp Laptop Support Gurgaon',
    'Cartridge Refill Enquiry Noida Extn',
    'Corporate Gifting Enquiry Delhi NCR',
    'Shashi Bhushan Sharma contact number',
    'IT services Gurgaon Sector 17A',
  ],
  alternates: {
    canonical: 'https://www.comtech-systems.in/contact',
  },
  openGraph: {
    title: 'Contact Comtech Systems | IT Repair & Printing Quotes — Gurgaon & Noida',
    description: 'Connect with Comtech Systems for immediate assistance on computer repairs, cartridge refilling, custom print works, and eco-friendly buyback in Gurgaon and Noida.',
    url: 'https://www.comtech-systems.in/contact',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Contact Comtech Systems',
      },
    ],
  },
};

export default function Contact() {
  return (
    <div className="animated">
      {/* ── ContactPage JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Comtech Systems — Gurgaon & Noida",
            "description": "Get in touch with Comtech Systems for laptop repairs, printer cartridge refilling, printing, and recycling in Gurgaon and Noida.",
            "url": "https://www.comtech-systems.in/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Comtech Systems",
              "image": "https://www.comtech-systems.in/logo.png",
              "@id": "https://www.comtech-systems.in/#localbusiness",
              "url": "https://www.comtech-systems.in",
              "telephone": "+919811767644",
              "email": "sbsharma@comtech-systems.in",
              "areaServed": [
                { "@type": "City", "name": "Gurgaon" },
                { "@type": "City", "name": "Noida" },
                { "@type": "AdministrativeArea", "name": "Delhi NCR" }
              ],
              "address": [
                {
                  "@type": "PostalAddress",
                  "name": "Comtech Systems — Gurgaon Branch",
                  "streetAddress": "Sukhrali Road, Sector 17A",
                  "addressLocality": "Gurgaon",
                  "addressRegion": "Haryana",
                  "postalCode": "122001",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "name": "Comtech Systems — Noida Extension Branch",
                  "streetAddress": "Sec-1, Noida Extn",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201301",
                  "addressCountry": "IN"
                }
              ],
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": "28.4548",
                  "longitude": "77.0154",
                  "name": "Gurgaon Branch"
                },
                {
                  "@type": "GeoCoordinates",
                  "latitude": "28.6262",
                  "longitude": "77.4200",
                  "name": "Noida Extension Branch"
                }
              ],
              "hasMap": [
                "https://maps.google.com/?q=Comtech+Systems+Sector+17A+Gurgaon+Haryana",
                "https://maps.google.com/?q=Comtech+Systems+Sector+1+Noida+Extension"
              ],
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "11:00",
                  "closes": "16:00"
                }
              ]
            }
          })
        }}
      />

      {/* ── BreadcrumbList ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Comtech Systems",
                "item": "https://www.comtech-systems.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Contact Us",
                "item": "https://www.comtech-systems.in/contact"
              }
            ]
          })
        }}
      />

      {/* Page header */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>Contact Us</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '540px', margin: '0 auto' }}>
            Have a question or need a quote? Fill in the form and our team at <strong>Gurgaon</strong> or <strong>Noida Extension</strong> will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Render the Client components with form logic */}
      <ContactClient />
    </div>
  );
}
