'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useQuoteModal } from '@/context/QuoteModalContext';

export default function QuoteModal() {
  const { isOpen, closeModal } = useQuoteModal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'IT & Laptop Repair',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const recaptchaWidgetId = useRef<number | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const renderCaptcha = () => {
      const grecaptchaObj = (window as any).grecaptcha;
      if (grecaptchaObj && grecaptchaObj.render && recaptchaWidgetId.current === null) {
        try {
          recaptchaWidgetId.current = grecaptchaObj.render('recaptcha-quote-modal', {
            sitekey: '6LfyfFUtAAAAALgd8uEBAEaOpLJbickTklk4WhiB',
          });
        } catch (error) {
          console.error("reCAPTCHA modal render error:", error);
        }
      }
    };

    const grecaptchaObj = (window as any).grecaptcha;
    if (grecaptchaObj) {
      grecaptchaObj.ready(renderCaptcha);
    } else {
      const interval = setInterval(() => {
        const currentGrecaptcha = (window as any).grecaptcha;
        if (currentGrecaptcha) {
          clearInterval(interval);
          currentGrecaptcha.ready(renderCaptcha);
        }
      }, 500);
      return () => {
        clearInterval(interval);
        recaptchaWidgetId.current = null;
      };
    }

    return () => {
      recaptchaWidgetId.current = null;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const grecaptchaObj = (window as any).grecaptcha;
    if (grecaptchaObj && recaptchaWidgetId.current !== null) {
      const captchaResponse = grecaptchaObj.getResponse(recaptchaWidgetId.current);
      if (!captchaResponse) {
        alert('Please complete the CAPTCHA checkbox verification.');
        return;
      }
      grecaptchaObj.reset(recaptchaWidgetId.current);
    }
    
    // Construct pre-formatted WhatsApp message
    const formattedMessage = `Hello Comtech Systems,\n\nI have a new website quote request:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Details:* ${formData.message}`;
    
    // WhatsApp Click-to-Chat URL for +919811767644
    const whatsappUrl = `https://wa.me/919811767644?text=${encodeURIComponent(formattedMessage)}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleClose = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'IT & Laptop Repair',
      message: ''
    });
    closeModal();
  };

  return (
    <div className="modal-backdrop" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '30px 0' }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              borderRadius: '50%', 
              backgroundColor: '#f0fdf4', 
              color: '#15803d', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '8px' }}>Thank You!</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Your quote request has been submitted successfully. We will get back to you shortly.
            </p>
            <button 
              onClick={handleClose} 
              className="btn btn-primary" 
              style={{ marginTop: '24px', width: '100%' }}
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '20px' }}>Get a Quote / Inquiry</h3>
            
            <div className="form-group">
              <label className="form-label" htmlFor="modal-name">Full Name</label>
              <input 
                type="text" 
                id="modal-name" 
                name="name" 
                required 
                value={formData.name} 
                onChange={handleChange}
                className="form-input" 
                placeholder="Enter your name"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modal-email">Email Address</label>
              <input 
                type="email" 
                id="modal-email" 
                name="email" 
                required 
                value={formData.email} 
                onChange={handleChange}
                className="form-input" 
                placeholder="yourname@example.com"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modal-phone">Phone Number</label>
              <input 
                type="tel" 
                id="modal-phone" 
                name="phone" 
                required 
                value={formData.phone} 
                onChange={handleChange}
                className="form-input" 
                placeholder="Enter 10-digit number"
              />
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modal-service">Requested Service</label>
              <select 
                id="modal-service" 
                name="service" 
                value={formData.service} 
                onChange={handleChange}
                className="form-input"
              >
                <option value="IT & Laptop Repair">IT & Laptop Repair</option>
                <option value="Printer & Cartridge Refill">Printer & Cartridge Refill</option>
                <option value="Toner Cartridge Recycling">Toner Cartridge Recycling</option>
                <option value="Commercial Printing (Visiting Cards/Letterheads)">Commercial Printing</option>
                <option value="Corporate Gifting">Corporate Gifting</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="modal-message">Message / Details</label>
              <textarea 
                id="modal-message" 
                name="message" 
                rows={3} 
                required 
                value={formData.message} 
                onChange={handleChange}
                className="form-textarea" 
                placeholder="Describe your requirements..."
              />
            </div>

            <div style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
              <div id="recaptcha-quote-modal"></div>
            </div>
 
            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Submit Inquiry
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
