import React from "react";
import "../../styles/OverView.css";
import Frame1 from "../../assets/Fram1.png";
import Frame2 from "../../assets/Fram2.png";
import Frame3 from "../../assets/Fram3.png";
import Frame4 from "../../assets/Fram4.png";

import OverviewActivitySection from "../../components/OverviewActivitySection";
import OverviewRecentActivity from "../../components/RecentActivity";
const Overview = () => {
  return (
    <div className="overview-wrapper">
      <div className="overview-header">
        <h2 className="overview-title">Welcome back, Joe</h2>
        <p className="overview-subtitle">
          Lorem ipsum dolor sit amet consectetur. Habitasse po.
        </p>
      </div>

      <div className="overview-cards-container">
        {/* Card 1 */}
        <div className="overview-card">
          <div className="overview-card-header">
            <p className="overview-card-title">Total Messages Sent</p>
            <img
              src={Frame1}
              alt="icon"
              className="overview-card-icon yellow"
            />
          </div>
          <p className="overview-card-value">12,000</p>
          <p className="overview-card-meta">(SMS, Email, WhatsApp)</p>
        </div>

        {/* Card 2 */}
        <div className="overview-card">
          <div className="overview-card-header">
            <p className="overview-card-title">Pending Messages</p>
            <img
              src={Frame2}
              alt="icon"
              className="overview-card-icon orange"
            />
          </div>
          <p className="overview-card-value">150</p>
          <p className="overview-card-meta">(SMS, Email, WhatsApp)</p>
        </div>

        {/* Card 3 */}
        <div className="overview-card">
          <div className="overview-card-header">
            <p className="overview-card-title">Delivery Success Rate</p>
            <img src={Frame3} alt="icon" className="overview-card-icon green" />
          </div>
          <p className="overview-card-value">85%</p>
          <p className="overview-card-meta">(SMS, Email, WhatsApp)</p>
        </div>

        {/* Card 4 */}
        <div className="overview-card">
          <div className="overview-card-header">
            <p className="overview-card-title">Failed Messages</p>
            <img src={Frame4} alt="icon" className="overview-card-icon red" />
          </div>
          <p className="overview-card-value">15%</p>
          <p className="overview-card-meta">(SMS, Email, WhatsApp)</p>
        </div>
      </div>

      <h3 className="overview-section-heading">Activity Trends</h3>
      <OverviewActivitySection />
      <br />
      <OverviewRecentActivity />
    </div>
  );
};

export default Overview;
