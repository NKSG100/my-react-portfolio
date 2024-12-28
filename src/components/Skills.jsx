import React from 'react';
import './css/Skills.css';

function Skills() {
  return (
    <section className="skills">
      <div id="pattern-bg">
        <div className="glowing-shape"></div>
      </div>
      <div className="skills-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {/* Languages Section */}
          <div className="skills-category">
            <h3 className="category-title">Languages</h3>
            <div className="skills-cards">
              <div className="skill-card">
                <h4>C++</h4>
              </div>
              <div className="skill-card">
                <h4>JavaScript</h4>
              </div>
              <div className="skill-card">
                <h4>Python</h4>
              </div>
              <div className="skill-card">
                <h4>Java</h4>
              </div>
              <div className="skill-card">
                <h4>HTML/CSS</h4>
              </div>
            </div>
          </div>

          {/* Frameworks Section */}
          <div className="skills-category">
            <h3 className="category-title">Frameworks</h3>
            <div className="skills-cards">
              <div className="skill-card">
                <h4>React JS</h4>
              </div>
              <div className="skill-card">
                <h4>ExpressJS</h4>
              </div>
              <div className="skill-card">
                <h4>MongoDB</h4>
              </div>
              <div className="skill-card">
                <h4>NodeJS</h4>
              </div>
              <div className="skill-card">
                <h4>TensorFlow</h4>
              </div>
              <div className="skill-card">
                <h4>Flask</h4>
              </div>
              <div className="skill-card">
                <h4>OpenCV</h4>
              </div>
            </div>
          </div>

          {/* Competitive Programming Section */}
          <div className="skills-category">
            <h3 className="category-title">Competitive Programming (DSA)</h3>
            <div className="skills-cards">
              <div className="skill-card-link">
                <a href="https://leetcode.com/u/NKSG100/" target="_blank" rel="noopener noreferrer" className="competitive-link">
                  <img src="leetcode.svg" alt="LeetCode" className="competitive-icon"/>
                  LeetCode
                </a>
              </div>
              <div className="skill-card-link">
                <a href="https://www.codechef.com/users/nksg101" target="_blank" rel="noopener noreferrer" className="competitive-link">
                  <img src="codechef.svg" alt="CodeChef" className="competitive-icon"/>
                  CodeChef
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
