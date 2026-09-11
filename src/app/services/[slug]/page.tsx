import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { servicesData, getServiceBySlug } from '@/data/servicesData';
import ServiceDetailActions from '@/components/ServiceDetailActions';
import {
  Check,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Monitor,
  Zap,
  HardDrive,
  Briefcase,
  Droplet,
  Wrench,
  RefreshCw,
  FileCheck,
  PackageCheck,
  Network,
  CreditCard,
  FileText,
  Layers,
  BookOpen,
  UserCheck,
  Receipt,
  Gift,
  Smartphone,
  Award,
  Sparkles,
  HeartHandshake,
  ShoppingBag,
  MapPin,
  HelpCircle,
  Sparkle,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Pre-render canonical slugs & all aliases at build time
export async function generateStaticParams() {
  const paramsList: { slug: string }[] = [];
  servicesData.forEach((service) => {
    paramsList.push({ slug: service.slug });
    service.aliases.forEach((alias) => {
      paramsList.push({ slug: alias });
    });
  });
  return paramsList;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: 'Service Not Found | Comtech Systems',
      description: 'The requested service could not be found.',
    };
  }

  const canonicalUrl = `https://www.comtech-systems.in/services/${service.slug}`;

  return {
    title: `${service.meta.title} | Comtech Systems`,
    description: service.meta.description,
    keywords: service.meta.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | Comtech Systems`,
      description: service.meta.description,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: service.title,
      description: service.meta.description,
      images: [service.image],
    },
  };
}

// Icon helper to map icon name to Lucide icon component
function renderCapabilityIcon(iconName: string) {
  const props = { size: 24, strokeWidth: 2, className: 'capability-icon-svg' };
  switch (iconName) {
    case 'Cpu':
      return <Cpu {...props} />;
    case 'Monitor':
      return <Monitor {...props} />;
    case 'Zap':
      return <Zap {...props} />;
    case 'ShieldCheck':
      return <ShieldCheck {...props} />;
    case 'HardDrive':
      return <HardDrive {...props} />;
    case 'Briefcase':
      return <Briefcase {...props} />;
    case 'Droplet':
      return <Droplet {...props} />;
    case 'Wrench':
      return <Wrench {...props} />;
    case 'RefreshCw':
      return <RefreshCw {...props} />;
    case 'FileCheck':
      return <FileCheck {...props} />;
    case 'PackageCheck':
      return <PackageCheck {...props} />;
    case 'Network':
      return <Network {...props} />;
    case 'CreditCard':
      return <CreditCard {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Layers':
      return <Layers {...props} />;
    case 'BookOpen':
      return <BookOpen {...props} />;
    case 'UserCheck':
      return <UserCheck {...props} />;
    case 'Receipt':
      return <Receipt {...props} />;
    case 'Gift':
      return <Gift {...props} />;
    case 'Smartphone':
      return <Smartphone {...props} />;
    case 'Award':
      return <Award {...props} />;
    case 'Sparkles':
      return <Sparkles {...props} />;
    case 'HeartHandshake':
      return <HeartHandshake {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    default:
      return <Sparkle {...props} />;
  }
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  // Related other services
  const otherServices = servicesData.filter((item) => item.id !== service.id);

  // Schema.org Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      '@id': 'https://www.comtech-systems.in/#localbusiness',
      name: 'Comtech Systems',
      url: 'https://www.comtech-systems.in',
      telephone: '+919811767644',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Sukhrali Road, Sector 17A',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        postalCode: '122001',
        addressCountry: 'IN',
      },
    },
    areaServed: service.serviceAreas.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area,
    })),
    serviceType: service.shortTitle,
    url: `https://www.comtech-systems.in/services/${service.slug}`,
  };

  // Schema.org BreadcrumbList
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Comtech Systems',
        item: 'https://www.comtech-systems.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services & Products',
        item: 'https://www.comtech-systems.in/services',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.shortTitle,
        item: `https://www.comtech-systems.in/services/${service.slug}`,
      },
    ],
  };

  // Schema.org FAQPage
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="service-detail-page animated">
      {/* ── Structured Data / JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── BREADCRUMB & BACK NAVIGATION ── */}
      <div className="service-breadcrumb-bar">
        <div className="container">
          <div className="breadcrumb-nav">
            <Link href="/services" className="back-link">
              <ArrowLeft size={16} /> All Services
            </Link>
            <span className="breadcrumb-separator">/</span>
            <span className="breadcrumb-current">{service.shortTitle}</span>
          </div>
        </div>
      </div>

      {/* ── HERO SECTION ── */}
      <section className="service-detail-hero">
        <div className="container service-hero-grid">
          <div className="service-hero-content">
            <div className="service-badge-pill">
              <span className="badge-dot" />
              {service.tag}
            </div>

            <h1 className="service-hero-title">{service.title}</h1>

            <p className="service-hero-subtitle">{service.subtitle}</p>

            <p className="service-hero-desc">{service.description}</p>

            {/* Highlights checkmarks */}
            <ul className="service-hero-highlights">
              {service.highlights.map((highlight) => (
                <li key={highlight}>
                  <Check size={16} className="highlight-check-icon" strokeWidth={3} />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Interactive Actions */}
            <ServiceDetailActions
              serviceTitle={service.title}
              quoteServiceType={service.quoteServiceType}
              variant="hero"
            />
          </div>

          <div className="service-hero-visual">
            <div className="service-hero-image-wrapper">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 550px"
                className="service-hero-img"
              />
              <div className="service-hero-image-badge">
                <strong>19+ Years</strong>
                <span>Serving Delhi NCR</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KEY STATS RIBBON ── */}
      <section className="service-stats-section">
        <div className="container">
          <div className="service-stats-grid">
            {service.stats.map((stat) => (
              <div key={stat.label} className="service-stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES & SUB-SERVICES ── */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Comprehensive Solutions</span>
            <h2 className="section-main-heading">Specialized Capabilities &amp; Services</h2>
            <p className="section-sub-heading">
              Engineered with precision for businesses, professionals, and home users across Gurgaon &amp; Noida.
            </p>
          </div>

          <div className="capabilities-grid">
            {service.capabilities.map((cap) => (
              <div key={cap.title} className="capability-card">
                <div className="capability-icon-box">
                  {renderCapabilityIcon(cap.iconName)}
                </div>
                <h3 className="capability-title">{cap.title}</h3>
                <p className="capability-desc">{cap.description}</p>
                <ul className="capability-features">
                  {cap.features.map((feat) => (
                    <li key={feat}>
                      <Check size={14} className="feat-check" strokeWidth={2.5} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECS & PROBLEM RESOLUTION MATRIX ── */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Technical Parameters</span>
            <h2 className="section-main-heading">{service.specsTitle}</h2>
            <p className="section-sub-heading">{service.specsSubtitle}</p>
          </div>

          <div className="specs-table-wrapper">
            <table className="specs-table">
              <thead>
                <tr>
                  <th>Category / Issue</th>
                  <th>Solution / Specification</th>
                  <th>Timeline / Parameter</th>
                </tr>
              </thead>
              <tbody>
                {service.specs.map((row) => (
                  <tr key={row.label}>
                    <td className="spec-label-col">
                      <strong>{row.label}</strong>
                    </td>
                    <td className="spec-value-col">{row.value}</td>
                    <td className="spec-note-col">
                      {row.note && <span className="spec-tag">{row.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 4-STEP PROCESS WORKFLOW ── */}
      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">How It Works</span>
            <h2 className="section-main-heading">{service.processTitle}</h2>
            <p className="section-sub-heading">{service.processSubtitle}</p>
          </div>

          <div className="process-steps-grid">
            {service.process.map((step) => (
              <div key={step.stepNumber} className="process-step-card">
                <div className="step-number-badge">{step.stepNumber}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL BRANCH & SERVICE AREAS ── */}
      <section className="section section-bg">
        <div className="container">
          <div className="service-locations-box">
            <div className="locations-text">
              <span className="section-eyebrow">Local Coverage</span>
              <h2 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.5px' }}>
                Fast On-Site &amp; Storefront Support Across Delhi NCR
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                With fully equipped hubs in <strong>Gurgaon Sector 17A</strong> and <strong>Noida Extension Sector 1</strong>, our field engineers and logistics team provide prompt pickup, doorstep delivery, and corporate onsite technical service across the following hubs:
              </p>
              <div className="service-area-pills">
                {service.serviceAreas.map((area) => (
                  <span key={area} className="area-pill">
                    <MapPin size={13} style={{ color: 'var(--accent-color)' }} />
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="branches-summary-card">
              <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
                Direct Branch Desks
              </h3>
              <div className="branch-item">
                <div className="branch-name">Gurgaon (Head Office)</div>
                <div className="branch-address">Sukhrali Road, Sector 17A, Gurgaon - 122001</div>
                <a href="tel:+919811767644" className="branch-phone">+91 9811767644</a>
              </div>
              <div className="branch-item" style={{ marginTop: '14px' }}>
                <div className="branch-name">Noida Extension Branch</div>
                <div className="branch-address">Sector 1, Noida Extension, Uttar Pradesh</div>
                <a href="tel:+918076885979" className="branch-phone">+91 8076885979</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ── */}
      <section className="section">
        <div className="container" style={{ maxWidth: '880px' }}>
          <div className="section-header-center">
            <span className="section-eyebrow">Got Questions?</span>
            <h2 className="section-main-heading">Frequently Asked Questions</h2>
            <p className="section-sub-heading">
              Everything you need to know about our {service.shortTitle.toLowerCase()} services in Gurgaon &amp; Noida.
            </p>
          </div>

          <div className="faqs-container">
            {service.faqs.map((faq) => (
              <div key={faq.question} className="faq-item-card">
                <h3 className="faq-question">
                  <HelpCircle size={18} className="faq-question-icon" />
                  {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CONVERSION CTA BANNER ── */}
      <section className="service-cta-banner">
        <div className="container">
          <div className="service-cta-inner">
            <span className="cta-tag">Ready for Prompt Support?</span>
            <h2 className="cta-headline">Get an Upfront Quote for {service.shortTitle}</h2>
            <p className="cta-sub">
              Contact our team today for transparent pricing, certified technical repair, bulk corporate inquiries, or sample reviews in Gurgaon, Noida &amp; Delhi NCR.
            </p>
            <ServiceDetailActions
              serviceTitle={service.title}
              quoteServiceType={service.quoteServiceType}
              variant="banner"
            />
          </div>
        </div>
      </section>

      {/* ── EXPLORE OTHER SERVICES ── */}
      <section className="section section-bg">
        <div className="container">
          <div className="section-header-center">
            <span className="section-eyebrow">Explore More</span>
            <h2 className="section-main-heading">Other Services from Comtech Systems</h2>
            <p className="section-sub-heading">
              Complete technology lifecycle and branding solutions under one roof.
            </p>
          </div>

          <div className="other-services-grid">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/services/${other.slug}`}
                className="other-service-card"
              >
                <div className="other-service-img-wrap">
                  <Image
                    src={other.image}
                    alt={other.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="other-service-img"
                  />
                </div>
                <div className="other-service-content">
                  <span className="other-service-tag">{other.tag}</span>
                  <h3 className="other-service-title">{other.title}</h3>
                  <p className="other-service-desc">{other.subtitle}</p>
                  <span className="other-service-link">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
