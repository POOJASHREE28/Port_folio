import React from 'react';
import './footer.css';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="copyright">Copyright &copy; {new Date().getFullYear()} Poojashree All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
