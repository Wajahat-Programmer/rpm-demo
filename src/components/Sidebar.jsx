import React from 'react';

const Sidebar = ({ activeView, onViewChange, onLogout, theme, onToggleTheme, isOpen, onClose }) => {
  const menuItems = [
    { name: 'Dashboard', id: 'dashboard', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
    { name: 'Patients', id: 'patients', icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2' },
    { name: 'Alerts', id: 'alerts', icon: 'M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z' },
    { name: 'Patient Communication', id: 'communication', icon: 'M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z' },
    { name: 'Device Management', id: 'devices', icon: 'M22 12h-4l-3 9L9 3l-3 9H2' },
    { name: 'Settings', id: 'settings', icon: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z' },
  ];

  return (
    <aside className={`sidebar glass-panel ${isOpen ? 'sidebar-open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-group">
          <div className="logo-icon-wrapper">
            <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l2-4 3 10 3-12 3 6h5" />
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="logo-sub">RPM</span>
            <span className="logo-main">ProactiveCare</span>
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
            <div className="nav-icon-wrapper">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="nav-icon">
                {item.id === 'patients' ? <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></> : <path d={item.icon} />}
              </svg>
            </div>
            <span className="nav-label">{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile-bar glass-card">
          <div className="u-avatar">D</div>
          <div className="u-details">
            <span className="u-email">abcde@gmail.com</span>
            <span className="u-role">drwill123</span>
          </div>
        </div>
        <button className="logout-link" onClick={onLogout}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></svg>
          Logout Session
        </button>
      </div>

      <style jsx="true">{`
        .sidebar {
          width: 280px;
          height: 100vh;
          border-right: 1px solid var(--border-dim);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          z-index: 100;
          padding: 0;
        }

        .sidebar-header {
          padding: 32px var(--space-md);
        }

        .logo-group {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .logo-icon-wrapper {
          width: 44px;
          height: 44px;
          background: var(--brand-gradient);
          color: #ffffff;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 16px rgba(var(--brand-rgb), 0.2);
        }

        .logo-text-group {
          display: flex;
          flex-direction: column;
        }

        .logo-sub {
          font-size: 0.75rem;
          font-weight: 800;
          color: var(--brand-color);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .logo-main {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          padding: var(--space-sm);
          flex: 1;
          gap: 6px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 14px;
          border-radius: var(--radius-md);
          color: var(--text-dim);
          text-decoration: none;
          transition: all var(--transition-fast);
          width: 100%;
          text-align: left;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--brand-color);
          transform: translateX(4px);
        }

        .nav-item.active {
          background: var(--brand-gradient);
          color: #ffffff;
          box-shadow: 0 4px 15px rgba(var(--brand-rgb), 0.2);
        }

        .nav-icon-wrapper {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-icon { width: 22px; height: 22px; }

        .nav-label {
          font-weight: 700;
          font-size: 0.9rem;
        }

        .sidebar-footer {
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .user-profile-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px;
          border-radius: var(--radius-md);
          transition: none;
        }
        
        .user-profile-bar:hover { transform: none; }

        .u-avatar {
          width: 38px;
          height: 38px;
          background: var(--bg-tertiary);
          color: var(--brand-color);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 1rem;
          flex-shrink: 0;
          border: 1px solid var(--border-dim);
        }

        .u-details {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .u-email {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-main);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .u-role {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .logout-link {
          font-size: 0.85rem;
          color: var(--danger);
          padding: 12px;
          width: 100%;
          text-align: left;
          opacity: 0.7;
          display: flex;
          align-items: center;
          font-weight: 700;
        }

        .logout-link:hover {
          opacity: 1;
          color: var(--danger);
          background: rgba(239, 68, 68, 0.05);
          border-radius: var(--radius-sm);
        }

        [data-theme='light'] .nav-item:hover {
          background: rgba(var(--brand-rgb), 0.05);
        }

        /* ===== MOBILE SIDEBAR ===== */
        @media (max-width: 768px) {
          .sidebar {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 280px;
            z-index: 200;
            transform: translateX(-100%);
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            background: var(--bg-secondary);
          }

          .sidebar.sidebar-open {
            transform: translateX(0);
          }
        }
      `}</style>
    </aside>
  );
};

export default Sidebar;
