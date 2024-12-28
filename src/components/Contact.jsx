import React from 'react';
import './css/Contact.css';
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Contact() {
  return (
    <section className="contact">
      <div className="neon-line-1"></div>
      <div className="neon-line-2"></div>
      <div className="content">
        <h2>Contact Me</h2>
        <p>Hi! Here are different ways to know more about me &#128516;</p>
        <div className="contact-details">
          <div className="links">
            <a href="https://www.linkedin.com/in/naman-kumar-singh-36121a1b5/" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/NKSG100" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href="https://x.com/NKSG100" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <FaTwitter />
              <span>Twitter</span>
            </a>
            <a href="https://leetcode.com/u/NKSG100/" target="_blank" rel="noopener noreferrer" className="contact-icon">
              <SiLeetcode />
              <span>LeetCode</span>
            </a>
          </div>
          <div className="info">
            <p>
              <FaEnvelope className="icon" /> nksnamannks@gmail.com
            </p>
            <p>
              <FaWhatsapp className="icon" /> +91-7409045422
            </p>
            <p>
              <FaMapMarkerAlt className="icon" /> Saharanpur, Uttar Pradesh, 247001. India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
