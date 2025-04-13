import React, { useState } from "react";
import "../../styles/Messages.css";
import ReceiptImage from "../../assets/receipt.png";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("email");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "sms":
        return <SMSTab />;
      case "email":
        return <EmailTab />;
      case "whatsapp":
        return <WhatsAppTab />;
      default:
        return null;
    }
  };

  return (
    <div className="messaoutconatiner">
      <div className="messages-container">
        <div className="messages-header">
          <h2>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
          <div className="message-tabs">
            <span
              className={activeTab === "sms" ? "active" : ""}
              onClick={() => setActiveTab("sms")}
            >
              SMS
            </span>
            <span
              className={activeTab === "email" ? "active" : ""}
              onClick={() => setActiveTab("email")}
            >
              Email
            </span>
            <span
              className={activeTab === "whatsapp" ? "active" : ""}
              onClick={() => setActiveTab("whatsapp")}
            >
              WhatsApp
            </span>
          </div>
          <button className="message-history-btn">
            <img src={ReceiptImage} alt="history" />
            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} History
          </button>
        </div>
        {renderActiveTab()}
      </div>
    </div>
  );
};

export default Messages;

// ---------------- Sub Tabs --------------------

const EmailTab = () => {
  return (
    <div className="message-form">
      {/* All Email form elements exactly as per UI */}
      {/* ... copy from your existing EmailTab JSX from earlier message */}
    </div>
  );
};

const SMSTab = () => {
  return (
    <div className="message-form">
      {/* All SMS form elements exactly as per UI */}
      {/* ... copy from your existing SMSTab JSX from earlier message */}
    </div>
  );
};

const WhatsAppTab = () => {
  const [messageType, setMessageType] = useState("single");
  const [recipientType, setRecipientType] = useState("manually");

  return (
    <div className="message-form">
      <div className="message-row">
        <div className="message-field">
          <label>Sender Name</label>
          <input placeholder="Doe Joe" />
        </div>
        <div className="message-field">
          <label>Message Type</label>
          <select onChange={(e) => setMessageType(e.target.value)}>
            <option value="single">Single Message</option>
            <option value="bulk">Bulk Message</option>
          </select>
        </div>
      </div>

      <div className="message-row">
        <div className="message-field">
          <label>Add Recipient Contact</label>
          <select onChange={(e) => setRecipientType(e.target.value)}>
            <option value="manually">Manually</option>
            <option value="groups">From Groups</option>
            <option value="upload">Upload Contact</option>
          </select>
        </div>
        <div className="message-field">
          <label>Message Template</label>
          <select>
            <option>Invoice</option>
            <option>Receipt</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      {recipientType === "manually" && (
        <div className="message-field">
          <label>Mobile Number</label>
          <input placeholder="234 000 0000" />
        </div>
      )}

      {recipientType === "groups" && (
        <div className="message-field">
          <label>Groups</label>
          <select>
            <option>Customers</option>
            <option>Tenants</option>
            <option>Clients</option>
          </select>
          <p className="add-group-link">
            Don’t have a group? <span>Add new group</span>
          </p>
        </div>
      )}

      {recipientType === "upload" && (
        <div className="message-field">
          <label>Select file</label>
          <input type="file" />
          <p className="support-note">support CSV file</p>
        </div>
      )}

      <div className="message-field">
        <label>Send Mode</label>
        <select>
          <option>Send Now</option>
          <option>Schedule (Send Later)</option>
        </select>
      </div>

      <div className="message-field">
        <label>Write Message</label>
        <textarea rows={5} placeholder="Type Message" />
      </div>

      <div className="message-actions">
        <button className="message-send-btn">Send</button>
      </div>
    </div>
  );
};
