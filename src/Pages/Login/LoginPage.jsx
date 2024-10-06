import React, { useState } from "react";
import { Mail, Lock, User, ArrowRight } from "lucide-react";
import "./LoginPage.css";

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Sign Up
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-page">
      <div className="video-container">
        <video className="background-video" autoPlay loop muted>
          <source src="src\assets\56431-479644933.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="form-container">
          <div className="form-box">
            <div className="header">
              <h1 className={`title ${isLogin ? "active" : ""}`}>
                {isLogin ? "Welcome Back" : "Create Account"}
              </h1>
              <div className="toggle-container">
                <button
                  className={`toggle-button ${isLogin ? "active" : ""}`}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
                <button
                  className={`toggle-button ${!isLogin ? "active" : ""}`}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </div>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              {/* Name field only visible in Sign Up mode */}
              {!isLogin && (
                <div className="input-group animate-slide-down">
                  <User className="input-icon" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required={!isLogin} // Required only for sign up
                  />
                </div>
              )}

              <div className="input-group animate-slide-down">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="input-group animate-slide-down">
                <Lock className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="options-group">
                <label className="remember-me">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                {isLogin && (
                  <button type="button" className="forgot-password">
                    Forgot Password?
                  </button>
                )}
              </div>

              <button type="submit" className="submit-button">
                <span>{isLogin ? "Login" : "Sign Up"}</span>
                <ArrowRight className="button-icon" />
              </button>
            </form>

            {/* Toggle between Login and Sign Up at the bottom */}
            <div className="form-footer">
              {isLogin ? (
                <p>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="switch-link"
                    onClick={() => setIsLogin(false)}
                  >
                    Sign Up
                  </button>
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="switch-link"
                    onClick={() => setIsLogin(true)}
                  >
                    Login
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
