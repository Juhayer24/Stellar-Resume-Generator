import React from "react";
import "./general.css";
import "./viewresume.css";
import logo from "./images/logo.png";

const ViewResume = (resumeData) => {
  // Use the passed resumeData props, or try to get from localStorage as fallback
  const data = resumeData && Object.keys(resumeData).length > 0 ? 
    resumeData : 
    JSON.parse(localStorage.getItem("resumeData") || "{}");

  // Function to format dates for better display
  const formatDate = (dateString) => {
    if (!dateString) return "";
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    } catch (e) {
      return dateString;
    }
  };
  
  // Function to create bullet points from textarea content
  const createBulletPoints = (text) => {
    if (!text) return [];
    
    // Split by line breaks or bullet points
    const lines = text.split(/\n|•/).filter(line => line.trim() !== "");
    
    if (lines.length === 0) return [];
    
    return lines.map((line, index) => (
      <li key={index}>
        {line.trim().startsWith('•') ? line.trim().substring(1).trim() : line.trim()}
      </li>
    ));
  };

  // Function to generate a printable version of the resume
  const generatePrintableResume = () => {
    if (!data || Object.keys(data).length === 0) return;

    // Generate HTML for the resume
    const resumeHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.fullName || 'Resume'} - Resume</title>
        <style>
          @page {
            size: 8.5in 11in;
            margin: 0.5in;
          }
          
          body {
            font-family: 'Calibri', 'Arial', sans-serif;
            line-height: 1.3;
            color: #333;
            margin: 0;
            padding: 0;
            font-size: 12pt;
          }
          
          h1, h2, h3, h4 {
            font-weight: bold;
            margin: 0;
            color: #000;
          }
          
          h1 {
            font-size: 18pt;
            text-align: center;
            margin-bottom: 5pt;
          }
          
          .section-header {
            font-size: 12pt;
            border-bottom: 1pt solid #000;
            text-transform: uppercase;
            margin-top: 10pt;
            margin-bottom: 8pt;
            padding-bottom: 2pt;
          }
          
          .contact-info {
            text-align: center;
            margin-bottom: 10pt;
            font-size: 10pt;
          }
          
          .contact-info a {
            color: #000;
            text-decoration: none;
          }
          
          .entry {
            margin-bottom: 10pt;
          }
          
          .entry-header {
            display: flex;
            justify-content: space-between;
            font-weight: bold;
            font-size: 10pt;
          }
          
          .entry-subheader {
            display: flex;
            justify-content: space-between;
            font-style: italic;
            font-size: 10pt;
          }
          
          .entry-content {
            margin-top: 3pt;
            font-size: 10pt;
          }
          
          ul {
            margin: 5pt 0;
            padding-left: 15pt;
          }
          
          li {
            margin-bottom: 2pt;
            font-size: 10pt;
          }
          
          .language-proficiency {
            display: flex;
            align-items: center;
            margin-bottom: 3pt;
            font-size: 10pt;
          }
          
          .language-name {
            width: 80pt;
          }
          
          .proficiency-dots {
            display: flex;
            gap: 2pt;
          }
          
          .dot {
            width: 8pt;
            height: 8pt;
            border-radius: 50%;
            background-color: #000;
            display: inline-block;
          }
          
          .dot.empty {
            background-color: transparent;
            border: 1pt solid #000;
          }
          
          /* Table layout for better space management */
          table {
            width: 100%;
            border-collapse: collapse;
          }
          
          td {
            vertical-align: top;
            padding: 0;
          }
          
          .no-break {
            page-break-inside: avoid;
          }
        </style>
      </head>
      <body>
        <!-- Header -->
        <h1>${data.fullName || 'Resume'}</h1>
        
        <!-- Contact Information -->
        <div class="contact-info">
          ${data.email ? `<span>📧 <a href="mailto:${data.email}">${data.email}</a></span>` : ''}
          ${data.phone ? `${data.email ? ' | ' : ''}<span>📞 ${data.phone}</span>` : ''}
          ${data.github ? `${data.email || data.phone ? ' | ' : ''}<span>🔗 <a href="${data.github}" target="_blank">${data.github.replace('https://', '')}</a></span>` : ''}
          ${data.linkedin ? `${data.email || data.phone || data.github ? ' | ' : ''}<span>🔗 <a href="${data.linkedin}" target="_blank">${data.linkedin.replace('https://www.linkedin.com/in/', '').replace('https://', '')}</a></span>` : ''}
          ${data.location ? `<br>${data.location}` : ''}
        </div>
        
        <!-- Summary Section (if provided) -->
        ${data.summary ? `
        <div class="no-break">
          <h2 class="section-header">Professional Summary</h2>
          <div class="entry-content">${data.summary}</div>
        </div>
        ` : ''}
        
        <!-- Education Section -->
        ${data.education && (Array.isArray(data.education) || typeof data.education === 'string') ? `
        <div class="no-break">
          <h2 class="section-header">Education</h2>
          ${Array.isArray(data.education) ? 
            data.education.filter(edu => edu.university || edu.school).map(edu => `
              <div class="entry no-break">
                <div class="entry-header">
                  <div>${edu.university || edu.school || ''}${edu.location || edu.schoolLocation ? ` | ${edu.location || edu.schoolLocation}` : ''}</div>
                  <div>${edu.startDate ? formatDate(edu.startDate) : ''}${edu.startDate ? ' - ' : ''}${edu.endDate ? formatDate(edu.endDate) : 'Present'}</div>
                </div>
                <div class="entry-subheader">
                  <div>${edu.degree || ''}${edu.major || edu.fieldOfStudy ? ` in ${edu.major || edu.fieldOfStudy}` : ''}${edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</div>
                </div>
                ${edu.courses || edu.relevantCourses ? `
                <div class="entry-content">
                  <strong>Relevant Courses:</strong> ${edu.courses || edu.relevantCourses}
                </div>
                ` : ''}
                ${edu.clubs ? `
                <div class="entry-content">
                  <strong>Clubs and Associations:</strong> ${edu.clubs}
                </div>
                ` : ''}
                ${edu.achievements || edu.academicDetails ? `
                <div class="entry-content">
                  <strong>Achievements and Honors:</strong> ${edu.achievements || edu.academicDetails}
                </div>
                ` : ''}
              </div>
            `).join('') : 
            `<div class="entry-content">${data.education}</div>`
          }
        </div>
        ` : ''}
        
        <!-- Projects Section -->
        ${data.projects && Array.isArray(data.projects) && data.projects.length > 0 ? `
        <div class="no-break">
          <h2 class="section-header">Projects</h2>
          ${data.projects.filter(project => project.name || project.projectName).map(project => `
            <div class="entry no-break">
              <div class="entry-header">
                <div>${project.name || project.projectName || ''}${project.role || project.projectRole ? ` | ${project.role || project.projectRole}` : ''}</div>
                <div>${project.startDate || project.projectStartDate ? formatDate(project.startDate || project.projectStartDate) : ''}${(project.startDate || project.projectStartDate) ? ' - ' : ''}${project.endDate || project.projectEndDate ? formatDate(project.endDate || project.projectEndDate) : 'Present'}</div>
              </div>
              ${project.description || project.projectDescription ? `
              <div class="entry-content">
                <ul>
                  ${(project.description || project.projectDescription).split(/\n|•/).filter(line => line.trim() !== "").map(line => `
                    <li>${line.trim().startsWith('•') ? line.trim().substring(1).trim() : line.trim()}</li>
                  `).join('')}
                </ul>
              </div>
              ` : ''}
              ${project.technologies || project.projectTech ? `
              <div class="entry-content">
                <strong>Technologies:</strong> ${project.technologies || project.projectTech}
              </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
        ` : ''}
        
        <!-- Experience Section -->
        ${data.experience && (Array.isArray(data.experience) || typeof data.experience === 'string') ? `
        <div class="no-break">
          <h2 class="section-header">Experience</h2>
          ${Array.isArray(data.experience) ? 
            data.experience.filter(exp => (exp.position || exp.jobPosition) && exp.company).map(exp => `
              <div class="entry no-break">
                <div class="entry-header">
                  <div>${exp.position || exp.jobPosition || ''} | ${exp.company || ''}</div>
                  <div>${formatDate(exp.startDate || exp.jobStartDate || '')} - ${exp.current ? 'Present' : formatDate(exp.endDate || exp.jobEndDate || '')}</div>
                </div>
                ${exp.location || exp.jobLocation ? `
                <div class="entry-subheader">
                  <div>${exp.location || exp.jobLocation}</div>
                </div>
                ` : ''}
                ${exp.description || exp.responsibilities || exp.jobDescription ? `
                <div class="entry-content">
                  <ul>
                    ${(exp.description || exp.responsibilities || exp.jobDescription).split(/\n|•/).filter(line => line.trim() !== "").map(line => `
                      <li>${line.trim().startsWith('•') ? line.trim().substring(1).trim() : line.trim()}</li>
                    `).join('')}
                  </ul>
                </div>
                ` : ''}
                ${exp.technologies || exp.jobTechnologies ? `
                <div class="entry-content">
                  <strong>Technologies:</strong> ${exp.technologies || exp.jobTechnologies}
                </div>
                ` : ''}
              </div>
            `).join('') : 
            `<div class="entry-content">${data.experience}</div>`
          }
        </div>
        ` : ''}
        
        <!-- Skills Section -->
        ${data.technicalSkills || data.softSkills || data.skills ? `
        <div class="no-break">
          <h2 class="section-header">Skills</h2>
          ${data.technicalSkills ? `
          <div class="entry-content">
            <strong>Technical Skills:</strong> ${data.technicalSkills}
          </div>
          ` : ''}
          ${data.softSkills ? `
          <div class="entry-content">
            <strong>Soft Skills:</strong> ${data.softSkills}
          </div>
          ` : ''}
          ${!data.technicalSkills && !data.softSkills && data.skills ? `
          <div class="entry-content">${data.skills}</div>
          ` : ''}
        </div>
        ` : ''}
        
        <!-- Languages Section (if provided) -->
        ${data.languages ? `
        <div class="no-break">
          <h2 class="section-header">Languages</h2>
          <div class="entry">
            <table>
              <tr>
                <td style="width: 50%;">
                  <div class="language-proficiency">
                    <div class="language-name">English</div>
                    <div class="proficiency-dots">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                  </div>
                </td>
                <td style="width: 50%;">
                  <div class="language-proficiency">
                    <div class="language-name">Bengali</div>
                    <div class="proficiency-dots">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div class="language-proficiency">
                    <div class="language-name">Hindi</div>
                    <div class="proficiency-dots">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot empty"></span>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="language-proficiency">
                    <div class="language-name">Arabic</div>
                    <div class="proficiency-dots">
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot"></span>
                      <span class="dot empty"></span>
                      <span class="dot empty"></span>
                    </div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
        ` : ''}
        
        <!-- Additional Information (if any) -->
        ${data.certifications || data.interests || data.additionalInfo ? `
        <div class="no-break">
          <h2 class="section-header">Additional Information</h2>
          ${data.certifications ? `
          <div class="entry-content">
            <strong>Certifications:</strong> ${data.certifications}
          </div>
          ` : ''}
          ${data.interests ? `
          <div class="entry-content">
            <strong>Interests:</strong> ${data.interests}
          </div>
          ` : ''}
          ${data.additionalInfo ? `
          <div class="entry-content">
            ${data.additionalInfo}
          </div>
          ` : ''}
        </div>
        ` : ''}
      </body>
      </html>
    `;
    
    // Create a new window to display the resume
    const newWindow = window.open('', '_blank');
    newWindow.document.write(resumeHTML);
    newWindow.document.close();
    
    // Add print functionality
    const printButton = document.createElement('button');
    printButton.textContent = 'Print Resume';
    printButton.style.position = 'fixed';
    printButton.style.top = '10px';
    printButton.style.right = '10px';
    printButton.style.padding = '10px';
    printButton.style.backgroundColor = '#007bff';
    printButton.style.color = 'white';
    printButton.style.border = 'none';
    printButton.style.borderRadius = '5px';
    printButton.style.cursor = 'pointer';
    printButton.style.zIndex = '9999';
    
    printButton.addEventListener('click', () => {
      printButton.style.display = 'none';
      newWindow.print();
      setTimeout(() => {
        printButton.style.display = 'block';
      }, 1000);
    });
    
    newWindow.document.body.appendChild(printButton);
    
    // Automatically open print dialog after a short delay
    setTimeout(() => {
      newWindow.print();
    }, 500);
  };

  // Check if data exists
  const hasData = data && Object.keys(data).length > 0;

  return (
    <div className="view-resume">
      <header>
        <div className="container">
          <h1>Your Resume</h1>
          <a href="/">
            <img src={logo} alt="Website Logo" className="logo" />
          </a>
        </div>
      </header>
      
      <div className="resume-container" id="resumeContainer">
        {hasData ? (
          <>
            <div className="resume-header">
              <h2>{data.fullName}</h2>
              <div className="contact-info">
                <p>
                  {data.email} | {data.phone}
                  {data.location && ` | ${data.location}`}
                </p>
                <p>
                  {data.linkedin && (
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  )}
                  {data.github && data.linkedin && " | "}
                  {data.github && (
                    <a href={data.github} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  )}
                </p>
              </div>
            </div>

            {data.summary && (
              <div className="resume-section">
                <h3>Professional Summary</h3>
                <p>{data.summary}</p>
              </div>
            )}

            {data.education && (
              <div className="resume-section">
                <h3>Education</h3>
                {Array.isArray(data.education) ? (
                  data.education.filter(edu => edu.university || edu.school).map((edu, index) => (
                    <div key={index} className="resume-item">
                      <div className="item-header">
                        <h4>{edu.university || edu.school}</h4>
                        <span>{formatDate(edu.startDate)} - {edu.endDate ? formatDate(edu.endDate) : 'Present'}</span>
                      </div>
                      <p><strong>{edu.degree}{edu.major || edu.fieldOfStudy ? ` in ${edu.major || edu.fieldOfStudy}` : ''}</strong>{edu.gpa ? ` | GPA: ${edu.gpa}` : ''}</p>
                      {(edu.location || edu.schoolLocation) && <p>{edu.location || edu.schoolLocation}</p>}
                      {edu.courses && <p><strong>Relevant Courses:</strong> {edu.courses}</p>}
                      {edu.clubs && <p><strong>Clubs and Associations:</strong> {edu.clubs}</p>}
                      {edu.achievements && <p><strong>Achievements:</strong> {edu.achievements}</p>}
                    </div>
                  ))
                ) : (
                  <p>{data.education}</p>
                )}
              </div>
            )}

            {data.projects && Array.isArray(data.projects) && data.projects.filter(p => p.name || p.projectName).length > 0 && (
              <div className="resume-section">
                <h3>Projects</h3>
                {data.projects.filter(p => p.name || p.projectName).map((project, index) => (
                  <div key={index} className="resume-item">
                    <div className="item-header">
                      <h4>{project.name || project.projectName}</h4>
                      <span>
                        {(project.startDate || project.projectStartDate) ? formatDate(project.startDate || project.projectStartDate) : ''} - 
                        {(project.endDate || project.projectEndDate) ? formatDate(project.endDate || project.projectEndDate) : 'Present'}
                      </span>
                    </div>
                    {(project.role || project.projectRole) && <p><strong>{project.role || project.projectRole}</strong></p>}
                    {(project.description || project.projectDescription) && (
                      <ul className="bullet-list">
                        {createBulletPoints(project.description || project.projectDescription)}
                      </ul>
                    )}
                    {(project.technologies || project.projectTech) && <p><strong>Technologies:</strong> {project.technologies || project.projectTech}</p>}
                  </div>
                ))}
              </div>
            )}

            {data.experience && (
              <div className="resume-section">
                <h3>Work Experience</h3>
                {Array.isArray(data.experience) ? (
                  data.experience.filter(exp => (exp.position || exp.jobPosition) && exp.company).map((exp, index) => (
                    <div key={index} className="resume-item">
                      <div className="item-header">
                        <h4>{exp.position || exp.jobPosition} at {exp.company}</h4>
                        <span>
                          {formatDate(exp.startDate || exp.jobStartDate)} - 
                          {exp.current ? 'Present' : formatDate(exp.endDate || exp.jobEndDate)}
                        </span>
                      </div>
                      {(exp.location || exp.jobLocation) && <p>{exp.location || exp.jobLocation}</p>}
                      {(exp.description || exp.responsibilities || exp.jobDescription) && (
                        <ul className="bullet-list">
                          {createBulletPoints(exp.description || exp.responsibilities || exp.jobDescription)}
                        </ul>
                      )}
                      {(exp.technologies || exp.jobTechnologies) && <p><strong>Technologies:</strong> {exp.technologies || exp.jobTechnologies}</p>}
                    </div>
                  ))
                ) : (
                  <p>{data.experience}</p>
                )}
              </div>
            )}

            <div className="resume-section">
              <h3>Skills</h3>
              {data.technicalSkills ? (
                <>
                  <p><strong>Technical Skills:</strong> {data.technicalSkills}</p>
                  {data.softSkills && <p><strong>Soft Skills:</strong> {data.softSkills}</p>}
                </>
              ) : (
                <p>{data.skills}</p>
              )}
            </div>

            {data.languages && (
              <div className="resume-section">
                <h3>Languages</h3>
                <div className="languages-grid">
                  <div className="language-item">
                    <span>English</span>
                    <div className="proficiency-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                    </div>
                  </div>
                  <div className="language-item">
                    <span>Bengali</span>
                    <div className="proficiency-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                    </div>
                  </div>
                  <div className="language-item">
                    <span>Hindi</span>
                    <div className="proficiency-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot empty"></span>
                    </div>
                  </div>
                  <div className="language-item">
                    <span>Arabic</span>
                    <div className="proficiency-dots">
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot filled"></span>
                      <span className="dot empty"></span>
                      <span className="dot empty"></span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {(data.certifications || data.interests || data.additionalInfo) && (
              <div className="resume-section">
                <h3>Additional Information</h3>
                {data.certifications && <p><strong>Certifications:</strong> {data.certifications}</p>}
                {data.interests && <p><strong>Interests:</strong> {data.interests}</p>}
                {data.additionalInfo && <p>{data.additionalInfo}</p>}
              </div>
            )}
          </>
        ) : (
          <p>No resume data found. Please go back and create your resume.</p>
        )}
      </div>
      
      <div className="button-container">
        <button className="home-btn" onClick={() => window.location.href = '/'}>
          Home
        </button>
        {hasData && (
          <button className="print-btn" onClick={generatePrintableResume}>
            Print Resume
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewResume;