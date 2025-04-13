import React, { useState } from "react";
import "../../styles/Contacts.css";

import UploadImage from "../../assets/Upload Cloud.png";
import EditLogo from "../../assets/edit-2.png";
import DellImage from "../../assets/trash.png";

const Contacts = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [showModal, setShowModal] = useState("");
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = Array.from({ length: 16 }, (_, i) => ({
    sn: i + 1,
    name: "Joe Doe",
    phone: "+080 000 458 7282",
    whatsapp: "+080 000 458 7282",
    email: "example@mail.com",
    status: i % 3 === 0 ? "Active" : "Inactive",
  }));

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2>Contacts</h2>
        <div className="contacts-tabs">
          <button
            className={activeTab === "all" ? "active" : ""}
            onClick={() => setActiveTab("all")}
          >
            All Contacts
          </button>
          <button
            className={activeTab === "grouped" ? "active" : ""}
            onClick={() => setActiveTab("grouped")}
          >
            Grouped Contacts
          </button>
        </div>
        <div className="contacts-actions">
          <button className="upload-btn" onClick={() => setShowModal("upload")}>
            <img src={UploadImage} alt="upload" /> Upload Contact
          </button>
          <button className="add-btn" onClick={() => setShowModal("add")}>
            + Add Contact
          </button>
        </div>
      </div>

      <div className="contacts-table-wrap">
        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>WhatsApp Number</th>
              <th>Email Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, i) => (
              <tr key={i}>
                <td>{c.sn}</td>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.whatsapp}</td>
                <td>{c.email}</td>
                <td
                  className={
                    c.status === "Active" ? "status-green" : "status-red"
                  }
                >
                  {c.status}
                </td>
                <td>
                  <div className="action-dropdown">
                    <span>⋮</span>
                    <div className="dropdown-content">
                      <button
                        onClick={() => {
                          setSelectedContact(c);
                          setShowModal("edit");
                        }}
                      >
                        <img src={EditLogo} />
                        Edit
                      </button>
                      <button className="danger">
                        <img src={DellImage} />
                        Delete
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="pagination-footer">Showing 16 of 160 results</p>
      </div>

      {/* Modals */}
      {showModal === "edit" && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Edit Contact</h3>
            <input placeholder="Name" defaultValue={selectedContact?.name} />
            <input
              placeholder="Email address"
              defaultValue={selectedContact?.email}
            />
            <input
              placeholder="Mobile Number"
              defaultValue={selectedContact?.phone}
            />
            <input
              placeholder="WhatsApp Number"
              defaultValue={selectedContact?.whatsapp}
            />
            <div className="modal-buttons">
              <button className="cancel" onClick={() => setShowModal("")}>
                Cancel
              </button>
              <button className="save">Save</button>
            </div>
          </div>
        </div>
      )}

      {showModal === "add" && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Add Contact</h3>
            <input placeholder="Name" />
            <input placeholder="Email address" />
            <input placeholder="Mobile Number" />
            <input placeholder="WhatsApp Number" />
            <input placeholder="Group name (optional)" />
            <div className="modal-buttons">
              <button className="cancel" onClick={() => setShowModal("")}>
                Cancel
              </button>
              <button className="save">Save</button>
            </div>
          </div>
        </div>
      )}

      {showModal === "upload" && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Upload Contact</h3>
            <input placeholder="Group Name (optional)" />
            <input type="file" />
            <p className="csv-note">support CSV file</p>
            <div className="modal-buttons">
              <button className="cancel" onClick={() => setShowModal("")}>
                Cancel
              </button>
              <button className="save">Upload contact</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
