'use client';

import { useState, useEffect, useRef } from 'react';

const OWNER_WHATSAPP = '919811767644'; // Real business number

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  message: string;
}

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  serviceType: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `📋 *New Inquiry — Comtech Systems*\n\n` +
      `*Name:* ${form.name}\n` +
      `*Email:* ${form.email || 'N/A'}\n` +
      `*Phone:* ${form.phone || 'N/A'}\n` +
      `*Company:* ${form.company || 'N/A'}\n` +
      `*Service Required:* ${form.serviceType || 'N/A'}\n\n` +
      `*Message:*\n${form.message}`
    );
    window.open(`https://wa.me/${OWNER_WHATSAPP}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 5000);
  };

  return (
    <div className="animated">

      {/* Page header */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>Contact Us</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto' }}>
            Have a question or need a quote? Fill in the form and our team will get back to you promptly.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="section">
        <div className="container contact-layout">

          {/* Info panel */}
          <div className="contact-info">
            <h2 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>Get In Touch</h2>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '8px' }}>
              We serve clients across Gurgaon &amp; Noida Extension.
            </p>

            {[
              {
                icon: <><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
                title: 'Gurgaon Head Office',
                lines: [' Sukhrali Road', 'Sector 17A, Gurgaon — 122001'],
              },
              {
                icon: <><path d="M20 10c0 6-8 13-8 13s-8-7-8-13a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></>,
                title: 'Noida Extension Branch',
                lines: ['Sec-1, Noida Extn, Uttar Pradesh'],
              },
              {
                icon: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.6 19.79 19.79 0 0 1 1.61 5a2 2 0 0 1 1.95-2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 11a16 16 0 0 0 6 6l.92-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 17z" /></>,
                title: 'Phone',
                lines: ['+91 98117 67644', '+91 80768 85979'],
              },
              {
                icon: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></>,
                title: 'Email',
                lines: ['sbsharma@comtech-systems.in', 'comtechsystems.sec18@gmail.com', 'sbsharma7644@gmail.com'],
              },
              {
                icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
                title: 'Business Hours',
                lines: ['Mon – Sat: 9 AM – 7 PM', 'Sunday: 11 AM – 4 PM'],
              },
            ].map((item, i) => (
              <div className="contact-info-item" key={i}>
                <div className="contact-info-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {item.icon}
                  </svg>
                </div>
                <div className="contact-info-content">
                  <h4>{item.title}</h4>
                  {item.lines.map(line => <p key={line}>{line}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Inquiry form */}
          <div className="contact-form-container">
            <h2 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px' }}>Send an Inquiry</h2>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Your message will be sent directly to us via WhatsApp.
            </p>

            {submitted && (
              <div style={{
                background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '8px',
                padding: '12px 16px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px',
                color: '#166534', fontSize: '14px', fontWeight: 600,
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Message submitted! WhatsApp has been opened.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name *</label>
                  <input id="name" name="name" className="form-input" placeholder="Your name" required value={form.name} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" className="form-input" placeholder="you@email.com" value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row-2">
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="tel" className="form-input" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="company">Company</label>
                  <input id="company" name="company" className="form-input" placeholder="Your company (if any)" value={form.company} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="serviceType">Service Required</label>
                <select id="serviceType" name="serviceType" className="form-input" value={form.serviceType} onChange={handleChange}>
                  <option value="">Select a service...</option>
                  <option>Computer / Laptop Repair</option>
                  <option>Printer Repair / Service</option>
                  <option>Cartridge Refill / Buy-Back</option>
                  <option>Computer / Laptop Purchase</option>
                  <option>Visiting Card / Letterhead Printing</option>
                  <option>Corporate Gifting</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Message *</label>
                <textarea id="message" name="message" className="form-textarea" rows={4} placeholder="Describe your requirement..." required value={form.message} onChange={handleChange} />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '8px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.551 4.1 1.517 5.829L0 24l6.335-1.652A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.794 9.794 0 0 1-4.988-1.364l-.358-.213-3.706.972.988-3.607-.234-.371A9.793 9.793 0 0 1 2.182 12C2.182 6.573 6.573 2.182 12 2.182S21.818 6.573 21.818 12 17.427 21.818 12 21.818z"/>
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
