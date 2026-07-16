import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services | Laptop Repair, Printer Refill, Printing & Gifting',
  description: 'Explore the complete list of services from Comtech Systems in Gurgaon & Noida. We offer laptop repairs, printer cartridge refilling, commercial printing (visiting cards, letterheads), corporate gifts, and empty toner buyback.',
  keywords: [
    'Laptop repair Gurgaon',
    'Printer cartridge refilling Noida',
    'Laser printer repairs Delhi NCR',
    'Visiting card printing Gurgaon',
    'Letterhead printing Noida Extn',
    'Corporate gifts buyback',
    'Toner cartridge recycling price',
    'Printer repair AMC'
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Comtech Systems Services | IT Repair, Commercial Printing & Gifting',
    description: 'Comprehensive tech support, custom branding print work, and eco-friendly cartridge recycling services for individuals and corporate clients.',
    url: 'https://www.comtech-systems.in/services',
    images: [
      {
        url: '/printers&cartridges.png',
        width: 1200,
        height: 630,
        alt: 'Comtech Systems Services',
      },
    ],
  },
};

const services = [
  {
    id: 'computers',
    title: 'Computers & Laptops',
    tag: 'Sales & Repair',
    image: '/sales&repair.png',
    imageAlt: 'Computer and laptop sales and repair services',
    description:
      'We sell, repair, and optimise high-performance desktops and laptops for home users and corporate offices. Our certified technicians diagnose hardware faults, replace components, clean systems, and restore performance so your devices run at their best.',
    points: [
      'Component-level repair & replacement',
      'OS reinstallation & performance tuning',
      'Data backup & recovery services',
      'Corporate bulk procurement support',
    ],
    iconPaths: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
  },
  {
    id: 'printers',
    title: 'Printers & Cartridges',
    tag: 'Sales, Repair & Recycling',
    image: '/printers&cartridges.png',
    imageAlt: 'Printer repair and cartridge recycling services',
    description:
      'Our printer division covers everything from new inkjet and laser printer sales to detailed repair and maintenance. We also refill cartridges, manage multi-function printer fleets, and buy back empty toner cartridges at excellent market prices.',
    points: [
      'Inkjet & laser printer servicing',
      'OEM & compatible cartridge supply',
      'Bulk toner cartridge buy-back program',
      'Annual maintenance contracts (AMC)',
    ],
    iconPaths: (
      <>
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" />
        <path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      </>
    ),
  },
  {
    id: 'printing',
    title: 'Commercial Printing',
    tag: 'Business Branding',
    image: '/printers&cartridges2.png',
    imageAlt: 'Commercial printing — visiting cards and letterheads',
    description:
      'Elevate your corporate identity with our premium print solutions. We design and print bespoke visiting cards, professional letterheads, branded envelopes, brochures, and other stationery that make the right first impression every time.',
    points: [
      'Premium visiting card design & print',
      'Corporate letterhead & stationery',
      'Brochures, flyers & catalogues',
      'Custom brand identity packages',
    ],
    iconPaths: (
      <>
        <polyline points="14 2 14 8 20 8" />
        <path d="M20 12V22H4V2h10l6 6z" />
      </>
    ),
  },
  {
    id: 'gifting',
    title: 'Corporate Gifting',
    tag: 'Premium & Customised',
    image: '/sales&repair2.png',
    imageAlt: 'Corporate gifting and branded merchandise',
    description:
      'Reward employees, impress clients, and strengthen partnerships with customised corporate gifts. We curate premium product bundles and personalised branded merchandise that carry your company’s story — from executive hampers to branded tech accessories.',
    points: [
      'Branded tech accessories & gadgets',
      'Executive gift sets & hampers',
      'Custom engraving & logo printing',
      'Bulk ordering with quick delivery',
    ],
    iconPaths: (
      <>
        <polyline points="20 12 20 22 4 22 4 12" />
        <rect x="2" y="7" width="20" height="5" />
        <line x1="12" y1="22" x2="12" y2="7" />
        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
      </>
    ),
  },
];

export default function Services() {
  return (
    <div className="animated">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "IT & Printing Services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Comtech Systems",
              "@id": "https://www.comtech-systems.in/#localbusiness",
              "url": "https://www.comtech-systems.in"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Comtech Systems Services Catalog",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Computer & Laptop Sales & Repair",
                    "description": "Component-level repair & replacement, OS reinstallation, performance tuning, and data backup/recovery for desktops and laptops."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Printer Servicing & Cartridge Refilling",
                    "description": "Inkjet & laser printer repair, cartridge refilling, and bulk toner cartridge buy-back recycling program."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Commercial Printing",
                    "description": "Bespoke visiting cards, letterheads, brochures, flyers, and other corporate stationery printing."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Corporate Gifting",
                    "description": "Customized corporate gifts, branded tech accessories, and personalized executive hampers."
                  }
                }
              ]
            }
          })
        }}
      />
      {/* Page Header */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>Services &amp; Products</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
            Comprehensive technology services and quality products for individuals and businesses.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section">
        <div className="container">
          {services.map((service, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div
                key={service.id}
                className={`service-row${isReverse ? ' reverse' : ''}`}
                style={{
                  borderBottom: index < services.length - 1 ? '1px solid var(--border-color)' : 'none',
                }}
              >
                {/* Image Section */}
                <div className="service-image-side">
                  <div className="service-image-container">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      priority={index === 0}
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="service-content-side">
                  {/* Tag + Icon Badge */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', alignSelf: 'flex-start' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: '#eff1fb',
                      color: 'var(--accent-color)',
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {service.iconPaths}
                      </svg>
                    </div>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--accent-color)',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                    }}>
                      {service.tag}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.5px' }}>
                    {service.title}
                  </h2>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7' }}>
                    {service.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {(service.points ?? []).map((point) => (
                      <li key={point} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--accent-color)', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                        <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '8px' }}>
                    <Link href="/contact" className="btn btn-primary">
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Need a Custom Solution?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '22px', fontSize: '15px' }}>
            We tailor all of our service packages to suit unique business requirements. Get in
            touch for a personalised consultation and quote.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/about" className="btn btn-secondary">Learn About Us</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
