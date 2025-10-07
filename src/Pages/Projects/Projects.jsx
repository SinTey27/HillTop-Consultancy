import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects-page">
      <nav className="projects-nav">
        <Link to="recentlycompleted">Recently Completed</Link>
        <Link to="testimonials">Testimonials</Link>
      </nav>

      <Outlet />
    </div>
  );
};

export default Projects;
