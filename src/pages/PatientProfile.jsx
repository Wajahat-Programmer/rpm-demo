import React from 'react';
import VitalsChart from '../components/VitalsChart';
import StatCard from '../components/StatCard';

const PatientProfile = ({ patientId, onBack }) => {
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
    { label: 'SpO2', value: '94', unit: '%', trend: -2, icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.022.547l-2.387 2.387a2 2 0 102.828 2.828l.647-.647a2 2 0 011.022-.547l2.387-.477a6 6 0 003.86-.517l.318-.158a6 6 0 013.86-.517l1.931.386a2 2 0 001.022.547l.647.647a2 2 0 102.828-2.828l-2.387-2.387z', color: '59, 130, 246' },
  ];

  return (
    <div className="patient-profile animate-fade">
      <header className="profile-header">
        <button className="back-btn" onClick={onBack}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
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
            <button className="btn btn-secondary">Message Patient</button>
            <button className="btn btn-primary">Adjust Thresholds</button>
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
                <p>Abnormal heart rate spikes detected during late-night hours. Potential adjustment in beta-blocker dosage recommended.</p>
              </div>
            </div>
          </section>

          <div className="vitals-summary-grid">
            {vitals.map((v, i) => <StatCard key={i} {...v} />)}
          </div>
        </div>

        <div className="charts-column">
          <VitalsChart label="Heart Rate" color="239, 68, 68" />
          <VitalsChart label="Blood Oxygen (SpO2)" color="59, 130, 246" />
        </div>
      </div>

      <style jsx="true">{`
        .patient-profile {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-dim);
          font-size: 0.9rem;
          margin-bottom: var(--space-md);
        }

        .back-btn:hover {
          color: var(--text-main);
        }

        .header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .patient-meta h1 {
          font-size: 2.25rem;
          margin-bottom: var(--space-xs);
        }

        .meta-chips {
          display: flex;
          gap: 8px;
        }

        .chip {
          padding: 4px 12px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          color: var(--text-dim);
        }

        .chip-risk {
          padding: 4px 12px;
          border-radius: var(--radius-full);
          font-size: 0.8rem;
          font-weight: 600;
        }

        .chip-risk.high { background: rgba(239, 68, 68, 0.1); color: var(--danger); }

        .profile-content {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: var(--space-md);
        }

        .detail-column {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .patient-details {
          padding: var(--space-md);
        }

        .patient-details h3 {
          margin-bottom: var(--space-md);
          color: var(--text-main);
        }

        .info-grid {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .info-item label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-dim);
          margin-bottom: 4px;
        }

        .info-item span {
          font-weight: 500;
        }

        .med-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 4px;
        }

        .med-tags span {
          padding: 4px 10px;
          background: rgba(139, 92, 246, 0.1);
          color: var(--accent);
          border-radius: 4px;
          font-size: 0.75rem;
        }

        .vitals-summary-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-md);
        }

        .charts-column {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .btn {
          padding: 10px 20px;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 0.9rem;
          transition: var(--transition-fast);
        }

        .btn-primary { background: var(--primary); color: white; }
        .btn-secondary { background: var(--bg-tertiary); color: var(--text-main); border: 1px solid var(--border-dim); }

        @media (max-width: 1024px) {
          .profile-content { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
};

export default PatientProfile;
