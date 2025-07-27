import React, { useState } from "react"; // Import useState
import "../css/template.css"; // Import the template-specific CSS
import logo from "../components/images/logo.png";
import "../css/general.css";
import resume1 from "../components/images/Juhayer-Resume.png"; // Local image for Template 1

function Template() {
  const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility

  // Toggle menu visibility using state
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
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
        {menuVisible && (
          <nav id="navMenu" className="nav-menu show"> {/* Add 'show' class directly if menuVisible is true */}
            <button onClick={() => window.location.href = "/"}>Home</button>
            <button onClick={() => window.location.href = "/Login"}>Login</button> {/* Added Login button */}
          </nav>
        )}

        {/* Main Header Title and Description */}
        <div className="container"> {/* Container for header text */}
          <h1>Select Your Resume Template</h1>
          <p>Choose from one of our professionally designed templates below.</p>
        </div>
      </header>

      {/* Template Options */}
      <main className="template-container"> {/* Use <main> for primary content */}
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
            src="https://resumecompanion.com/wp-content/uploads/2019/08/Simple-Resume-Template-Black-White.png"
            alt="Template 3"
            className="template-img"
          />
          <a href="/template3" className="template-overlay">Select Template 3</a>
        </div>
      </main>
    </div>
  );
}

export default Template;
