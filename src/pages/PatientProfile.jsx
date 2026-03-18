import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import VitalsChart from '../components/VitalsChart';
import StatCard from '../components/StatCard';

const PatientProfile = ({ patientId, onBack, onNavigate }) => {
  const [showThresholdsModal, setShowThresholdsModal] = useState(false);
  
  // Mock data for the selected patient
  const patient = {
    name: 'James Miller',
    age: 81,
    gender: 'Male',
    condition: 'Chronic Heart Failure',
    medications: ['Lisinopril 10mg', 'Furosemide 40mg', 'Carvedilol 6.25mg'],
    riskLevel: 'High',
    lastUpdate: '2 minutes ago'
  };

  const vitals = [
    { label: 'Heart Rate', value: '142', unit: 'bpm', trend: 15, icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z', color: '239, 68, 68' },
    { label: 'SpO2', value: '94', unit: '%', trend: -2, icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l.647-.647a2 2 0 011.022-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l1.931.386a2 2 0 001.022.547l.647.647a2 2 0 102.828-2.828l-2.387-2.387z', color: 'var(--brand-rgb)' },
  ];

  return (
    <div className="patient-profile animate-fade">
      <header className="profile-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Dashboard
        </button>
        <div className="header-main">
          <div className="patient-meta">
            <h1>{patient.name}</h1>
            <div className="meta-chips">
              <span className="chip">{patient.age}y</span>
              <span className="chip">{patient.gender}</span>
              <span className={`chip-risk ${patient.riskLevel.toLowerCase()}`}>{patient.riskLevel} Risk</span>
            </div>
          </div>
          <div className="header-actions">
            <button className="btn-secondary" onClick={() => onNavigate('communication', patientId || '1')}>Message Patient</button>
            <button className="btn-gradient" onClick={() => setShowThresholdsModal(true)}>Adjust Thresholds</button>
          </div>
        </div>
      </header>

      <div className="profile-content">
        <div className="detail-column">
          <section className="glass-card patient-details">
            <h3>Medical Overview</h3>
            <div className="info-grid">
              <div className="info-item">
                <label>Primary Condition</label>
                <span>{patient.condition}</span>
              </div>
              <div className="info-item">
                <label>Active Medications</label>
                <div className="med-tags">
                  {patient.medications.map(m => <span key={m}>{m}</span>)}
                </div>
              </div>
              <div className="info-item">
                <label>Latest Insight</label>
                <div className="insight-pill glass-card">
                   <p>Abnormal heart rate spikes detected during late-night hours. Potential adjustment in beta-blocker dosage recommended.</p>
                </div>
              </div>
            </div>
          </section>

          <div className="vitals-summary-grid">
            {vitals.map((v, i) => <StatCard key={i} {...v} />)}
          </div>
        </div>

        <div className="charts-column">
          <VitalsChart label="Heart Rate" color="239, 68, 68" />
          <VitalsChart label="Blood Oxygen (SpO2)" color="var(--brand-rgb)" />
        </div>
      </div>

      {showThresholdsModal && createPortal(
        <div className="modal-backdrop" onClick={() => setShowThresholdsModal(false)}>
          <div className="modal-content glass-card animate-fade" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Adjust Thresholds: {patient.name}</h2>
              <button className="close-btn" onClick={() => setShowThresholdsModal(false)}>✕</button>
            </div>
            <div className="modal-body" style={{ maxHeight: '70vh', overflowY: 'auto' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)' }}>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '12px' }}>Heart Rate (bpm)</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label>High Alert</label>
                      <input type="number" className="modal-input" defaultValue="100" />
                    </div>
                    <div className="form-group">
                      <label>Low Alert</label>
                      <input type="number" className="modal-input" defaultValue="60" />
                    </div>
                  </div>
                </div>

                <div style={{ padding: '16px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: 'var(--radius-md)' }}>
                  <h3 style={{ fontSize: '1rem', color: 'var(--text-main)', marginBottom: '12px' }}>Blood Oxygen SpO2 (%)</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div className="form-group">
                      <label>High Alert (Optional)</label>
                      <input type="number" className="modal-input" defaultValue="" placeholder="None" />
                    </div>
                    <div className="form-group">
                      <label>Low Alert</label>
                      <input type="number" className="modal-input" defaultValue="92" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowThresholdsModal(false)}>Cancel</button>
              <button className="btn-gradient" onClick={() => {
                alert('Thresholds saved for ' + patient.name);
                setShowThresholdsModal(false);
              }}>Save Parameters</button>
            </div>
          </div>
        </div>,
        document.body
      )}

      <style jsx="true">{`
        .patient-profile {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-dim);
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: var(--space-sm);
          transition: all 0.2s;
        }

        .back-btn:hover {
          color: var(--brand-color);
          transform: translateX(-4px);
        }

        .header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .patient-meta h1 {
          font-size: 2.5rem;
          margin-bottom: var(--space-xs);
          color: var(--text-main);
          font-weight: 800;
        }

        .meta-chips {
          display: flex;
          gap: 10px;
        }

        .chip {
          padding: 6px 14px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-dim);
          border: 1px solid var(--border-dim);
        }

        .chip-risk {
          padding: 6px 14px;
          border-radius: var(--radius-full);
          font-size: 0.85rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .chip-risk.high { background: rgba(239, 68, 68, 0.1); color: var(--danger); border: 1px solid rgba(239, 68, 68, 0.2); }

        .header-actions {
          display: flex;
          gap: var(--space-sm);
        }

        .btn-secondary {
          background: var(--bg-secondary);
          color: var(--text-main);
          border: 1px solid var(--border-dim);
          padding: 10px 24px;
          border-radius: var(--radius-sm);
          font-weight: 600;
          transition: all var(--transition-fast);
        }

        .btn-secondary:hover {
          background: var(--bg-tertiary);
          border-color: var(--brand-color);
          transform: translateY(-2px);
        }

        .profile-content {
          display: grid;
          grid-template-columns: 1fr 1.6fr;
          gap: var(--space-lg);
        }

        .detail-column {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .patient-details {
          padding: var(--space-lg);
          border-radius: var(--radius-lg);
          transition: none;
        }
        
        .patient-details:hover { transform: none; }

        .patient-details h3 {
          margin-bottom: var(--space-lg);
          color: var(--text-main);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }

        .info-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .info-item label {
          display: block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-dim);
          margin-bottom: 8px;
          font-weight: 700;
        }

        .info-item span {
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--text-main);
        }

        .med-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }

        .med-tags span {
          padding: 6px 12px;
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent);
          border-radius: var(--radius-sm);
          font-size: 0.8rem;
          font-weight: 700;
          border: 1px solid rgba(139, 92, 246, 0.2);
        }

        .insight-pill {
          padding: var(--space-md);
          border-radius: var(--radius-md);
          background: rgba(var(--brand-color), 0.03);
          border-color: rgba(var(--brand-color), 0.1);
          transition: none;
        }
        
        .insight-pill:hover { transform: none; }

        .insight-pill p {
          color: var(--text-main);
          font-size: 0.95rem;
          line-height: 1.6;
          opacity: 0.9;
        }

        .vitals-summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }

        .charts-column {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        @media (max-width: 1280px) {
          .profile-content { grid-template-columns: 1fr; }
        }

        @media (max-width: 768px) {
          .header-main {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-sm);
          }

          .header-actions {
            width: 100%;
          }

          .header-actions button {
            flex: 1;
            font-size: 0.85rem;
            padding: 10px 14px;
          }

          .patient-meta h1 {
            font-size: 1.75rem;
          }

          .vitals-summary-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default PatientProfile;
