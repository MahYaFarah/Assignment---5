import TechnologyCard from './TechnologyCard';
import StackPanel from './StackPanel';

function TechnologyDirectory({
  technologies,
  selectedTechnologies = [],
  isLoading,
  error,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  const selectedIds = new Set(selectedTechnologies.map((technology) => technology.id));

  return (
    <section className="technology-section" id="technologies" aria-labelledby="technology-title">
      <div className="container">
        <header className="section-heading">
          <h2 id="technology-title">
            Explore the <span className="gradient-text">Technologies</span>
          </h2>
          <p>Pick one technology per category to build your ideal stack.</p>
        </header>

        {isLoading ? (
          <div className="catalog-status" role="status">
            <span className="spinner" aria-hidden="true" />
            <strong>Loading technologies…</strong>
          </div>
        ) : error ? (
          <div className="catalog-status catalog-status--error" role="alert">
            <strong>Something went wrong</strong>
            <p>{error}</p>
            <button type="button" onClick={() => window.location.reload()}>Try again</button>
          </div>
        ) : (
          <div className="technology-layout">
            <div className="technology-grid">
              {technologies.map((technology) => (
                <TechnologyCard
                  key={technology.id}
                  technology={technology}
                  isSelected={selectedIds.has(technology.id)}
                  onAdd={onAdd}
                />
              ))}
            </div>
            <StackPanel
              selectedTechnologies={selectedTechnologies}
              onRemove={onRemove}
              onRemoveAll={onRemoveAll}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default TechnologyDirectory;
