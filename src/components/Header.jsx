import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="src\components\logo.png" 
          alt="EarthVision Logo"
          className="logo-icon"
        />
        <span className="logo-text">EarthVision</span>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="login-btn">
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
};

export default Header;
