function Brand({ footer = false }) {
  return (
    <a className={`brand${footer ? ' brand--footer' : ''}`} href="#home" aria-label="Dev Stack home">
      <span className="brand__mark" aria-hidden="true">DS</span>
      <span className="brand__name">
        Dev <span className="gradient-text">Stack</span>
      </span>
    </a>
  );
}

export default Brand;
