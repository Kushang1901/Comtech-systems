import { Metadata } from 'next';
import ContactClient from '@/components/ContactClient';

export const metadata: Metadata = {
  title: 'Contact Us | Computer Repairs & Printing Services in Gurgaon & Noida',
  description: 'Get in touch with Comtech Systems in Gurgaon & Noida. Contact us for laptop repairs, printer cartridge refilling, commercial printing, corporate gifting, or toner cartridge recycling buyback quotes.',
  keywords: [
    'Contact Comtech Systems',
    'Gurgaon Computer Repair Contact',
    'Noida Printer Service Phone Number',
    'WhatsApp Laptop Support Gurgaon',
    'Cartridge Refill Enquiry Noida Extn',
    'Corporate Gifting Enquiry Delhi NCR',
    'Shashi Bhushan Sharma contact number'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Comtech Systems | Tech Support & Printing Quotes',
    description: 'Connect with Comtech Systems for immediate assistance on computer repairs, cartridge refilling, custom print works, and eco-friendly buyback.',
    url: 'https://www.comtech-systems.in/contact',
    images: [
      {
        url: '/sales&repair.png',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Comtech Systems",
            "description": "Get in touch with Comtech Systems for laptop repairs, printer cartridge refilling, printing, and recycling in Gurgaon and Noida.",
            "url": "https://www.comtech-systems.in/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Comtech Systems",
              "image": "https://www.comtech-systems.in/sales&repair.png",
              "@id": "https://www.comtech-systems.in/#localbusiness",
              "url": "https://www.comtech-systems.in",
              "telephone": "+919811767644",
              "email": "sbsharma@comtech-systems.in",
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Sukhrali Road, Sector 17A",
                  "addressLocality": "Gurgaon",
                  "addressRegion": "Haryana",
                  "postalCode": "122001",
                  "addressCountry": "IN"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Sec-1, Noida Extn",
                  "addressLocality": "Noida",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "201301",
                  "addressCountry": "IN"
                }
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

      {/* Page header */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>Contact Us</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto' }}>
            Have a question or need a quote? Fill in the form and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Render the Client components with form logic */}
      <ContactClient />
    </div>
  );
}
