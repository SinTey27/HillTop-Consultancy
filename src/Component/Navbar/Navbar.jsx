import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import "./Navbar.css";
import logo from "../../assets/Logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isHome = location.pathname === "/";

  const toggleMenu = () => setMenuOpen((s) => !s);
  const toggleDropdown = (name) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const closeAll = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header
      className={`navbar-header ${isHome ? "home-transparent" : "solid"}`}
    >
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" onClick={closeAll}>
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeAll}>
            Home
          </Link>

          <div
            className={`dropdown ${activeDropdown === "about" ? "open" : ""}`}
          >
            <button
              type="button"
              className="dropdown-btn link-style"
              onClick={() => toggleDropdown("about")}
            >
              About Us{" "}
              <FaChevronDown
                className={activeDropdown === "about" ? "rotate" : ""}
              />
            </button>
            <div className="dropdown-menu">
              <Link to="/aboutus/whoweare" onClick={closeAll}>
                Who We Are
              </Link>
              <Link to="/aboutus/team" onClick={closeAll}>
                Team
              </Link>
              <Link to="/aboutus/gallery" onClick={closeAll}>
                Gallery
              </Link>
            </div>
          </div>

          <div
            className={`dropdown ${
              activeDropdown === "projects" ? "open" : ""
            }`}
          >
            <button
              type="button"
              className="dropdown-btn link-style"
              onClick={() => toggleDropdown("projects")}
            >
              Projects{" "}
              <FaChevronDown
                className={activeDropdown === "projects" ? "rotate" : ""}
              />
            </button>
            <div className="dropdown-menu">
              <Link to="/projects/recentlycompleted" onClick={closeAll}>
                Recently Completed
              </Link>
              <Link to="/projects/testimonials" onClick={closeAll}>
                Testimonials
              </Link>
            </div>
          </div>

          <Link to="/contactus" onClick={closeAll}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
