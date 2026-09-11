'use client';

import React from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';
import { MessageSquare, Phone, Send } from 'lucide-react';

interface ServiceDetailActionsProps {
  serviceTitle: string;
  quoteServiceType?: string;
  variant?: 'hero' | 'banner';
}

export default function ServiceDetailActions({
  serviceTitle,
  variant = 'hero',
}: ServiceDetailActionsProps) {
  const { openModal } = useQuoteModal();

  const whatsappMessage = encodeURIComponent(
    `Hello Comtech Systems, I am interested in your services for: "${serviceTitle}". Please share details and pricing.`
  );
  const whatsappUrl = `https://wa.me/919811767644?text=${whatsappMessage}`;

  if (variant === 'banner') {
    return (
      <div className="service-detail-actions banner-actions">
        <button
          onClick={openModal}
          className="btn btn-primary btn-lg"
          style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <Send size={18} /> Request Free Quote
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary btn-lg"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#25D366',
            color: '#ffffff',
            borderColor: '#25D366',
          }}
        >
          <MessageSquare size={18} /> WhatsApp Us
        </a>

        <a
          href="tel:+919811767644"
          className="btn btn-secondary btn-lg"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
        >
          <Phone size={18} /> +91 9811767644
        </a>
      </div>
    );
  }

  return (
    <div className="service-detail-actions hero-actions-group">
      <button
        onClick={openModal}
        className="btn btn-primary"
        style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        <Send size={16} /> Get a Quick Quote
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-secondary"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          borderColor: '#25D366',
          color: '#128C7E',
          backgroundColor: '#f0fdf4',
        }}
      >
        <MessageSquare size={16} style={{ color: '#25D366' }} /> Chat on WhatsApp
      </a>

      <a
        href="tel:+919811767644"
        className="btn btn-secondary"
        style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
      >
        <Phone size={16} /> Call Direct
      </a>
    </div>
  );
}
