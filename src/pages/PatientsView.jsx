import React from 'react';

const PatientsView = ({ onPatientClick }) => {
  const patients = [
    { id: 2, name: '25B3E02265', email: 'unclewilly1955@gmail.com', status: 'No Data', heartRate: '--', lastReading: 'No readings yet' },
    { id: 1, name: 'Tester', email: 'rickyt2294@gmail.com', status: 'No Data', heartRate: '--', lastReading: 'No readings yet' },
  ];

  return (
    <div className="patients-view-page animate-fade">
      <header className="page-header">
        <h1>Active Patients</h1>
        <p className="subtitle">Currently monitored patients ({patients.length})</p>
      </header>

      <section className="glass-card table-container">
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
                    <div className="avatar">{p.id === 2 ? '2' : 'T'}</div>
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
                  <button className="chat-btn">Send Message</button>
                </td>
                <td>
                  <button className="text-link" onClick={() => onPatientClick(p.id)}>View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <style jsx="true">{`
        .patients-view-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .page-header h1 {
          font-size: 1.5rem;
          color: #1A365D;
          font-weight: 700;
        }

        .subtitle {
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-top: 4px;
        }

        .table-container {
          padding: 0;
          overflow: hidden;
        }

        .patients-table {
          width: 100%;
          border-collapse: collapse;
        }

        .patients-table th {
          text-align: left;
          padding: var(--space-md);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-dim);
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-dim);
          background: rgba(0, 0, 0, 0.02);
        }

        .patients-table td {
          padding: var(--space-lg) var(--space-md);
          border-bottom: 1px solid var(--border-dim);
          font-size: 0.85rem;
          vertical-align: middle;
        }

        .patient-cell {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .avatar {
          width: 36px;
          height: 36px;
          background: #CED4DA;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .patient-meta {
          display: flex;
          flex-direction: column;
        }

        .p-name {
          font-weight: 600;
          color: #1A365D;
        }

        .p-email {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .no-data-badge {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.75rem;
          font-weight: 600;
        }

        .center-cell {
          text-align: center;
        }

        .dim-cell {
          color: var(--text-dim);
        }

        .chat-btn {
          background: #001F3D;
          color: white;
          padding: 8px 16px;
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 600;
          transition: background 0.2s;
        }

        .chat-btn:hover {
          background: #003366;
        }

        .text-link {
          color: var(--text-dim);
          font-size: 0.8rem;
          font-weight: 600;
          text-decoration: none;
        }

        .text-link:hover {
          color: var(--primary);
        }

        [data-theme='light'] .page-header h1 { color: #1A365D; }
        [data-theme='dark'] .page-header h1 { color: var(--text-main); }
        [data-theme='dark'] .p-name { color: var(--text-main); }
        [data-theme='dark'] .patients-table th { background: rgba(255, 255, 255, 0.02); }
      `}</style>
    </div>
  );
};

export default PatientsView;
