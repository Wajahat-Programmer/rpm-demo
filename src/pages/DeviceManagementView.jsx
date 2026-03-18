import React from 'react';

const DeviceManagementView = () => {
  const users = [
    { id: 1, name: 'Tester', username: '@rickyt2294' },
    { id: 2, name: '25B3E02265', username: '@Robert' },
  ];

  return (
    <div className="device-view-page animate-fade">
      <header className="page-header">
        <h1>Device Management</h1>
      </header>

      <section className="glass-card content-card">
        <div className="section-title">Users & Devices</div>
        
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-row">
              <div className="user-info">
                <div className="user-avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>{user.id === 1 ? 'T' : '2'}</div>
                <div className="user-meta">
                  <span className="u-name">{user.name}</span>
                  <span className="u-username">{user.username}</span>
                </div>
              </div>
              <button className="btn-gradient device-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginRight: '10px' }}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Show connected devices
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '10px' }}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
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

        .user-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-md) var(--space-lg);
          border-bottom: 1px solid var(--border-dim);
          transition: background 0.2s;
        }

        .user-row:hover {
          background: rgba(255, 255, 255, 0.02);
        }

        .user-row:last-child {
          border-bottom: none;
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
          font-weight: 700;
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
          padding: 10px 20px !important;
          font-size: 0.85rem !important;
        }
      `}</style>
    </div>
  );
};

export default DeviceManagementView;
