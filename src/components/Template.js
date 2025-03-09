// src/components/Template.js
import React from "react";
import "./template.css";  // Import the template-specific CSS
import logo from "./images/logo.png";

function Template() {
  return (
    <div className="template-page">
      <header>
        <h1>Select Your Resume Template</h1>
        <p>Choose from one of our professionally designed templates below.</p>

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Website Logo" className="logo" />
        </a>

        {/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        {/* Hidden Navigation Menu */}
        <nav id="navMenu" className="nav-menu">
          <button onClick={() => window.location.href = "/"}>Home</button>
        </nav>
      </header>

      {/* Template Options */}
      <div className="template-container">
        <div className="template-box">
          <a href="/template1">
            <img
              src="./Juhayer-Resume.png"
              alt="Template 1"
            />
          </a>
        </div>
        <div className="template-box">
          <a href="/template2">
            <img
              src="https://cdn.enhancv.com/single_column_resume_template_1_c1e24e6e04.png"
              alt="Template 2"
            />
          </a>
        </div>
        <div className="template-box">
          <a href="/template3">
            <img
              src="https://beamjobs.wpenginepowered.com/wp-content/uploads/2023/01/academic-resume-template.png"
              alt="Template 3"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

// Toggle menu visibility function
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");

  if (navMenu.classList.contains("show")) {
    navMenu.classList.remove("show");
  } else {
    navMenu.classList.add("show");
  }
}

export default Template;
