import React, { useState } from "react";
import "./general.css";
import "./template2.css";
import logo from "./images/logo.png"; // Import the logo image

const Template2 = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    summary: "",
    experience: "",
    education: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  };

  return (
    <div className="template2">
      <header>
        <div className="container">
          <h1>Template 2 - Create Your Resume</h1>

          {/* Logo */}
          <a href="/">
            <img
              src="./images/logo.png"
              alt="Website Logo"
              className="logo"
            />
          </a>

          {/* Hamburger Menu */}
          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          {/* Hidden Navigation Menu */}
          <nav id="navMenu" className="nav-menu">
            <button onClick={() => (window.location.href = "/")}>
              Home
            </button>
            <button
              onClick={() => (window.location.href = "Template.html")}
            >
              Select Template
            </button>
          </nav>
        </div>
      </header>

      <div className="resume-form-container">
        <form id="resumeForm" onSubmit={handleSubmit}>
          <label htmlFor="fullName">Full Name:</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />

          <label htmlFor="summary">Professional Summary:</label>
          <textarea
            id="summary"
            name="summary"
            rows="4"
            value={formData.summary}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="experience">Work Experience:</label>
          <textarea
            id="experience"
            name="experience"
            rows="4"
            value={formData.experience}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="education">Education:</label>
          <textarea
            id="education"
            name="education"
            rows="4"
            value={formData.education}
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="skills">Skills:</label>
          <textarea
            id="skills"
            name="skills"
            rows="4"
            value={formData.skills}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="animate-button">
            Generate Resume
          </button>
        </form>
      </div>
    </div>
  );
};

export default Template2;
