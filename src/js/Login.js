import React, { useState } from "react";
import "../css/general.css";  // Import the common styles
import "../css/login.css"; // Make sure the CSS file is in the correct location
import logo from "../components/images/logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <div className="login-page">
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="Line"></div>
          <div className="Line"></div>
        </div>
        <a href="/">
          <img src={logo} alt="Website Logo" className="logo" />
        </a>
      <header>
        <div className="container">
          <h1>Login to Stellar Resume</h1>
          <p>Please enter your email and password to login.</p>
        </div>

        {/* Navigation Menu */}
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
      </header>

      {/* Login Form */}
      <div className="login-container">
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
      </div>
    </div>
  );
};

export default Login;
