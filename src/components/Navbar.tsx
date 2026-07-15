'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useQuoteModal();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // Only hide if we scroll down and are past 100px
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    const renderV3 = () => {
      const grecaptchaObj = (window as any).grecaptcha;
      if (grecaptchaObj && grecaptchaObj.render) {
        try {
          grecaptchaObj.render('recaptcha-v3-global', {
            sitekey: '6Ld2fFUtAAAAALuUdAnhhkpySAQf3EjDL3GV1Xb5',
            size: 'invisible',
            badge: 'bottomright'
          });
        } catch (e) {
          // Ignore render errors (e.g. if already rendered)
        }
      }
    };

    const grecaptchaObj = (window as any).grecaptcha;
    if (grecaptchaObj) {
      grecaptchaObj.ready(renderV3);
    } else {
      const interval = setInterval(() => {
        const currentGrecaptcha = (window as any).grecaptcha;
        if (currentGrecaptcha) {
          clearInterval(interval);
          currentGrecaptcha.ready(renderV3);
        }
      }, 500);
      return () => clearInterval(interval);
    }
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services & Products', path: '/services' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const closeDrawer = () => setIsOpen(false);

  const handleQuoteClick = () => {
    closeDrawer();
    openModal();
  };

  return (
    <header className={`header ${!isVisible ? 'header--hidden' : ''}`}>
      <div className="container nav-container">
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }} onClick={closeDrawer}>
          <Image
            src="/web_title.png"
            alt="Comtech Systems Logo"
            width={230}
            height={58}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav>
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`nav-link ${pathname === item.path ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="nav-desktop-cta">
          <button onClick={openModal} className="nav-cta">
            Get a Quote
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="hamburger-btn"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div className="mobile-drawer-backdrop" onClick={closeDrawer} />
      )}

      {/* Left Slide Drawer */}
      <div className={`mobile-drawer ${isOpen ? 'open' : ''}`}>
        {/* Drawer Header */}
        <div className="mobile-drawer-header">
          <Link href="/" style={{ display: 'flex', alignItems: 'center' }} onClick={closeDrawer}>
            <Image
              src="/web_title.png"
              alt="Comtech Systems Logo"
              width={180}
              height={45}
              style={{ objectFit: 'contain' }}
              priority
            />
          </Link>
          <button className="mobile-drawer-close" onClick={closeDrawer} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className={`mobile-nav-link ${pathname === item.path ? 'active' : ''}`}
                onClick={closeDrawer}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Get a Quote at bottom */}
        <div className="mobile-drawer-footer">
          <button
            onClick={handleQuoteClick}
            className="nav-cta"
            style={{ width: '100%', padding: '13px', fontSize: '15px' }}
          >
            Get a Quote
          </button>
        </div>
      </div>
      {/* Container for explicit global reCAPTCHA v3 badge */}
      <div id="recaptcha-v3-global"></div>
    </header>
  );
}
