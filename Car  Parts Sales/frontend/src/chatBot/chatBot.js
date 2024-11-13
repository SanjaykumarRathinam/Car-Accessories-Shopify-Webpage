import React, { useState, useEffect } from "react";
import api from "../../api";
import "../chatBot/chatBot.css";

export const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [previousMessages, setPreviousMessages] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/chatBot/", { message });
      setResponse(res.data.message);
      setPreviousMessages((prevMessages) => [
        ...prevMessages,
        { message, response: res.data.message },
      ]);
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setMessage("");
      setResponse("");
      setPreviousMessages([]);
    }
  };

  const closeChat = () => {
    setIsChatOpen(false);
    setMessage("");
    setResponse("");
    setPreviousMessages([]);
  };

  useEffect(() => {
    setPreviousMessages([]);
  }, []);

  return (
    <div className="chat-widget">
      <div
        className={`d-hotline h-btn animated zoomIn faster ${
          isChatOpen ? "active" : ""
        }`}
        onClick={toggleChat}
      >
        <span className="fas fa-comment"></span>
      </div>

      {isChatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            ChatBot
            <button style={{ marginLeft: "210px", backgroundColor: "red" }}>
              <span className="close-icon" onClick={closeChat}>
                &times;
              </span>
            </button>
          </div>

          <div className="chat-body">
            {previousMessages.map((msg, index) => (
              <div key={index} className="chat-message">
                <div
                  className="message-bubble"
                  style={{ backgroundColor: "wheat" }}
                >
                  <p style={{ textAlign: "left" }}>You: {msg.message}</p>
                </div>
                <div
                  className="message-bubble"
                  style={{ backgroundColor: "LightDark" }}
                >
                  <p style={{ textAlign: "right" }}>Bot: {msg.response}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type your message..."
                  value={message}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};