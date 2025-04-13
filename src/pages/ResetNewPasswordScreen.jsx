import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import api from "../utils/api";
import ResetBanner from "../assets/resetpassword.png";
import MaingBrandLogo from "../assets/mainlogo.png";
import "../styles/ResetPasswordNew.css";

const ResetNewPasswordScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const isValid = {
    length: newPassword.length >= 8,
    uppercase: /[A-Z]/.test(newPassword),
    number: /[0-9]/.test(newPassword),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword),
    match: newPassword === confirmPassword && confirmPassword !== "",
  };

  const handleResetPassword = async () => {
    if (!Object.values(isValid).every(Boolean)) {
      return message.error("Please fix the password requirements.");
    }

    try {
      setLoading(true);
      await api.post(
        "/auth/reset-password",
        { email, newPassword },
        {
          headers: { "x-tenant-id": "demo-tenant" },
        }
      );
      message.success("Password reset successfully!");
      navigate("/signin");
    } catch (error) {
      console.error(error);
      message.error("Failed to reset password");
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
            <p className="subtitle">
              Create a strong new password to continue.
            </p>

            {errorMessage && <div className="error-alert">{errorMessage}</div>}

            <label>New Password</label>
            <Input.Password
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />

            <label>Confirm New Password</label>
            <Input.Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />

            <ul className="password-criteria">
              <li className={isValid.length ? "valid" : "invalid"}>
                Minimum of 8 characters
              </li>
              <li className={isValid.uppercase ? "valid" : "invalid"}>
                Must include at least 1 uppercase letter
              </li>
              <li className={isValid.number ? "valid" : "invalid"}>
                Must include at least 1 number
              </li>
              <li className={isValid.symbol ? "valid" : "invalid"}>
                Must contain at least 1 symbol (S,@,#)
              </li>
              <li className={isValid.match ? "valid" : "invalid"}>
                Passwords must match
              </li>
            </ul>

            <Button
              type="primary"
              className="signin-button"
              loading={loading}
              onClick={handleResetPassword}
            >
              Reset Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetNewPasswordScreen;
