import Script from 'next/script';

interface GoogleAdSenseProps {
  publisherId: string;
}

export default function GoogleAdSense({ publisherId }: GoogleAdSenseProps) {
  if (!publisherId) return null;

  return (
    <Script
      id="google-adsense"
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`}
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  );
}
