const badgeTones = {
  react: 'blue',
  vuejs: 'green',
  svelte: 'orange',
  nextjs: 'slate',
  nodejs: 'green',
  postgresql: 'blue',
  redis: 'red',
  javascript: 'amber',
  typescript: 'blue',
  java: 'blue',
  tailwindcss: 'cyan',
  docker: 'blue',
};

function TechnologyCard({ technology, isSelected = false, onAdd }) {
  return (
    <article className={`technology-card${isSelected ? ' technology-card--selected' : ''}`}>
      <div className="technology-card__top">
        <span className="technology-card__icon">
          <img
            src={technology.icon}
            alt={`${technology.name} logo`}
            loading="lazy"
            onError={(event) => { event.currentTarget.hidden = true; }}
          />
          <span className="technology-card__fallback" aria-hidden="true">
            {technology.name.slice(0, 2)}
          </span>
        </span>
        <span className={`badge badge--${badgeTones[technology.id] ?? 'blue'}`}>
          {technology.badge}
        </span>
      </div>

      <div className="technology-card__body">
        <h3>{technology.name}</h3>
        <p>{technology.description}</p>
      </div>

      <div className="technology-card__meta">
        <span className="category-chip">{technology.category}</span>
        <span>{technology.difficulty}</span>
        <span className="rating" aria-label={`${technology.rating} out of 5 stars`}>
          <span aria-hidden="true">★</span> {technology.rating.toFixed(1)}
        </span>
      </div>

      <div
        className="technology-card__button-shell"
        onClick={isSelected ? () => onAdd?.(technology) : undefined}
      >
        <button
          className="technology-card__button"
          type="button"
          disabled={isSelected}
          onClick={() => onAdd?.(technology)}
        >
          {isSelected ? '✓ Added to Stack' : 'Add to Stack'}
        </button>
      </div>
    </article>
  );
}

export default TechnologyCard;
