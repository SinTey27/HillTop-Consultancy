import React from "react";
import { Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <nav className="aboutus-nav">
        <Link to="whoweare">Who We Are</Link>
        <Link to="team">Team</Link>
        <Link to="gallery">Gallery</Link>
      </nav>

      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
};

export default AboutUs;
