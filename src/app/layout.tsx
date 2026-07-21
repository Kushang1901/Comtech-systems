import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import QuoteModal from "@/components/QuoteModal";
import FloatingWidgets from "@/components/FloatingWidgets";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.comtech-systems.in'),
  title: {
    default: "Comtech Systems | Laptop & Printer Repair, Printing & Corporate Gifting in Gurgaon & Noida",
    template: "%s | Comtech Systems — Gurgaon & Noida",
  },
  description: "Comtech Systems, Gurgaon & Noida Extension — trusted partner for computer & laptop repairs, printer cartridge refilling, commercial printing (visiting cards, letterheads), corporate gifting, and empty toner cartridge recycling buyback. Managed by Shashi Bhushan Sharma.",
  keywords: [
    // Brand
    "Comtech Systems",
    "Comtech Systems Gurgaon",
    "Comtech Systems Noida",
    "comtech-systems.in",
    // Computer / Laptop
    "Computer Repair Gurgaon",
    "Laptop Repair Gurgaon",
    "Laptop Repair Near Me Gurgaon",
    "Desktop Repair Gurgaon",
    "Computer Service Center Gurgaon",
    "Laptop Service Center Noida Extension",
    "Computer AMC Gurgaon",
    // Printer
    "Printer Cartridge Refilling Gurgaon",
    "Printer Cartridge Refilling Noida",
    "Printer Repair Gurgaon",
    "Laser Printer Repair Delhi NCR",
    "HP Printer Repair Gurgaon",
    "Ink Cartridge Refill Gurgaon",
    // Recycling / Buyback
    "Toner Cartridge Recycling Gurgaon",
    "Empty Toner Cartridge Buyback Delhi",
    "Cartridge Recycling Delhi NCR",
    // Printing
    "Visiting Card Printing Gurgaon",
    "Visiting Card Printing Noida",
    "Letterhead Printing Gurgaon",
    "Commercial Printing Gurgaon",
    "Business Card Printing Delhi NCR",
    "Brochure Printing Gurgaon",
    // Corporate Gifting
    "Corporate Gifting Gurgaon",
    "Corporate Gifts Noida Extension",
    "Corporate Gifting Delhi NCR",
    "Customized Corporate Gifts Gurgaon",
    // Leadership / trust
    "Shashi Bhushan Sharma",
    "IT Services Gurgaon",
    "IT Solutions Gurgaon Haryana",
  ],
  alternates: {
    canonical: 'https://www.comtech-systems.in',
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Comtech Systems | IT Repair, Printing & Corporate Gifting — Gurgaon & Noida",
    description: "Gurgaon and Noida Extension's trusted partner for computer repair, printer cartridge refilling, corporate gifting, commercial printing, and empty toner cartridge recycling buyback.",
    url: "https://www.comtech-systems.in",
    siteName: "Comtech Systems",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Comtech Systems — IT Repair & Printing Services in Gurgaon & Noida",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comtech Systems | IT Repair & Printing — Gurgaon & Noida',
    description: 'Trusted IT repair, printer cartridge refilling, commercial printing, corporate gifting & eco-friendly toner buyback in Gurgaon and Noida.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />

        {/* ── LocalBusiness Schema ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.comtech-systems.in/#localbusiness",
              "name": "Comtech Systems",
              "legalName": "Comtech Systems",
              "description": "Comtech Systems is Gurgaon and Noida Extension's trusted partner for computer and laptop repairs, printer cartridge refilling, commercial printing (visiting cards, letterheads), corporate gifting, and empty toner cartridge recycling buyback.",
              "slogan": "Reliable Tech Support & Sustainable Services in Gurgaon & Noida",
              "image": "https://www.comtech-systems.in/logo.png",
              "logo": "https://www.comtech-systems.in/logo.png",
              "url": "https://www.comtech-systems.in",
              "telephone": "+919811767644",
              "email": "sbsharma@comtech-systems.in",
              "priceRange": "$$",
              "currenciesAccepted": "INR",
              "paymentAccepted": "Cash, UPI, Bank Transfer",
              "foundingDate": "2005",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Gurgaon",
                  "sameAs": "https://en.wikipedia.org/wiki/Gurugram"
                },
                {
                  "@type": "City",
                  "name": "Noida",
                  "sameAs": "https://en.wikipedia.org/wiki/Noida"
                },
                {
                  "@type": "City",
                  "name": "Delhi",
                  "sameAs": "https://en.wikipedia.org/wiki/Delhi"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Delhi NCR"
                }
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
                "IT Support Services",
                "Hardware Maintenance"
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
              "geo": [
                {
                  "@type": "GeoCoordinates",
                  "latitude": "28.4548",
                  "longitude": "77.0154"
                }
              ],
              "hasMap": "https://maps.google.com/?q=Comtech+Systems+Sector+17A+Gurgaon",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "19:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "11:00",
                  "closes": "16:00"
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "47",
                "bestRating": "5",
                "worstRating": "1"
              },
              "sameAs": [
                "https://www.linkedin.com/company/comtech-systems-gurgaon",
                "https://www.facebook.com/comtechsystemsgurgaon",
                "https://github.com/Kushang1901/Comtech-systems"
              ]
            })
          }}
        />

        {/* ── WebSite + SearchAction Schema (enables Sitelinks Search Box) ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.comtech-systems.in/#website",
              "url": "https://www.comtech-systems.in",
              "name": "Comtech Systems",
              "description": "IT Repair, Commercial Printing & Corporate Gifting in Gurgaon & Noida",
              "publisher": {
                "@id": "https://www.comtech-systems.in/#localbusiness"
              },
              "inLanguage": "en-IN",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.comtech-systems.in/services?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* ── Organization Schema ── */}
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
              "founder": {
                "@type": "Person",
                "name": "Shashi Bhushan Sharma",
                "jobTitle": "Founder & CEO"
              },
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
      </head>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Preloader />
        <QuoteModalProvider>
          <Navbar />
          <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {children}
          </main>
          <Footer />
          <QuoteModal />
          <FloatingWidgets />
        </QuoteModalProvider>
        <Script
          src="https://www.google.com/recaptcha/api.js?render=6Ld2fFUtAAAAALuUdAnhhkpySAQf3EjDL3GV1Xb5"
          strategy="afterInteractive"
        />
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
