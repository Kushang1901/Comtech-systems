import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { QuoteModalProvider } from "@/context/QuoteModalContext";
import QuoteModal from "@/components/QuoteModal";
import FloatingWidgets from "@/components/FloatingWidgets";
import Preloader from "@/components/Preloader";

export const metadata: Metadata = {
  metadataBase: new URL('https://comtechsystems.in'),
  title: {
    default: "Comtech Systems | Laptop & Printer Repair, Printing & Corporate Gifting",
    template: "%s | Comtech Systems",
  },
  description: "Gurgaon and Noida Extension's trusted partner for computer & laptop repairs, printer cartridge refilling, commercial printing (visiting cards, letterheads), corporate gifting, and empty toner cartridge recycling buyback under Shashi Bhushan Sharma.",
  keywords: [
    "Comtech Systems",
    "Computer Repair Gurgaon",
    "Laptop Repair Gurgaon",
    "Printer Cartridge Refilling Delhi",
    "Toner Cartridge Recycling",
    "Corporate Gifting Noida Extension",
    "Visiting Card Printing Delhi",
    "Letterhead Printing",
    "Buyback empty toner cartridges",
    "Shashi Bhushan Sharma"
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Comtech Systems | IT Solutions & Commercial Printing",
    description: "Gurgaon and Noida Extension's trusted partner for computer repair, printer cartridge refilling, corporate gifting, and empty toner cartridge recycling buyback.",
    url: "https://comtechsystems.in",
    siteName: "Comtech Systems",
    images: [
      {
        url: "/sales&repair.png",
        width: 1200,
        height: 630,
        alt: "Comtech Systems Services",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
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
      </body>
    </html>
  );
}

