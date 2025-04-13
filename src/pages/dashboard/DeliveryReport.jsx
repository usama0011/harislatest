import React, { useState } from "react";
import "../../styles/DeliveryReport.css";
import EditLogo from "../../assets/edit-2.png";
import DellImage from "../../assets/trash.png";
import DownlaodiImageblck from "../../assets/document-download.png";

const dummyData = [
  {
    id: 1,
    contact: "+080 000 458 7282",
    sent: "Jun 9,2024, 11:45pm",
    delivery: "Jun 9,2024, 11:45pm",
    volume: 1,
    status: "Delivered",
  },
  {
    id: 2,
    contact: "+080 000 458 7282",
    sent: "Jun 9,2024, 11:45pm",
    delivery: "Jun 9,2024, 11:45pm",
    volume: 1,
    status: "Failed",
  },
  {
    id: 3,
    contact: "Clients",
    sent: "Jun 9,2024, 11:45pm",
    delivery: "Jun 9,2024, 11:45pm",
    volume: 45,
    status: "40 Delivered, 5 failed",
  },
];

const DeliveryReport = () => {
  const [activeTab, setActiveTab] = useState("whatsapp");

  return (
    <div className="delivery-container">
      <div className="delivery-header">
        <h2>Delivery Report</h2>
        <div className="delivery-tabs">
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
        <button className="download-report-btn">
          <img src={DownlaodiImageblck} alt="download" />
          Download Report
        </button>
      </div>

      <div className="delivery-table-wrapper">
        <table className="delivery-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Recipient contact</th>
              <th>Sent date & time</th>
              <th>Delivery date & time</th>
              <th>Volume</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((row, index) => (
              <tr key={row.id}>
                <td>{index + 1}</td>
                <td>{row.contact}</td>
                <td>{row.sent}</td>
                <td>{row.delivery}</td>
                <td>{row.volume}</td>
                <td>
                  {row.status.includes("failed") ? (
                    <span className="status-mixed">{row.status}</span>
                  ) : row.status === "Failed" ? (
                    <span className="status-failed">{row.status}</span>
                  ) : (
                    <span className="status-delivered">{row.status}</span>
                  )}
                </td>
                <td className="lgocnaier">
                  <img className="delete-icon" src={EditLogo} alt="delete" />
                  <img className="delete-icon" src={DellImage} alt="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="delivery-pagination-row">
          <span className="showing-text">Showing 9 of 90 results</span>
          <div className="pagination-buttons">
            <button>&lt;</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>10</button>
            <button>&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryReport;
