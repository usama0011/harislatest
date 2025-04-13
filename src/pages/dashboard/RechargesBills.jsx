import React, { useState } from "react";
import "../../styles/RechargeAndBills.css";
import MTN from "../../assets/Bank1.png";
import Airtel from "../../assets/Bank2.png";
import RecieptLogo from "../../assets/receipt.png";
import GLO from "../../assets/Bank3.png";
import NineMobile from "../../assets/Bank4.png";
import { useNavigate } from "react-router-dom";
const RechargesBills = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("recharge");
  const [subTab, setSubTab] = useState("airtime");
  const [network, setNetwork] = useState("MTN");

  const rechargeAmounts = [100, 200, 500, 1000, 2000];
  const dataPackages = [
    "10GB Monthly Plan",
    "100GB Data(30 Days)",
    "150GB Monthly Plan",
  ];
  const billers = ["EKEDC PREPAID", "EKO ELECTRICS POSTPAID", "EKEDC POSTPAID"];

  return (
    <div className="recharge-container">
      <div className="recharge-header">
        <h2>{tab === "recharge" ? "Recharge & Bills" : "Pay Bills"}</h2>
        <button
          onClick={() => navigate("/dashboard/rehargepayenbillhistory")}
          className="recharge-transaction-btn"
        >
          <img src={RecieptLogo} alt="receipt" />
          Transaction History
        </button>
      </div>

      {/* Tab Toggle */}
      <div className="recharge-tab-selector">
        <select value={tab} onChange={(e) => setTab(e.target.value)}>
          <option value="recharge">Recharge</option>
          <option value="bills">Pay bills</option>
        </select>
      </div>

      {tab === "recharge" ? (
        <div className="recharge-box">
          {/* Sub Tabs */}
          <div className="recharge-sub-tabs">
            <button
              className={subTab === "airtime" ? "active" : ""}
              onClick={() => setSubTab("airtime")}
            >
              Airtime
            </button>
            <button
              className={subTab === "data" ? "active" : ""}
              onClick={() => setSubTab("data")}
            >
              Data Bundles
            </button>
          </div>

          {/* Network Selection */}
          <div className="recharge-network">
            <img
              src={MTN}
              alt="MTN"
              className={`recharge-network-icon ${
                network === "MTN" ? "active" : ""
              }`}
              onClick={() => setNetwork("MTN")}
            />
            <img
              src={Airtel}
              alt="Airtel"
              className={`recharge-network-icon ${
                network === "Airtel" ? "active" : ""
              }`}
              onClick={() => setNetwork("Airtel")}
            />
            <img
              src={GLO}
              alt="Glo"
              className={`recharge-network-icon ${
                network === "Glo" ? "active" : ""
              }`}
              onClick={() => setNetwork("Glo")}
            />
            <img
              src={NineMobile}
              alt="9mobile"
              className={`recharge-network-icon ${
                network === "9mobile" ? "active" : ""
              }`}
              onClick={() => setNetwork("9mobile")}
            />
          </div>

          {/* Form Section */}
          <div className="recharge-form">
            <div className="recharge-input">
              <label>Phone Number</label>
              <input placeholder="234 000 0000" />
            </div>

            {subTab === "airtime" ? (
              <>
                <div className="recharge-amount-buttons">
                  {rechargeAmounts.map((amt) => (
                    <button key={amt}>{amt}</button>
                  ))}
                </div>
                <div className="recharge-input">
                  <label>Enter Amount</label>
                  <input placeholder="₦ 0.00" />
                </div>
              </>
            ) : (
              <>
                <div className="recharge-input">
                  <label>Select Package</label>
                  <select>
                    <option>Select Option</option>
                    {dataPackages.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div className="recharge-input">
                  <label>Enter Amount</label>
                  <input placeholder="₦ 0.00" />
                </div>
              </>
            )}

            <div className="recharge-buttons">
              <button className="cancel">Cancel</button>
              <button className="confirm">
                {subTab === "airtime" ? "Buy airtime" : "Buy data"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="recharge-box">
          <div className="recharge-form">
            <div className="recharge-input">
              <label>Biller</label>
              <select>
                <option>Select Option</option>
                {billers.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </div>
            <div className="recharge-input">
              <label>Meter Number</label>
              <input placeholder="234 000 0000" />
            </div>
            <div className="recharge-input">
              <label>Enter Amount</label>
              <input placeholder="₦ 0.00" />
            </div>
            <div className="recharge-buttons">
              <button className="cancel">Cancel</button>
              <button className="confirm">Pay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RechargesBills;
