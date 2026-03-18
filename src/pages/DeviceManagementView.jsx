import React, { useState } from 'react';

const DeviceManagementView = () => {
  const [expandedUser, setExpandedUser] = useState(null);

  const users = [
    { 
      id: 1, name: 'Tester', username: '@rickyt2294', 
      devices: [
        { id: 'd1', name: 'BP Monitor M3', type: 'Blood Pressure', status: 'Active', battery: '85%' },
        { id: 'd2', name: 'Scale W1', type: 'Weight Scale', status: 'Offline', battery: '12%' }
      ] 
    },
    { 
      id: 2, name: '25B3E02265', username: '@Robert', 
      devices: [
        { id: 'd3', name: 'OxiPulse Pro', type: 'Pulse Oximeter', status: 'Active', battery: '92%' }
      ] 
    },
  ];

  const handleToggle = (id) => {
    setExpandedUser(expandedUser === id ? null : id);
  };

  return (
    <div className="device-view-page animate-fade">
      <header className="page-header">
        <h1>Device Management</h1>
      </header>

      <section className="glass-card content-card">
        <div className="section-title">Users & Devices</div>
        
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-list-item">
              <div className="user-row">
                <div className="user-info">
                  <div className="user-avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>{user.id === 1 ? 'T' : '2'}</div>
                  <div className="user-meta">
                    <span className="u-name">{user.name}</span>
                    <span className="u-username">{user.username}</span>
                  </div>
                </div>
                <button 
                  className="btn-gradient device-btn" 
                  onClick={() => handleToggle(user.id)}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '10px' }}>
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  {expandedUser === user.id ? 'Hide connected devices' : 'Show connected devices'}
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '10px', transform: expandedUser === user.id ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
                    <path d="m6 9 6 6 6-6"/>
                  </svg>
                </button>
              </div>
              {expandedUser === user.id && (
                <div className="devices-dropdown animate-fade">
                  {user.devices.map(device => (
                    <div key={device.id} className="device-item">
                      <div className="device-meta">
                        <span className="device-name">{device.name}</span>
                        <span className="device-type-label">{device.type}</span>
                      </div>
                      <div className="device-stats">
                        <div className={`status-indicator ${device.status.toLowerCase()}`}>
                          <span className="dot"></span>
                          {device.status}
                        </div>
                        <div className="battery-indicator">
                          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="16" height="10" rx="2" ry="2" /><line x1="22" y1="11" x2="22" y2="13" /></svg>
                          {device.battery}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <style jsx="true">{`
        .device-view-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .page-header h1 {
          font-size: 1.75rem;
          color: var(--text-main);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .content-card {
           padding: 0;
           border-radius: var(--radius-lg);
           overflow: hidden;
           transition: none;
        }
        
        .content-card:hover { transform: none; }

        .section-title {
          padding: var(--space-md) var(--space-lg);
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-main);
          border-bottom: 1px solid var(--border-dim);
          background: rgba(255, 255, 255, 0.02);
        }

        .user-list {
          display: flex;
          flex-direction: column;
        }

        .user-list-item {
          display: flex;
          flex-direction: column;
          border-bottom: 1px solid var(--border-dim);
        }

        .user-list-item:last-child {
          border-bottom: none;
        }

        .user-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-md) var(--space-lg);
          transition: background 0.2s;
        }

        .user-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .user-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1.1rem;
          box-shadow: 0 4px 10px rgba(var(--brand-rgb), 0.2);
        }

        .user-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .u-name {
          font-weight: 700;
          font-size: 1rem;
          color: var(--text-main);
        }

        .u-username {
          font-size: 0.85rem;
          color: var(--text-dim);
        }

        .device-btn {
          display: flex;
          align-items: center;
          padding: 8px 16px !important;
          font-size: 0.85rem !important;
          border-radius: var(--radius-sm) !important;
        }

        .devices-dropdown {
          padding: 0 var(--space-lg) var(--space-lg) calc(var(--space-lg) + 44px + var(--space-md));
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .device-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-dim);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
        }

        .device-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .device-name {
          font-weight: 700;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .device-type-label {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .device-stats {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
        }

        .status-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 600;
        }

        .status-indicator .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }

        .status-indicator.active { color: var(--brand-color); }
        .status-indicator.active .dot { background: var(--brand-color); box-shadow: 0 0 6px var(--brand-color); }
        
        .status-indicator.offline { color: var(--text-dim); }
        .status-indicator.offline .dot { background: var(--text-dim); }

        .battery-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: var(--text-main);
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .user-row {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .device-btn {
            width: 100%;
            justify-content: center;
          }

          .devices-dropdown {
            padding: 0 var(--space-md) var(--space-md);
          }

          .device-item {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }
        }
      `}</style>
    </div>
  );
};

export default DeviceManagementView;
