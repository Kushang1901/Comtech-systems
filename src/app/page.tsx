import Link from 'next/link';

export default function Home() {
  return (
    <div className="animated">

      {/* ── HERO ── */}
      <section className="hero" style={{ borderBottom: '1px solid var(--border-color)' }}>
        <div className="container hero-grid">
          <div>
            <div className="hero-subtitle">Professional IT &amp; Printing Solutions</div>
            <h1 className="hero-title">Reliable Tech Support &amp; Sustainable Services</h1>
            <p className="hero-description">
              At Comtech Systems, we deliver top-tier sales, repairs, and eco-friendly recycling
              for computers, laptops, and printers, alongside specialized corporate gifting and
              custom printing solutions.
            </p>
            <div className="hero-actions">
              <Link href="/services" className="btn btn-primary">Explore Services</Link>
              <Link href="/contact" className="btn btn-secondary">Get in Touch</Link>
            </div>
          </div>

          {/* Decorative SVG */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="100%" height="280" viewBox="0 0 380 280" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ maxWidth: '380px' }}>
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
              <circle cx="190" cy="128" r="4" fill="#3b4cb4" />
              <circle cx="170" cy="128" r="4" fill="#94a3b8" />
              <circle cx="210" cy="128" r="4" fill="#94a3b8" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── SERVICE PILLARS ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Business Offerings</h2>
          <p className="section-subtitle">
            A quick overview of the services we provide to individuals and corporate clients.
          </p>
          <div className="features-grid">
            {[
              {
                icon: <><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></>,
                title: 'IT & Hardware Services',
                desc: 'Expert repair, optimization, and sales of high-performance laptops and computers.',
              },
              {
                icon: <><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" /><rect x="6" y="14" width="12" height="8" /><path d="M6 8V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" /></>,
                title: 'Printers & Recycling',
                desc: 'Printer repairs, cartridge refilling, and toner buy-back for eco-friendly recycling.',
              },
              {
                icon: <><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
                title: 'Corporate Gifting & Printing',
                desc: 'Custom letterheads, professional visiting cards, and executive corporate gifts.',
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
            Toner Cartridge Recycling Program
          </span>
          <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            We Buy Empty Toner Cartridges at Excellent Prices
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '22px', fontSize: '15px' }}>
            Got empty toner cartridges lying around? Dispose of them responsibly and get paid.
          </p>
          <Link href="/contact" className="btn btn-primary">Request Price Quote</Link>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section">
        <div className="container two-col-equal">
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '18px', letterSpacing: '-0.5px' }}>
              Why Choose Comtech Systems?
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px' }}>
              Providing reliable hardware, network solutions, commercial printing, and technology
              recycling services across Gurgaon and Noida.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { title: 'Technical Repair Expertise', desc: 'Certified repair diagnostics for laptops, desktops, and industrial printers.' },
                { title: 'Eco-Conscious Recycling', desc: 'Environmentally secure hardware disposal and printer cartridge buy-back programs.' },
                { title: 'Dual-Branch Support', desc: 'Prompt corporate onsite services spanning Gurgaon and Noida Extension.' },
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
              Whether you need to repair your laptop, order letterheads for your office, or
              recycle empty toner cartridges, we are here to assist you.
            </p>
            <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
              Contact Our Representative
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
