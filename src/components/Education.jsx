import React from 'react';
import './css/Education.css';

function Education() {
  return (
    <section className="education">
      <div id="neon-star-1"></div>
      <div id="neon-star-2"></div>
      <div className="education-container">
        <h2 className="section-title">Education</h2>
        <div className="education-cards">
          <div className="education-card">
            <h3>Bachelor of Technology<br></br>Computer Science and Engineering</h3>
            <p className="institute-name">National Institute of Technology, Kurukshetra</p>
            <p className="timeline">2019 - 2023</p>
            <p className="description">
              Specialized in computer science, with a focus on algorithms, data structures, and web development. Graduated with honors.
            </p>
          </div>
          <div className="education-card">
            <h3>Senior Secondary</h3>
            <p className="institute-name">S.R DAV Public School</p>
            <p className="timeline">2015 - 2017</p>
            <p className="description">
              Strong foundation in mathematics and science, laying the groundwork for advanced studies in technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
