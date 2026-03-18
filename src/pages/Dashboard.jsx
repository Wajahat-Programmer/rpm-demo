import React, { useState } from 'react';
import { createPortal } from 'react-dom';

const Dashboard = ({ onPatientClick }) => {
  const stats = [
    { label: 'Total Patients', value: '2', subtext: 'Assigned to you', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2 M9 7a4 4 0 11-8 0 4 4 0 018 0 M23 21v-2a4 4 0 00-3-3.87 M16 3.13a4 4 0 010 7.75', color: 'var(--brand-rgb)' },
    { label: 'Active Patients', value: '0', subtext: '0% of total', icon: 'M22 12h-4l-3 9L9 3l-3 9H2', color: '16, 185, 129' },
    { label: 'Alerts', value: '0', subtext: 'Total alerts', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z', color: '239, 68, 68' },
    { label: 'Today\'s Alerts', value: '0', subtext: 'Received today', icon: 'M13 10V3L4 14h7v7l9-11h-7z', color: '249, 115, 22' },
  ];

  const patients = [
    { id: 1, name: 'Tester', username: '@rickyt2294', email: 'abcd123@gmail.com', phone: '123456789', startDate: 'Jan 29, 2026', lastLogin: 'Feb 7, 2026, 02:11 AM' },
    { id: 2, name: '25B3E02265', username: '@Robert', email: 'ghi@gmail.com', phone: '+1626337696', startDate: 'Dec 9, 2025', lastLogin: 'Never logged in' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const filteredPatients = patients.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-page animate-fade">
      <header className="dashboard-header">
        <div className="title-section">
          <h1>Dashboard Overview</h1>
          <p className="subtitle">Real-time health monitoring & analytics</p>
        </div>
        <div className="header-actions">
          <button className="btn-secondary">Download Report</button>
          <button className="btn-gradient" onClick={() => setShowModal(true)}>+ New Patient</button>
        </div>
      </header>

      <section className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="glass-card stat-card">
            <div className="stat-content">
              <div className="stat-info">
                <span className="stat-label">{stat.label}</span>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-subtext" style={{ color: idx === 0 ? 'var(--brand-color)' : 'var(--text-dim)' }}>
                  {stat.subtext}
                </span>
              </div>
              <div className="stat-icon-wrapper" style={{ backgroundColor: `rgba(${stat.color}, 0.1)`, color: `rgb(${stat.color})`, borderRadius: 'var(--radius-md)' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" width="22" height="22">
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
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" className="search-icon">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input 
              type="text" 
              placeholder="Search patients..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn btn-gradient">Search</button>
          </div>
        </div>

        <div className="table-responsive">
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
              {filteredPatients.length > 0 ? filteredPatients.map((p) => (
                <tr key={p.id} className="clickable-row" onClick={() => onPatientClick(p.id)}>
                  <td>
                    <div className="patient-cell">
                      <div className="avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>R</div>
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
                    <button className="action-btn-circle">
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    </button>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '30px' }}>No patients found matching "{searchTerm}"</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
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

        .btn-secondary {
          background: var(--bg-secondary);
          color: var(--text-main);
          border: 1px solid var(--border-dim);
          padding: 10px 24px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          background: var(--bg-tertiary);
          border-color: var(--brand-color);
          transform: translateY(-2px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: var(--space-md);
        }

        .stat-card {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
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
          font-size: 2.25rem;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }

        .stat-subtext {
          font-size: 0.8rem;
          font-weight: 500;
        }

        .stat-icon-wrapper {
          width: 52px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .patients-overview {
          padding: var(--space-md);
          border-radius: var(--radius-lg);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          padding-bottom: var(--space-md);
          border-bottom: 1px solid var(--border-dim);
          margin-bottom: var(--space-md);
        }

        .section-subtitle {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-top: 4px;
        }

        .search-box {
          display: flex;
          align-items: center;
          background: rgba(var(--bg-tertiary), 0.4);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-md);
          padding: 4px 4px 4px 16px;
          width: 360px;
          backdrop-filter: blur(4px);
        }

        .search-icon {
          color: var(--brand-color);
          margin-right: 12px;
        }

        .search-box input {
          background: none;
          border: none;
          color: var(--text-main);
          font-size: 0.9rem;
          flex: 1;
        }

        .search-box input:focus {
          outline: none;
        }

        .search-btn {
          padding: 8px 20px !important;
          border-radius: var(--radius-sm) !important;
          font-size: 0.85rem !important;
        }

        .table-responsive {
          overflow-x: auto;
        }

        .patient-table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0 8px;
        }

        .patient-table th {
          text-align: left;
          padding: var(--space-sm) var(--space-md);
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .patient-table td {
          padding: var(--space-md);
          font-size: 0.9rem;
          vertical-align: middle;
          background: rgba(255, 255, 255, 0.02);
        }

        .patient-table tr td:first-child { border-radius: var(--radius-md) 0 0 var(--radius-md); }
        .patient-table tr td:last-child { border-radius: 0 var(--radius-md) var(--radius-md) 0; }

        .clickable-row {
          cursor: pointer;
          transition: transform 0.2s;
        }

        .clickable-row:hover {
          transform: scale(1.005);
        }

        .clickable-row:hover td {
          background: rgba(255, 255, 255, 0.05);
        }

        .patient-cell {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .avatar {
          width: 40px;
          height: 40px;
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

        .p-username {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .contact-cell {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        .login-cell {
          display: flex;
          align-items: center;
          color: var(--text-dim);
          font-size: 0.85rem;
        }

        .action-btn-circle {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--brand-color);
          background: rgba(var(--brand-rgb), 0.05);
          transition: all 0.2s;
        }

        .action-btn-circle:hover {
          background: var(--brand-gradient);
          color: #ffffff;
          transform: rotate(15deg);
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

        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .header-actions {
            width: 100%;
          }

          .header-actions button {
            flex: 1;
            padding: 10px 12px;
            font-size: 0.85rem;
          }

          .stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-sm);
          }

          .stat-value {
            font-size: 1.75rem;
          }

          .stat-card {
            padding: var(--space-sm);
          }

          h1 {
            font-size: 1.35rem;
          }

          .patient-table th:nth-child(3),
          .patient-table td:nth-child(3),
          .patient-table th:nth-child(4),
          .patient-table td:nth-child(4) {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
      `}</style>
      
      {showModal && createPortal(
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal-content glass-card animate-fade" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Patient</h2>
              <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="e.g. Jane Doe" className="modal-input" />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="jane@example.com" className="modal-input" />
              </div>
              <div className="form-group">
                <label>Primary Device</label>
                <select className="modal-input">
                  <option>Select device type...</option>
                  <option>Blood Pressure Monitor</option>
                  <option>Pulse Oximeter</option>
                  <option>Weight Scale</option>
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="btn-gradient" onClick={() => {
                alert('Patient invited successfully! (Demo Data)');
                setShowModal(false);
              }}>Send Invite</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default Dashboard;
