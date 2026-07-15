import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join the Comtech Systems team in Gurgaon and Noida. Explore career opportunities including Internships, Sales & Marketing, and Executive Assistant positions.',
};

export default function Careers() {
  const jobs = [
    {
      title: 'Internship (IT, Operations & Printing)',
      duration: '3 to 6 Months',
      type: 'Temporary / Internship',
      compensation: 'Stipend based on interview',
      experience: 'Fresher / Student',
      description: 'Gain hands-on industry experience by assisting our technical and operational teams. You will work closely with senior technicians and print operators to manage client deliverables and troubleshoot hardware.',
      requirements: [
        'Basic understanding of computers and IT systems',
        'Strong willingness to learn and adapt to new technical workflows',
        'Good communication and interpersonal skills',
        'Available for a duration of minimum 3 and maximum 6 months'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      )
    },
    {
      title: 'Sales & Marketing Executive',
      duration: 'Full-Time',
      type: 'Permanent',
      compensation: '₹25,000 to ₹45,000 / month (based on interview)',
      experience: 'Fresher to 5 Years',
      description: 'Drive growth and expand client relationships for our computer sales, hardware repair, print media, and corporate gifting services. You will identify business leads and present tailored IT & printing solutions to corporate clients.',
      requirements: [
        'Graduate in any discipline; marketing background is a plus',
        'From fresher up to 5 years of experience in sales or client acquisition',
        'Excellent negotiation and presentation skills',
        'Familiarity with the Delhi NCR corporate landscape'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      title: 'Executive Assistant',
      duration: 'Full-Time',
      type: 'Permanent',
      compensation: '₹25,000 to ₹45,000 / month (based on interview)',
      experience: 'Fresher to 5 Years',
      description: 'Support leadership with daily administrative tasks, client correspondence, invoice tracking, and operations management. This role is key to maintaining business efficiency and ensuring smooth communication between internal teams.',
      requirements: [
        'Bachelor\'s degree or equivalent certification',
        'From fresher up to 5 years of office administration or assistant experience',
        'Proficiency in MS Office (Word, Excel) and email tools',
        'Outstanding organizational and time-management skills'
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    }
  ];

  return (
    <div className="animated">
      {/* ── PAGE HEADER ── */}
      <section className="section section-bg" style={{ borderBottom: '1px solid var(--border-color)', padding: '56px 0', textAlign: 'center' }}>
        <div className="container">
          <h1 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-1px' }}>Careers at Comtech Systems</h1>
          <p style={{ fontSize: '17px', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Join our growing team in Gurgaon & Noida Extension. We build reliable tech products, sustainable recycling programs, and premium printing solutions.
          </p>
        </div>
      </section>

      {/* ── JOB ROLES ── */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Current Openings</h2>
          <p className="section-subtitle">
            Explore our open opportunities and find the perfect match for your career path and skills.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginTop: '16px' }}>
            {jobs.map((job, index) => (
              <div 
                key={index} 
                className="card" 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'auto 1fr', 
                  gap: '24px', 
                  alignItems: 'start',
                  padding: '32px',
                  background: '#ffffff'
                }}
              >
                <div 
                  style={{ 
                    width: '52px', 
                    height: '52px', 
                    borderRadius: '10px', 
                    background: '#eff1fb', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    color: 'var(--accent-color)',
                    flexShrink: 0
                  }}
                >
                  {job.icon}
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                      {job.title}
                    </h3>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', background: '#eff1fb', color: 'var(--accent-color)', padding: '4px 10px', borderRadius: '50px' }}>
                      {job.experience}
                    </span>
                  </div>

                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{job.duration}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <line x1="12" y1="4" x2="12" y2="20" />
                      </svg>
                      <span>{job.compensation}</span>
                    </div>
                  </div>

                  <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.7', marginBottom: '20px' }}>
                    {job.description}
                  </p>

                  <h4 style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Key Requirements & Skills:
                  </h4>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                        <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>✓</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={`https://wa.me/919811767644?text=${encodeURIComponent(`Hello Comtech Systems,\n\nI am interested in applying for the position: *${job.title}*.\n\nPlease guide me on how I can share my resume/details.\n\nThank you!`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ fontSize: '14px', padding: '10px 20px' }}
                  >
                    Apply via WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="section section-bg" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ maxWidth: '720px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, marginBottom: '14px', letterSpacing: '-0.5px' }}>
            Ready to Take the Next Step?
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '28px', fontSize: '15px', lineHeight: '1.7' }}>
            If you do not see a role that fits your profile but are still excited about joining our team in computer hardware sales, maintenance, printing, or recycling, we want to hear from you. Send us your resume today!
          </p>
          <div 
            style={{ 
              background: '#ffffff', 
              border: '1px solid var(--border-color)', 
              borderRadius: '12px', 
              padding: '24px 32px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '14px',
              boxShadow: 'var(--shadow-sm)',
              marginBottom: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <strong style={{ fontSize: '16px' }}>sbsharma@comtech-systems.in</strong>
            </div>
            <a 
              href={`https://wa.me/919811767644?text=${encodeURIComponent("Hello Comtech Systems,\n\nI am interested in career opportunities at your Gurgaon/Noida office.\n\nPlease guide me on how I can submit my profile and resume.\n\nThank you!")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
