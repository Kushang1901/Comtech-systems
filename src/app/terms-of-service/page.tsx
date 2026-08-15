import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service | Comtech Systems — Gurgaon & Noida',
  description: 'Terms of Service for Comtech Systems. Read our rules, terms, and guidelines for hardware sales, repair services, and custom printing.',
  alternates: {
    canonical: 'https://www.comtech-systems.in/terms-of-service',
  },
};

export default function TermsOfService() {
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
                "name": "Terms of Service",
                "item": "https://www.comtech-systems.in/terms-of-service"
              }
            ]
          })
        }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>Terms of Service</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Last Updated: August 15, 2026. Please read these terms carefully.
          </p>
        </div>
      </section>

      {/* ── TERMS CONTENT ── */}
      <section className="section" style={{ lineHeight: '1.8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ marginBottom: '20px' }}>
            Welcome to <strong>Comtech Systems</strong>! These Terms of Service outline the rules and regulations for the use of Comtech Systems&apos; Website, located at <Link href="/">https://www.comtech-systems.in</Link>, and the procurement of our IT support, repair, commercial printing, and corporate gifting services.
          </p>
          <p style={{ marginBottom: '20px' }}>
            By accessing this website, we assume you accept these terms and conditions. Do not continue to use Comtech Systems if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>1. Terminology</h2>
          <p style={{ marginBottom: '20px' }}>
            The following terminology applies to these Terms of Service, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company (Comtech Systems). &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>2. Services &amp; Repairs</h2>
          <p style={{ marginBottom: '16px' }}>
            Comtech Systems provides computer, laptop, and printer sales &amp; repair services, cartridge refilling, and printing/gifting solutions.
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li><strong>Diagnostics &amp; Estimates</strong>: Diagnostic fees apply for computer and printer repairs. We will provide an estimate before initiating any hardware repair work.</li>
            <li><strong>Data Backup</strong>: While we make every effort to safeguard your data, <em>the client is solely responsible for backing up all data, software, and files</em> before handing over devices for repair. Comtech Systems is not liable for data loss during troubleshooting or repair.</li>
            <li><strong>Unclaimed Devices</strong>: Items left unclaimed for more than 90 days after service completion notifications will be disposed of or sold to cover service costs.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>3. Toner Cartridge Recycling</h2>
          <p style={{ marginBottom: '20px' }}>
            Our buy-back program for empty toner cartridges is subject to inspecting the physical condition of the cartridges. We only buy back original (OEM) empty cartridges that have not been damaged or refilled by non-authorized parties, unless explicitly agreed upon in writing. Final pricing is determined after technical inspection.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>4. Commercial Printing &amp; Custom Orders</h2>
          <p style={{ marginBottom: '20px' }}>
            For custom printing orders (visiting cards, letterheads, brochures) and customized corporate gifts, the client is responsible for reviewing and approving all draft designs, spellings, layouts, and print proofs. Once a proof is approved in writing (via email or WhatsApp) and printing begins, Comtech Systems will not be held responsible for any errors present in the approved proof. Custom orders are non-refundable.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>5. Payment Terms</h2>
          <p style={{ marginBottom: '20px' }}>
            Payments for services rendered must be settled upon completion of the repair or delivery of the goods. For bulk corporate gifting, commercial printing, or AMC orders, standard advance payment and invoicing cycles (e.g., 50% advance, 50% upon delivery) will apply as specified in the individual quotations or invoices. We accept Cash, UPI, and Bank Transfers.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>6. Cookies</h2>
          <p style={{ marginBottom: '20px' }}>
            We employ the use of cookies. By accessing Comtech Systems, you agreed to use cookies in agreement with Comtech Systems&apos; Privacy Policy. Most interactive websites use cookies to let us retrieve the user&apos;s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>7. License &amp; Intellectual Property</h2>
          <p style={{ marginBottom: '20px' }}>
            Unless otherwise stated, Comtech Systems and/or its licensors own the intellectual property rights for all material on Comtech Systems. All intellectual property rights are reserved. You may access this from Comtech Systems for your own personal use subjected to restrictions set in these terms of service.
          </p>
          <p style={{ marginBottom: '12px' }}>You must not:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li>Republish material from Comtech Systems</li>
            <li>Sell, rent or sub-license material from Comtech Systems</li>
            <li>Reproduce, duplicate or copy material from Comtech Systems</li>
            <li>Redistribute content from Comtech Systems</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>8. Governing Law</h2>
          <p style={{ marginBottom: '20px' }}>
            These terms and conditions are governed by and construed in accordance with the laws of India, and any disputes relating to these terms and conditions will be subject to the exclusive jurisdiction of the courts in Gurgaon, Haryana.
          </p>
        </div>
      </section>
    </div>
  );
}
