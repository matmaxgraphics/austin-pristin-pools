'use client';
import { useRef, useState } from 'react';

export default function BeforeAfter() {
  const [cut, setCut] = useState(50);
  const dragging = useRef(false);
  const boxRef = useRef(null);

  const clamp = (v) => Math.max(2, Math.min(98, v));

  const setFromClientX = (clientX) => {
    const r = boxRef.current.getBoundingClientRect();
    setCut(clamp(((clientX - r.left) / r.width) * 100));
  };

  return (
    <section className="ba-sec" id="results">
      <div className="wrap">
        <div className="sec-head rv">
          <div className="eyebrow">Results</div>
          <h2>Drag the line. See the difference.</h2>
          <p className="lede">
            A real green-to-clean recovery, completed in 4 days. Every job is
            documented with photos in your portal.
          </p>
        </div>
        <div
          ref={boxRef}
          className="ba rv rv-d1"
          style={{ '--cut': `${cut}%` }}
          role="slider"
          aria-label="Before and after comparison slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(cut)}
          tabIndex={0}
          onPointerDown={(e) => {
            dragging.current = true;
            e.currentTarget.setPointerCapture(e.pointerId);
            setFromClientX(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') { setCut((c) => clamp(c - 4)); e.preventDefault(); }
            if (e.key === 'ArrowRight') { setCut((c) => clamp(c + 4)); e.preventDefault(); }
          }}
        >
          <div className="ba-side" aria-hidden="true">
            <img src="/dirty-pool.png" alt="Dirty pool before cleaning" className="ba-img" />
          </div>
          <div className="ba-side ba-after" aria-hidden="true">
            <img src="/clean-pool.jpg" alt="Clean pool after cleaning" className="ba-img" />
          </div>
          <span className="ba-tag b">Before · Day 0</span>
          <span className="ba-tag a">After · Day 4</span>
          <div className="ba-handle" aria-hidden="true" />
        </div>
        <div className="ba-stats rv rv-d2">
          <div className="stat"><b><em>4</em> days</b><span>Average recovery time</span></div>
          <div className="stat"><b>2,400+</b><span>Documented transformations</span></div>
          <div className="stat"><b><em>100</em>%</b><span>Photo-verified visits</span></div>
        </div>
      </div>
    </section>
  );
}
