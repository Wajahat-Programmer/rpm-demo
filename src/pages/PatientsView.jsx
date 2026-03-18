import React from 'react';

const PatientsView = ({ onPatientClick, onNavigate }) => {
  const patients = [
    { id: 2, name: '25B3E02265', email: 'ghi@gmail.com', status: 'No Data', heartRate: '--', lastReading: 'No readings yet' },
    { id: 1, name: 'Tester', email: 'abcd123@gmail.com', status: 'No Data', heartRate: '--', lastReading: 'No readings yet' },
  ];

  return (
    <div className="patients-view-page animate-fade">
      <header className="page-header">
        <h1>Active Patients</h1>
        <p className="subtitle">Currently monitored patients ({patients.length})</p>
      </header>

      <section className="glass-card table-container">
        <div className="table-responsive">
          <table className="patients-table">
            <thead>
              <tr>
                <th>PATIENT</th>
                <th>STATUS</th>
                <th>HEART RATE</th>
                <th>LAST READING</th>
                <th>INITIATE CHAT</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p) => (
                <tr key={p.id}>
                  <td>
                    <div className="patient-cell">
                      <div className="avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>{p.id === 2 ? '2' : 'T'}</div>
                      <div className="patient-meta">
                        <span className="p-name">{p.name}</span>
                        <span className="p-email">{p.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="no-data-badge">No Data</span>
                  </td>
                  <td className="center-cell">{p.heartRate}</td>
                  <td className="dim-cell">{p.lastReading}</td>
                  <td>
                    <button className="btn-gradient chat-btn" onClick={(e) => { e.stopPropagation(); onNavigate('communication', { chatId: p.id }); }}>Send Message</button>
                  </td>
                  <td>
                    <button className="view-details-btn" onClick={() => onPatientClick(p.id)}>
                      View Details
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '6px' }}><path d="m9 18 6-6-6-6"/></svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <style jsx="true">{`
        .patients-view-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .page-header h1 {
          font-size: 1.5rem;
          color: var(--text-main);
          font-weight: 700;
        }

        .subtitle {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-top: 4px;
        }

        .table-container {
          padding: 0;
          overflow: hidden;
          border-radius: var(--radius-lg);
        }

        .table-responsive {
          overflow-x: auto;
        }

        .patients-table {
          width: 100%;
          border-collapse: collapse;
        }

        .patients-table th {
          text-align: left;
          padding: var(--space-md);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: rgba(0, 0, 0, 0.03);
          border-bottom: 1px solid var(--border-dim);
        }

        .patients-table td {
          padding: var(--space-lg) var(--space-md);
          border-bottom: 1px solid var(--border-dim);
          font-size: 0.9rem;
          vertical-align: middle;
          background: transparent;
        }

        .patients-table tr:hover td {
          background: rgba(255, 255, 255, 0.02);
        }

        .patient-cell {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          box-shadow: 0 4px 10px rgba(var(--brand-rgb), 0.2);
        }

        .patient-meta {
          display: flex;
          flex-direction: column;
        }

        .p-name {
          font-weight: 700;
          color: var(--text-main);
        }

        .p-email {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .no-data-badge {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          padding: 4px 14px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 700;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }

        .center-cell {
          text-align: center;
          font-weight: 600;
        }

        .dim-cell {
          color: var(--text-dim);
        }

        .chat-btn {
          padding: 8px 16px !important;
          font-size: 0.8rem !important;
          border-radius: var(--radius-sm) !important;
        }

        .view-details-btn {
          color: var(--brand-color);
          font-size: 0.85rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          opacity: 0.85;
          transition: all 0.2s;
        }

        .view-details-btn:hover {
          opacity: 1;
          transform: translateX(4px);
        }

        [data-theme='light'] .patients-table th { background: rgba(0, 0, 0, 0.02); }

        @media (max-width: 768px) {
          .patients-table th:nth-child(3),
          .patients-table td:nth-child(3),
          .patients-table th:nth-child(4),
          .patients-table td:nth-child(4) {
            display: none;
          }

          .patients-table td {
            padding: var(--space-sm);
          }

          .chat-btn {
            padding: 6px 10px !important;
            font-size: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default PatientsView;
