import React, { useState } from "react";
import "../../styles/PaymentPage.css"; // import the stylesheet
import PaymentCardREciept from "../../assets/receipt.png";
import CopyImageIcobn from "../../assets/copy.png";
import PaymentCArd from "../../assets/carddark.png";
import BankCardImage from "../../assets/bank.png";
import VisaPNG from "../../assets/visa.png";
import CalenderIcon from "../../assets/calendar.png";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const [selectedMethod, setSelectedMethod] = useState("bank");
  const navigate = useNavigate();
  return (
    <div className="paymentoutcontainer">
      <div className="payment-container">
        <div className="payment-header">
          <h2>Payment</h2>
          <button
            onClick={() => navigate("/dashboard/paymenthistory")}
            className="payment-history-btn"
          >
            <img src={PaymentCardREciept} alt="icon" />
            Payment History
          </button>
        </div>

        <div className="payment-box">
          <h3 className="payment-box-title">Payment Method</h3>

          <div className="payment-method-toggle">
            <button
              className={`payment-toggle-option ${
                selectedMethod === "card" ? "active" : ""
              }`}
              onClick={() => setSelectedMethod("card")}
            >
              <img src={PaymentCArd} alt="card icon" />
              Card
            </button>
            <button
              className={`payment-toggle-option ${
                selectedMethod === "bank" ? "active" : ""
              }`}
              onClick={() => setSelectedMethod("bank")}
            >
              <img src={BankCardImage} alt="bank icon" />
              Bank Transfer
            </button>
          </div>

          {selectedMethod === "card" ? (
            <div className="payment-card-form">
              {/* Card Icons */}
              <div className="payment-card-icons">
                <img src={VisaPNG} alt="" />
              </div>

              {/* Amount */}
              <div className="payment-form-row">
                <label>Amount</label>
                <br />
                <input type="text" placeholder="₦2000" />
              </div>

              {/* Card Number & Holder Name */}
              <div className="payment-form-row double">
                <div className="input-group">
                  <label>Card Number</label>
                  <br />
                  <input type="text" placeholder="234 000 0000" />
                </div>
                <div className="input-group">
                  <label>Card holder name</label>
                  <br />
                  <input type="text" placeholder="Doe Joe" />
                </div>
              </div>

              {/* Expiry & CVC */}
              <div className="payment-form-row double">
                <div className="input-group payment-expiry-wrap">
                  <label>Expiry date</label>
                  <br />
                  <input type="text" placeholder="01/03" />
                  <img
                    className="calendar-icon"
                    src={CalenderIcon}
                    alt="calendar"
                  />
                </div>
                <div className="input-group">
                  <label>CVC</label>
                  <br />
                  <input type="text" placeholder="864" />
                </div>
              </div>

              {/* Terms */}
              <p className="payment-card-note">
                By providing your card information, you allow us to charge your
                card for future payments in accordance with their terms.
              </p>

              {/* Action Buttons */}
              <div className="payment-action-buttons">
                <button className="payment-cancel-btn">Cancel</button>
                <button className="payment-confirm-btn">Pay</button>
              </div>
            </div>
          ) : (
            <div className="payment-info-grid">
              <div className="payment-info-item">
                <label>Bank Name</label>
                <p>First Bank</p>
              </div>
              <div className="payment-info-item">
                <label>Account Name</label>
                <p>Dejyle Ventures</p>
              </div>
              <div className="payment-info-item">
                <label>Account Number</label>
                <div className="payment-copy-wrap">
                  <p className="payment-account-num">234 000 0000</p>
                  <img src={CopyImageIcobn} alt="copy" />
                </div>
              </div>
              <div className="payment-info-item">
                <label>Amount</label>

                <input type="text" placeholder="₦ 0.00" />
              </div>
              <div></div>
              <div className="payment-action-buttons">
                <button className="payment-cancel-btn">Cancel</button>
                <button className="payment-confirm-btn">Pay</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Payment;
