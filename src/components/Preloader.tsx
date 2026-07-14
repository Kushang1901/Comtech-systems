'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Hide preloader after component mount + layout loads
    const timer = setTimeout(() => {
      setFadeOut(true);
      const removeTimer = setTimeout(() => {
        setVisible(false);
      }, 500); // match fade-out transition duration
      return () => clearTimeout(removeTimer);
    }, 1600); // 1.6s minimum duration for professional branding impact

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader-overlay ${fadeOut ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <div className="preloader-logo-wrap">
          <Image
            src="/logo.png"
            alt="Comtech Systems Logo"
            width={120}
            height={120}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
        
        {/* 3 Moving Diamonds */}
        <div className="preloader-diamonds">
          <div className="diamond-loader"></div>
          <div className="diamond-loader"></div>
          <div className="diamond-loader"></div>
        </div>
      </div>
    </div>
  );
}
