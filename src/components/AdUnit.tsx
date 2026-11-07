'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  publisherId?: string;
  slotId?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  layoutKey?: string;
  className?: string;
}

export default function AdUnit({
  publisherId = 'ca-pub-9564494037866343',
  slotId,
  format = 'auto',
  layoutKey,
  className = '',
}: AdUnitProps) {
  const adRef = useRef<HTMLModElement | null>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    if (isPushed.current) return;
    try {
      if (typeof window !== 'undefined') {
        ((window as unknown as { adsbygoogle: unknown[] }).adsbygoogle =
          (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || []).push({});
        isPushed.current = true;
      }
    } catch (err) {
      // Ignore adsbygoogle errors if script is blocked by user adblockers
      console.debug('AdSense script error:', err);
    }
  }, []);

  return (
    <div
      className={`adsense-container ${className}`}
      style={{
        margin: '32px 0',
        padding: '16px',
        background: '#f8fafc',
        borderRadius: '8px',
        border: '1px dashed var(--border-color, #e2e8f0)',
        textAlign: 'center',
        minHeight: '120px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <span
        style={{
          display: 'block',
          fontSize: '11px',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          color: '#94a3b8',
          marginBottom: '8px',
          fontWeight: 600,
        }}
      >
        Advertisement
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client={publisherId}
        {...(slotId ? { 'data-ad-slot': slotId } : {})}
        data-ad-format={format}
        data-full-width-responsive="true"
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
      />
    </div>
  );
}

