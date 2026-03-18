import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Mock authentication with demo credentials
    setTimeout(() => {
      if (email === 'admin@mediconnect.com' && password === 'demo123') {
        onLogin();
      } else {
        setError('Invalid clinical credentials. Please try again.');
        setLoading(false);
      }
    }, 1200);
  };

  return (
    <div className="login-container">
      <div className="login-glow"></div>
      <div className="login-card glass-card">
        <header className="login-header">
          <div className="logo-icon-wrapper">
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12h4l2-4 3 10 3-12 3 6h5" />
            </svg>
          </div>
          <div className="logo-text">
            <span className="logo-main">ProactiveCare</span>
            <span className="logo-sub">RPM</span>
          </div>
          <h1>System Authorization</h1>
          <p>Enter your clinician credentials to access the monitoring suite.</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="input-icon">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="m22 6-10 7L2 6" />
              </svg>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@mediconnect.com"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" className="input-icon">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          {error && <div className="error-msg animate-fade">{error}</div>}

          <button type="submit" className="btn-gradient login-btn" disabled={loading}>
            {loading ? (
              <div className="loader"></div>
            ) : (
              'Authorize Access'
            )}
          </button>
        </form>

        <footer className="login-footer">
          <p>Demo Access: <strong>admin@mediconnect.com</strong> / <strong>demo123</strong></p>
          <div className="legal-links">
            <span>HIPAA Compliant</span>
            <span>Secure Encryption</span>
          </div>
        </footer>
      </div>

      <style jsx="true">{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0A0C10;
          position: relative;
          overflow: hidden;
          padding: var(--space-md);
        }

        .login-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--brand-color) 0%, transparent 70%);
          opacity: 0.15;
          filter: blur(80px);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .login-card {
          width: 100%;
          max-width: 480px;
          padding: var(--space-xl) var(--space-lg);
          border-radius: var(--radius-xl);
          background: rgba(22, 27, 34, 0.7);
          position: relative;
          z-index: 10;
        }
        
        .login-card:hover { transform: none; }

        .login-header {
          text-align: center;
          margin-bottom: var(--space-xl);
        }

        .logo-icon-wrapper {
          width: 56px;
          height: 56px;
          background: var(--brand-gradient);
          color: #ffffff;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          box-shadow: 0 10px 20px rgba(var(--brand-rgb), 0.3);
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }

        .logo-sub {
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--brand-color);
          letter-spacing: 0.2em;
        }

        .logo-main {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
        }

        .login-header h1 {
          font-size: 1.75rem;
          margin-bottom: 8px;
          color: white;
          font-weight: 800;
          letter-spacing: -0.01em;
        }

        .login-header p {
          color: var(--text-dim);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input-icon {
          position: absolute;
          left: 14px;
          color: var(--brand-color);
          opacity: 0.7;
        }

        .input-wrapper input {
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-md);
          padding: 14px 14px 14px 44px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s;
        }

        .input-wrapper input:focus {
          outline: none;
          border-color: var(--brand-color);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 15px rgba(var(--brand-rgb), 0.1);
        }

        .error-msg {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.85rem;
          font-weight: 600;
          border: 1px solid rgba(239, 68, 68, 0.2);
          text-align: center;
        }

        .login-btn {
          margin-top: var(--space-sm);
          padding: 16px !important;
          font-size: 1rem !important;
          border-radius: var(--radius-md) !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .loader {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(0, 31, 61, 0.2);
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .login-footer {
          margin-top: var(--space-xl);
          text-align: center;
        }

        .login-footer p {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 16px;
        }

        .login-footer strong {
          color: var(--brand-color);
        }

        .legal-links {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .legal-links span {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-dim);
          opacity: 0.6;
          text-transform: uppercase;
        }

        @media (max-width: 768px) {
          .login-card {
            padding: var(--space-lg) var(--space-md);
          }

          .login-header h1 {
            font-size: 1.35rem;
          }

          .login-glow {
            width: 300px;
            height: 300px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
