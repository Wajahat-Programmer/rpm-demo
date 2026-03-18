import React, { useState } from 'react';

const SettingsView = () => {
  return (
    <div className="settings-view-page animate-fade">
      <header className="page-header" style={{ marginBottom: '24px' }}>
        <div className="title-section">
          <h1 style={{ fontSize: '1.5rem', color: 'var(--text-main)', fontWeight: 700 }}>System Settings</h1>
          <p className="subtitle" style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Manage your profile and portal configurations</p>
        </div>
      </header>

      <div className="settings-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* User Profile Card */}
        <section className="glass-card settings-section">
          <h2 className="section-title">User Profile</h2>
          
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" className="settings-input" defaultValue="Doctor Will" />
            </div>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="settings-input" defaultValue="drwill123" />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" className="settings-input" defaultValue="abcde@gmail.com" />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" className="settings-input" defaultValue="+16262559419" />
            </div>

            <div className="form-group">
              <label>Change Password</label>
              <input type="password" className="settings-input" placeholder="Enter new password" />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" className="settings-input" placeholder="Confirm new password" />
            </div>
          </div>

          <div className="form-actions">
            <button className="btn-gradient">Save Profile</button>
            <button className="btn-secondary">Cancel</button>
          </div>
        </section>

        {/* Alert Settings Card */}
        <section className="glass-card settings-section">
          <h2 className="section-title">Alert Settings</h2>
          <p className="section-desc">Set your preferred BP thresholds for receiving patient alerts</p>

          <div className="bp-settings-grid">
            <div className="bp-column">
              <h3 className="col-title">Systolic BP (mmHg)</h3>
              
              <div className="form-group">
                <label>High Alert Threshold</label>
                <input type="number" className="settings-input" defaultValue="140" />
                <span className="field-hint">Alert me when patient's systolic BP is above this value (130 or above)</span>
              </div>
              
              <div className="form-group">
                <label>Low Alert Threshold</label>
                <input type="number" className="settings-input" defaultValue="90" />
                <span className="field-hint">Alert me when patient's systolic BP is below this value (99 or less)</span>
              </div>
            </div>

            <div className="bp-column">
              <h3 className="col-title">Diastolic BP (mmHg)</h3>
              
              <div className="form-group">
                <label>High Alert Threshold</label>
                <input type="number" className="settings-input" defaultValue="90" />
                <span className="field-hint">Alert me when patient's diastolic BP is above this value (90 or above)</span>
              </div>
              
              <div className="form-group">
                <label>Low Alert Threshold</label>
                <input type="number" className="settings-input" defaultValue="60" />
                <span className="field-hint">Alert me when patient's diastolic BP is below this value (69 or less)</span>
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button className="btn-secondary">Save Alert Settings</button>
            <button className="btn-gradient">Set as Default (Recommended)</button>
          </div>
        </section>
      </div>

      <style>{`
        .settings-view-page {
          height: 100%;
          display: flex;
          flex-direction: column;
          animation: fadeIn var(--transition-smooth) forwards;
        }

        .settings-section {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .section-title {
          font-size: 1.25rem;
          color: var(--text-main);
          font-weight: 700;
          margin: 0;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-dim);
        }

        .section-desc {
          color: var(--text-dim);
          font-size: 0.95rem;
          margin-top: -10px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 24px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-dim);
        }

        .settings-input {
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          border: 1px solid var(--border-dim);
          background: rgba(255, 255, 255, 0.02);
          color: var(--text-main);
          font-size: 0.95rem;
          font-family: inherit;
          transition: all 0.2s;
        }

        .settings-input:focus {
          outline: none;
          border-color: var(--brand-color);
          box-shadow: 0 0 0 3px rgba(var(--brand-rgb), 0.15);
        }

        [data-theme='light'] .settings-input {
          background: #f8fafc;
          border-color: #e2e8f0;
          color: var(--text-main);
        }

        .field-hint {
          font-size: 0.75rem;
          color: var(--text-dim);
          margin-top: 4px;
          opacity: 0.8;
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }

        .bp-settings-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          padding-top: 8px;
        }

        .bp-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .col-title {
          font-size: 1rem;
          color: var(--text-main);
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .bp-settings-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .form-actions {
            flex-direction: column;
          }

          .form-actions button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SettingsView;
