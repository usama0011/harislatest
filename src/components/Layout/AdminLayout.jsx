import React, { useState } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MessageOutlined,
  UsergroupAddOutlined,
  FileTextOutlined,
  CreditCardOutlined,
  ShoppingOutlined,
  SettingOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "../../styles/AdminLayout.css";

import LogoImage from "../../assets/mainlogo.png"; // full logo + text
import ArrowRightIcon from "../../assets/arrow-down.png"; // full logo + text
import closeSideBarLogo from "../../assets/closebrandlogo.png"; // collapsed icon-only
import Messages from "../../assets/messages.png";
import OverViewImage from "../../assets/overview.png";
import LogoutImage from "../../assets/logout.png";
import PaymentImage from "../../assets/payment.png";
import Recharge from "../../assets/recharge.png";
import Documents from "../../assets/document.png";
import Contacts from "../../assets/contacts.png";
import setting from "../../assets/setting.png";
const { Header, Content, Sider } = Layout;

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);
  // At top inside AdminLayout
  const [mobileVisible, setMobileVisible] = useState(false);

  const toggleSidebar = () => {
    if (window.innerWidth <= 768) {
      setMobileVisible(!mobileVisible);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const menuItems = [
    {
      label: "Overview",
      key: "",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={OverViewImage}
        />
      ),
    },
    {
      label: "Messages",
      key: "messages",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={Messages}
        />
      ),
    },
    {
      label: "Contacts",
      key: "contacts",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={Contacts}
        />
      ),
    },
    {
      label: "Delivery Report",
      key: "delivery-report",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={Documents}
        />
      ),
    },
    {
      label: "Payment",
      key: "payment",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={PaymentImage}
        />
      ),
    },
    {
      label: "Recharges & Bills",
      key: "recharges-bills",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={Recharge}
        />
      ),
    },
    {
      label: "Settings",
      key: "settings",
      icon: (
        <img
          style={{ width: "20px", height: "20px", objectFit: "contain" }}
          src={setting}
        />
      ),
    },
  ];

  const onMenuClick = (e) => {
    if (e.key === "logout") {
      console.log("Logging out...");
      // Optional: Clear token, reset state, etc.
    } else {
      navigate(`/dashboard/${e.key}`);
    }
  };

  return (
    <Layout className={`admin-layout ${collapsed ? "collapsed" : "expanded"}`}>
      <Sider
        width={270}
        trigger={null}
        collapsible
        breakpoint="md"
        collapsed={collapsed}
        className={`custom-sidebar ${mobileVisible ? "mobile-visible" : ""}`}
        collapsedWidth={window.innerWidth <= 768 ? 0 : 80}
      >
        {/* Logo switching based on sidebar collapse state */}
        <div className="sidebar-logo">
          {!collapsed ? (
            <img
              src={LogoImage}
              className="openImageSidebarlogo"
              alt="Dejyle Logo"
            />
          ) : (
            <img
              src={closeSideBarLogo}
              alt="Dejyle Icon"
              className="newsidebarclosebrandlogo"
            />
          )}
        </div>

        <Menu
          mode="vertical"
          selectedKeys={[location.pathname.split("/dashboard/")[1] || ""]}
          onClick={onMenuClick}
          items={menuItems}
          className="menu-items"
        />

        {/* Logout Fixed at Bottom */}
        <div className="sidebar-logout">
          <Menu
            mode="vertical"
            onClick={onMenuClick}
            items={[
              {
                label: "Logout",
                key: "logout",
                icon: (
                  <img
                    src={LogoutImage}
                    style={{
                      width: "20px",
                      height: "20px",
                      objectFit: "contain",
                    }}
                  />
                ),
              },
            ]}
          />
        </div>
      </Sider>
      {mobileVisible && (
        <div
          className="sidebar-overlay"
          onClick={() => setMobileVisible(false)}
        />
      )}

      <Layout className="admin-content">
        <Header className="admin-header">
          {/* <MenuOutlined
            className="menu-toggle"
            onClick={() => setCollapsed(!collapsed)}
          /> */}
          <div className="admin-header-left">
            <MenuOutlined className="menu-toggle" onClick={toggleSidebar} />

            <input
              type="text"
              placeholder="Search"
              className="admin-search-input"
            />
          </div>

          <div className="admin-header-right">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1827/1827392.png"
              alt="notifications"
              className="admin-notification-icon"
            />
            <div className="admin-user-info">
              <div className="admin-avatar" />
              <div className="admin-user-details">
                <div className="admin-user-name">Joe Doe</div>
                <div className="admin-user-email">joedoe@gmail</div>
              </div>
              <div>
                <img
                  src={ArrowRightIcon}
                  style={{
                    width: "20px",
                    height: "20px",
                    objectFit: "contain",
                  }}
                  alt=""
                />
              </div>
            </div>
          </div>
        </Header>

        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
