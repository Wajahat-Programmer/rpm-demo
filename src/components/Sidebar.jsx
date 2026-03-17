import React from 'react';

const Sidebar = ({ activeView, onViewChange, onLogout, theme, onToggleTheme }) => {
  const menuItems = [
    { name: 'Dashboard', id: 'dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { name: 'Patients', id: 'patients', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
    { name: 'Alerts', id: 'alerts', icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' },
    { name: 'Patient Communication', id: 'communication', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
    { name: 'Device Management', id: 'devices', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { name: 'Settings', id: 'settings', icon: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="logo-group">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#003366" strokeWidth="2" style={{ marginRight: '8px' }}>
            <path d="M20.42 4.58a5.44 5.44 0 0 0-7.71 0l-.71.71-.71-.71a5.44 5.44 0 0 0-7.71 7.71l.71.71L12 21l7.71-7.71.71-.71a5.44 5.44 0 0 0 0-7.71z" />
          </svg>
          <div className="logo-text-group">
            <span className="logo-sub">RPM</span>
            <span className="logo-main">Remote Patient Monitoring</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeView === item.id || (activeView === 'patient-profile' && item.id === 'patients') ? 'active' : ''}`}
            onClick={() => onViewChange(item.id)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
              {item.id === 'patients' ? <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> : <path d={item.icon} />}
            </svg>
            <span className="nav-label">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile-bar">
          <div className="u-avatar">D</div>
          <div className="u-details">
            <span className="u-email">abcde@gmail.com</span>
            <span className="u-role">drwill123</span>
          </div>
        </div>
        <button className="logout-link" onClick={onLogout}>Logout</button>
      </div>

      <style jsx="true">{`
        .sidebar {
          width: 280px;
          height: 100vh;
          background: white;
          border-right: 1px solid var(--border-dim);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .sidebar-header {
          padding: 24px var(--space-md);
          border-bottom: 1px solid var(--border-dim);
        }

        .logo-group {
          display: flex;
          align-items: center;
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-sub {
          font-size: 0.65rem;
          font-weight: 700;
          color: #1A365D;
          text-transform: uppercase;
        }

        .logo-main {
          font-size: 0.75rem;
          font-weight: 700;
          color: #1A365D;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          padding: var(--space-sm);
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 4px;
          color: #4A5568;
          text-decoration: none;
          transition: all 0.2s;
          width: 100%;
          text-align: left;
          margin-bottom: 4px;
        }

        .nav-item:hover {
          background: #f8f9fa;
          color: #003366;
        }

        .nav-item.active {
          background: #001F3D;
          color: white;
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        .nav-label {
          font-weight: 600;
          font-size: 0.85rem;
        }

        .sidebar-footer {
          padding: var(--space-md);
          border-top: 1px solid var(--border-dim);
        }

        .user-profile-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .u-avatar {
          width: 32px;
          height: 32px;
          background: #4A5568;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .u-details {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .u-email {
          font-size: 0.75rem;
          font-weight: 700;
          color: #1A365D;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .u-role {
          font-size: 0.7rem;
          color: #718096;
        }

        .logout-link {
          font-size: 0.85rem;
          color: #718096;
          padding: 8px 16px;
          width: 100%;
          text-align: center;
        }

        .logout-link:hover {
          text-decoration: underline;
          color: #1A365D;
        }

        [data-theme='dark'] .sidebar, [data-theme='dark'] .sidebar-header, [data-theme='dark'] .sidebar-footer {
          background: var(--bg-secondary);
        }
        
        [data-theme='dark'] .logo-sub, [data-theme='dark'] .logo-main, [data-theme='dark'] .u-email {
          color: var(--text-main);
        }

        [data-theme='dark'] .nav-item {
          color: var(--text-dim);
        }

        [data-theme='dark'] .nav-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
