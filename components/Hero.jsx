'use client';
import { useEffect, useState } from 'react';

function Bubbles() {
  // Generated client-side only, to avoid SSR hydration mismatch on random values.
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    setBubbles(
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        size: 4 + Math.random() * 14,
        left: Math.random() * 100,
        duration: 9 + Math.random() * 14,
        delay: -Math.random() * 18,
        opacity: 0.25 + Math.random() * 0.4,
      }))
    );
  }, []);

  return (
    <div className="bubbles" aria-hidden="true">
      {bubbles.map((b) => (
        <span
          key={b.id}
          className="bubble"
          style={{
            width: b.size,
            height: b.size,
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
            opacity: b.opacity,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <Bubbles />
      <div className="wrap">
        <h1>
          <span className="line"><span>All You Have</span></span>
          <span className="line"><span>To Do Is Swim.</span></span>
        </h1>
        <p className="hero-sub">
          Weekly maintenance, equipment repair and emergency cleaning from
          Austin&apos;s family-owned, IPSSA-certified pool team — trusted
          since 2006.
        </p>
        <div className="hero-ctas">
          <a href="#pricing" className="btn btn-primary">
            Book Inspection <span className="arr">→</span>
          </a>
          <a href="#portal" className="btn btn-ghost">
            <span className="play">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                <path d="M3 1.5l7 4.5-7 4.5z" />
              </svg>
            </span>
            Watch How It Works
          </a>
        </div>
      </div>
      <div className="hero-surface" aria-hidden="true">
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none">
          <path
            d="M0,60 C240,110 420,10 720,55 C1020,100 1200,20 1440,65 L1440,110 L0,110 Z"
            fill="#F5FBFD"
          />
        </svg>
      </div>
      <div className="chem-ticker" aria-label="Live water chemistry from pools serviced today">
        <div className="chem-inner">
          <span><span className="dot-live" />LIVE FROM TODAY&apos;S ROUTES</span>
          <span>pH <b>7.4</b> <span className="ok">BALANCED</span></span>
          <span>CHLORINE <b>3.0 PPM</b> <span className="ok">OPTIMAL</span></span>
          <span>ALKALINITY <b>96 PPM</b> <span className="ok">IN RANGE</span></span>
          <span>WATER TEMP <b>82°F</b></span>
          <span>POOLS SERVICED THIS WEEK <b>250+</b></span>
          <span>NEXT AVAILABLE VISIT <b>TOMORROW 9:00 AM</b></span>
        </div>
      </div>
    </header>
  );
}
