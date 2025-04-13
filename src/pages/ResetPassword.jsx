import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";
import ResetBanner from "../assets/resetpassword.png";
import MaingBrandLogo from "../assets/mainlogo.png";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await api.post(
        "/auth/send-reset-otp",
        { email },
        {
          headers: {
            "x-tenant-id": "demo-tenant",
          },
        }
      );

      message.success("OTP sent to your email");
      navigate(`/otdcode`);
    } catch (err) {
      console.error(err);
      setErrorMessage("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
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
            <h2>Reset Password</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur.</p>

            {errorMessage && <div className="error-alert">{errorMessage}</div>}

            <label>Email address</label>
            <Input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button
              type="primary"
              className="signin-button"
              loading={loading}
              onClick={handleSendOTP}
              disabled={!email}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
