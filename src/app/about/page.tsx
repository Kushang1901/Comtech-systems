import Link from 'next/link';

export default function About() {
  return (
    <div className="animated">

      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>About Comtech Systems</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto' }}>
            A trusted name in IT sales, device repair, eco-friendly hardware recycling, and printing solutions.
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
              Founded and managed by <strong>Shashi Bhushan Sharma</strong>, Comtech Systems has grown from a local
              service provider to a multi-faceted enterprise serving clients across Gurgaon and the Noida Extension
              area. We specialize in maintaining the hardware that keeps your business running smoothly, while
              providing top-notch creative and custom-tailored branding options through print.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '15px', lineHeight: '1.8' }}>
              What sets us apart is our holistic cycle approach. We don&apos;t just sell you hardware or repair it — we
              help you recycle it. Our <strong>Toner Cartridge Recycling Program</strong> buys back empty cartridges,
              ensuring that corporate printing setups can run sustainably and cost-effectively.
            </p>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '26px', fontSize: '15px', lineHeight: '1.8' }}>
              From bespoke visiting cards to executive letterhead printing and high-end corporate gifts, we bring
              premium branding and quality craftsmanship to every design.
            </p>
            <Link href="/contact" className="btn btn-primary">Connect With Us</Link>
          </div>

          {/* Core Values card */}
          <div style={{ padding: '28px', border: '1px solid var(--border-color)', borderRadius: '12px', background: '#fff', boxShadow: 'var(--shadow-md)' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 800, marginBottom: '20px' }}>Our Core Values</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { num: '1', title: 'Quality & Integrity', desc: 'We use certified premium spare parts for all computer and printer repairs, ensuring lasting device lifespan.' },
                { num: '2', title: 'Environmental Responsibility', desc: 'We strongly advocate for circular electronics, buying back empty toner cartridges and arranging safe e-waste recycling.' },
                { num: '3', title: 'Customer Satisfaction', desc: 'Offering localized onsite support, quick turnaround times, and professional transparency for all client jobs.' },
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

      {/* ── QUOTE ── */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '14px', opacity: 0.5 }}>
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 2.5-1 4.966-3 6.071L3 21zM17 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 2v6c0 1.25.75 2 2 2h3c0 2.5-1 4.966-3 6.071L17 21z" />
          </svg>
          <blockquote style={{ fontSize: '17px', fontStyle: 'italic', color: 'var(--text-primary)', fontWeight: 500, marginBottom: '18px', lineHeight: '1.7' }}>
            &ldquo;Sustainability and technological reliability shouldn&apos;t be mutually exclusive. We help businesses optimize their hardware setups while keeping an eye on our collective environmental impact.&rdquo;
          </blockquote>
          <p style={{ fontWeight: 700, fontSize: '15px' }}>Shashi Bhushan Sharma</p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Founder &amp; CEO, Comtech Systems</p>
        </div>
      </section>
    </div>
  );
}
