import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | Comtech Systems — Gurgaon & Noida',
  description: 'Privacy Policy for Comtech Systems. Read about how we collect, use, and protect your personal information on our website.',
  alternates: {
    canonical: 'https://www.comtech-systems.in/privacy-policy',
  },
};

export default function PrivacyPolicy() {
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
                "name": "Privacy Policy",
                "item": "https://www.comtech-systems.in/privacy-policy"
              }
            ]
          })
        }}
      />

      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '48px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>Privacy Policy</h1>
          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Last Updated: August 15, 2026. Your privacy is important to us.
          </p>
        </div>
      </section>

      {/* ── POLICY CONTENT ── */}
      <section className="section" style={{ lineHeight: '1.8' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ marginBottom: '20px' }}>
            At <strong>Comtech Systems</strong>, accessible from <Link href="/">https://www.comtech-systems.in</Link>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Comtech Systems and how we use it.
          </p>
          <p style={{ marginBottom: '20px' }}>
            If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Consent</h2>
          <p style={{ marginBottom: '20px' }}>
            By using our website, you hereby consent to our Privacy Policy and agree to its terms.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Information We Collect</h2>
          <p style={{ marginBottom: '20px' }}>
            The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
          </p>
          <p style={{ marginBottom: '20px' }}>
            If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>How We Use Your Information</h2>
          <p style={{ marginBottom: '12px' }}>We use the information we collect in various ways, including to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li>Provide, operate, and maintain our website and IT repair services</li>
            <li>Improve, personalize, and expand our website</li>
            <li>Understand and analyze how you use our website</li>
            <li>Develop new products, services, features, and functionality</li>
            <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
            <li>Send you emails or contact you for service updates</li>
            <li>Find and prevent fraud</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Log Files</h2>
          <p style={{ marginBottom: '20px' }}>
            Comtech Systems follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Cookies and Web Beacons</h2>
          <p style={{ marginBottom: '20px' }}>
            Like any other website, Comtech Systems uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Google DoubleClick DART Cookie</h2>
          <p style={{ marginBottom: '20px' }}>
            Google is one of the third-party vendors on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL — <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>https://policies.google.com/technologies/ads</a>.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Our Advertising Partners</h2>
          <p style={{ marginBottom: '20px' }}>
            Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li>
              Google: <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-color)' }}>https://policies.google.com/technologies/ads</a>
            </li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>Third Party Privacy Policies</h2>
          <p style={{ marginBottom: '20px' }}>
            Comtech Systems&apos; Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
          </p>
          <p style={{ marginBottom: '20px' }}>
            You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.
          </p>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>GDPR Data Protection Rights</h2>
          <p style={{ marginBottom: '12px' }}>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li><strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
            <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
            <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
            <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
            <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
          </ul>

          <h2 style={{ fontSize: '20px', fontWeight: 700, marginTop: '32px', marginBottom: '12px' }}>CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
          <p style={{ marginBottom: '12px' }}>Under the CCPA, among other rights, California consumers have the right to:</p>
          <ul style={{ paddingLeft: '20px', marginBottom: '20px', listStyleType: 'disc' }}>
            <li>Request that a business that collects a consumer&apos;s personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
            <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
            <li>Request that a business that sells a consumer&apos;s personal data, not sell the consumer&apos;s personal data.</li>
          </ul>
          <p style={{ marginBottom: '20px' }}>
            If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
          </p>
        </div>
      </section>
    </div>
  );
}
