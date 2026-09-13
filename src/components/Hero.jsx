import bannerStack from '../../assets/banner-stack.png';

function Hero() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero__content">
        <h1 id="hero-title">
          Build Your Ideal
          <span className="gradient-text">Development Stack</span>
        </h1>
        <p>
          Explore frontend, backend, database, and tooling options, compare them side by side,
          and put together the stack that fits your next project.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#technologies">Explore Technologies</a>
          <a className="button button--secondary" href="#about">Learn More</a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <span className="hero__glow" />
        <img src={bannerStack} alt="" />
      </div>
    </section>
  );
}

export default Hero;
