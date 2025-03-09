import React, { useState } from "react";
import "./home.css";
import "./faq.css";
import "./general.css";
import "./login.css";
import logo from "./images/logo.png"; // Import the logo image

function HomePage() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleAnswer = (index) => {
    const answerElement = document.getElementById(`faq-answer-${index}`);
    answerElement.style.display = answerElement.style.display === "block" ? "none" : "block";
  };

  return (
    <div>
        <div className="container">
          <h1>Stellar Resume</h1>
          <p>Your ultimate tool for creating a professional resume with ease. Get Your Dream job with our resume generator!!!</p>
          <img src="https://cdn-images.zety.com/images/zety/landings/builder/in/resume-builder-template@3x.png" width="300" height="300" alt="Resume Builder Template" />
          <img src="https://www.livecareer.com/lcapp/uploads/2023/11/resume-builder-banner.png" width="300" height="300" alt="Resume Builder Banner" />
          <img src="https://enhancv.com/_next/static/images/resume4-eb8e2bacc73eb143b714ffec42b44926.webp" width="300" height="300" alt="Resume Example" />
          <div className="steps">
            <div className="step-box">
              <h2>Step 1</h2>
              <p>Enter your personal details</p>
            </div>
            <div className="step-box">
              <h2>Step 2</h2>
              <p>Add your work experience and skills</p>
            </div>
            <div className="step-box">
              <h2>Step 3</h2>
              <p>Customize and review your resume</p>
            </div>
          </div>
          <button className="generate-btn" onClick={() => window.location.href = 'Template'}>Generate Your Own Resume</button>
        </div>

      {/* Logo Section */}
      <a href="/">
        <img src={logo} alt="Website Logo" className="logo" />
      </a>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" id="hamburgerMenu" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Menu Content */}
      {menuVisible && (
        <div className="menu-content" id="menuContent">
          <button className="login-btn" onClick={() => window.location.href = 'Login'}>Login</button>
        </div>
      )}
    

      {/* Profile Section */}
      <div className="profile" id="profile"></div>

      {/* FAQ Section */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(0)}>
            <span>What should I include in my resume?</span>
            <span className="plus">+</span>
          </div>
          <div className="faq-answer" id="faq-answer-0">
            Your resume should include your contact information, a professional summary, work experience, education, and relevant skills.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(1)}>
            <span>How long should my resume be?</span>
            <span className="plus">+</span>
          </div>
          <div className="faq-answer" id="faq-answer-1">
            Ideally, your resume should be one page, especially if you have less than 10 years of experience. However, it can be two pages if you have extensive experience.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(2)}>
            <span>What format should my resume be in?</span>
            <span className="plus">+</span>
          </div>
          <div className="faq-answer" id="faq-answer-2">
            The most common resume formats are chronological, functional, and combination. Choose the one that best highlights your skills and experience.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(3)}>
            <span>Should I include a photo on my resume?</span>
            <span className="plus">+</span>
          </div>
          <div className="faq-answer" id="faq-answer-3">
            Including a photo on your resume is generally not recommended in the U.S., but it may be common practice in other countries. Check the norms for your industry and location.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question" onClick={() => toggleAnswer(4)}>
            <span>How do I make my resume stand out?</span>
            <span className="plus">+</span>
          </div>
          <div className="faq-answer" id="faq-answer-4">
            To make your resume stand out, use a clean and professional layout, highlight your most relevant skills and achievements, and tailor your resume for each job application.
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
