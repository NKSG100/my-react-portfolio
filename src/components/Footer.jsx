import React from 'react';
import './css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Naman Kumar Singh Portfolio</p>
      <p>Designed with ❤️</p>
    </footer>
  );
}

export default Footer;
