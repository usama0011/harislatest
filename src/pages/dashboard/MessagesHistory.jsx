import React, { useState } from "react";
import "../../styles/MessagesHistory.css";

const MessagesHistory = () => {
  const [activeTab, setActiveTab] = useState("sms");
  const [exportStatus, setExportStatus] = useState(false);

  const renderTableRows = () => {
    return Array.from({ length: 16 }, (_, i) => (
      <div className="messageshistory-table-row" key={i}>
        <div>{i + 1}</div>
        <div>{i % 3 === 0 ? "Clients" : "234 843 651 7352"}</div>
        <div>Lorem</div>
        <div>jun 9,2024</div>
        <div>2:55am</div>
        <div>{i === 4 ? 45 : i === 7 ? 300 : 1}</div>
        <div className="messageshistory-status">Successful</div>
        <div className="messageshistory-actions">...</div>
      </div>
    ));
  };

  return (
    <div className="messageshistory-container">
      <div className="messageshistory-header">
        <h2>SMS History</h2>
        <div className="messageshistory-tabs">
          {["sms", "email", "whatsapp"].map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={activeTab === tab ? "active" : ""}
            >
              {tab.toUpperCase()}
            </span>
          ))}
        </div>
        <div className="messageshistory-header-actions">
          <button className="filter-btn">
            <img src="" alt="" />
            Filter
          </button>
          <div className="export-wrapper">
            <button className="export-btn">
              <img src="" alt="" />
              Export
            </button>
            <div className="export-dropdown">
              <p>PDF</p>
              <p>EXCEL</p>
              <p onClick={() => setExportStatus(true)}>CSV</p>
            </div>
          </div>
          <button className="new-sms-btn">Send New SMS</button>
        </div>
      </div>

      <div className="messageshistory-table">
        <div className="messageshistory-table-header">
          <div>S/N</div>
          <div>Recipient Number</div>
          <div>Message Content</div>
          <div>Sent Date</div>
          <div>Sent Time</div>
          <div>Volume</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        {renderTableRows()}
      </div>

      {exportStatus && (
        <div className="messageshistory-modal">
          <div className="messageshistory-popup">
            <img src="" alt="tick" className="popup-icon" />
            <h3>Export completed successfully!</h3>
            <p>Lorem ipsum dolor sit amet consectetur. habitasse po.</p>
            <button
              className="popup-done-btn"
              onClick={() => setExportStatus(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessagesHistory;
