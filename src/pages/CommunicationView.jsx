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
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" className="search-icon">
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
              <div className="chat-avatar">2</div>
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
            <h2>Select a conversation to start chatting</h2>
            <p>Socket is connected and ready</p>
          </div>
        </main>
      </div>

      <style jsx="true">{`
        .communication-view-page {
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
          height: calc(100vh - var(--space-lg) * 2);
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

        .communication-layout {
          display: flex;
          gap: var(--space-md);
          flex: 1;
          height: 100%;
        }

        .chat-sidebar {
          width: 350px;
          display: flex;
          flex-direction: column;
          background: white;
          padding: 0;
          overflow: hidden;
        }

        .sidebar-tabs {
          display: flex;
          gap: 4px;
          padding: var(--space-sm);
          background: #f8f9fa;
          border-bottom: 1px solid var(--border-dim);
        }

        .tab {
          padding: 6px 16px;
          font-size: 0.8rem;
          font-weight: 700;
          border-radius: 4px;
          color: var(--text-dim);
        }

        .tab.active {
          background: #001F3D;
          color: white;
        }

        .search-chats {
          padding: var(--space-sm);
          display: flex;
          align-items: center;
          gap: 8px;
          background: white;
          border-bottom: 1px solid var(--border-dim);
        }

        .search-chats input {
          border: 1px solid var(--border-dim);
          border-radius: 4px;
          padding: 6px 12px;
          font-size: 0.8rem;
          width: 100%;
        }

        .socket-status {
          padding: 8px var(--space-sm);
          font-size: 0.7rem;
          color: var(--text-dim);
          display: flex;
          align-items: center;
          gap: 6px;
          border-bottom: 1px solid var(--border-dim);
        }

        .socket-status .dot {
          width: 8px;
          height: 8px;
          background: #48BB78;
          border-radius: 50%;
        }

        .chat-list {
          flex: 1;
          overflow-y: auto;
        }

        .chat-item {
          display: flex;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-sm);
          border-bottom: 1px solid var(--border-dim);
          cursor: pointer;
          transition: background 0.2s;
        }

        .chat-item:hover {
          background: #f8f9fa;
        }

        .chat-item.active {
          background: rgba(0, 102, 255, 0.05);
        }

        .chat-avatar {
          width: 36px;
          height: 36px;
          background: #003366;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          flex-shrink: 0;
        }

        .chat-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
          overflow: hidden;
        }

        .chat-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-name {
          font-weight: 700;
          font-size: 0.85rem;
          color: #1A365D;
        }

        .chat-time {
          font-size: 0.75rem;
          color: var(--text-dim);
        }

        .chat-preview {
          font-size: 0.8rem;
          color: var(--text-dim);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-main {
          flex: 1;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .empty-chat-state h2 {
          font-size: 1.5rem;
          color: #1A365D;
          margin-bottom: 8px;
        }

        .empty-chat-state p {
          color: var(--text-dim);
          font-size: 0.9rem;
        }

        [data-theme='dark'] .chat-sidebar, 
        [data-theme='dark'] .chat-main,
        [data-theme='dark'] .sidebar-tabs,
        [data-theme='dark'] .search-chats {
          background: var(--bg-secondary);
        }
        
        [data-theme='dark'] .chat-name,
        [data-theme='dark'] .empty-chat-state h2 {
          color: var(--text-main);
        }

        [data-theme='dark'] .chat-item:hover {
          background: rgba(255, 255, 255, 0.03);
        }
      `}</style>
    </div>
  );
};

export default CommunicationView;
