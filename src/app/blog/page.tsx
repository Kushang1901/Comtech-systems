import { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from './posts';
import { MapPin, Calendar, Clock, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | IT Repairs, Printer Tips & Recycling Insights — Comtech Systems',
  description: 'Read the latest guides, tips, and insights on computer repair, printer maintenance, toner cartridge refilling, and sustainable recycling from Comtech Systems.',
  keywords: [
    'Comtech Systems Blog',
    'Laptop repair tips Gurgaon',
    'Printer servicing guides Noida',
    'Toner cartridge recycling Delhi',
    'IT support blog India'
  ],
  alternates: {
    canonical: 'https://www.comtech-systems.in/blog',
  },
};

export default function BlogIndex() {
  return (
    <div className="animated">
      {/* ── BreadcrumbList JSON-LD ── */}
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
                "name": "Blog",
                "item": "https://www.comtech-systems.in/blog"
              }
            ]
          })
        }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <span style={{ display: 'inline-block', background: '#eff1fb', color: 'var(--accent-color)', padding: '5px 14px', borderRadius: '50px', fontSize: '12px', fontWeight: 700, marginBottom: '14px', border: '1px solid #dbeafe' }}>
            Resource Center
          </span>
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>
            Tech Insights &amp; Guides
          </h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Expert advice on computer maintenance, office printing efficiency, and sustainable electronics recycling from Comtech Systems.
          </p>
        </div>
      </section>

      {/* ── BLOG LISTING ── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', margin: '20px 0' }}>
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1px solid var(--border-color)',
                  borderRadius: '12px',
                  background: '#fff',
                  overflow: 'hidden',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                }}
                className="blog-card"
              >
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <span style={{
                      background: '#eff1fb',
                      color: 'var(--accent-color)',
                      padding: '4px 10px',
                      borderRadius: '50px',
                      fontSize: '12px',
                      fontWeight: 600
                    }}>
                      {post.category}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px', lineHeight: '1.4' }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h2>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                    {post.description}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-color)', paddingTop: '16px', marginTop: 'auto' }}>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <Calendar size={12} /> {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        fontSize: '13px',
                        fontWeight: 600,
                        color: 'var(--accent-color)',
                        textDecoration: 'none'
                      }}
                    >
                      Read Post <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '780px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Have a Technical Question or Hardware Problem?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '22px', fontSize: '15px' }}>
            Our certified engineers in Gurgaon and Noida are happy to assist you with diagnostics and support.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
            <Link href="/services" className="btn btn-secondary">Our Services</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
