import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import api from "../utils/api";
import "../styles/EnterOTP.css";
import ResetBanner from "../assets/resetpassword.png";
import MaingBrandLogo from "../assets/mainlogo.png";

const EnterOTP = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [errorMessage, setErrorMessage] = useState("");
  // Inside component:
  const navigate = useNavigate();
  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return; // Only allow digits
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to next input
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerifyOTP = async () => {
    const otpCode = otp.join("");
    if (otpCode.length !== 4) {
      message.error("Please enter all 4 digits");
      return;
    }

    // Call API with otpCode
    try {
      const response = await api.post("/auth/verify-reset-otp", {
        email,
        otp: otpCode,
      });
      message.success("OTP verified!");
      navigate("/create-new-password");
    } catch (err) {
      message.error("Invalid OTP");
    }
  };

  return (
    <>
      <div className="signin-header-top">
        <div className="signin-logo">
          <img src={MaingBrandLogo} alt="logo" className="logo-img" />
        </div>
        <div className="signin-top-links">
          <span>Already have an account?</span>
          <a href="/signin">Sign in</a>
        </div>
      </div>

      <div className="signin-container">
        <div className="signin-left">
          <div className="signin-left-overlay" />
          <div className="signin-text">
            <h2>Secure your Dejyle</h2>
            <p className="reachdes">
              Protect your communications and regain access in just a few steps
            </p>
          </div>
          <img
            src={ResetBanner}
            alt="Reset visual"
            className="signin-graphic"
          />
        </div>

        <div className="signin-right">
          <div className="signin-box">
            <h2>Enter OTP</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur.</p>

            {errorMessage && <div className="error-alert">{errorMessage}</div>}

            <div className="otp-inputs">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  className="otp-box"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                />
              ))}
            </div>

            <Button
              type="primary"
              className="signin-button"
              style={{ marginTop: "10px" }}
              onClick={handleVerifyOTP}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EnterOTP;
