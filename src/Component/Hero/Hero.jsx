import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="hero">
      <div class="sliding-background">
        <div class="background-layer"></div>
      </div>
      <div className="overlay"></div>
      <div className="hero-text">
        <h1 className="first-text">
          Empowering Change Through Insightful Solutions!
        </h1>

        <h3 className="sec-text">
          At Hilltop Consultants, we turn data into direction and challenges
          into opportunities. <br />
          With deep local expertise and a passion for impact, we help
          organizations design.
        </h3>

        <p className="third-text">
          Let’s work together to transform your vision into impactful results
        </p>
      </div>
    </div>
  );
};

export default Hero;
