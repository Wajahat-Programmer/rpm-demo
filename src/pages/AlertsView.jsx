import React from 'react';

const AlertsView = () => {
  return (
    <div className="alerts-view-page animate-fade">
      <header className="page-header">
        <div className="title-section">
          <h1>Active Alerts</h1>
          <p className="subtitle">Use filters to refine visible alerts</p>
        </div>
        <div className="filter-bar">
          <div className="search-input">
            <input type="text" placeholder="Search by patient name..." />
            <button className="search-btn">Search</button>
          </div>
          <select className="filter-select">
            <option>All priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className="date-filters">
             <span className="date-label">From</span>
             <input type="date" placeholder="dd/mm/yyyy" />
             <span className="date-label">To</span>
             <input type="date" placeholder="dd/mm/yyyy" />
          </div>
        </div>
      </header>

      <section className="glass-card empty-state-container">
        <div className="empty-state">
          <div className="bell-icon">
            <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#F6AD55" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </div>
          <h2>No alerts to show</h2>
          <p>Try widening your filters or wait for new alerts</p>
        </div>
      </section>

      <style jsx="true">{`
        .alerts-view-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .page-header {
           display: flex;
           flex-direction: column;
           gap: var(--space-md);
        }

        .page-header h1 {
          font-size: 1.5rem;
          color: #1A365D;
          font-weight: 700;
        }

        .filter-bar {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          flex-wrap: wrap;
        }

        .search-input {
          display: flex;
          background: #FFFFFF;
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          padding: 2px 2px 2px 12px;
          min-width: 300px;
        }

        .search-input input {
          border: none;
          background: none;
          font-size: 0.85rem;
          flex: 1;
          color: var(--text-main);
        }

        .search-input input:focus { outline: none; }

        .search-btn {
          background: #001F3D;
          color: white;
          padding: 8px 20px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .filter-select {
          padding: 10px 12px;
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          background: white;
          font-size: 0.85rem;
          color: var(--text-dim);
          min-width: 140px;
        }

        .date-filters {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        .date-filters input {
          padding: 8px 12px;
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          background: white;
          font-size: 0.8rem;
        }

        .empty-state-container {
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
        }

        .empty-state {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
        }

        .bell-icon {
          margin-bottom: var(--space-sm);
        }

        .empty-state h2 {
          font-size: 1.5rem;
          color: #1A365D;
          margin-bottom: 4px;
        }

        .empty-state p {
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        [data-theme='dark'] .empty-state-container { background: var(--bg-secondary); }
        [data-theme='dark'] .page-header h1 { color: var(--text-main); }
        [data-theme='dark'] .empty-state h2 { color: var(--text-main); }
        [data-theme='dark'] .search-input, [data-theme='dark'] .filter-select, [data-theme='dark'] .date-filters input {
           background: var(--bg-tertiary);
           border-color: var(--border-dim);
        }
      `}</style>
    </div>
  );
};

export default AlertsView;
