export default function Stats() {
  return (
    <section className="trusted" aria-label="Company statistics">
      <div className="wrap trusted-row rv">
        <div className="trusted-label">
          Trusted across Greater Austin
          <br />
          since 2006
        </div>
        <div className="stats">
          <div className="stat"><b data-count="250">0</b><span>Pools serviced weekly</span></div>
          <div className="stat"><b data-count="20">0</b><span>Years in service</span></div>
          <div className="stat"><b data-count="4.9" data-dec="1">0</b><span>Google rating</span></div>
          <div className="stat"><b data-count="5.0" data-dec="1">0</b><span>Yelp rating</span></div>
        </div>
      </div>
    </section>
  );
}
