import React, { useState, useEffect } from 'react'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import PatientProfile from './pages/PatientProfile'
import LoginPage from './pages/LoginPage'
import PatientsView from './pages/PatientsView'
import AlertsView from './pages/AlertsView'
import CommunicationView from './pages/CommunicationView'
import DeviceManagementView from './pages/DeviceManagementView'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedPatientId, setSelectedPatientId] = useState(null);
  const [theme, setTheme] = useState('dark');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Load theme and auth from local storage for demo persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('rpm-theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);

    const savedAuth = localStorage.getItem('rpm-auth') === 'true';
    setIsAuthenticated(savedAuth);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('rpm-theme', newTheme);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('rpm-auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem('rpm-auth', 'false');
    setCurrentView('dashboard');
  };

  const handlePatientClick = (id) => {
    setSelectedPatientId(id);
    setCurrentView('patient-profile');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedPatientId(null);
  };

  if (!isAuthenticated) {
    return <LoginPage onLogin={handleLogin} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onPatientClick={handlePatientClick} />;
      case 'patient-profile':
        return <PatientProfile patientId={selectedPatientId} onBack={handleBackToDashboard} />;
      case 'patients':
        return <PatientsView onPatientClick={handlePatientClick} />;
      case 'alerts':
        return <AlertsView />;
      case 'communication':
        return <CommunicationView />;
      case 'devices':
        return <DeviceManagementView />;
      case 'settings':
        return (
          <div className="animate-fade">
            <header className="page-header">
              <h1>System Settings</h1>
            </header>
            <div className="glass-card" style={{ padding: '8rem', marginTop: '2rem', textAlign: 'center', borderRadius: 'var(--radius-xl)' }}>
              <div style={{ marginBottom: '20px', opacity: 0.5 }}>
                <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="var(--brand-color)" strokeWidth="1.5">
                   <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                </svg>
              </div>
              <h2 style={{ color: 'var(--text-main)', fontSize: '2rem', marginBottom: '12px' }}>Portal Configuration</h2>
              <p style={{ color: 'var(--text-dim)', fontSize: '1.1rem' }}>HIPAA compliance logs, security keys, and integration settings.</p>
              <button className="btn-gradient" style={{ marginTop: '30px' }}>Export Clinical Logs</button>
            </div>
          </div>
        );
      default:
        return <Dashboard onPatientClick={handlePatientClick} />;
    }
  };

  return (
    <div className="app-container" data-theme={theme}>
      {sidebarOpen && <div className="sidebar-backdrop" onClick={() => setSidebarOpen(false)} />}
      <Sidebar 
        activeView={currentView} 
        onViewChange={(view) => { setCurrentView(view); setSidebarOpen(false); }} 
        onLogout={handleLogout}
        theme={theme}
        onToggleTheme={toggleTheme}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="main-wrapper">
        <header className="top-navbar glass-panel">
          <button className="hamburger-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <div className="nav-actions">
            <div className="notificon">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </div>
            <div className={`theme-switch ${theme === 'dark' ? 'dark' : ''}`} onClick={toggleTheme}>
              <div className="switch-knob">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><circle cx="12" cy="12" r="5"/></svg>
                )}
              </div>
            </div>
            <div className="user-pill glass-card">
              <span className="user-display">Doctor Will</span>
              <div className="u-circ">D</div>
            </div>
          </div>
        </header>
        <main className="main-content">
          {renderView()}
        </main>
      </div>

      <style jsx="true">{`
        .app-container {
          display: flex;
          min-height: 100vh;
          background-color: var(--bg-main);
          transition: background-color var(--transition-smooth);
        }

        .main-wrapper {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .top-navbar {
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-lg);
          z-index: 50;
        }

        .hamburger-btn {
          display: none;
          color: var(--text-main);
          padding: 8px;
          border-radius: var(--radius-sm);
          transition: all 0.2s;
        }

        .hamburger-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--brand-color);
        }

        .sidebar-backdrop {
          display: none;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          margin-left: auto;
        }

        .notificon {
          color: var(--text-dim);
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .notificon:hover { color: var(--brand-color); }

        .theme-switch {
          width: 52px;
          height: 28px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 999px;
          position: relative;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid var(--border-dim);
        }

        .theme-switch.dark { background: var(--brand-gradient); border-color: transparent; }

        .switch-knob {
          position: absolute;
          top: 3px;
          left: 3px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .theme-switch.dark .switch-knob { transform: translateX(24px); }

        .user-pill {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 6px 6px 16px !important;
          border-radius: var(--radius-full) !important;
          background: rgba(255, 255, 255, 0.03) !important;
          transition: none !important;
        }
        
        .user-pill:hover { transform: none !important; }

        .user-display {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .u-circ {
          width: 34px;
          height: 34px;
          background: var(--brand-gradient);
          color: #ffffff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
          font-weight: 800;
          box-shadow: 0 4px 10px rgba(var(--brand-rgb), 0.2);
        }
        
        .main-content {
          flex: 1;
          padding: var(--space-lg);
          max-width: 1600px;
          margin: 0 auto;
          width: 100%;
          overflow-y: auto;
        }

        .page-header h1 {
          font-size: 1.75rem;
          color: var(--text-main);
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        
        @media (max-width: 1200px) {
          .main-content { padding: var(--space-md); }
        }

        /* ===== MOBILE RESPONSIVE ===== */
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .sidebar-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 199;
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
          }

          .top-navbar {
            height: 60px;
            padding: 0 var(--space-sm);
          }

          .nav-actions {
            gap: var(--space-sm);
          }

          .user-display {
            display: none;
          }

          .user-pill {
            padding: 4px !important;
          }

          .main-content {
            padding: var(--space-sm);
          }

          .page-header h1 {
            font-size: 1.35rem;
          }
        }
      `}</style>
    </div>
  )
}

export default App
