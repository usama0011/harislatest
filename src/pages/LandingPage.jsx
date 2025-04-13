import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import LandingPageLogo from "../assets/landingpagebanner.png";
import BrandLogo from "../assets/mainlogo.png";
const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <header className="landing-header">
        <div className="landing-logo">
          <img src={BrandLogo} alt="Logo" className="logo-img" />
        </div>
        <button className="signin-btn" onClick={() => navigate("/signin")}>
          Sign in
        </button>
      </header>

      <main className="landing-main">
        <h1 className="landing-title">
          Reach Your Audience Instantly with Bulk SMS, Email, and WhatsApp!
        </h1>
        <p className="landing-subtitle">
          Send messages at scale, track results, and engage your customers — all
          from one powerful platform
        </p>

        <div className="landing-banner">
          <button
            className="get-started-btn"
            onClick={() => navigate("/signup")}
          >
            Get started
          </button>
          <br />
          <img
            src={LandingPageLogo}
            alt="Dashboard Preview"
            className="dashboard-preview"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
