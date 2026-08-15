import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Disclaimer | Comtech Systems — Gurgaon & Noida',
  description: 'Disclaimer policy for Comtech Systems. Details our limitations of liability regarding laptop repair, pricing, and custom printing.',
  alternates: {
    canonical: 'https://www.comtech-systems.in/disclaimer',
  },
};

export default function Disclaimer() {
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
                "name": "Disclaimer",
                "item": "https://www.comtech-systems.in/disclaimer"
              }
            ]
          })
        }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>Disclaimer</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Last Updated: August 15, 2026. Important business disclaimers.
          </p>
        </div>
      </section>

      {/* ── DISCLAIMER CONTENT ── */}
      <section className="section" style={{ lineHeight: '1.8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ marginBottom: '20px' }}>
            If you require any more information or have any questions about our site&apos;s disclaimer, please feel free to contact us by email at <a href="mailto:sbsharma@comtech-systems.in" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>sbsharma@comtech-systems.in</a>.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Disclaimers for Comtech Systems</h2>
          <p style={{ marginBottom: '20px' }}>
            All the information on this website — <Link href="/">https://www.comtech-systems.in</Link> — is published in good faith and for general information purpose only. Comtech Systems does not make any warranties about the completeness, reliability, and accuracy of this information. Any action you take upon the information you find on this website (Comtech Systems), is strictly at your own risk. Comtech Systems will not be liable for any losses and/or damages in connection with the use of our website.
          </p>
          <p style={{ marginBottom: '20px' }}>
            From our website, you can visit other websites by following hyperlinks to such external sites. While we strive to provide only quality links to useful and ethical websites, we have no control over the content and nature of these sites. These links to other websites do not imply a recommendation for all the content found on these sites. Site owners and content may change without notice and may occur before we have the opportunity to remove a link which may have gone &apos;bad&apos;.
          </p>
          <p style={{ marginBottom: '20px' }}>
            Please be also aware that when you leave our website, other sites may have different privacy policies and terms which are beyond our control. Please be sure to check the Privacy Policies of these sites as well as their &quot;Terms of Service&quot; before engaging in any business or uploading any information.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Professional Services &amp; Repairs</h2>
          <p style={{ marginBottom: '20px' }}>
            Repair services involve working with hardware and software that may have pre-existing damage, software corruption, or component wear. Comtech Systems cannot guarantee that every device is repairable. We are not responsible for any pre-existing conditions that are revealed during diagnostics, nor are we liable for loss of data on devices left for servicing. Clients are advised to backup all personal data prior to diagnostic or repair procedures.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Pricing &amp; Availability</h2>
          <p style={{ marginBottom: '20px' }}>
            While we try to keep prices and service packages updated on our website, availability and final pricing for spare parts (such as laptop screens, batteries, keyboards, and printer drums) and custom printing options are subject to market changes and inventory. Quotations provided via email, WhatsApp, or phone calls are valid for a limited period, as specified in the quote.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Consent</h2>
          <p style={{ marginBottom: '20px' }}>
            By using our website, you hereby consent to our disclaimer and agree to its terms.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Update</h2>
          <p style={{ marginBottom: '20px' }}>
            Should we update, amend or make any changes to this document, those changes will be prominently posted here.
          </p>
        </div>
      </section>
    </div>
  );
}
