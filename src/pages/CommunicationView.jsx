import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const CommunicationView = ({ activeChatId }) => {
  const [activeTab, setActiveTab] = useState('Conversations');
  const [activeChat, setActiveChat] = useState(activeChatId || null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBroadcastModal, setShowBroadcastModal] = useState(false);

  useEffect(() => {
    if (activeChatId) {
      setActiveChat(activeChatId);
      setActiveTab('Conversations');
    }
  }, [activeChatId]);

  const conversations = [
    { id: 2, name: '25B3E02265', lastMessage: 'Hi', time: '2:33:12 pm', unread: 0 },
    { id: 1, name: 'Tester', lastMessage: 'My reading seems high today.', time: 'Yesterday', unread: 1 }
  ];

  const allPatients = [
    { id: 1, name: 'Tester' },
    { id: 2, name: '25B3E02265' }
  ];

  const filteredList = activeTab === 'Conversations' 
    ? conversations.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()))
    : allPatients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSelectChat = (id) => {
    setActiveChat(id);
    if (activeTab === 'All Patients') setActiveTab('Conversations');
  };

  const getChatName = () => {
    const chat = conversations.find(c => c.id === activeChat) || allPatients.find(p => p.id === activeChat);
    return chat ? chat.name : 'Patient Chat';
  };
  return (
    <div className="communication-view-page animate-fade">
      <header className="page-header">
        <h1>Patient Communication</h1>
      </header>

      <div className="communication-layout">
        <aside className="chat-sidebar glass-card">
          <div className="sidebar-tabs">
            <button className={`tab ${activeTab === 'Conversations' ? 'active' : ''}`} onClick={() => setActiveTab('Conversations')}>Conversations</button>
            <button className={`tab ${activeTab === 'All Patients' ? 'active' : ''}`} onClick={() => setActiveTab('All Patients')}>All Patients</button>
          </div>
          <div className="search-chats">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" className="search-icon" style={{ opacity: 0.5 }}>
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="socket-status">
            <span className="dot"></span>
            <span className="text">Socket: Connected • User ID: 7</span>
          </div>
          <div className="chat-list">
            {filteredList.map(item => (
              <div 
                key={item.id} 
                className={`chat-item ${activeChat === item.id ? 'active' : ''}`}
                onClick={() => handleSelectChat(item.id)}
              >
                <div className="chat-avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>
                  {item.name.charAt(0)}
                </div>
                <div className="chat-info">
                  <div className="chat-header-row">
                    <span className="chat-name" style={{ fontWeight: item.unread ? 800 : 600 }}>{item.name}</span>
                    {activeTab === 'Conversations' && <span className="chat-time" style={{ color: item.unread ? 'var(--brand-color)' : 'var(--text-dim)', fontWeight: item.unread ? 700 : 500 }}>{item.time}</span>}
                  </div>
                  {activeTab === 'Conversations' && (
                    <div className="chat-preview" style={{ color: item.unread ? 'var(--text-main)' : 'var(--text-dim)', fontWeight: item.unread ? 600 : 400 }}>
                      {item.lastMessage}
                    </div>
                  )}
                </div>
                {item.unread > 0 && <div className="unread-badge">{item.unread}</div>}
              </div>
            ))}
          </div>
        </aside>

        <main className="chat-main glass-card">
          {activeChat ? (
            <div className="active-chat-container">
              <div className="active-chat-header">
                <div className="chat-avatar" style={{ background: 'var(--brand-gradient)', color: '#ffffff' }}>
                  {getChatName().charAt(0)}
                </div>
                <div className="active-chat-meta">
                  <h3>{getChatName()}</h3>
                  <span className="typing-status">Online</span>
                </div>
              </div>
              <div className="chat-messages">
                <div className="message received">
                  <div className="message-content">
                    {activeChat === 2 ? 'Hi' : 'My reading seems high today.'}
                  </div>
                  <span className="message-time">2:33 pm</span>
                </div>
              </div>
              <div className="chat-input-area">
                <input type="text" placeholder="Type a message..." className="chat-input-box" />
                <button className="btn-gradient search-btn">Send</button>
              </div>
            </div>
          ) : (
            <div className="empty-chat-state">
              <div className="chat-icon-wrapper">
                 <svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--brand-color)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                 </svg>
              </div>
              <h2>Select a conversation to start chatting</h2>
              <p>Your secure real-time medical communication socket is connected and ready.</p>
              <button className="btn-gradient" style={{ marginTop: '20px' }} onClick={() => setShowBroadcastModal(true)}>New Broadcast</button>
            </div>
          )}
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
          overflow: hidden;
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

        .active-chat-container {
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          text-align: left;
        }

        .active-chat-header {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          padding: 16px 24px;
          border-bottom: 1px solid var(--border-dim);
          background: rgba(255, 255, 255, 0.02);
        }

        .active-chat-meta {
          display: flex;
          flex-direction: column;
        }

        .active-chat-meta h3 {
          font-size: 1.1rem;
          color: var(--text-main);
          font-weight: 700;
          margin: 0;
        }

        .typing-status {
          font-size: 0.8rem;
          color: var(--brand-color);
          font-weight: 600;
        }

        .chat-messages {
          flex: 1;
          padding: 24px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .message {
          display: flex;
          flex-direction: column;
          max-width: 75%;
          gap: 6px;
        }

        .message.received {
          align-items: flex-start;
          align-self: flex-start;
        }

        .message.sent {
          align-items: flex-end;
          align-self: flex-end;
        }

        .message-content {
          padding: 12px 16px;
          border-radius: var(--radius-md);
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .message.received .message-content {
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-main);
          border: 1px solid var(--border-dim);
          border-top-left-radius: 4px;
        }

        .message.sent .message-content {
          background: var(--brand-gradient);
          color: #ffffff;
          border-top-right-radius: 4px;
          box-shadow: 0 4px 12px rgba(var(--brand-rgb), 0.2);
        }

        .message-time {
          font-size: 0.75rem;
          color: var(--text-dim);
          padding: 0 4px;
        }

        .chat-input-area {
          padding: 16px 24px;
          border-top: 1px solid var(--border-dim);
          background: rgba(255, 255, 255, 0.01);
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .chat-input-box {
          flex: 1;
          padding: 12px 20px;
          border-radius: 24px;
          border: 1px solid var(--border-dim);
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-main);
          font-size: 0.95rem;
          transition: all 0.2s;
        }

        .chat-input-box:focus {
          outline: none;
          border-color: var(--brand-color);
          box-shadow: 0 0 0 3px rgba(var(--brand-rgb), 0.1);
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
            min-height: 400px;
          }

          .empty-chat-state h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
      
      {showBroadcastModal && createPortal(
        <div className="modal-backdrop" onClick={() => setShowBroadcastModal(false)}>
          <div className="modal-content glass-card animate-fade" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>New Broadcast</h2>
              <button className="close-btn" onClick={() => setShowBroadcastModal(false)}>✕</button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Recipients</label>
                <select className="modal-input">
                  <option>All Patients</option>
                  <option>High Risk Patients</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows="4" placeholder="Type your broadcast message here..." className="modal-input" style={{ resize: 'vertical', width: '100%', padding: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-dim)', borderRadius: 'var(--radius-md)', color: 'white', marginTop: '8px' }}></textarea>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={() => setShowBroadcastModal(false)}>Cancel</button>
              <button className="btn-gradient" onClick={() => {
                alert('Broadcast sent! (Demo Data)');
                setShowBroadcastModal(false);
              }}>Send Broadcast</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default CommunicationView;
