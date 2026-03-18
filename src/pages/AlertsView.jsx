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
          <div className="search-input glass-card">
            <input type="text" placeholder="Search by patient name..." />
            <button className="btn-gradient search-btn">Search</button>
          </div>
          <select className="filter-select glass-card">
            <option>All priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className="date-filters glass-card">
             <span className="date-label">From</span>
             <input type="date" placeholder="dd/mm/yyyy" />
             <span className="date-label">To</span>
             <input type="date" placeholder="dd/mm/yyyy" />
          </div>
        </div>
      </header>

      <section className="glass-card empty-state-container">
        <div className="empty-state">
          <div className="bell-icon-wrapper">
            <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="var(--brand-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
            <div className="glow-effect"></div>
          </div>
          <h2>No alerts to show</h2>
          <p>Try widening your filters or wait for new alerts from connected devices.</p>
          <button className="btn-gradient" style={{ marginTop: '20px' }}>Refresh Stream</button>
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
          color: var(--text-main);
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
          padding: 4px 4px 4px 16px;
          min-width: 320px;
          border-radius: var(--radius-md);
        }

        .search-input input {
          border: none;
          background: none;
          font-size: 0.9rem;
          flex: 1;
          color: var(--text-main);
        }

        .search-input input:focus { outline: none; }

        .search-btn {
          padding: 8px 16px !important;
          border-radius: var(--radius-sm) !important;
          font-size: 0.85rem !important;
        }

        .filter-select {
          padding: 10px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          color: var(--text-main);
          min-width: 160px;
          cursor: pointer;
        }

        .date-filters {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 4px 16px;
          border-radius: var(--radius-sm);
        }

        .date-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-dim);
          text-transform: uppercase;
        }

        .date-filters input {
          padding: 6px 10px;
          border: none;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
          font-size: 0.85rem;
          color: var(--text-main);
          color-scheme: dark;
        }

        .empty-state-container {
          min-height: 460px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--radius-xl);
          transition: none; /* Disable hover scale for this large container */
        }
        
        .empty-state-container:hover { transform: none; }

        .empty-state {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-sm);
          max-width: 400px;
        }

        .bell-icon-wrapper {
          position: relative;
          margin-bottom: var(--space-md);
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80px;
          height: 80px;
          background: var(--brand-color);
          filter: blur(40px);
          opacity: 0.2;
          z-index: -1;
        }

        .empty-state h2 {
          font-size: 1.75rem;
          color: var(--text-main);
          margin-bottom: 4px;
        }

        .empty-state p {
          color: var(--text-dim);
          font-size: 1rem;
          line-height: 1.6;
        }

        [data-theme='light'] .date-filters input { background: rgba(0, 0, 0, 0.05); color-scheme: light; }

        @media (max-width: 768px) {
          .filter-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .search-input {
            min-width: 100%;
          }

          .date-filters {
            flex-wrap: wrap;
          }

          .empty-state-container {
            min-height: 300px;
          }

          .empty-state h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default AlertsView;
