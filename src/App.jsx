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

  // Load theme and auth from local storage for demo persistence
  useEffect(() => {
    const savedTheme = localStorage.getItem('rpm-theme') || 'light'; // Default to light to match inspiration better
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
              <h1>Settings</h1>
            </header>
            <div className="glass-card" style={{ padding: '4rem', marginTop: '2rem', textAlign: 'center' }}>
              <h2 style={{ color: 'var(--text-dim)' }}>Admin Configuration</h2>
              <p>Portal settings and API integration management placeholder.</p>
            </div>
          </div>
        );
      default:
        return <Dashboard onPatientClick={handlePatientClick} />;
    }
  };

  return (
    <div className="app-container" data-theme={theme}>
      <Sidebar
        activeView={currentView}
        onViewChange={setCurrentView}
        onLogout={handleLogout}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <div className="main-wrapper">
        <header className="top-navbar glass-panel">
          <div className="nav-breadcrumb">
            {currentView.charAt(0).toUpperCase() + currentView.slice(1).replace('-', ' ')}
          </div>
          <div className="nav-actions">
            <div className="notificon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
            </div>
            <div className="theme-switch" onClick={toggleTheme}>
              <div className={`switch-knob ${theme === 'dark' ? 'right' : 'left'}`}></div>
            </div>
            <div className="user-pill">
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
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 var(--space-lg);
          z-index: 50;
        }

        .nav-breadcrumb {
          background: #5D9CEC;
          color: white;
          padding: 6px 16px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .notificon {
          color: var(--text-dim);
          cursor: pointer;
        }

        .theme-switch {
          width: 44px;
          height: 22px;
          background: #CBD5E0;
          border-radius: 999px;
          position: relative;
          cursor: pointer;
          transition: background 0.3s;
        }

        [data-theme='dark'] .theme-switch { background: var(--primary); }

        .switch-knob {
          position: absolute;
          top: 2px;
          width: 18px;
          height: 18px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
        }

        .switch-knob.left { transform: translateX(2px); }
        .switch-knob.right { transform: translateX(24px); }

        .user-pill {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-dim);
          font-weight: 600;
          font-size: 0.9rem;
        }

        .u-circ {
          width: 32px;
          height: 32px;
          background: #1A202C;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
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
          font-size: 1.25rem;
          color: white;
          background: #5D9CEC;
          padding: 8px 16px;
          border-radius: 4px;
          display: inline-block;
          font-weight: 600;
        }
        
        @media (max-width: 1200px) {
          .main-content {
            padding: var(--space-md);
          }
        }
      `}</style>
    </div>
  )
}

export default App
