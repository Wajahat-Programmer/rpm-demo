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
                <div className="user-avatar">{user.id === 1 ? 'T' : '2'}</div>
                <div className="user-meta">
                  <span className="u-name">{user.name}</span>
                  <span className="u-username">{user.username}</span>
                </div>
              </div>
              <button className="device-btn">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Show devices
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginLeft: '8px' }}>
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
          gap: var(--space-md);
        }

        .page-header h1 {
          font-size: 1.25rem;
          color: white;
          background: #5D9CEC;
          padding: 8px 16px;
          border-radius: 4px;
          display: inline-block;
          font-weight: 600;
        }

        .content-card {
           background: white;
           padding: 0;
        }

        .section-title {
          padding: var(--space-md);
          font-size: 1rem;
          font-weight: 700;
          color: #1A365D;
          border-bottom: 1px solid var(--border-dim);
        }

        .user-list {
          display: flex;
          flex-direction: column;
        }

        .user-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--space-md);
          border-bottom: 1px solid var(--border-dim);
        }

        .user-row:last-child {
          border-bottom: none;
        }

        .user-info {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          background: #003366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }

        .user-meta {
          display: flex;
          flex-direction: column;
        }

        .u-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: #1A365D;
        }

        .u-username {
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .device-btn {
          background: #001F3D;
          color: white;
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          transition: background 0.2s;
        }

        .device-btn:hover {
          background: #003366;
        }

        [data-theme='dark'] .content-card { background: var(--bg-secondary); }
        [data-theme='dark'] .section-title, [data-theme='dark'] .u-name { color: var(--text-main); }
      `}</style>
    </div>
  );
};

export default DeviceManagementView;
