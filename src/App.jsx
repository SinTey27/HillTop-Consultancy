import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import ContactUs from "./Pages/ContactUs/ContactUs";

import AboutUs from "./Pages/AboutUs/AboutUs";
import WhoWeAre from "./Pages/AboutUs/WhoWeAre/WhoWeAre";
import Team from "./Pages/AboutUs/Team/Team";
import Gallery from "./Pages/AboutUs/Gallery/Gallery";

import Projects from "./Pages/Projects/Projects";
import RecentlyCompleted from "./Pages/Projects/RecentlyCompleted/RecentlyCopleted";
import Testimonials from "./Pages/Projects/Testimonials/Testimonials";
import Footer from "./Pages/Footer/Footer";
import ScrollToTop from "./Component/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus/whoweare" element={<WhoWeAre />} />
        <Route path="/aboutus/team" element={<Team />} />
        <Route path="/aboutus/gallery" element={<Gallery />} />

        <Route path="/projects" element={<Projects />} />
        <Route
          path="/projects/recentlycompleted"
          element={<RecentlyCompleted />}
        />
        <Route path="/projects/testimonials" element={<Testimonials />} />

        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
