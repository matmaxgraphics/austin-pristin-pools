import './globals.css';

// NOTE: Fonts are loaded via <link> for portability. If you prefer Next.js
// optimized fonts, swap this for next/font/google (Sora, Instrument_Sans,
// IBM_Plex_Mono) and update the --font-* variables in globals.css.

export const metadata = {
  title: 'Austin Pristine Pools — All You Have To Do Is Swim',
  description:
    'Family-owned, IPSSA-certified pool cleaning, repair and maintenance serving Greater Austin since 2006. Weekly service, transparent pricing, and a customer portal for every pool we touch.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600&family=Instrument+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
