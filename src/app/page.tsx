import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.comtech-systems.in',
  },
};

const faqItems = [
  {
    question: "Where is Comtech Systems located?",
    answer: "Comtech Systems has two branches: one in Sector 17A, Gurgaon (Haryana) and another in Sector 1, Noida Extension (Uttar Pradesh). We serve clients across Gurgaon, Noida, and the broader Delhi NCR region."
  },
  {
    question: "What computer and laptop repair services do you offer in Gurgaon?",
    answer: "We offer complete laptop and desktop repair services in Gurgaon including component-level hardware repair, screen replacement, keyboard repair, OS reinstallation, performance tuning, virus removal, and data backup & recovery."
  },
  {
    question: "Do you refill printer cartridges in Noida and Gurgaon?",
    answer: "Yes! We refill both inkjet and laser printer cartridges across Gurgaon and Noida. We supply OEM and compatible cartridges and also offer Annual Maintenance Contracts (AMC) for printer fleets."
  },
  {
    question: "Do you buy back empty toner cartridges?",
    answer: "Absolutely. Our Toner Cartridge Recycling Program buys back empty laser toner cartridges at excellent market prices. Contact us for a buyback quote — it's eco-friendly and pays you for your old cartridges."
  },
  {
    question: "What commercial printing services are available?",
    answer: "We print visiting cards, letterheads, envelopes, brochures, flyers, catalogues, and full brand stationery packages. Custom design is included — ideal for businesses across Delhi NCR."
  },
  {
    question: "Do you offer corporate gifting in Delhi NCR?",
    answer: "Yes, we curate premium corporate gift packages including branded tech accessories, executive hampers, custom-engraved items, and logo-printed merchandise for bulk corporate orders."
  },
];

export default function Home() {
  return (
    <div className="animated">

      {/* ── FAQ JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
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
              }
            ]
          })
        }}
      />

      {/* ── HERO ── */}
      <section className="hero" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container hero-grid">
          <div>
            <div className="hero-subtitle">Professional IT &amp; Printing Solutions — Gurgaon &amp; Noida</div>
            <h1 className="hero-title">Reliable Tech Support &amp; Sustainable Services in Gurgaon &amp; Noida</h1>
            <p className="hero-description">
              At <strong>Comtech Systems</strong>, we deliver top-tier sales, repairs, and eco-friendly recycling
              for computers, laptops, and printers in <strong>Gurgaon</strong> and <strong>Noida Extension</strong>, alongside specialized corporate gifting and
              custom printing solutions across <strong>Delhi NCR</strong>.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>

          {/* Decorative SVG */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <svg width="100%" height="380" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '520px' }}>
              <rect x="16" y="30" width="348" height="200" rx="14" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
              <rect x="36" y="50" width="308" height="140" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="174" y1="230" x2="206" y2="230" stroke="#cbd5e1" strokeWidth="4" strokeLinecap="round" />
              <path d="M150 230L163 258H217L230 230" stroke="#cbd5e1" strokeWidth="1.5" strokeLinejoin="round" />
              <rect x="148" y="258" width="84" height="7" rx="3.5" fill="#e2e8f0" />
              <circle cx="76" cy="108" r="22" fill="#eff1fb" />
              <path d="M69 108H83M76 101V115" stroke="#3b4cb4" strokeWidth="2" strokeLinecap="round" />
              <circle cx="304" cy="108" r="22" fill="#eff1fb" />
              <rect x="296" y="100" width="16" height="16" rx="2" stroke="#3b4cb4" strokeWidth="2" />
              <line x1="300" y1="108" x2="308" y2="108" stroke="#3b4cb4" strokeWidth="2" />

              {/* Animated Loading Dots */}
              <circle cx="170" cy="128" r="4" fill="#94a3b8">
                <animate attributeName="cy" values="128;120;128" dur="1.2s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="fill" values="#94a3b8;#3b4cb4;#94a3b8" dur="1.2s" begin="0s" repeatCount="indefinite" />
              </circle>
              <circle cx="190" cy="128" r="4" fill="#3b4cb4">
                <animate attributeName="cy" values="128;120;128" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
                <animate attributeName="fill" values="#3b4cb4;#94a3b8;#3b4cb4" dur="1.2s" begin="0.2s" repeatCount="indefinite" />
              </circle>
              <circle cx="210" cy="128" r="4" fill="#94a3b8">
                <animate attributeName="cy" values="128;120;128" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
                <animate attributeName="fill" values="#94a3b8;#3b4cb4;#94a3b8" dur="1.2s" begin="0.4s" repeatCount="indefinite" />
              </circle>
            </svg>
          </div>
        </div>
      </section>

      {/* ── SERVICE PILLARS ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Business Offerings</h2>
          <p className="section-subtitle">
            A quick overview of the services we provide to individuals and corporate clients across Gurgaon, Noida, and Delhi NCR.
          </p>
          <div className="features-grid">
            {[
              {
                icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
                title: 'IT & Hardware Services',
                desc: 'Expert repair, optimization, and sales of high-performance laptops and computers in Gurgaon & Noida.',
              },
              {
                icon: <><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /><path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" /></>,
                title: 'Printers & Recycling',
                desc: 'Printer repairs, cartridge refilling, and toner buy-back for eco-friendly recycling across Delhi NCR.',
              },
              {
                icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
                title: 'Corporate Gifting & Printing',
                desc: 'Custom letterheads, professional visiting cards, and executive corporate gifts for businesses in Delhi NCR.',
              },
            ].map((item) => (
              <div className="card" key={item.title}>
                <div className="card-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <h3>{item.title}</h3>
                <p style={{ marginBottom: '14px' }}>{item.desc}</p>
                <Link href="/services" style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent-color)' }}>
                  Learn more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECYCLING BANNER ── */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: '#eff1fb', color: 'var(--accent-color)', padding: '5px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 700, marginBottom: '18px', border: '1px solid #dbeafe' }}>
            Toner Cartridge Recycling Program — Gurgaon &amp; Noida
          </span>
          <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            We Buy Empty Toner Cartridges at Excellent Prices
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '22px', fontSize: '15px' }}>
            Got empty toner cartridges lying around in your Gurgaon or Noida office? Dispose of them responsibly and get paid.
          </p>
          <Link href="/contact" className="btn btn-primary">Request Price Quote</Link>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="container two-col-equal">
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.5px' }}>
              Why Choose Comtech Systems in Gurgaon &amp; Noida?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>
              Providing reliable hardware, network solutions, commercial printing, and technology
              recycling services across Gurgaon, Noida Extension, and Delhi NCR since 2005.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { title: 'Technical Repair Expertise', desc: 'Certified repair diagnostics for laptops, desktops, and industrial printers in Gurgaon & Noida.' },
                { title: 'Eco-Conscious Recycling', desc: 'Environmentally secure hardware disposal and printer cartridge buy-back programs across Delhi NCR.' },
                { title: 'Dual-Branch Support', desc: 'Prompt corporate onsite services spanning Gurgaon (Sector 17A) and Noida Extension (Sector 1).' },
              ].map((point) => (
                <div key={point.title} style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginTop: '2px', flexShrink: 0 }}>✓</div>
                  <div>
                    <h4 style={{ fontWeight: 700, fontSize: '15px', marginBottom: '3px' }}>{point.title}</h4>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ padding: '32px', border: '1px solid var(--border-color)', borderRadius: '12px', background: 'var(--bg-secondary)' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>Ready to Get Started?</h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: '1.7' }}>
              Whether you need to repair your laptop in Gurgaon, order letterheads for your Noida office, or
              recycle empty toner cartridges, we are here to assist you.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
              Contact Our Representative
            </Link>
          </div>
        </div>
      </section>

      {/* ── CITIES / LOCATIONS WE SERVE ── */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
            Areas We Serve
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '15px', maxWidth: '600px', margin: '0 auto 28px' }}>
            Comtech Systems provides on-site and in-store IT repair, printing, and corporate gifting services across the following locations in the Delhi NCR region.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            {[
              'Gurgaon (Gurugram)', 'Sector 17A Gurgaon', 'Noida Extension', 'Sector 1 Noida Extn',
              'Delhi NCR', 'Faridabad', 'Greater Noida', 'Manesar',
              'DLF Phase Gurgaon', 'Sohna Road', 'Golf Course Road', 'MG Road Gurgaon',
            ].map((city) => (
              <span key={city} style={{
                display: 'inline-block',
                background: '#fff',
                border: '1px solid var(--border-color)',
                borderRadius: '50px',
                padding: '6px 16px',
                fontSize: '13px',
                fontWeight: 500,
                color: 'var(--text-secondary)',
              }}>
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ SECTION ── */}
      <section className="section" aria-labelledby="faq-heading">
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2 id="faq-heading" style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px', letterSpacing: '-0.5px', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>
          <p style={{ color: 'var(--text-secondary)', textAlign: 'center', marginBottom: '36px', fontSize: '15px' }}>
            Everything you need to know about Comtech Systems services in Gurgaon &amp; Noida.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqItems.map((faq, index) => (
              <details
                key={index}
                style={{
                  borderTop: '1px solid var(--border-color)',
                  padding: '18px 0',
                  ...(index === faqItems.length - 1 ? { borderBottom: '1px solid var(--border-color)' } : {}),
                }}
              >
                <summary style={{
                  fontWeight: 700,
                  fontSize: '15px',
                  cursor: 'pointer',
                  listStyle: 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  {faq.question}
                  <span style={{ color: 'var(--accent-color)', fontSize: '20px', flexShrink: 0 }}>+</span>
                </summary>
                <p style={{ marginTop: '12px', fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
