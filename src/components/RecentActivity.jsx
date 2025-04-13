import React from "react";
import "../styles/OverviewRecentActivity.css";

const data = [
  {
    sn: 1,
    task: "Contact upload",
    date: "8/8/2024",
    time: "6:45pm",
    status: "Successful",
  },
  {
    sn: 2,
    task: "Email sent",
    date: "9/10/2024",
    time: "10:00am",
    status: "Failed",
  },
  {
    sn: 3,
    task: "Account setting",
    date: "12/12/2024",
    time: "9:50am",
    status: "Successful",
  },
  {
    sn: 4,
    task: "Sms sent",
    date: "1/1/2025",
    time: "12:40pm",
    status: "Pending",
  },
];

const OverviewRecentActivity = () => {
  return (
    <div className="overview-recent-container">
      <h3 className="overview-recent-title">Recent Activity</h3>
      <div className="overview-recent-table">
        <div className="overview-table-header">
          <span>S/N</span>
          <span>Task</span>
          <span>Date</span>
          <span>Time</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {data.map((item, idx) => (
          <div key={idx} className="overview-table-row">
            <span>{item.sn}</span>
            <span>{item.task}</span>
            <span>{item.date}</span>
            <span>{item.time}</span>
            <span className={`status ${item.status.toLowerCase()}`}>
              {item.status}
            </span>
            <span className="overview-ellipsis">⋯</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewRecentActivity;
