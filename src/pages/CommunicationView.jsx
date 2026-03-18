import React from 'react';

const CommunicationView = () => {
  return (
    <div className="communication-view-page animate-fade">
      <header className="page-header">
        <h1>Patient Communication</h1>
      </header>

      <div className="communication-layout">
        <aside className="chat-sidebar glass-card">
          <div className="sidebar-tabs">
            <button className="tab active">Conversations</button>
            <button className="tab">All Patients</button>
          </div>
          <div className="search-chats">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--brand-color)" strokeWidth="2.5" className="search-icon">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input type="text" placeholder="Search conversations..." />
          </div>
          <div className="socket-status">
            <span className="dot"></span>
            <span className="text">Socket: Connected • User ID: 7</span>
          </div>
          <div className="chat-list">
            <div className="chat-item active">
              <div className="chat-avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>2</div>
              <div className="chat-info">
                <div className="chat-header-row">
                  <span className="chat-name">25B3E02265</span>
                  <span className="chat-time">2:33:12 pm</span>
                </div>
                <div className="chat-preview">Hi</div>
              </div>
            </div>
          </div>
        </aside>

        <main className="chat-main glass-card">
          <div className="empty-chat-state">
            <div className="chat-icon-wrapper">
               <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--brand-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
               </svg>
            </div>
            <h2>Select a conversation to start chatting</h2>
            <p>Your secure real-time medical communication socket is connected and ready.</p>
            <button className="btn-gradient" style={{ marginTop: '20px' }}>New Broadcast</button>
          </div>
        </main>
      </div>

      <style jsx="true">{`
        .communication-view-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          height: calc(100vh - 120px);
        }

        .page-header h1 {
          font-size: 1.75rem;
          color: var(--text-main);
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .communication-layout {
          display: flex;
          gap: var(--space-md);
          flex: 1;
          height: 100%;
          overflow: hidden;
        }

        .chat-sidebar {
          width: 360px;
          display: flex;
          flex-direction: column;
          padding: 0;
          overflow: hidden;
          border-radius: var(--radius-lg);
          transition: none;
        }
        
        .chat-sidebar:hover { transform: none; }

        .sidebar-tabs {
          display: flex;
          gap: 6px;
          padding: var(--space-sm);
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid var(--border-dim);
        }

        .tab {
          padding: 8px 16px;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: var(--radius-sm);
          color: var(--text-dim);
          transition: all 0.2s;
        }

        .tab:hover { color: var(--text-main); background: rgba(255, 255, 255, 0.05); }

        .tab.active {
          background: var(--brand-gradient);
          color: #ffffff;
          box-shadow: 0 4px 10px rgba(var(--brand-rgb), 0.2);
        }

        .search-chats {
          padding: var(--space-sm);
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border-bottom: 1px solid var(--border-dim);
        }

        .search-chats input {
          border: 1px solid var(--border-dim);
          border-radius: var(--radius-sm);
          padding: 8px 14px;
          font-size: 0.85rem;
          width: 100%;
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-main);
        }

        .search-chats input:focus { border-color: var(--brand-color); outline: none; }

        .socket-status {
          padding: 10px var(--space-sm);
          font-size: 0.75rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 8px;
          border-bottom: 1px solid var(--border-dim);
          background: rgba(255, 255, 255, 0.01);
        }

        .socket-status .dot {
          width: 8px;
          height: 8px;
          background: var(--brand-color);
          border-radius: 50%;
          box-shadow: 0 0 8px var(--brand-color);
        }

        .chat-list {
          flex: 1;
          overflow-y: auto;
        }

        .chat-item {
          display: flex;
          gap: var(--space-sm);
          padding: var(--space-md);
          border-bottom: 1px solid var(--border-dim);
          cursor: pointer;
          transition: background 0.2s;
        }

        .chat-item:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .chat-item.active {
          background: rgba(var(--brand-rgb), 0.05);
          position: relative;
        }

        .chat-item.active::after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: var(--brand-gradient);
        }

        .chat-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(var(--brand-rgb), 0.2);
        }

        .chat-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 6px;
          overflow: hidden;
        }

        .chat-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-name {
          font-weight: 700;
          font-size: 0.9rem;
          color: var(--text-main);
        }

        .chat-time {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .chat-preview {
          font-size: 0.85rem;
          color: var(--text-dim);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-main {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border-radius: var(--radius-lg);
          transition: none;
        }
        
        .chat-main:hover { transform: none; }

        .chat-icon-wrapper { margin-bottom: var(--space-md); opacity: 0.8; }

        .empty-chat-state h2 {
          font-size: 1.75rem;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .empty-chat-state p {
          color: var(--text-dim);
          font-size: 1rem;
          max-width: 320px;
          margin: 0 auto;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .communication-view-page {
            height: auto;
          }

          .communication-layout {
            flex-direction: column;
          }

          .chat-sidebar {
            width: 100%;
            max-height: 300px;
          }

          .chat-main {
            min-height: 300px;
          }

          .empty-chat-state h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
};

export default CommunicationView;
