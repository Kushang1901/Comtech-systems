'use client';

import React, { useState, useEffect } from 'react';

const OWNER_PHONE = '+919811767644';
const OWNER_WHATSAPP = '919811767644';
const OWNER_EMAIL = 'comtechsystems.sec18@gmail.com';

export default function FloatingWidgets() {
  const [showScroll, setShowScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* ── BACK TO TOP (BOTTOM-LEFT) ── */}
      <button
        onClick={scrollToTop}
        className={`floating-back-to-top ${showScroll ? 'visible' : ''}`}
        aria-label="Back to Top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      {/* ── MULTI-CHANNEL CONTACT BOT (BOTTOM-RIGHT) ── */}
      <div className="floating-chat-container">
        {/* Contact Menu */}
        <div className={`floating-chat-menu ${isOpen ? 'open' : ''}`}>
          <div className="floating-chat-menu-header">
            <h4>Quick Connect</h4>
            <p>Choose your preferred channel</p>
          </div>

          <a
            href={`https://wa.me/${OWNER_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-chat-item whatsapp"
            onClick={() => setIsOpen(false)}
          >
            <div className="chat-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.1 1.517 5.829L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-4.988-1.364l-.358-.213-3.706.972.988-3.607-.234-.371A9.793 9.793 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
              </svg>
            </div>
            <div className="chat-item-text">
              <strong>WhatsApp Chat</strong>
              <p>Chat directly with owner</p>
            </div>
          </a>

          <a
            href={`mailto:${OWNER_EMAIL}`}
            className="floating-chat-item email"
            onClick={() => setIsOpen(false)}
          >
            <div className="chat-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </div>
            <div className="chat-item-text">
              <strong>Email Support</strong>
              <p>Send your requirements</p>
            </div>
          </a>

          <a
            href={`tel:${OWNER_PHONE}`}
            className="floating-chat-item call"
            onClick={() => setIsOpen(false)}
          >
            <div className="chat-item-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.95-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11a16 16 0 0 0 6 6l.92-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 17z" />
              </svg>
            </div>
            <div className="chat-item-text">
              <strong>Call Office</strong>
              <p>Direct representative line</p>
            </div>
          </a>
        </div>

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`floating-chat-trigger ${isOpen ? 'active' : ''}`}
          aria-label="Open Communication Menu"
        >
          {isOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
