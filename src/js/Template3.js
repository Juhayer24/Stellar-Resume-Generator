import React, { useState } from "react";
import "../css/general.css";
import "../css/template3.css";
import logo from "../components/images/logo.png";
import {viewResume} from "./ViewResume.js";

const Template3 = () => {
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
    github: "",
    portfolio: "",
    summary: "",
    
    // Other sections will be handled by their respective dynamic fields
    technicalSkills: "",
    softSkills: "",
    languages: "",
    interests: "",
    achievements: "",
  });

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
    console.log("Form Data Submitted: ", formData);
    // Add your resume generation logic here
    alert("Resume generated successfully!");
  };

  // Toggle menu visibility
  const toggleMenu = () => {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("show");
  };

  return (
    <div className="template3">
      <header>
        <div className="container">
          <h1>Advanced Resume Builder</h1>

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
            Personal
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
                <label htmlFor="github">GitHub:</label>
                <input
                  type="url"
                  id="github"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  placeholder="https://github.com/johndoe"
                />
              </div>
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
            
            <div className="form-group">
              <label htmlFor="summary">Professional Summary:</label>
              <textarea
                id="summary"
                name="summary"
                rows="4"
                value={formData.summary}
                onChange={handleChange}
                placeholder="Results-oriented software engineer with 5+ years of experience developing scalable web applications. Proficient in full-stack development with React, Node.js, and AWS. Passionate about creating elegant solutions to complex problems and delivering exceptional user experiences."
                required
              ></textarea>
              <p className="textarea-tip">A strong summary highlights your key qualifications, experience, and what makes you unique.</p>
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
                    <label htmlFor={`degree-${field.id}`}>Degree:</label>
                    <input 
                      type="text" 
                      id={`degree-${field.id}`} 
                      name={`degree-${field.id}`} 
                      placeholder="Bachelor of Science"
                      required={field.id === 1}
                    />
                  </div>
                  
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
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`eduStartDate-${field.id}`}>Start Date:</label>
                    <input 
                      type="month" 
                      id={`eduStartDate-${field.id}`} 
                      name={`eduStartDate-${field.id}`}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`eduEndDate-${field.id}`}>End Date (or Expected):</label>
                    <input 
                      type="month" 
                      id={`eduEndDate-${field.id}`} 
                      name={`eduEndDate-${field.id}`}
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`gpa-${field.id}`}>GPA:</label>
                    <input 
                      type="text" 
                      id={`gpa-${field.id}`} 
                      name={`gpa-${field.id}`} 
                      placeholder="3.8/4.0"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`coursework-${field.id}`}>Relevant Coursework:</label>
                  <textarea 
                    id={`coursework-${field.id}`} 
                    name={`coursework-${field.id}`} 
                    rows="2" 
                    placeholder="Data Structures, Algorithms, Machine Learning, Database Systems, Web Development"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`eduAchievements-${field.id}`}>Academic Achievements:</label>
                  <textarea 
                    id={`eduAchievements-${field.id}`} 
                    name={`eduAchievements-${field.id}`} 
                    rows="2" 
                    placeholder="• Dean's List (All Semesters)
• Academic Excellence Scholarship
• 1st Place in University Hackathon
• President of Computer Science Club"
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
                    <label htmlFor={`company-${field.id}`}>Company/Organization:</label>
                    <input 
                      type="text" 
                      id={`company-${field.id}`} 
                      name={`company-${field.id}`} 
                      placeholder="ABC Technology Inc."
                      required={field.id === 1}
                    />
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
                </div>
                
                <div className="form-group">
                  <label htmlFor={`position-${field.id}`}>Position/Title:</label>
                  <input 
                    type="text" 
                    id={`position-${field.id}`} 
                    name={`position-${field.id}`} 
                    placeholder="Senior Software Engineer"
                    required={field.id === 1}
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`expStartDate-${field.id}`}>Start Date:</label>
                    <input 
                      type="month" 
                      id={`expStartDate-${field.id}`} 
                      name={`expStartDate-${field.id}`}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`expEndDate-${field.id}`}>End Date:</label>
                    <div className="date-input-group">
                      <input 
                        type="month" 
                        id={`expEndDate-${field.id}`} 
                        name={`expEndDate-${field.id}`}
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
                  <label htmlFor={`responsibilities-${field.id}`}>Key Responsibilities & Achievements:</label>
                  <textarea 
                    id={`responsibilities-${field.id}`} 
                    name={`responsibilities-${field.id}`} 
                    rows="5" 
                    placeholder="• Led the development of a customer-facing application that increased user engagement by 40%
• Architected and implemented a new microservices infrastructure that improved system reliability by 30%
• Managed a team of 5 developers, mentoring junior team members and implementing agile methodologies
• Optimized database queries and application performance, reducing load times by 60%
• Collaborated with product managers and UX designers to define and implement new features"
                    required={field.id === 1}
                  ></textarea>
                  <p className="textarea-tip">Begin each bullet with a strong action verb and quantify results when possible</p>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`techStack-${field.id}`}>Technologies & Tools Used:</label>
                  <input 
                    type="text" 
                    id={`techStack-${field.id}`} 
                    name={`techStack-${field.id}`} 
                    placeholder="React, Node.js, Express, MongoDB, AWS, Docker, Kubernetes, CI/CD"
                  />
                </div>
                
                {field.id !== 1 && (
                  <button 
                    type="button" 
                    className="remove-btn"
                    onClick={() => setExperienceFields(experienceFields.filter(f => f.id !== field.id))}
                  >
                    Remove Experience Entry
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
                      placeholder="E-commerce Platform"
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
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor={`projectURL-${field.id}`}>Project URL:</label>
                    <input 
                      type="url" 
                      id={`projectURL-${field.id}`} 
                      name={`projectURL-${field.id}`} 
                      placeholder="https://github.com/username/project"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor={`demoURL-${field.id}`}>Live Demo URL:</label>
                    <input 
                      type="url" 
                      id={`demoURL-${field.id}`} 
                      name={`demoURL-${field.id}`} 
                      placeholder="https://project-demo.com"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectDescription-${field.id}`}>Project Description:</label>
                  <textarea 
                    id={`projectDescription-${field.id}`} 
                    name={`projectDescription-${field.id}`} 
                    rows="4" 
                    placeholder="• Developed a full-stack e-commerce platform with React, Node.js, and MongoDB
• Implemented secure payment processing with Stripe API and user authentication with JWT
• Created a responsive design that works seamlessly across desktop and mobile devices
• Utilized Redux for state management and improved load times through code splitting"
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor={`projectTech-${field.id}`}>Technologies Used:</label>
                  <input 
                    type="text" 
                    id={`projectTech-${field.id}`} 
                    name={`projectTech-${field.id}`} 
                    placeholder="React, Redux, Node.js, Express, MongoDB, AWS S3, Stripe API"
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
                placeholder="Programming Languages: JavaScript (ES6+), TypeScript, Python, Java, HTML5, CSS3
Frameworks & Libraries: React, Angular, Vue.js, Node.js, Express, Django, Flask
Tools & Technologies: Git, Docker, Kubernetes, AWS, Azure, CI/CD, GraphQL, REST APIs"
              ></textarea>
              <p className="textarea-tip">Organize skills by category and list the most relevant ones first</p>
            </div>
            
            <div className="form-group">
              <label htmlFor="softSkills">Soft Skills:</label>
              <textarea
                id="softSkills"
                name="softSkills"
                rows="2"
                value={formData.softSkills}
                onChange={handleChange}
                placeholder="Leadership, Team Management, Problem-solving, Communication, Agile Methodologies, Project Management, Client Relations, Time Management"
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
                placeholder="English (Native), Spanish (Fluent), Mandarin Chinese (Intermediate), French (Basic)"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="certifications">Certifications:</label>
              <textarea
                id="certifications"
                name="certifications"
                rows="3"
                placeholder="• AWS Certified Solutions Architect - Associate (2023)
• Google Professional Cloud Architect (2022)
• Microsoft Certified: Azure Developer Associate (2021)
• Certified Scrum Master (CSM) (2020)"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="achievements">Professional Achievements:</label>
              <textarea
                id="achievements"
                name="achievements"
                rows="3"
                value={formData.achievements}
                onChange={handleChange}
                placeholder="• Published article on microservices architecture in Medium's Better Programming
• Speaker at DevOps Conference 2023 on 'Containerization Best Practices'
• Patent holder for innovative algorithm improving database query efficiency
• Recipient of Company Innovation Award for developing cost-saving automation tools"
              ></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="interests">Interests (Optional):</label>
              <textarea
                id="interests"
                name="interests"
                rows="2"
                value={formData.interests}
                onChange={handleChange}
                placeholder="Open-source contribution, Technical writing, AI/ML research, Competitive programming, Hackathons, Teaching coding to underserved communities"
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

export default Template3;