import React, { useState } from "react";
import "../css/general.css";  // Import the common styles
import "../css/login.css"; // Make sure the CSS file is in the correct location
import logo from "../components/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // Use state for menu visibility

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add authentication logic here
  };  
       
  return (
    // The outermost div should ideally be a fragment or a semantic tag like <main>
    // to avoid unnecessary wrapper divs if body styles are handling layout.
    // For now, keeping it as a div for direct replacement.
    <div>
      {/* Header Section - Contains logo, title, and hamburger menu */}
      <header>
        {/* Logo Section - Placed inside header for correct positioning */}
        <a href="/">
          <img src={logo} alt="Website Logo" className="logo" />
        </a>

        {/* Hamburger Menu - Placed inside header for correct positioning */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          {/* Corrected class names for bars to match general.css */}
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Menu - Conditionally rendered based on state */}
        {menuOpen && (
          <nav className="nav-menu">
            <button onClick={() => (window.location.href = "/")}>
              Home
            </button>
            <button onClick={() => (window.location.href = "Template")}>
              Select Template
            </button>
          </nav>
        )}

        {/* Main Header Title and Description */}
        <div className="container"> {/* Container for header text */}
          <h1>Login to Stellar Resume</h1>
          <p>Please enter your email and password to login.</p>
        </div>
      </header>

      {/* Login Form */}
      <main className="login-container"> {/* Use <main> for primary content */}
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="SignUp">Sign up</a>
        </p>
      </main>
    </div>
  );
};

export default Login;
