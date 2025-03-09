import React from "react";
import "./template.css"; // Import the template-specific CSS
import logo from "./images/logo.png";
import "./general.css";
import resume1 from "./images/Juhayer-Resume.png"; // Local image for Template 1

function Template() {
  return (
    <div className="template-page">
      <a href="/">
          <img src={logo} alt="Website Logo" className="logo" />
        </a>{/* Hamburger Menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      <header>
        <h1>Select Your Resume Template</h1>
        <p>Choose from one of our professionally designed templates below.</p>

        {/* Logo */}
        

        

        {/* Hidden Navigation Menu */}
        <nav id="navMenu" className="nav-menu">
          <button onClick={() => window.location.href = "/"}>Home</button>
        </nav>
      </header>

      {/* Template Options */}
      <div className="template-container">
        {/* Template 1 */}
        <div className="template-box">
          <img src={resume1} alt="Template 1" className="template-img" />
          <a href="/template1" className="template-overlay">Select Template 1</a>
        </div>

        {/* Template 2 */}
        <div className="template-box">
          <img
            src="https://cdn.enhancv.com/single_column_resume_template_1_c1e24e6e04.png"
            alt="Template 2"
            className="template-img"
          />
          <a href="/template2" className="template-overlay">Select Template 2</a>
        </div>

        {/* Template 3 */}
        <div className="template-box">
          <img
            src="https://beamjobs.wpenginepowered.com/wp-content/uploads/2023/01/academic-resume-template.png"
            alt="Template 3"
            className="template-img"
          />
          <a href="/template3" className="template-overlay">Select Template 3</a>
        </div>
      </div>
    </div>
  );
}

// Toggle menu visibility function
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("show");
}

export default Template;
