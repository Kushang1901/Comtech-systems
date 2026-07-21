import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Comtech Systems | IT Repair & Printing Services — Gurgaon & Noida',
  description: 'Learn about Comtech Systems, managed by Shashi Bhushan Sharma since 2005. We provide reliable IT support, laptop & computer repair, printer cartridge refilling, commercial printing, and eco-friendly cartridge recycling in Gurgaon, Noida, and Delhi NCR.',
  keywords: [
    'About Comtech Systems',
    'Comtech Systems Gurgaon history',
    'Shashi Bhushan Sharma',
    'IT services Gurgaon since 2005',
    'Noida printer services background',
    'Toner cartridge recycling program management',
    'IT company Gurgaon Haryana',
    'Computer repair company Gurgaon',
  ],
  alternates: {
    canonical: 'https://www.comtech-systems.in/about',
  },
  openGraph: {
    title: 'About Comtech Systems | IT Repair & Printing — Gurgaon & Noida',
    description: 'Managed by Shashi Bhushan Sharma, Comtech Systems has grown from a local Gurgaon service provider to a multi-faceted enterprise serving Delhi NCR.',
    url: 'https://www.comtech-systems.in/about',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'Comtech Systems Logo',
      },
    ],
  },
};

export default function About() {
  return (
    <div className="animated">
      {/* ── Organization JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://www.comtech-systems.in/#organization",
            "name": "Comtech Systems",
            "legalName": "Comtech Systems",
            "url": "https://www.comtech-systems.in",
            "logo": {
              "@type": "ImageObject",
              "url": "https://www.comtech-systems.in/logo.png",
              "width": 512,
              "height": 512
            },
            "foundingDate": "2005",
            "description": "Comtech Systems is Gurgaon and Noida Extension's trusted provider for computer & laptop repairs, printer cartridge refilling, commercial printing, corporate gifting, and empty toner cartridge recycling.",
            "founder": {
              "@type": "Person",
              "name": "Shashi Bhushan Sharma",
              "jobTitle": "Founder & CEO"
            },
            "areaServed": [
              { "@type": "City", "name": "Gurgaon" },
              { "@type": "City", "name": "Noida" },
              { "@type": "AdministrativeArea", "name": "Delhi NCR" }
            ],
            "knowsAbout": [
              "Laptop Repair",
              "Computer Repair",
              "Printer Cartridge Refilling",
              "Toner Cartridge Recycling",
              "Commercial Printing",
              "Visiting Card Printing",
              "Letterhead Printing",
              "Corporate Gifting",
              "IT Support Services"
            ],
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
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+919811767644",
              "email": "sbsharma@comtech-systems.in",
              "contactType": "customer service",
              "areaServed": ["Gurgaon", "Noida", "Delhi NCR"],
              "availableLanguage": ["en", "hi"]
            },
            "sameAs": [
              "https://www.linkedin.com/company/comtech-systems-gurgaon",
              "https://www.facebook.com/comtechsystemsgurgaon",
              "https://github.com/Kushang1901/Comtech-systems"
            ]
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
                "name": "About Us",
                "item": "https://www.comtech-systems.in/about"
              }
            ]
          })
        }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>About Comtech Systems</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            A trusted name in IT repair, eco-friendly hardware recycling, and printing solutions — serving <strong>Gurgaon, Noida &amp; Delhi NCR</strong> since 2005.
          </p>
        </div>
      </section>

      {/* ── STORY + VALUES ── */}
      <section className="section">
        <div className="container two-col-grid">

          {/* Story text */}
          <div>
            <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '18px', color: 'var(--accent-color)', letterSpacing: '-0.5px' }}>
              Our Story &amp; Leadership
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.8' }}>
              Founded and managed by <strong>Shashi Bhushan Sharma</strong>, Comtech Systems has grown from a local Gurgaon
              service provider to a multi-faceted enterprise serving clients across Delhi NCR since 2005. We specialize in maintaining the hardware that keeps your business running smoothly, while
              providing top-notch creative and custom-tailored branding options through print.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.8' }}>
              Our dual-branch presence in <strong>Gurgaon (Sector 17A)</strong> and <strong>Noida Extension (Sector 1)</strong> means we are always close to you. What sets us apart is our holistic cycle approach — we don&apos;t just sell you hardware or repair it, we
              help you recycle it. Our <strong>Toner Cartridge Recycling Program</strong> buys back empty cartridges,
              ensuring that corporate printing setups can run sustainably and cost-effectively.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '26px', fontSize: '15px', lineHeight: '1.8' }}>
              From bespoke visiting cards to executive letterhead printing and high-end corporate gifts across Gurgaon, Noida, and Delhi NCR, we bring
              premium branding and quality craftsmanship to every design.
            </p>
            <Link href="/contact" className="btn btn-primary">Connect With Us</Link>
          </div>

          {/* Core Values card */}
          <div style={{ padding: '28px', border: '1px solid var(--border-color)', borderRadius: '12px', background: '#fff', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '20px' }}>Our Core Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { num: '1', title: 'Quality & Integrity', desc: 'We use certified premium spare parts for all computer and printer repairs in Gurgaon & Noida, ensuring lasting device lifespan.' },
                { num: '2', title: 'Environmental Responsibility', desc: 'We strongly advocate for circular electronics, buying back empty toner cartridges and arranging safe e-waste recycling across Delhi NCR.' },
                { num: '3', title: 'Customer Satisfaction', desc: 'Offering localized onsite support across Gurgaon and Noida Extension, with quick turnaround times and professional transparency for all client jobs.' },
              ].map((v) => (
                <div key={v.num}>
                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent-color)', marginBottom: '4px' }}>{v.num}. {v.title}</h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS / TRUST SIGNALS ── */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '24px', textAlign: 'center' }}>
            {[
              { stat: '20+', label: 'Years of Service in Delhi NCR' },
              { stat: '2', label: 'Branches — Gurgaon & Noida' },
              { stat: '5000+', label: 'Devices Repaired' },
              { stat: '100+', label: 'Corporate Clients' },
            ].map((item) => (
              <div key={item.label}>
                <div style={{ fontSize: '32px', fontWeight: 800, color: 'var(--accent-color)', marginBottom: '6px' }}>{item.stat}</div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '14px', opacity: 0.5 }}>
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 2.5-1 4.966-3 6.071L3 21zM17 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 2.5-1 4.966-3 6.071L17 21z" />
          </svg>
          <blockquote style={{ fontSize: '17px', fontStyle: 'italic', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '18px', lineHeight: '1.7' }}>
            &ldquo;Sustainability and technological reliability shouldn&apos;t be mutually exclusive. We help businesses in Gurgaon and Noida optimize their hardware setups while keeping an eye on our collective environmental impact.&rdquo;
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: '15px' }}>Shashi Bhushan Sharma</p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Founder &amp; CEO, Comtech Systems — Gurgaon &amp; Noida</p>
        </div>
      </section>
    </div>
  );
}
