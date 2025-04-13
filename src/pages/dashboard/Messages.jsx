import React, { useState, useEffect } from "react";
import "../../styles/Messages.css";
import ReceiptImage from "../../assets/receipt.png";
import { useNavigate } from "react-router-dom";

const Messages = () => {
  const [activeTab, setActiveTab] = useState("email");
  const navigate = useNavigate();
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
          <button
            onClick={() => navigate("/dashboard/messagehistory")}
            className="message-history-btn"
          >
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
// Inside Messages.jsx
const EmailTab = () => {
  const [emailType, setEmailType] = useState("Single Email");
  const [recipientType, setRecipientType] = useState("Manually");
  const [template, setTemplate] = useState("");
  const [sendMode, setSendMode] = useState("");
  const [showSchedule, setShowSchedule] = useState(false);

  return (
    <div className="message-form">
      <div className="message-row">
        <div className="message-field">
          <label>Sender ID</label>
          <input placeholder="Doe Joe" />
        </div>
        <div className="message-field">
          <label>Sender Email Address</label>
          <input placeholder="example@email.com" />
        </div>
      </div>

      <div className="message-row">
        <div className="message-field">
          <label>Subject</label>
          <input placeholder="Waste Management" />
        </div>
        <div className="message-field">
          <label>Email Type</label>
          <select
            value={emailType}
            onChange={(e) => setEmailType(e.target.value)}
          >
            <option>Single Email</option>
            <option>Bulk Email</option>
          </select>
        </div>
      </div>

      <div className="message-row">
        <div className="message-field">
          <label>Add Recipient Contact</label>
          <select
            value={recipientType}
            onChange={(e) => setRecipientType(e.target.value)}
          >
            <option>Manually</option>
            <option>From Groups</option>
            <option>Upload Contact</option>
          </select>
        </div>
        <div className="message-field">
          <label>Message Template</label>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option>Invoice</option>
            <option>Receipt</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      {recipientType === "Manually" && (
        <div className="message-row">
          <div className="message-field">
            <label>Mobile Number</label>
            <input placeholder="234 000 0000" />
          </div>
          <div className="message-field">
            <label>Send Mode</label>
            <select
              value={sendMode}
              onChange={(e) => {
                setSendMode(e.target.value);
                if (e.target.value === "Schedule(Send later)")
                  setShowSchedule(true);
              }}
            >
              <option>Send now</option>
              <option>Schedule(Send later)</option>
            </select>
          </div>
        </div>
      )}

      {recipientType === "From Groups" && (
        <div className="message-row">
          <div className="message-field">
            <label>Groups</label>
            <select>
              <option>Customers</option>
              <option>Tenants</option>
              <option>Clients</option>
            </select>
            <p className="add-group-link">
              Don’t have a group? <span>Create new group</span>
            </p>
          </div>
          <div className="message-field">
            <label>Send Mode</label>
            <select
              value={sendMode}
              onChange={(e) => {
                setSendMode(e.target.value);
                if (e.target.value === "Schedule(Send later)")
                  setShowSchedule(true);
              }}
            >
              <option>Send now</option>
              <option>Schedule(Send later)</option>
            </select>
          </div>
        </div>
      )}

      {recipientType === "Upload Contact" && (
        <div className="message-row">
          <div className="message-field">
            <label>Select file</label>
            <input type="file" />
            <p className="support-note">support CSV file</p>
          </div>
          <div className="message-field">
            <label>Send Mode</label>
            <select
              value={sendMode}
              onChange={(e) => {
                setSendMode(e.target.value);
                if (e.target.value === "Schedule(Send later)")
                  setShowSchedule(true);
              }}
            >
              <option>Send now</option>
              <option>Schedule(Send later)</option>
            </select>
          </div>
        </div>
      )}

      <div className="message-field full">
        <label>Write Message</label>
        <textarea rows={6} placeholder="Type Message" />
      </div>

      <div className="message-actions">
        <button className="message-send-btn">Send</button>
      </div>

      {showSchedule && (
        <div className="schedule-modal">
          <div className="schedule-card">
            <h3>Schedule for Later</h3>
            <div className="schedule-field">
              <label>Enter date</label>
              <input type="date" />
            </div>
            <div className="schedule-field">
              <label>Enter time</label>
              <input type="time" />
            </div>
            <div className="schedule-buttons">
              <button
                className="cancel-btn"
                onClick={() => setShowSchedule(false)}
              >
                Cancel
              </button>
              <button
                className="submit-btn"
                onClick={() => setShowSchedule(false)}
              >
                Schedule now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const SMSTab = () => {
  const [smsType, setSmsType] = useState("Single SMS");
  const [recipientType, setRecipientType] = useState("Manually");
  const [template, setTemplate] = useState("");
  const [sendMode, setSendMode] = useState("");
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  useEffect(() => {
    // Auto show/hide modal based on selection
    if (sendMode === "Schedule(Send later)") {
      setShowScheduleModal(true);
    } else {
      setShowScheduleModal(false);
    }
  }, [sendMode]);
  const handleCloseModal = () => {
    setShowScheduleModal(false);
    setSendMode(""); // reset send mode on cancel if needed
  };

  const handleScheduleSubmit = () => {
    // You can add your API trigger or form logic here
    console.log("Scheduled Successfully!");
    setShowScheduleModal(false);
  };
  return (
    <div className="message-form">
      <div className="message-row">
        <div className="message-field">
          <label>Sender Name</label>
          <input type="text" placeholder="Doe Joe" />
        </div>
        <div className="message-field">
          <label>SMS Type</label>
          <select value={smsType} onChange={(e) => setSmsType(e.target.value)}>
            <option>Single SMS</option>
            <option>Bulk SMS</option>
          </select>
        </div>
      </div>

      <div className="message-row">
        <div className="message-field">
          <label>Add Recipient Contact</label>
          <select
            value={recipientType}
            onChange={(e) => setRecipientType(e.target.value)}
          >
            <option>Manually</option>
            <option>From Group</option>
            <option>Upload Contact</option>
          </select>
        </div>
        <div className="message-field">
          <label>Message Template</label>
          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option>Invoice</option>
            <option>Receipt</option>
            <option>Custom</option>
          </select>
        </div>
      </div>

      {recipientType === "Manually" && (
        <div className="message-row">
          <div className="message-field">
            <label>Mobile Number</label>
            <input type="text" placeholder="234 000 0000" />
          </div>
          <div className="message-field">
            <label>Send Mode</label>
            <select
              value={sendMode}
              onChange={(e) => setSendMode(e.target.value)}
            >
              <option>Send now</option>
              <option>Schedule(Send later)</option>
            </select>
          </div>
        </div>
      )}

      {recipientType === "From Group" && (
        <div className="message-row">
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
          <div className="message-field">
            <label>Send Mode</label>
            <select>
              <option>Send now</option>
              <option>Schedule(Send later)</option>
            </select>
          </div>
        </div>
      )}

      {recipientType === "Upload Contact" && (
        <div className="message-row">
          <div className="message-field">
            <label>Select File</label>
            <input type="file" />
            <p className="support-note">support CSV file</p>
          </div>
          <div className="message-field">
            <label>Send Mode</label>
            <select>
              <option>Send now</option>
              <option>Schedule(Send later)</option>
            </select>
          </div>
        </div>
      )}

      <div className="message-row full">
        <div className="message-field">
          <label>Write Message</label>
          <textarea placeholder="Type Message" rows={6}></textarea>
        </div>
      </div>

      <div className="message-actions">
        <button className="message-send-btn">Send</button>
      </div>
      {sendMode === "Schedule(Send later)" && (
        <div className="schedule-modal">
          <div className="schedule-card">
            <h3>Schedule for Later</h3>
            <div className="schedule-field">
              <label>Enter date</label>
              <input type="date" placeholder="DD/MM/YYYY" />
            </div>
            <div className="schedule-field">
              <label>Enter time</label>
              <input type="time" placeholder="10:45pm" />
            </div>
            <div className="schedule-buttons">
              <button className="cancel-btn" onClick={handleCloseModal}>
                Cancel
              </button>
              <button className="submit-btn" onClick={handleScheduleSubmit}>
                Schedule now
              </button>
            </div>
          </div>
        </div>
      )}
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
