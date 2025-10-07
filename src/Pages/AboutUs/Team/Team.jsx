import React from "react";
import "./Team.css";
import hiwetu from "../../../assets/hiwetu.jpg";
import daniel from "../../../assets/daniel.jpg";
import helen from "../../../assets/helen.jpg";
import sintey from "../../../assets/sintey.jpg";
import samuel from "../../../assets/samuel.jpg";
import marta from "../../../assets/marta.jpg";

const teamMembers = [
  {
    name: "Hiwetu Kassahun",
    role: "CEO & Director Of YIDA",
    image: hiwetu,
  },
  {
    name: "Dr. Helen Tesfaye",
    role: "Lead Strategy Consultant",
    image: helen,
  },
  {
    name: "Samuel Kebede",
    role: "Senior Business Analyst",
    image: samuel,
  },
  {
    name: "Marta Lemma",
    role: "Training & Capacity Lead",
    image: marta,
  },
  {
    name: "Daniel Getachew",
    role: "Policy & Research Advisor",
    image: daniel,
  },
  {
    name: "Sinteayehu Getabalew",
    role: "Web Developer",
    image: sintey,
  },
];

const Team = () => {
  return (
    <section className="team-section">
      <div className="team-overlay"></div>
      <div className="team-container">
        <div className="team-header">
          <h1>Meet Our Team</h1>
          <p>
            A diverse and experienced team dedicated to solving complex problems
            and delivering real results.
          </p>
        </div>
        <div className="team-cards">
          {teamMembers.map((member, index) => (
            <div
              className="team-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h2>{member.name}</h2>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
