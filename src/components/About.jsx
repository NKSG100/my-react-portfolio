import React from 'react';
import './css/About.css';

function About() {
  return (
    <section className="about">
      <div className="neon-rectangle"></div>
      <div className="content-about">
        <div className="profile-container">
          <img src="profile.jpg" alt="Profile" className="profile-image" />
        </div>
        <h1 className="neon-title">Hi, I'm Naman Kumar Singh</h1>
        <p className="subtitle">A Passionate Developer Crafting the Future</p>
        <div className="details">
          <p>
            I'm a tech enthusiast specializing in creating futuristic web applications that are not just functional but also immersive and engaging. 
            My mission is to blend technology and creativity to deliver extraordinary digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
