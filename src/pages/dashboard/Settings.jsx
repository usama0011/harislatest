import React, { useState } from "react";
import "../../styles/SettingsPage.css"; // make sure you import the CSS

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="settingoutcontainer">
      <div className="settings-container">
        <h2 className="settings-title">Settings</h2>
        <div className="settings-tabs">
          <span
            className={`settings-tab ${
              activeTab === "profile" ? "active" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </span>
          <span
            className={`settings-tab ${
              activeTab === "security" ? "active" : ""
            }`}
            onClick={() => setActiveTab("security")}
          >
            Security
          </span>
        </div>

        {activeTab === "profile" && (
          <div className="settings-profile-form">
            <div className="settings-avatar-section">
              <div className="settings-avatar" />
              <div className="settings-name">Joe Doe</div>
              <div className="settings-email">joedoe@gmail</div>
              <div className="settings-role">Admin</div>
            </div>

            <div className="settings-form-grid">
              <div className="settings-input-group">
                <label>First name</label>
                <input type="text" placeholder="First name" />
              </div>
              <div className="settings-input-group">
                <label>Last name</label>
                <input type="text" placeholder="Last name" />
              </div>
              <div className="settings-input-group">
                <label>Email address</label>
                <input type="email" placeholder="email@example.com" />
              </div>
              <div className="settings-input-group">
                <label>Mobile number</label>
                <input type="text" placeholder="234 000 0000" />
              </div>
              <div className="settings-input-group">
                <label>Account Type</label>
                <select>
                  <option>Admin</option>
                  <option>Tier 1</option>
                  <option>Tier 2</option>
                </select>
              </div>
              <div className="settings-input-group">
                <label>Theme</label>
                <select>
                  <option>Light mode</option>
                  <option>Dark mode</option>
                  <option>System mode</option>
                </select>
              </div>
            </div>

            <div className="settings-buttons">
              <button className="cancel-btn">Cancel</button>
              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="settings-security-form">
            <div className="settings-security-section">
              <h3>Password</h3>
              <div className="settings-form-grid">
                <div className="settings-input-group">
                  <label>Current Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="settings-input-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="settings-input-group full-width">
                  <label>Confirm New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
              </div>
            </div>

            <div className="settings-notifications">
              <h3>Notifications</h3>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <div className="settings-notify-group">
                <div>
                  <strong>Email Notification</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider round"></span>
                </label>
                <div>
                  <strong>SMS Notification</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
                <div>
                  <strong>WhatsApp Notification</strong>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
                <label className="switch">
                  <input type="checkbox" defaultChecked />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>

            <div className="settings-buttons">
              <button className="cancel-btn">Cancel</button>
              <button className="save-btn">Save Changes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
