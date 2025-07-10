import React, { useState } from "react";
import "../css/general.css";
import "../css/template2.css";
import logo from "../components/images/logo.png";
import ViewResume from "./ViewResume.js"; // Fix import (default import)

const Template2 = () => {
  // State for active section
  const [activeSection, setActiveSection] = useState("personal");
  
  // State for dynamic education fields
  const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  
  // State for dynamic experience fields
  const [experienceFields, setExperienceFields] = useState([{ id: 1 }]);
  
  // State for dynamic project fields
  const [projectFields, setProjectFields] = useState([{ id: 1 }]);
  
  // State for form data
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",
    address: "",
    linkedin: "",
    portfolio: "",
    summary: "",
    
    // Skills section is kept as a single large field as it's more freeform
    technicalSkills: "",
    softSkills: "",
    languages: "",
    certifications: "",
  });

  // Add state to control resume view
  const [showResume, setShowResume] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Add new education field
  const addEducation = () => {
    const newId = educationFields.length + 1;
    setEducationFields([...educationFields, { id: newId }]);
  };
  
  // Add new experience field
  const addExperience = () => {
    const newId = experienceFields.length + 1;
    setExperienceFields([...experienceFields, { id: newId }]);
  };
  
  // Add new project field
  const addProject = () => {
    const newId = projectFields.length + 1;
    setProjectFields([...projectFields, { id: newId }]);
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save form data and show resume
    setSubmittedData(formData);
    setShowResume(true);
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  };

  // If resume is to be shown, render ViewResume with submitted data
  if (showResume && submittedData) {
    return <ViewResume {...submittedData} />;
  }

  return (
    <div className="template2">
      <header>
        <div className="container">
          <h1>Professional Resume Creator</h1>

          {/* Logo */}
          <a href="/">
            <img
              src={logo}
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
              onClick={() => (window.location.href = "/Template")}
            >
              Select Template
            </button>
          </nav>
        </div>
      </header>

      <div className="resume-form-container">
        {/* Progress Bar */}
        <div className="form-progress-bar">
          <div 
            className={`progress-step ${activeSection === "personal" ? "active" : ""}`}
            onClick={() => setActiveSection("personal")}
          >
            Personal Info
          </div>
          <div 
            className={`progress-step ${activeSection === "education" ? "active" : ""}`}
            onClick={() => setActiveSection("education")}
          >
            Education
          </div>
          <div 
            className={`progress-step ${activeSection === "experience" ? "active" : ""}`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
          </div>
          <div 
            className={`progress-step ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </div>
          <div 
            className={`progress-step ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => setActiveSection("skills")}
          >
            Skills
          </div>
        </div>
        
        <form id="resumeForm" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className={`form-section ${activeSection === "personal" ? "active" : ""}`}>
            <h2 className="section-title">Personal Information</h2>
            
            <div className="form-group">
              <label htmlFor="fullName">Full Name:</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="City, State, ZIP"
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn:</label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/johndoe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio/Website:</label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://johndoe.com"
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="summary">Professional Summary:</label>
              <textarea
                id="summary"
                name="summary"
                rows="4"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Write a concise overview of your professional background, key skills, and career goals. Aim for 3-5 sentences that highlight your unique value."
                required
              ></textarea>
              <p className="textarea-tip">Keep your summary focused on your core strengths and what makes you stand out.</p>
            </div>
            
            <div className="form-navigation">
              <button type="button" className="next-btn" onClick={() => setActiveSection("education")}>
                Next: Education
              </button>
            </div>
          </div>
          
          {/* Education Section */}
          <div className={`form-section ${activeSection === "education" ? "active" : ""}`}>
            <h2 className="section-title">Education</h2>
            
            {educationFields.map((field) => (
              <div key={field.id} className="education-entry">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`school-${field.id}`}>School/University:</label>
                    <input 
                      type="text" 
                      id={`school-${field.id}`} 
                      name={`school-${field.id}`} 
                      placeholder="University of Example"
                      required={field.id === 1}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`degree-${field.id}`}>Degree:</label>
                    <input 
                      type="text" 
                      id={`degree-${field.id}`} 
                      name={`degree-${field.id}`} 
                      placeholder="Bachelor of Science"
                      required={field.id === 1}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`fieldOfStudy-${field.id}`}>Field of Study:</label>
                    <input 
                      type="text" 
                      id={`fieldOfStudy-${field.id}`} 
                      name={`fieldOfStudy-${field.id}`} 
                      placeholder="Computer Science"
                      required={field.id === 1}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`schoolLocation-${field.id}`}>Location:</label>
                    <input 
                      type="text" 
                      id={`schoolLocation-${field.id}`} 
                      name={`schoolLocation-${field.id}`} 
                      placeholder="City, State"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`startDate-${field.id}`}>Start Date:</label>
                    <input 
                      type="month" 
                      id={`startDate-${field.id}`} 
                      name={`startDate-${field.id}`}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`endDate-${field.id}`}>End Date (or Expected):</label>
                    <input 
                      type="month" 
                      id={`endDate-${field.id}`} 
                      name={`endDate-${field.id}`}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`academicDetails-${field.id}`}>Academic Details:</label>
                  <textarea 
                    id={`academicDetails-${field.id}`} 
                    name={`academicDetails-${field.id}`} 
                    rows="3" 
                    placeholder="• GPA: 3.8/4.0
• Relevant coursework: Data Structures, Algorithms
• Academic achievements: Dean's List, Honors Program
• Activities: Computer Science Club, Hackathon participant"
                  ></textarea>
                  <p className="textarea-tip">Use bullet points (•) for better formatting on your resume</p>
                </div>
                
                {field.id !== 1 && (
                  <button 
                    type="button" 
                    className="remove-btn"
                    onClick={() => setEducationFields(educationFields.filter(f => f.id !== field.id))}
                  >
                    Remove Education Entry
                  </button>
                )}
                <hr className="section-divider" />
              </div>
            ))}
            
            <button type="button" className="add-btn" onClick={addEducation}>
              + Add Another Education
            </button>
            
            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={() => setActiveSection("personal")}>
                Previous: Personal Info
              </button>
              <button type="button" className="next-btn" onClick={() => setActiveSection("experience")}>
                Next: Experience
              </button>
            </div>
          </div>
          
          {/* Experience Section */}
          <div className={`form-section ${activeSection === "experience" ? "active" : ""}`}>
            <h2 className="section-title">Work Experience</h2>
            
            {experienceFields.map((field) => (
              <div key={field.id} className="experience-entry">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`company-${field.id}`}>Company:</label>
                    <input 
                      type="text" 
                      id={`company-${field.id}`} 
                      name={`company-${field.id}`} 
                      placeholder="ABC Corporation"
                      required={field.id === 1}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`position-${field.id}`}>Position:</label>
                    <input 
                      type="text" 
                      id={`position-${field.id}`} 
                      name={`position-${field.id}`} 
                      placeholder="Senior Software Engineer"
                      required={field.id === 1}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`companyLocation-${field.id}`}>Location:</label>
                  <input 
                    type="text" 
                    id={`companyLocation-${field.id}`} 
                    name={`companyLocation-${field.id}`} 
                    placeholder="City, State"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`jobStartDate-${field.id}`}>Start Date:</label>
                    <input 
                      type="month" 
                      id={`jobStartDate-${field.id}`} 
                      name={`jobStartDate-${field.id}`}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`jobEndDate-${field.id}`}>End Date:</label>
                    <div className="date-input-group">
                      <input 
                        type="month" 
                        id={`jobEndDate-${field.id}`} 
                        name={`jobEndDate-${field.id}`}
                      />
                      <label className="checkbox-label">
                        <input 
                          type="checkbox" 
                          id={`currentJob-${field.id}`} 
                          name={`currentJob-${field.id}`}
                        />
                        Present
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`jobDescription-${field.id}`}>Job Description:</label>
                  <textarea 
                    id={`jobDescription-${field.id}`} 
                    name={`jobDescription-${field.id}`} 
                    rows="4" 
                    placeholder="• Led the development of a customer-facing application that increased user engagement by 35%
• Managed a team of 5 developers, implementing agile methodologies that improved delivery time by 20%
• Optimized database queries resulting in a 40% improvement in application performance
• Collaborated with product and design teams to define and implement new features"
                    required={field.id === 1}
                  ></textarea>
                  <p className="textarea-tip">Use action verbs and quantify your achievements when possible</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`jobTechnologies-${field.id}`}>Technologies Used:</label>
                  <input 
                    type="text" 
                    id={`jobTechnologies-${field.id}`} 
                    name={`jobTechnologies-${field.id}`} 
                    placeholder="React, Node.js, AWS, MongoDB"
                  />
                </div>
                
                {field.id !== 1 && (
                  <button 
                    type="button" 
                    className="remove-btn"
                    onClick={() => setExperienceFields(experienceFields.filter(f => f.id !== field.id))}
                  >
                    Remove Experience
                  </button>
                )}
                <hr className="section-divider" />
              </div>
            ))}
            
            <button type="button" className="add-btn" onClick={addExperience}>
              + Add Another Experience
            </button>
            
            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={() => setActiveSection("education")}>
                Previous: Education
              </button>
              <button type="button" className="next-btn" onClick={() => setActiveSection("projects")}>
                Next: Projects
              </button>
            </div>
          </div>
          
          {/* Projects Section */}
          <div className={`form-section ${activeSection === "projects" ? "active" : ""}`}>
            <h2 className="section-title">Projects</h2>
            
            {projectFields.map((field) => (
              <div key={field.id} className="project-entry">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`projectName-${field.id}`}>Project Name:</label>
                    <input 
                      type="text" 
                      id={`projectName-${field.id}`} 
                      name={`projectName-${field.id}`} 
                      placeholder="E-commerce Website"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`projectRole-${field.id}`}>Your Role:</label>
                    <input 
                      type="text" 
                      id={`projectRole-${field.id}`} 
                      name={`projectRole-${field.id}`} 
                      placeholder="Lead Developer"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`projectStartDate-${field.id}`}>Start Date:</label>
                    <input 
                      type="month" 
                      id={`projectStartDate-${field.id}`} 
                      name={`projectStartDate-${field.id}`}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`projectEndDate-${field.id}`}>End Date:</label>
                    <input 
                      type="month" 
                      id={`projectEndDate-${field.id}`} 
                      name={`projectEndDate-${field.id}`}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectUrl-${field.id}`}>Project URL:</label>
                  <input 
                    type="url" 
                    id={`projectUrl-${field.id}`} 
                    name={`projectUrl-${field.id}`} 
                    placeholder="https://github.com/username/project"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectDescription-${field.id}`}>Project Description:</label>
                  <textarea 
                    id={`projectDescription-${field.id}`} 
                    name={`projectDescription-${field.id}`} 
                    rows="3" 
                    placeholder="• Developed a full-stack e-commerce platform with responsive design
• Implemented secure payment processing with Stripe API
• Created user authentication system with role-based access control
• Optimized for performance achieving 90+ Lighthouse score"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectTech-${field.id}`}>Technologies Used:</label>
                  <input 
                    type="text" 
                    id={`projectTech-${field.id}`} 
                    name={`projectTech-${field.id}`} 
                    placeholder="React, Node.js, MongoDB, Express, Stripe API"
                  />
                </div>
                
                {field.id !== 1 && (
                  <button 
                    type="button" 
                    className="remove-btn"
                    onClick={() => setProjectFields(projectFields.filter(f => f.id !== field.id))}
                  >
                    Remove Project
                  </button>
                )}
                <hr className="section-divider" />
              </div>
            ))}
            
            <button type="button" className="add-btn" onClick={addProject}>
              + Add Another Project
            </button>
            
            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={() => setActiveSection("experience")}>
                Previous: Experience
              </button>
              <button type="button" className="next-btn" onClick={() => setActiveSection("skills")}>
                Next: Skills
              </button>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className={`form-section ${activeSection === "skills" ? "active" : ""}`}>
            <h2 className="section-title">Skills & Additional Information</h2>
            
            <div className="form-group">
              <label htmlFor="technicalSkills">Technical Skills:</label>
              <textarea
                id="technicalSkills"
                name="technicalSkills"
                rows="3"
                value={formData.technicalSkills}
                onChange={handleChange}
                placeholder="Programming Languages: JavaScript, Python, Java
Frameworks & Libraries: React, Node.js, Express
Tools & Platforms: Git, AWS, Docker"
              ></textarea>
              <p className="textarea-tip">Group similar skills for better organization</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="softSkills">Soft Skills:</label>
              <textarea
                id="softSkills"
                name="softSkills"
                rows="2"
                value={formData.softSkills}
                onChange={handleChange}
                placeholder="Team leadership, Project management, Communication, Problem-solving, Client relations"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="languages">Languages:</label>
              <textarea
                id="languages"
                name="languages"
                rows="2"
                value={formData.languages}
                onChange={handleChange}
                placeholder="English (Native), Spanish (Fluent), French (Intermediate)"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="certifications">Certifications:</label>
              <textarea
                id="certifications"
                name="certifications"
                rows="2"
                value={formData.certifications}
                onChange={handleChange}
                placeholder="• AWS Certified Solutions Architect (2023)
• Google Professional Cloud Developer (2022)
• Project Management Professional (PMP) (2021)"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information (Optional):</label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                rows="3"
                placeholder="Include any other relevant information such as volunteer work, publications, presentations, or special projects that don't fit elsewhere."
              ></textarea>
            </div>
            
            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={() => setActiveSection("projects")}>
                Previous: Projects
              </button>
              <button type="submit" className="generate-btn animate-button">
                Generate Resume
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Template2;