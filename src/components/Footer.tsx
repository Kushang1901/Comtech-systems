import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 style={{ color: 'var(--accent-color)', fontWeight: 700, fontFamily: "'Fredoka', sans-serif", letterSpacing: '0.2px', textTransform: 'uppercase', fontSize: '20px' }}>COMTECH SYSTEMS</h3>
            <p style={{ marginBottom: '16px' }}>
              Your trusted partner for computer sales, repairs, cartridge refilling, and sustainable electronics recycling.
            </p>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              Managed by Shashi Bhushan Sharma
            </p>
          </div>
          
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/services">Services & Products</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Contact Info</h3>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.95-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11a16 16 0 0 0 6 6l.92-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 17z" />
                </svg>
                <div>
                  <a href="tel:+919811767644" style={{ display: 'block', fontSize: '14px', lineHeight: '1.4' }}>+91 9811767644</a>
                  <a href="tel:+918076885979" style={{ display: 'block', fontSize: '14px', lineHeight: '1.4', marginTop: '4px' }}>+91 8076885979</a>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div style={{ wordBreak: 'break-all' }}>
                  <a href="mailto:comtechsystems.sec18@gmail.com" style={{ display: 'block', fontSize: '13px', lineHeight: '1.4' }}>comtechsystems.sec18@gmail.com</a>
                  <a href="mailto:sbsharma7644@gmail.com" style={{ display: 'block', fontSize: '13px', lineHeight: '1.4', marginTop: '4px' }}>sbsharma7644@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h3>Locations</h3>
            <ul className="footer-links" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>Gurgaon (Head Office)</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Ground Floor, 669/17, Sukhrali Road, Sector 17A, Gurgaon - 122001</p>
                </div>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                  <path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <strong style={{ fontSize: '14px', color: 'var(--text-primary)', display: 'block', marginBottom: '2px' }}>Noida Branch</strong>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>Sec-1, Noida Extn, Uttar Pradesh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Comtech Systems. All rights reserved.</p>
          <p>Sales | Service | Recycling | Printing</p>
        </div>
      </div>
    </footer>
  );
}
