import React from "react";
import "../../styles/RechargeBillPaymentHistory.css";
const rechargeHistoryData = [
  {
    sn: 1,
    date: "Wed, Mar 4,2025",
    time: "10:22am",
    phone: "+234890282",
    provider: "MTN Airtime",
    reference: "240778499_airtime",
    amount: "₦ 2000",
    status: "Successful",
  },
  {
    sn: 2,
    date: "Wed, Mar 4,2025",
    time: "10:22am",
    phone: "+234890282",
    provider: "MTN Airtime",
    reference: "240778499_airtime",
    amount: "₦ 2000",
    status: "Successful",
  },
  {
    sn: 3,
    date: "Wed, Mar 4,2025",
    time: "10:22am",
    phone: "234890282",
    provider: "EKEDC PREPAID",
    reference: "240778499_Utility",
    amount: "₦2000",
    status: "Failed",
  },
  {
    sn: 4,
    date: "Wed, Mar 4,2025",
    time: "10:22am",
    phone: "+234890282",
    provider: "Airtel Data",
    reference: "240778499_data",
    amount: "₦ 2000",
    status: "Successful",
  },
  {
    sn: 5,
    date: "Wed, Mar 4,2025",
    time: "10:22am",
    phone: "+234890282",
    provider: "Airtel Data",
    reference: "240778499_data",
    amount: "₦ 2000",
    status: "Successful",
  },
  {
    sn: 6,
    date: "Wed, Mar 4,2025",
    time: "10:22am",
    phone: "+234890282",
    provider: "MTN Airtime",
    reference: "240778499_airtime",
    amount: "₦ 2000",
    status: "Pending",
  },
];

const RechargeBillPaymentHistory = () => {
  return (
    <div className="recharge-history-wrapper">
      <div className="recharge-history-header">
        <h2>Payment History</h2>
        <button className="recharge-make-payment-btn">Make Payment</button>
      </div>

      <div className="recharge-history-table-container">
        <table className="recharge-history-table">
          <thead>
            <tr>
              <th>S/N</th>
              <th>Date</th>
              <th>Time</th>
              <th>Phone No</th>
              <th>Network Provider</th>
              <th>Reference No</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {rechargeHistoryData.map((row) => (
              <tr key={row.sn}>
                <td>{row.sn}</td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.phone}</td>
                <td>{row.provider}</td>
                <td>{row.reference}</td>
                <td>{row.amount}</td>
                <td>
                  <span className={`status-tag ${row.status.toLowerCase()}`}>
                    {row.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="recharge-history-footer">
          <span>Showing 6 of 60 results</span>
          <div className="pagination-ui">
            <button>{"<"}</button>
            {[1, 2, 3, 4, 5, "...", 10].map((num, i) => (
              <button key={i} className={num === 1 ? "active" : ""}>
                {num}
              </button>
            ))}
            <button>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RechargeBillPaymentHistory;
