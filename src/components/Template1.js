// src/components/Template1.js
import React from "react";
import "./general.css"; // Import general styles
import "./template1.css"; // Import template-specific CSS
import logo from "./images/logo.png"; // Import the logo image

function Template1() {
  return (
    <div className="template1">
      <header>
        <div className="container">
          <h1>Template 1 - Create Your Resume</h1>
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
            <button onClick={() => (window.location.href = "/")}>Home</button>
            <button onClick={() => (window.location.href = "/Template")}>Select Template</button>
          </nav>
        </div>
      </header>

      {/* Resume Form */}
      <div className="resume-form-container">
        <form id="resumeForm">
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" name="fullName" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" required />

          <label htmlFor="linkedin">LinkedIn URL:</label>
          <input type="url" id="linkedin" name="linkedin" />

          <label htmlFor="github">GitHub URL:</label>
          <input type="url" id="github" name="github" />

          <h3>Education</h3>
          <label htmlFor="university">University Name:</label>
          <input type="text" id="university" name="university" required />

          <label htmlFor="location">University Location:</label>
          <input type="text" id="location" name="location" required />

          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major" required />

          <label htmlFor="gpa">GPA:</label>
          <input type="text" id="gpa" name="gpa" />

          <label htmlFor="courses">Relevant Courses:</label>
          <textarea id="courses" name="courses" rows="2"></textarea>

          <label htmlFor="languagesTools">Programming Languages & Tools:</label>
          <textarea id="languagesTools" name="languagesTools" rows="2"></textarea>

          <label htmlFor="clubs">Clubs and Associations:</label>
          <textarea id="clubs" name="clubs" rows="2"></textarea>

          <h3>Projects</h3>
          <label htmlFor="project1Name">Project 1 Name:</label>
          <input type="text" id="project1Name" name="project1Name" />

          <label htmlFor="project1Description">Project 1 Description:</label>
          <textarea id="project1Description" name="project1Description" rows="2"></textarea>

          <label htmlFor="project2Name">Project 2 Name:</label>
          <input type="text" id="project2Name" name="project2Name" />

          <label htmlFor="project2Description">Project 2 Description:</label>
          <textarea id="project2Description" name="project2Description" rows="2"></textarea>

          <h3>Job Experience</h3>
          <label htmlFor="job1Position">Job 1 Position:</label>
          <input type="text" id="job1Position" name="job1Position" />

          <label htmlFor="job1Description">Job 1 Description:</label>
          <textarea id="job1Description" name="job1Description" rows="2"></textarea>

          <label htmlFor="job2Position">Job 2 Position:</label>
          <input type="text" id="job2Position" name="job2Position" />

          <label htmlFor="job2Description">Job 2 Description:</label>
          <textarea id="job2Description" name="job2Description" rows="2"></textarea>

          <h3>Languages</h3>
          <label htmlFor="languages">Languages:</label>
          <textarea id="languages" name="languages" rows="2"></textarea>

          <button type="submit" className="animate-button">
            Generate Resume
          </button>
        </form>
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

export default Template1;
