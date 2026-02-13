import React from "react";
import "../css/Resume.css";

function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2 className="section-title">Resume</h2>

      <div className="resume-container">

        <p className="resume-text">
          I'm a passionate Full Stack Developer skilled in Python, Django, 
          React, SQL, and Power BI. Download my resume to know more 
          about my skills and projects.
        </p>

        <a
          href="https://drive.google.com/file/d/1i_twLAwJO5GdHxYKa2N0PctuR-PBeGXy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          📄 View My Resume
        </a>

      </div>
    </section>
  );
}

export default Resume;
