import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import ContactUs from "./Pages/ContactUs/ContactUs";

// About Us pages
import AboutUs from "./Pages/AboutUs/AboutUs";
import WhoWeAre from "./Pages/AboutUs/WhoWeAre/WhoWeAre";
import Team from "./Pages/AboutUs/Team/Team";
import Gallery from "./Pages/AboutUs/Gallery/Gallery";

// Projects pages
import Projects from "./Pages/Projects/Projects";
import RecentlyCompleted from "./Pages/Projects/RecentlyCompleted/RecentlyCopleted";
import Testimonials from "./Pages/Projects/Testimonials/Testimonials";
import Footer from "./Pages/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Hero />} />

        {/* About Us (Parent + Subpages) */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/whoweare" element={<WhoWeAre />} />
        <Route path="/aboutus/team" element={<Team />} />
        <Route path="/aboutus/gallery" element={<Gallery />} />

        {/* Projects (Parent + Subpages) */}
        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/recentlycompleted"
          element={<RecentlyCompleted />}
        />
        <Route path="/projects/testimonials" element={<Testimonials />} />

        {/* Contact */}
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
