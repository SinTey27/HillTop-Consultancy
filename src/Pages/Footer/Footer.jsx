import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  // Don't show footer on home page
  if (location.pathname === "/") return null;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / Brand */}
        <div className="footer-brand">
          <h2>Hilltop Consultants</h2>
          <p>Empowering change through insight and action</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link to="/aboutus/whoweare">Who We Are</Link>
            </li>
            <li>
              <Link to="/aboutus/team">Team</Link>
            </li>
            <li>
              <Link to="/aboutus/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/projects/recentlycompleted">Projects</Link>
            </li>
            <li>
              <Link to="/contactus">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@hilltopconsultants.com</p>
          <p>Phone: +251 912 345 678</p>
          <p>Addis Ababa, Ethiopia</p>

          {/* Social Links */}
          <div className="footer-social">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Hilltop Consultants. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
