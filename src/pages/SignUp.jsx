import React, { useState } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import GoogleImage from "../assets/google.png";
import EyeOpen from "../assets/eyeopen.png";
import MaingWebBrand from "../assets/mainlogo.png";
const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showValidation, setShowValidation] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePassword = (password) => ({
    minLength: password.length >= 8,
    upperCase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    const pwdValid = validatePassword(form.password); // get criteria results

    if (!validateEmail(form.email)) {
      newErrors.email = "Incorrect email address format";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    // ✅ Check password rules — if any false, block form submission
    if (
      !pwdValid.minLength ||
      !pwdValid.upperCase ||
      !pwdValid.number ||
      !pwdValid.symbol
    ) {
      newErrors.password = "Password does not meet the required criteria";
    }

    setErrors(newErrors);
    setShowValidation(true);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true); // start loading

      try {
        const response = await fetch(
          "http://54.243.4.152:3000/api/auth/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstname: form.firstName,
              lastname: form.lastName,
              email: form.email,
              mobileNumber: form.mobile,
              password: form.password,
              confirmPassword: form.confirmPassword,
            }),
          }
        );

        const data = await response.json();
        setLoading(false); // stop loading

        if (response.ok) {
          console.log("Signup success", data);
          localStorage.setItem("x-tenant-id", data.tenantId);
          navigate("/signin"); // ✅ Redirect to login
        } else {
          alert(data.message || "Signup failed");
        }
      } catch (error) {
        setLoading(false); // stop loading on error too

        console.error("Signup error:", error);
        alert("Something went wrong");
      }
    }
  };

  const pwdValid = validatePassword(form.password);

  return (
    <div className="signup-container">
      {/* LEFT PANEL */}
      <div className="signup-left">
        <img className="signup-logo" src={MaingWebBrand} alt="logo" />
      </div>

      {/* RIGHT PANEL */}
      <div className="signup-right">
        <form className="signup-form" onSubmit={handleSubmit}>
          <h2 className="signup-form-title">Create an Account</h2>
          <p className="signup-form-subtitle">
            Lorem ipsum dolor sit amet consectetur. habitasse po.
          </p>

          {errors.email && (
            <div className="signup-error-banner">{errors.email}</div>
          )}

          <div className="signup-grid">
            <input
              name="firstName"
              placeholder="First name"
              value={form.firstName}
              onChange={handleChange}
            />
            <input
              name="lastName"
              placeholder="Last name"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>

          <div className="signup-grid">
            <input
              name="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "error" : ""}
            />
            <input
              name="mobile"
              placeholder="Mobile number"
              value={form.mobile}
              onChange={handleChange}
            />
          </div>

          <div className="signup-grid">
            <div className="signup-password-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
              />
              <img src={EyeOpen} alt="eye icon" />
            </div>

            <div className="signup-password-field">
              <input
                name="confirmPassword"
                type="password"
                placeholder="Re-enter password"
                value={form.confirmPassword}
                onChange={handleChange}
                className={errors.confirmPassword ? "error" : ""}
              />
              <img src={EyeOpen} alt="eye icon" />
            </div>
          </div>

          {showValidation && (
            <div className="signup-validation">
              <p className={pwdValid.minLength ? "valid" : "invalid"}>
                Minimum of 8 characters
              </p>
              <p className={pwdValid.upperCase ? "valid" : "invalid"}>
                Must include at least 1 uppercase letter
              </p>
              <p className={pwdValid.number ? "valid" : "invalid"}>
                Must include at least 1 number
              </p>
              <p className={pwdValid.symbol ? "valid" : "invalid"}>
                Must contain at least 1 symbol (.,#,@)
              </p>
            </div>
          )}

          <button className="signup-btn" type="submit" disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>

          <p className="signup-terms">
            By creating an account, I accept the <span>Terms & Conditions</span>{" "}
            of dejyle and confirm that I have read the{" "}
            <span>Privacy Policy</span>.
          </p>

          <div className="signup-divider">or sign in with</div>
          <button className="signup-google-btn">
            <img src={GoogleImage} alt="google icon" />
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
