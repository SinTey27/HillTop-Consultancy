import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const toggleAbout = () => setAboutDropdown(!aboutDropdown);
  const toggleProjects = () => setProjectsDropdown(!projectsDropdown);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Hilltop Logo" className="logo" />
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>

          {/* ABOUT US DROPDOWN */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleAbout}>
              About Us{" "}
              <FaChevronDown className={aboutDropdown ? "rotate" : ""} />
            </button>

            <div className={`dropdown-menu ${aboutDropdown ? "show" : ""}`}>
              <Link to="/aboutus/whoweare" onClick={closeMenu}>
                Who We Are
              </Link>
              <Link to="/aboutus/team" onClick={closeMenu}>
                Team
              </Link>
              <Link to="/aboutus/gallery" onClick={closeMenu}>
                Gallery
              </Link>
            </div>
          </div>

          {/* PROJECTS DROPDOWN */}
          <div className="dropdown">
            <button className="dropdown-btn" onClick={toggleProjects}>
              Projects{" "}
              <FaChevronDown className={projectsDropdown ? "rotate" : ""} />
            </button>

            <div className={`dropdown-menu ${projectsDropdown ? "show" : ""}`}>
              <Link to="/projects/recentlycompleted" onClick={closeMenu}>
                Recently Completed
              </Link>
              <Link to="/projects/testimonials" onClick={closeMenu}>
                Testimonials
              </Link>
            </div>
          </div>

          {/* CONTACT LINK */}
          <Link to="/contactus" onClick={closeMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
