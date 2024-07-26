import "./FooterStyle.css";
import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="left-footer">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Nilayur Madurai.</p>
              <p>Tamil Nadu</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />+91 9361593789</h4>
          </div>
          <div className="main">
            <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              naganandhini3012@gmail.com</h4>
          </div>
        </div>
        <div className="right-footer">
          <h4>About Me</h4>
          <p>I'm Nandhini, a PHP Developer With 2 years of experience in backend development, WordPress, Laravel, and React, I specialize in creating REST APIs, custom plugins, and e-commerce solutions, with expertise in cron jobs, automated product imports, and multi-vendor platforms.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://www.linkedin.com/in/naganandhini-php-dev" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
            <a href="https://github.com/nandydev" target="_blank" rel="noopener noreferrer">
              <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
