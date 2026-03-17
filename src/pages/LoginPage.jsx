import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo credentials: admin@mediconnect.com / demo123
    if (email === 'admin@mediconnect.com' && password === 'demo123') {
      onLogin();
    } else {
      setError('Invalid credentials. Use admin@mediconnect.com / demo123');
    }
  };

  return (
    <div className="login-container">
      <div className="glass-card login-card animate-fade">
        <div className="login-header">
          <div className="logo-icon">RPM</div>
          <h1>MediConnect</h1>
          <p>Remote Patient Monitoring Portal</p>
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>Email Address</label>
            <input 
              type="email" 
              placeholder="admin@mediconnect.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-btn">Sign In</button>
        </form>

        <div className="login-footer">
          <p>Demo Mode Enabled</p>
          <span>admin@mediconnect.com / demo123</span>
        </div>
      </div>

      <style jsx="true">{`
        .login-container {
          height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at top right, #161B22, #0A0C10);
        }

        .login-card {
          width: 100%;
          max-width: 420px;
          padding: var(--space-xl);
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .login-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--space-xs);
        }

        .logo-icon {
          background: var(--primary);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: var(--space-sm);
        }

        .login-header h1 {
          font-size: 1.75rem;
          color: var(--text-main);
        }

        .login-header p {
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .input-group label {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-dim);
        }

        .input-group input {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          padding: 12px;
          color: var(--text-main);
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .input-group input:focus {
          outline: none;
          border-color: var(--primary);
          background: rgba(255, 255, 255, 0.08);
        }

        .login-btn {
          margin-top: var(--space-sm);
          background: var(--primary);
          color: white;
          padding: 12px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          font-size: 1rem;
          transition: var(--transition-fast);
        }

        .login-btn:hover {
          background: var(--primary-hover);
          transform: translateY(-1px);
        }

        .error-message {
          color: var(--danger);
          font-size: 0.8rem;
          background: rgba(239, 68, 68, 0.1);
          padding: 10px;
          border-radius: var(--radius-sm);
          text-align: center;
        }

        .login-footer {
          margin-top: var(--space-sm);
          text-align: center;
          border-top: 1px solid var(--border-dim);
          padding-top: var(--space-md);
        }

        .login-footer p {
          font-size: 0.8rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        .login-footer span {
          font-size: 0.75rem;
          color: var(--text-dim);
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
