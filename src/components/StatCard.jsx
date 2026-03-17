import React from 'react';

const StatCard = ({ label, value, unit, trend, icon, color }) => {
  return (
    <div className="glass-card stat-card animate-fade">
      <div className="stat-header">
        <div className="stat-icon" style={{ backgroundColor: `rgba(${color}, 0.1)`, color: `rgb(${color})` }}>
           <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d={icon} />
           </svg>
        </div>
        <span className={`stat-trend ${trend > 0 ? 'up' : 'down'}`}>
          {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
        </span>
      </div>
      
      <div className="stat-body">
        <span className="stat-label">{label}</span>
        <div className="stat-value-group">
          <span className="stat-value">{value}</span>
          <span className="stat-unit">{unit}</span>
        </div>
      </div>

      <div className="stat-footer">
        <div className="mini-chart">
            {/* Simple SVG Sparkline placeholder */}
            <svg viewBox="0 0 100 30" width="100%" height="30" preserveAspectRatio="none">
                <path 
                    d="M0 20 Q 25 5, 50 15 T 100 10" 
                    fill="none" 
                    stroke={`rgb(${color})`} 
                    strokeWidth="2" 
                />
            </svg>
        </div>
      </div>

      <style jsx="true">{`
        .stat-card {
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
          transition: var(--transition-fast);
        }

        .stat-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .stat-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .stat-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-trend {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: var(--radius-full);
        }

        .stat-trend.up {
          background: rgba(16, 185, 129, 0.1);
          color: var(--secondary);
        }

        .stat-trend.down {
          background: rgba(239, 68, 68, 0.1);
          color: var(--danger);
        }

        .stat-body {
          display: flex;
          flex-direction: column;
        }

        .stat-label {
          font-size: 0.85rem;
          color: var(--text-dim);
          margin-bottom: 4px;
        }

        .stat-value {
          font-size: 1.75rem;
          font-weight: 700;
        }

        .stat-unit {
          font-size: 0.9rem;
          color: var(--text-dim);
          margin-left: 4px;
        }

        .stat-footer {
          margin-top: var(--space-xs);
        }
      `}</style>
    </div>
  );
};

export default StatCard;
