import React from 'react';

const VitalsChart = ({ label, color }) => {
  return (
    <div className="glass-card vitals-chart animate-fade">
      <div className="chart-header">
        <h3>{label} History</h3>
        <div className="chart-toggles">
          <button className="active">24h</button>
          <button>7d</button>
          <button>30d</button>
        </div>
      </div>
      
      <div className="chart-container">
        {/* SVG Chart Placeholder */}
        <svg viewBox="0 0 800 300" width="100%" height="250" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`grad-${label}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: `rgb(${color})`, stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: `rgb(${color})`, stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          
          {/* Grid Lines */}
          {[0, 50, 100, 150, 200, 250].map((y) => (
            <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="var(--border-dim)" strokeWidth="1" />
          ))}

          {/* Area */}
          <path 
            d="M0 250 L0 150 Q 100 100, 200 180 T 400 120 T 600 200 T 800 100 L 800 250 Z" 
            fill={`url(#grad-${label})`} 
          />

          {/* Line */}
          <path 
            d="M0 150 Q 100 100, 200 180 T 400 120 T 600 200 T 800 100" 
            fill="none" 
            stroke={`rgb(${color})`} 
            strokeWidth="3" 
            strokeLinecap="round"
          />

          {/* Data Points */}
          <circle cx="200" cy="180" r="5" fill={`rgb(${color})`} />
          <circle cx="400" cy="120" r="5" fill={`rgb(${color})`} />
          <circle cx="600" cy="200" r="5" fill={`rgb(${color})`} />
        </svg>

        <div className="chart-x-axis">
          <span>08:00</span>
          <span>12:00</span>
          <span>16:00</span>
          <span>20:00</span>
          <span>00:00</span>
          <span>04:00</span>
        </div>
      </div>

      <style jsx="true">{`
        .vitals-chart {
          padding: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .chart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chart-toggles {
          display: flex;
          background: var(--bg-tertiary);
          padding: 4px;
          border-radius: var(--radius-sm);
        }

        .chart-toggles button {
          padding: 4px 12px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-dim);
        }

        .chart-toggles button.active {
          background: var(--bg-secondary);
          color: var(--text-main);
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }

        .chart-container {
          position: relative;
        }

        .chart-x-axis {
          display: flex;
          justify-content: space-between;
          padding-top: var(--space-sm);
          font-size: 0.7rem;
          color: var(--text-dim);
        }
      `}</style>
    </div>
  );
};

export default VitalsChart;
