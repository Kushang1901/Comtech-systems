import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, BlogPost } from '../posts';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found | Comtech Systems',
    };
  }

  return {
    title: `${post.title} | Comtech Systems Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.comtech-systems.in/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | Comtech Systems`,
      description: post.description,
      url: `https://www.comtech-systems.in/blog/${post.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Schema for Article SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Comtech Systems",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.comtech-systems.in/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.comtech-systems.in/blog/${post.slug}`
    }
  };

  return (
    <div className="animated">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

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
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://www.comtech-systems.in/blog/${post.slug}`
              }
            ]
          })
        }}
      />

      <div className="container" style={{ maxWidth: '800px', padding: '40px 16px' }}>
        {/* Back Link */}
        <div style={{ marginBottom: '24px' }}>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--text-secondary)',
              fontSize: '14px',
              textDecoration: 'none',
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <header style={{ marginBottom: '32px', borderBottom: '1px solid var(--border-color)', paddingBottom: '24px' }}>
          <span style={{
            display: 'inline-block',
            background: '#eff1fb',
            color: 'var(--accent-color)',
            padding: '4px 12px',
            borderRadius: '50px',
            fontSize: '12px',
            fontWeight: 700,
            marginBottom: '16px'
          }}>
            {post.category}
          </span>
          <h1 style={{ fontSize: '34px', fontWeight: 800, lineHeight: '1.3', marginBottom: '18px', letterSpacing: '-0.5px' }}>
            {post.title}
          </h1>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <User size={14} /> By {post.author}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Calendar size={14} /> {post.date}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Clock size={14} /> {post.readTime}
            </span>
          </div>
        </header>

        {/* Post Content */}
        <article
          className="blog-content"
          style={{
            lineHeight: '1.8',
            fontSize: '16px',
            color: 'var(--text-primary)',
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Footer Card */}
        <div style={{
          marginTop: '48px',
          padding: '30px',
          background: 'var(--bg-secondary)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '10px' }}>Need IT Support or Custom Service?</h3>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '18px', lineHeight: '1.6' }}>
            Comtech Systems has been providing computer repairs, printer cartridge refilling, commercial printing, and toner buyback in Gurgaon &amp; Noida since 2005. Get in touch with us today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
            <Link href="/contact" className="btn btn-primary">Get a Free Quote</Link>
            <Link href="/services" className="btn btn-secondary">Explore Services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
