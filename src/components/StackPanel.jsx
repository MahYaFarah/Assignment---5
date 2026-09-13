function StackPanel({ selectedTechnologies, onRemove, onRemoveAll }) {
  const count = selectedTechnologies.length;

  return (
    <aside className="stack-sidebar" aria-labelledby="stack-title">
      <div className="stack-panel">
        <h2 id="stack-title">Your Stack</h2>
        <p className="stack-panel__count">
          {count === 0
            ? 'No technologies selected yet.'
            : `${count} ${count === 1 ? 'Technology' : 'Technologies'} Selected`}
        </p>

        {count === 0 ? (
          <div className="stack-panel__empty">Your stack is empty.</div>
        ) : (
          <>
            <ul className="stack-list">
              {selectedTechnologies.map((technology) => (
                <li key={technology.id} className="stack-item">
                  <span className="stack-item__icon">
                    <img
                      src={technology.icon}
                      alt=""
                      onError={(event) => { event.currentTarget.hidden = true; }}
                    />
                  </span>
                  <span className="stack-item__details">
                    <strong>{technology.name}</strong>
                    <small>{technology.category}</small>
                  </span>
                  <button
                    className="stack-item__remove"
                    type="button"
                    aria-label={`Remove ${technology.name} from your stack`}
                    onClick={() => onRemove(technology.id)}
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </li>
              ))}
            </ul>
            <button className="remove-all" type="button" onClick={onRemoveAll}>
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default StackPanel;
