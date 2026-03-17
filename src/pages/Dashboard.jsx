import React from 'react';

const Dashboard = ({ onPatientClick }) => {
  const stats = [
    { label: 'Total Patients', value: '2', subtext: 'Assigned to you', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 11-8 0 4 4 0 018 0 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75', color: '0, 102, 255' },
    { label: 'Active Patients', value: '0', subtext: '0% of total', icon: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '16, 185, 129' },
    { label: 'Alerts', value: '0', subtext: 'Total alerts', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', color: '239, 68, 68' },
    { label: 'Today\'s Alerts', value: '0', subtext: 'Received today', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '249, 115, 22' },
  ];

  const patients = [
    { id: 1, name: 'Tester', username: '@rickyt2294', email: 'abcd123@gmail.com', phone: '123456789', startDate: 'Jan 29, 2026', lastLogin: 'Feb 7, 2026, 02:11 AM' },
    { id: 2, name: '25B3E02265', username: '@Robert', email: 'ghi@gmail.com', phone: '+1626337696', startDate: 'Dec 9, 2025', lastLogin: 'Never logged in' },
  ];

  return (
    <div className="dashboard-page animate-fade">
      <header className="dashboard-header">
        <div className="title-section">
          <h1>Dashboard Overview</h1>
          <p className="subtitle">Real-time health monitoring & analytics</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary">Download Report</button>
          <button className="btn btn-primary">+ New Patient</button>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-subtext" style={{ color: idx === 0 ? 'var(--secondary)' : 'var(--text-dim)' }}>
                  {stat.subtext}
                </span>
              </div>
              <div className="stat-icon-wrapper" style={{ backgroundColor: `rgba(${stat.color}, 0.1)`, color: `rgb(${stat.color})` }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="24" height="24">
                  <path d={stat.icon} />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="glass-card patients-overview">
        <div className="section-header">
          <div className="header-left">
            <h3>Patients Overview</h3>
            <p className="section-subtitle">Manage and monitor patient information</p>
          </div>
          <div className="search-box">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input type="text" placeholder="Search patients..." />
            <button className="search-btn">Search</button>
          </div>
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>PATIENT</th>
              <th>CONTACT</th>
              <th>RPM-START DATE</th>
              <th>LAST LOGIN</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p) => (
              <tr key={p.id} className="clickable-row" onClick={() => onPatientClick(p.id)}>
                <td>
                  <div className="patient-cell">
                    <div className="avatar">R</div>
                    <div className="patient-meta">
                      <span className="p-name">{p.name}</span>
                      <span className="p-username">{p.username}</span>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contact-cell">
                    <div className="contact-item">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" /></svg>
                      <span>{p.email}</span>
                    </div>
                    <div className="contact-item">
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                      <span>{p.phone}</span>
                    </div>
                  </div>
                </td>
                <td>{p.startDate}</td>
                <td>
                  <div className="login-cell">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px', opacity: 0.5 }}><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                    {p.lastLogin}
                  </div>
                </td>
                <td>
                  <button className="action-btn">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <style jsx="true">{`
        .dashboard-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
          padding-bottom: var(--space-xl);
        }

        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .subtitle {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-top: 4px;
        }

        .header-actions {
          display: flex;
          gap: var(--space-sm);
        }

        .btn {
          padding: 10px 20px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .btn-primary {
          background: var(--primary);
          color: white;
        }

        .btn-secondary {
          background: var(--bg-secondary);
          color: var(--text-main);
          border: 1px solid var(--border-dim);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--space-md);
        }

        .stat-card {
          padding: var(--space-md);
        }

        .stat-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .stat-info {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stat-subtext {
          font-size: 0.8rem;
          font-weight: 500;
        }

        .stat-icon-wrapper {
          width: 48px;
          height: 48px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .patients-overview {
          padding-top: var(--space-md);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding: 0 var(--space-md) var(--space-md);
          border-bottom: 1px solid var(--border-dim);
        }

        .section-subtitle {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-top: 4px;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          padding: 4px 4px 4px 12px;
          width: 320px;
        }

        .search-icon {
          color: var(--text-dim);
          margin-right: 8px;
        }

        .search-box input {
          background: none;
          border: none;
          color: var(--text-main);
          font-size: 0.85rem;
          flex: 1;
        }

        .search-box input:focus {
          outline: none;
        }

        .search-btn {
          background: #001F3D;
          color: white;
          padding: 6px 16px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .patient-table {
          width: 100%;
          border-collapse: collapse;
        }

        .patient-table th {
          text-align: left;
          padding: var(--space-md);
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-dim);
          letter-spacing: 0.05em;
          border-bottom: 1px solid var(--border-dim);
        }

        .patient-table td {
          padding: var(--space-md);
          border-bottom: 1px solid var(--border-dim);
          font-size: 0.9rem;
          vertical-align: middle;
        }

        .clickable-row {
          cursor: pointer;
          transition: background var(--transition-fast);
        }

        .clickable-row:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .patient-cell {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .patient-cell .avatar {
          width: 36px;
          height: 36px;
          background: #1A365D;
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
        }

        .p-username {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .contact-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-dim);
          font-size: 0.8rem;
        }

        .login-cell {
          display: flex;
          align-items: center;
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        .action-btn {
          color: var(--primary);
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .action-btn:hover {
          opacity: 1;
        }

        @media (max-width: 1024px) {
          .search-box {
            width: 100%;
            margin-top: var(--space-sm);
          }
          .section-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
