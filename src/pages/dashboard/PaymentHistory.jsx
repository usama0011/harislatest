import React from "react";
import "../../styles/PaymentHistory.css";

const PaymentHistory = () => {
  const data = [
    {
      sn: 1,
      date: "Wed, Mar 4,2025",
      time: "10:22am",
      method: "Card",
      amount: "₦ 2000",
      status: "Successful",
    },
    {
      sn: 2,
      date: "Wed, Mar 4,2025",
      time: "10:22am",
      method: "Bank Transfer",
      amount: "₦ 2000",
      status: "Successful",
    },
    {
      sn: 3,
      date: "Wed, Mar 4,2025",
      time: "10:22am",
      method: "Card",
      amount: "₦ 2000",
      status: "Failed",
    },
    {
      sn: 4,
      date: "Wed, Mar 4,2025",
      time: "10:22am",
      method: "Bank Transfer",
      amount: "₦ 2000",
      status: "Successful",
    },
    {
      sn: 5,
      date: "Wed, Mar 4,2025",
      time: "10:22am",
      method: "Bank Transfer",
      amount: "₦ 2000",
      status: "Successful",
    },
    {
      sn: 6,
      date: "Wed, Mar 4,2025",
      time: "10:22am",
      method: "Card",
      amount: "₦ 2000",
      status: "Pending",
    },
  ];

  return (
    <div className="history-wrapper">
      <div className="history-header">
        <h2>Payment History</h2>
        <button className="history-topup-btn">Top up +</button>
      </div>

      <div className="history-table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Time</th>
              <th>Payment Method</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.sn}>
                <td>{row.sn}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.method}</td>
                <td>{row.amount}</td>
                <td>
                  <span className={`status-badge ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="history-pagination-wrap">
          <div className="history-pagination-text">
            Showing 6 of 160 results
          </div>
          <div className="history-pagination-controls">
            <button className="pagination-arrow">&lt;</button>
            <button className="page-btn active">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">3</button>
            <span className="page-dots">...</span>
            <button className="page-btn">16</button>
            <button className="pagination-arrow">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
