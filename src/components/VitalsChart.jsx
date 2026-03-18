import React, { useState } from 'react';

const VitalsChart = ({ label, color }) => {
  const [activePeriod, setActivePeriod] = useState('24h');

  // Dummy chart data variations for different timeframes
  const chartData = {
    '24h': {
      path: "M0 150 Q 100 100, 200 180 T 400 120 T 600 200 T 800 100",
      area: "M0 250 L0 150 Q 100 100, 200 180 T 400 120 T 600 200 T 800 100 L 800 250 Z",
      points: [ {cx: 200, cy: 180}, {cx: 400, cy: 120}, {cx: 600, cy: 200} ],
      xLabels: ['08:00', '12:00', '16:00', '20:00', '00:00', '04:00']
    },
    '7d': {
      path: "M0 200 Q 133 100, 266 150 T 533 120 T 800 180",
      area: "M0 250 L0 200 Q 133 100, 266 150 T 533 120 T 800 180 L 800 250 Z",
      points: [ {cx: 266, cy: 150}, {cx: 533, cy: 120} ],
      xLabels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    '30d': {
      path: "M0 100 Q 200 250, 400 120 T 800 100",
      area: "M0 250 L0 100 Q 200 250, 400 120 T 800 100 L 800 250 Z",
      points: [ {cx: 400, cy: 120} ],
      xLabels: ['Week 1', 'Week 2', 'Week 3', 'Week 4']
    }
  };

  const currentData = chartData[activePeriod];

  return (
    <div className="glass-card vitals-chart animate-fade">
      <div className="chart-header">
        <h3>{label} History</h3>
        <div className="chart-toggles">
          <button className={activePeriod === '24h' ? 'active' : ''} onClick={() => setActivePeriod('24h')}>24h</button>
          <button className={activePeriod === '7d' ? 'active' : ''} onClick={() => setActivePeriod('7d')}>7d</button>
          <button className={activePeriod === '30d' ? 'active' : ''} onClick={() => setActivePeriod('30d')}>30d</button>
        </div>
      </div>
      
      <div className="chart-container">
        <svg viewBox="0 0 800 300" width="100%" height="250" preserveAspectRatio="none">
          <defs>
            <linearGradient id={`grad-${label.replace(/[^a-zA-Z0-9]/g, '-')}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style={{ stopColor: `rgb(${color})`, stopOpacity: 0.2 }} />
              <stop offset="100%" style={{ stopColor: `rgb(${color})`, stopOpacity: 0 }} />
            </linearGradient>
          </defs>
          
          {[0, 50, 100, 150, 200, 250].map((y) => (
            <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="var(--border-dim)" strokeWidth="1" />
          ))}

          <path 
            d={currentData.area} 
            fill={`url(#grad-${label.replace(/[^a-zA-Z0-9]/g, '-')})`} 
          />

          <path 
            d={currentData.path} 
            fill="none" 
            stroke={`rgb(${color})`} 
            strokeWidth="3" 
            strokeLinecap="round"
          />

          {currentData.points.map((pt, i) => (
             <circle key={`${activePeriod}-${i}`} cx={pt.cx} cy={pt.cy} r="5" fill={`rgb(${color})`} />
          ))}
        </svg>

        <div className="chart-x-axis">
          {currentData.xLabels.map((lbl, i) => (
             <span key={i}>{lbl}</span>
          ))}
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
          cursor: pointer;
          transition: all 0.2s;
        }

        .chart-toggles button:hover {
          color: var(--text-main);
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
