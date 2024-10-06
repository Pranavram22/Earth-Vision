import React, { useState, useEffect } from 'react';
import './Chatbot.css'; // Import the CSS file

const Chatbot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Function to toggle chat window
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  // Inject Botpress Webchat Script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v0/inject.js'; // Replace with your Botpress webchat URL
    script.async = true;
    document.body.appendChild(script);

    window.botpressWebChat.init({
      hostUrl: 'https://cdn.botpress.cloud/webchat/v0',
      botId: 'your-bot-id', // Replace with your Botpress bot ID
      botName: 'Your Bot Name',
      showCloseButton: true,
      useSessionStorage: true,
    });

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* Chatbot Floating Button */}
      <div id="botpress-webchat" onClick={toggleChat}>
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/chat.png"
          alt="Chat Icon"
        />
      </div>

      {/* Chat Window */}
      <div
        id="botpress-webchat-container"
        className={isChatOpen ? 'active' : ''}
      >
        <div className="bp-header">Chat with Us</div>
        <div className="bp-message-container">
          {/* Botpress messages will be rendered here */}
        </div>
        <input className="bp-input" placeholder="Type a message..." />
        <button className="bp-send-button">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
