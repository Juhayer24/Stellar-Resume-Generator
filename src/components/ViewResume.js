import React, { useEffect, useState } from "react";
import "./general.css";
import "./viewresume.css";

const ViewResume = () => {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    const storedResumeData = JSON.parse(localStorage.getItem("resumeData"));
    if (storedResumeData) {
      setResumeData(storedResumeData);
    }
  }, []);

  return (
    <div className="view-resume">
      <header>
        <div className="container">
          <h1>Your Resume</h1>
        </div>
      </header>
      <div className="resume-container" id="resumeContainer">
        {resumeData ? (
          <>
            <h2>{resumeData.fullName}</h2>
            <p>{resumeData.email}</p>
            <p>{resumeData.phone}</p>
            <p>{resumeData.address}</p>
            <h3>Professional Summary</h3>
            <p>{resumeData.summary}</p>
            <h3>Work Experience</h3>
            <p>{resumeData.experience}</p>
            <h3>Education</h3>
            <p>{resumeData.education}</p>
            <h3>Skills</h3>
            <p>{resumeData.skills}</p>
          </>
        ) : (
          <p>No resume data found. Please go back and create your resume.</p>
        )}
      </div>
      <button className="home-btn" onClick={() => window.location.href = 'home.html'}>
        Home
      </button>
    </div>
  );
};

export default ViewResume;
