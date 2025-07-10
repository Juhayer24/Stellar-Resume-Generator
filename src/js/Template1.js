import React, { useState } from "react";
import "../css/general.css";
import "../css/template1.css";
import logo from "../components/images/logo.png";
import ViewResume from "./ViewResume.js";

function Template1() {
  const [activeSection, setActiveSection] = useState("personal");
  const [educationFields, setEducationFields] = useState([{ id: 1 }]);
  const [projectFields, setProjectFields] = useState([{ id: 1 }]);
  const [experienceFields, setExperienceFields] = useState([{ id: 1 }]);
  
  // State to control resume view
  const [showResume, setShowResume] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  
  // Add new education field
  const addEducation = () => {
    setEducationFields([...educationFields, { id: educationFields.length + 1 }]);
  };
  
  // Add new project field
  const addProject = () => {
    setProjectFields([...projectFields, { id: projectFields.length + 1 }]);
  };
  
  // Add new job experience field
  const addExperience = () => {
    setExperienceFields([...experienceFields, { id: experienceFields.length + 1 }]);
  };
  
  // Toggle menu visibility function
  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  };
  
  // Generate month options for dropdown
  const getMonthOptions = () => {
    const months = [
      "January", "February", "March", "April", "May", "June", 
      "July", "August", "September", "October", "November", "December"
    ];
    
    return months.map((month, index) => (
      <option key={month} value={index + 1}>{month}</option>
    ));
  };
  
  // Generate year options for dropdown
  const getYearOptions = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    
    for (let year = currentYear + 5; year >= currentYear - 30; year--) {
      years.push(year);
    }
    
    return years.map(year => (
      <option key={year} value={year}>{year}</option>
    ));
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Collect all form data
    const formData = {
      // Personal Information
      fullName: document.getElementById("fullName")?.value || "",
      email: document.getElementById("email")?.value || "",
      phone: document.getElementById("phone")?.value || "",
      location: document.getElementById("location")?.value || "",
      linkedin: document.getElementById("linkedin")?.value || "",
      github: document.getElementById("github")?.value || "",
      portfolio: document.getElementById("portfolio")?.value || "",
      summary: document.getElementById("summary")?.value || "",
      
      // Education
      education: educationFields.map(field => ({
        university: document.getElementById(`university-${field.id}`)?.value || "",
        degree: document.getElementById(`degree-${field.id}`)?.value || "",
        major: document.getElementById(`major-${field.id}`)?.value || "",
        location: document.getElementById(`eduLocation-${field.id}`)?.value || "",
        startDate: document.getElementById(`eduStartMonth-${field.id}`)?.value && document.getElementById(`eduStartYear-${field.id}`)?.value ? 
                  `${document.getElementById(`eduStartYear-${field.id}`).value}-${document.getElementById(`eduStartMonth-${field.id}`).value.padStart(2, '0')}` : "",
        endDate: document.getElementById(`eduEndMonth-${field.id}`)?.value && document.getElementById(`eduEndYear-${field.id}`)?.value ? 
                `${document.getElementById(`eduEndYear-${field.id}`).value}-${document.getElementById(`eduEndMonth-${field.id}`).value.padStart(2, '0')}` : "",
        gpa: document.getElementById(`gpa-${field.id}`)?.value || "",
        courses: document.getElementById(`courses-${field.id}`)?.value || "",
        clubs: document.getElementById(`clubs-${field.id}`)?.value || "",
        achievements: document.getElementById(`achievements-${field.id}`)?.value || ""
      })),
      
      // Projects
      projects: projectFields.map(field => ({
        name: document.getElementById(`projectName-${field.id}`)?.value || "",
        url: document.getElementById(`projectUrl-${field.id}`)?.value || "",
        startDate: document.getElementById(`projectStartMonth-${field.id}`)?.value && document.getElementById(`projectStartYear-${field.id}`)?.value ? 
                  `${document.getElementById(`projectStartYear-${field.id}`).value}-${document.getElementById(`projectStartMonth-${field.id}`).value.padStart(2, '0')}` : "",
        endDate: document.getElementById(`projectEndMonth-${field.id}`)?.value && document.getElementById(`projectEndYear-${field.id}`)?.value ? 
                `${document.getElementById(`projectEndYear-${field.id}`).value}-${document.getElementById(`projectEndMonth-${field.id}`).value.padStart(2, '0')}` : "",
        technologies: document.getElementById(`projectTechnologies-${field.id}`)?.value || "",
        description: document.getElementById(`projectDescription-${field.id}`)?.value || "",
        role: document.getElementById(`projectRole-${field.id}`)?.value || ""
      })),
      
      // Experience
      experience: experienceFields.map(field => ({
        company: document.getElementById(`jobCompany-${field.id}`)?.value || "",
        position: document.getElementById(`jobPosition-${field.id}`)?.value || "",
        location: document.getElementById(`jobLocation-${field.id}`)?.value || "",
        startDate: document.getElementById(`jobStartMonth-${field.id}`)?.value && document.getElementById(`jobStartYear-${field.id}`)?.value ? 
                 `${document.getElementById(`jobStartYear-${field.id}`).value}-${document.getElementById(`jobStartMonth-${field.id}`).value.padStart(2, '0')}` : "",
        endDate: document.getElementById(`jobEndMonth-${field.id}`)?.value && document.getElementById(`jobEndYear-${field.id}`)?.value ? 
               `${document.getElementById(`jobEndYear-${field.id}`).value}-${document.getElementById(`jobEndMonth-${field.id}`).value.padStart(2, '0')}` : "",
        current: document.getElementById(`currentJob-${field.id}`)?.checked || false,
        description: document.getElementById(`responsibilities-${field.id}`)?.value || "",
        technologies: document.getElementById(`technologies-${field.id}`)?.value || ""
      })),
      
      // Skills
      technicalSkills: document.getElementById("technicalSkills")?.value || "",
      softSkills: document.getElementById("softSkills")?.value || "",
      languages: document.getElementById("languages")?.value || "",
      certifications: document.getElementById("certifications")?.value || "",
      interests: document.getElementById("interests")?.value || "",
      additionalInfo: document.getElementById("additionalInfo")?.value || ""
    };
    
    // Save form data and show resume
    setSubmittedData(formData);
    setShowResume(true);
    
    // Optional: Also save to localStorage for persistence
    localStorage.setItem("resumeData", JSON.stringify(formData));
  };
  
  // If resume is to be shown, render ViewResume with submitted data
  if (showResume && submittedData) {
    return <ViewResume {...submittedData} />;
  }
  
  return (
    <div className="template1">
      <header>
        <div className="container">
          <h1>Professional Resume Builder</h1>
          <a href="/">
            <img src={logo} alt="Website Logo" className="logo" />
          </a>

          <div className="hamburger-menu" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <nav id="navMenu" className="nav-menu">
            <button onClick={() => (window.location.href = "/")}>Home</button>
            <button onClick={() => (window.location.href = "/Template")}>Select Template</button>
          </nav>
        </div>
      </header>

      <div className="resume-form-container">
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
            className={`progress-step ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => setActiveSection("projects")}
          >
            Projects
          </div>
          <div 
            className={`progress-step ${activeSection === "experience" ? "active" : ""}`}
            onClick={() => setActiveSection("experience")}
          >
            Experience
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
              <input type="text" id="fullName" name="fullName" placeholder="John Doe" required />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="johndoe@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" name="phone" placeholder="(123) 456-7890" required />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="location">Location:</label>
              <input type="text" id="location" name="location" placeholder="City, State" />
            </div>
            
            <div className="form-group">
              <label htmlFor="portfolio">Portfolio URL:</label>
              <input type="url" id="portfolio" name="portfolio" placeholder="https://myportfolio.com" />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn:</label>
                <input type="url" id="linkedin" name="linkedin" placeholder="https://linkedin.com/in/johndoe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="github">GitHub:</label>
                <input type="url" id="github" name="github" placeholder="https://github.com/johndoe" />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="summary">Professional Summary:</label>
              <textarea 
                id="summary" 
                name="summary" 
                rows="4" 
                placeholder="Brief overview of your professional background and career goals"
              ></textarea>
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
                    <label htmlFor={`university-${field.id}`}>University/Institution:</label>
                    <input 
                      type="text" 
                      id={`university-${field.id}`} 
                      name={`university-${field.id}`} 
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
                    <label htmlFor={`major-${field.id}`}>Major:</label>
                    <input 
                      type="text" 
                      id={`major-${field.id}`} 
                      name={`major-${field.id}`} 
                      placeholder="Computer Science"
                      required={field.id === 1}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`eduLocation-${field.id}`}>Location:</label>
                    <input 
                      type="text" 
                      id={`eduLocation-${field.id}`} 
                      name={`eduLocation-${field.id}`} 
                      placeholder="City, State"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`eduStartMonth-${field.id}`}>Start Date:</label>
                    <div className="date-select">
                      <select id={`eduStartMonth-${field.id}`} name={`eduStartMonth-${field.id}`}>
                        <option value="">Month</option>
                        {getMonthOptions()}
                      </select>
                      <select id={`eduStartYear-${field.id}`} name={`eduStartYear-${field.id}`}>
                        <option value="">Year</option>
                        {getYearOptions()}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`eduEndMonth-${field.id}`}>End Date (or Expected):</label>
                    <div className="date-select">
                      <select id={`eduEndMonth-${field.id}`} name={`eduEndMonth-${field.id}`}>
                        <option value="">Month</option>
                        {getMonthOptions()}
                      </select>
                      <select id={`eduEndYear-${field.id}`} name={`eduEndYear-${field.id}`}>
                        <option value="">Year</option>
                        {getYearOptions()}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`gpa-${field.id}`}>GPA:</label>
                  <input 
                    type="text" 
                    id={`gpa-${field.id}`} 
                    name={`gpa-${field.id}`} 
                    placeholder="3.8/4.0"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor={`courses-${field.id}`}>Relevant Courses:</label>
                  <textarea 
                    id={`courses-${field.id}`} 
                    name={`courses-${field.id}`} 
                    rows="2" 
                    placeholder="Data Structures, Algorithms, Web Development"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`clubs-${field.id}`}>Clubs and Activities:</label>
                  <textarea 
                    id={`clubs-${field.id}`} 
                    name={`clubs-${field.id}`} 
                    rows="2" 
                    placeholder="Computer Science Club, Coding Competitions"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`achievements-${field.id}`}>Academic Achievements:</label>
                  <textarea 
                    id={`achievements-${field.id}`} 
                    name={`achievements-${field.id}`} 
                    rows="2" 
                    placeholder="Dean's List, Academic Scholarship, Honors Program"
                  ></textarea>
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
                    <label htmlFor={`projectUrl-${field.id}`}>Project URL:</label>
                    <input 
                      type="url" 
                      id={`projectUrl-${field.id}`} 
                      name={`projectUrl-${field.id}`} 
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`projectStartMonth-${field.id}`}>Start Date:</label>
                    <div className="date-select">
                      <select id={`projectStartMonth-${field.id}`} name={`projectStartMonth-${field.id}`}>
                        <option value="">Month</option>
                        {getMonthOptions()}
                      </select>
                      <select id={`projectStartYear-${field.id}`} name={`projectStartYear-${field.id}`}>
                        <option value="">Year</option>
                        {getYearOptions()}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`projectEndMonth-${field.id}`}>End Date:</label>
                    <div className="date-select">
                      <select id={`projectEndMonth-${field.id}`} name={`projectEndMonth-${field.id}`}>
                        <option value="">Month</option>
                        {getMonthOptions()}
                      </select>
                      <select id={`projectEndYear-${field.id}`} name={`projectEndYear-${field.id}`}>
                        <option value="">Year</option>
                        {getYearOptions()}
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectTechnologies-${field.id}`}>Technologies Used:</label>
                  <input 
                    type="text" 
                    id={`projectTechnologies-${field.id}`} 
                    name={`projectTechnologies-${field.id}`} 
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectDescription-${field.id}`}>Project Description:</label>
                  <textarea 
                    id={`projectDescription-${field.id}`} 
                    name={`projectDescription-${field.id}`} 
                    rows="3" 
                    placeholder="Describe your project, challenges overcome, and results achieved"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectRole-${field.id}`}>Your Role:</label>
                  <input 
                    type="text" 
                    id={`projectRole-${field.id}`} 
                    name={`projectRole-${field.id}`} 
                    placeholder="Lead Developer, UX Designer"
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
              <button type="button" className="prev-btn" onClick={() => setActiveSection("education")}>
                Previous: Education
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
                    <label htmlFor={`jobCompany-${field.id}`}>Company:</label>
                    <input 
                      type="text" 
                      id={`jobCompany-${field.id}`} 
                      name={`jobCompany-${field.id}`} 
                      placeholder="Example Corp"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`jobPosition-${field.id}`}>Position:</label>
                    <input 
                      type="text" 
                      id={`jobPosition-${field.id}`} 
                      name={`jobPosition-${field.id}`} 
                      placeholder="Software Engineer"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`jobLocation-${field.id}`}>Location:</label>
                  <input 
                    type="text" 
                    id={`jobLocation-${field.id}`} 
                    name={`jobLocation-${field.id}`} 
                    placeholder="City, State"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`jobStartMonth-${field.id}`}>Start Date:</label>
                    <div className="date-select">
                      <select id={`jobStartMonth-${field.id}`} name={`jobStartMonth-${field.id}`}>
                        <option value="">Month</option>
                        {getMonthOptions()}
                      </select>
                      <select id={`jobStartYear-${field.id}`} name={`jobStartYear-${field.id}`}>
                        <option value="">Year</option>
                        {getYearOptions()}
                      </select>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`jobEndMonth-${field.id}`}>End Date:</label>
                    <div className="date-input-group">
                      <div className="date-select">
                        <select id={`jobEndMonth-${field.id}`} name={`jobEndMonth-${field.id}`}>
                          <option value="">Month</option>
                          {getMonthOptions()}
                        </select>
                        <select id={`jobEndYear-${field.id}`} name={`jobEndYear-${field.id}`}>
                          <option value="">Year</option>
                          {getYearOptions()}
                        </select>
                      </div>
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
                  <label htmlFor={`responsibilities-${field.id}`}>Responsibilities & Achievements:</label>
                  <textarea 
                    id={`responsibilities-${field.id}`} 
                    name={`responsibilities-${field.id}`} 
                    rows="4" 
                    placeholder="• Developed a new feature that increased user engagement by 20%
• Led a team of 3 developers to complete project ahead of schedule
• Optimized database queries resulting in 30% performance improvement"
                  ></textarea>
                  <p className="textarea-tip">Use bullet points (•) for better formatting on your resume</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`technologies-${field.id}`}>Technologies Used:</label>
                  <input 
                    type="text" 
                    id={`technologies-${field.id}`} 
                    name={`technologies-${field.id}`} 
                    placeholder="JavaScript, Python, AWS"
                  />
                </div>
                
                {field.id !== 1 && (
                  <button 
                    type="button" 
                    className="remove-btn"
                    onClick={() => setExperienceFields(experienceFields.filter(f => f.id !== field.id))}
                  >
                    Remove Job Experience
                  </button>
                )}
                <hr className="section-divider" />
              </div>
            ))}
            
            <button type="button" className="add-btn" onClick={addExperience}>
              + Add Another Job Experience
            </button>
            
            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={() => setActiveSection("projects")}>
                Previous: Projects
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
                placeholder="Programming Languages: JavaScript, Python, Java
Frameworks & Libraries: React, Node.js, Express
Tools & Platforms: Git, AWS, Docker"
              ></textarea>
              <p className="textarea-tip">Group similar skills together for better organization</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="softSkills">Soft Skills:</label>
              <textarea 
                id="softSkills" 
                name="softSkills" 
                rows="2" 
                placeholder="Communication, Leadership, Problem-solving, Team collaboration"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="languages">Languages:</label>
              <textarea 
                id="languages" 
                name="languages" 
                rows="2" 
                placeholder="English (Native), Spanish (Fluent), French (Basic)"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="certifications">Certifications:</label>
              <textarea 
                id="certifications" 
                name="certifications" 
                rows="2" 
                placeholder="AWS Certified Developer (2023)
Google Professional Cloud Architect (2022)"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="interests">Interests (Optional):</label>
              <textarea 
                id="interests" 
                name="interests" 
                rows="2" 
                placeholder="Open-source contribution, Tech blogging, Machine learning research"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="additionalInfo">Additional Information:</label>
              <textarea 
                id="additionalInfo" 
                name="additionalInfo" 
                rows="3" 
                placeholder="Any other relevant information you'd like to include on your resume"
              ></textarea>
            </div>
            
            <div className="form-navigation">
              <button type="button" className="prev-btn" onClick={() => setActiveSection("experience")}>
                Previous: Experience
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
}

export default Template1;