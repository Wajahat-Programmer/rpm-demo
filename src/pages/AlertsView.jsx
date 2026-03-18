import React, { useState } from 'react';

const AlertsView = () => {
  const allAlerts = [
    { id: 101, patientName: 'Tester', priority: 'High', message: 'Sustained elevated heart rate (130 BPM).', time: '10 mins ago', date: '2026-03-18' },
    { id: 102, patientName: '25B3E02265', priority: 'Medium', message: 'Missed morning SpO2 reading.', time: '2 hours ago', date: '2026-03-18' },
    { id: 103, patientName: 'Tester', priority: 'Low', message: 'Battery low on provided Oximeter.', time: '1 day ago', date: '2026-03-17' }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All priorities');

  const filteredAlerts = allAlerts.filter(a => {
    const matchesSearch = a.patientName.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          a.message.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPriority = priorityFilter === 'All priorities' || a.priority === priorityFilter;
    return matchesSearch && matchesPriority;
  });

  const getPriorityClass = (priority) => {
    if (priority === 'High') return 'badge-high';
    if (priority === 'Medium') return 'badge-medium';
    return 'badge-low';
  };

  return (
    <div className="alerts-view-page animate-fade">
      <header className="page-header">
        <div className="title-section">
          <h1>Active Alerts</h1>
          <p className="subtitle">Use filters to refine visible alerts</p>
        </div>
        <div className="filter-bar">
          <div className="search-input glass-card">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="search-icon" style={{ opacity: 0.5 }}>
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input 
              type="text" 
              placeholder="Search alerts..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select 
            className="filter-select glass-card"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option>All priorities</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <div className="date-filters glass-card">
             <span className="date-label">From</span>
             <input type="date" placeholder="dd/mm/yyyy" defaultValue="2026-03-01" />
             <span className="date-label">To</span>
             <input type="date" placeholder="dd/mm/yyyy" defaultValue="2026-03-18" />
          </div>
        </div>
      </header>

      {filteredAlerts.length > 0 ? (
        <div className="alerts-list">
          {filteredAlerts.map(alert => (
            <div key={alert.id} className="glass-card alert-item animate-fade">
              <div className={`alert-priority-indicator ${getPriorityClass(alert.priority)}`}></div>
              <div className="alert-content">
                <div className="alert-patient">
                  <div className="avatar small-avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>{alert.patientName.charAt(0)}</div>
                  <span className="p-name">{alert.patientName}</span>
                </div>
                
                <span className={`badge ${getPriorityClass(alert.priority)}`}>
                  {alert.priority}
                </span>

                <p className="alert-message" title={alert.message}>{alert.message}</p>

                <div className="alert-time">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span>{alert.time}</span>
                </div>

                <div className="alert-actions">
                  <button className="btn-secondary small-btn">Ack</button>
                  <button className="btn-gradient small-btn">View</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
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
      )}

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
          align-items: center;
          padding: 10px 16px;
          gap: 10px;
          min-width: 320px;
          border-radius: var(--radius-sm);
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

        .alerts-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .alert-item {
          display: flex;
          padding: 0;
          overflow: hidden;
          position: relative;
        }

        .alert-priority-indicator {
          width: 4px;
          flex-shrink: 0;
        }

        .alert-content {
          padding: 12px 16px;
          flex: 1;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .alert-patient {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 140px;
        }

        .small-avatar {
          width: 32px;
          height: 32px;
          font-size: 0.85rem;
        }

        .p-name {
          font-weight: 700;
          color: var(--text-main);
          font-size: 0.95rem;
          white-space: nowrap;
        }

        .badge {
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-sm);
          text-transform: uppercase;
          min-width: 70px;
          text-align: center;
          letter-spacing: 0.5px;
        }

        .badge-high { color: var(--danger); background: rgba(239, 68, 68, 0.15); }
        .badge-medium { color: var(--warning); background: rgba(245, 158, 11, 0.15); }
        .badge-low { color: var(--brand-color); background: rgba(var(--brand-rgb), 0.15); }
        
        .alert-priority-indicator.badge-high { background-color: var(--danger); }
        .alert-priority-indicator.badge-medium { background-color: var(--warning); }
        .alert-priority-indicator.badge-low { background-color: var(--brand-color); }

        .alert-message {
          font-size: 0.9rem;
          color: var(--text-main);
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin: 0;
        }

        .alert-time {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          color: var(--text-dim);
          min-width: 90px;
          justify-content: flex-end;
          white-space: nowrap;
        }

        .alert-actions {
          display: flex;
          gap: 8px;
          margin: 0;
        }

        .small-btn {
          padding: 6px 12px !important;
          font-size: 0.8rem !important;
        }

        .view-details-btn {
          color: var(--brand-color);
          font-size: 0.85rem;
          font-weight: 700;
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
