import React, { useState } from "react";
import { Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import api from "../utils/api";
import GoogleIMG from "../assets/google.png";
import "../styles/SignIn.css";
import LoginLargeBanner from "../assets/logindashboard.png";
import MaingBrandLogo from "../assets/mainlogo.png";
import SmallIllustorGirl from "../assets/loginillustor.png";
const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tenantId, setTenantId] = useState("demo-tenant"); // Can also use from .env or context
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const response = await api.post(
        "/auth/signin",
        { email, password },
        {
          headers: {
            "x-tenant-id": tenantId,
          },
        }
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      message.success("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      setErrorMessage("Incorrect email address or password");
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
          <span>Don't have an account?</span>
          <Link to="/signup">Sign up</Link>
        </div>
      </div>

      <div className="signin-container">
        <div className="signin-left">
          <div className="signin-left-overlay" />
          <div className="signin-text">
            <h2>Messaging Made Effortless</h2>
            <p className="reachdes">
              Reach your audience with precision, speed, and reliability
            </p>
          </div>
          <img src={LoginLargeBanner} alt="visual" className="signin-graphic" />
          <img className="sallgirlIllustor" src={SmallIllustorGirl} alt="" />
        </div>

        <div className="signin-right">
          <div className="signin-box">
            <h2>Welcome Back</h2>
            <p className="subtitle">Lorem ipsum dolor sit amet consectetur.</p>

            {errorMessage && <div className="error-alert">{errorMessage}</div>}

            <label>Email address</label>
            <Input
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <Input.Password
              placeholder="Enter Password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="signin-options">
              <Link to="/reset-password">Reset Passoword?</Link>
            </div>

            <Button
              type="primary"
              className="signin-button"
              loading={loading}
              onClick={handleSignIn}
            >
              Sign in
            </Button>

            <div className="or-separator">or sign in with</div>

            <Button className="google-button">
              <img src={GoogleIMG} alt="Google" />
              Continue with Google
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
