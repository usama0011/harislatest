// OverviewActivitySection.jsx
import React from "react";
import { Button } from "antd";
import "../styles/Overview.css";
import SendIcon from "../assets/Fram4.png";
import UploadIcon from "../assets/upload.png";
import EyeIcon from "../assets/Eye.png";
import ArrowRightIcon from "../assets/arrow-right.png";
import ShareOutline from "../assets/shareoutline.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
const OverviewActivitySection = () => {
  // Sample data
  const data = [
    { day: "Mon", success: 400, pending: 1000, failed: 200 },
    { day: "Tue", success: 200, pending: 1200, failed: 800 },
    { day: "Wed", success: 1000, pending: 200, failed: 500 },
    { day: "Thu", success: 700, pending: 100, failed: 400 },
    { day: "Fri", success: 300, pending: 1100, failed: 1300 },
    { day: "Sat", success: 600, pending: 300, failed: 900 },
    { day: "Sun", success: 900, pending: 700, failed: 600 },
  ];
  return (
    <div className="overview-activity-wrapper">
      {/* Left: Chart Block */}
      <div className="overview-chart-section">
        <div className="overview-chart-header">
          <select className="overview-type-select">
            <option>Email Sent</option>
            <option>SMS Sent</option>
            <option>WhatsApp Sent</option>
          </select>
          <div className="newselectwekly">
            <select>
              <option>Weekly</option>
            </select>
            <img
              style={{ width: "25px", height: "25px", marginLeft: "10px" }}
              src={ShareOutline}
              alt=""
            />
          </div>
        </div>
        <p className="overview-chart-total">Total: 4000</p>
        <div className="overview-chart-legend">
          <span className="green-dot">● Success</span>
          <span className="yellow-dot">● Pending</span>
          <span className="red-dot">● Failed</span>
        </div>
        {/* Chart will go here */}
        <div className="overview-line-chart">
          <ResponsiveContainer
            className="innerchartconainer"
            width="100%"
            height={250}
          >
            <LineChart
              data={data}
              margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="success"
                stroke="#28a745"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="pending"
                stroke="#f0ad4e"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="failed"
                stroke="#dc3545"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Right: Balance + Quick Links */}
      <div className="overview-summary-panel">
        <div className="overview-summary-panel">
          <div className="overview-balance-header">
            <span>Current Balance</span>
            <span className="eye-icon">
              <img src={EyeIcon} alt="" />
            </span>
          </div>
          <h2>₦2000</h2>
          <Button className="overview-topup-button">Top up +</Button>
        </div>

        <div className="overview-quick-links">
          <h4>Quick Links</h4>
          <div className="overview-link">
            <div>
              <img className="imageone" src={SendIcon} alt="send" />
              <span>Send Messages</span>
            </div>
            <div>
              <img
                className="arrowrightion"
                src={ArrowRightIcon}
                alt="upload"
              />
            </div>
          </div>
          <div className="overview-link">
            <div>
              <img className="imageone" src={UploadIcon} alt="upload" />
              <span>Upload Contacts</span>
            </div>
            <img className="arrowrightion" src={ArrowRightIcon} alt="upload" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewActivitySection;
