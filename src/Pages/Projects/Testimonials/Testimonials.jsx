import React from "react";
import "./Testimonials.css";

// Import images
import helen from "../../../assets/helen.jpg";
import samuel from "../../../assets/samuel.jpg";
import marta from "../../../assets/marta.jpg";
import daniel from "../../../assets/daniel.jpg";

const testimonials = [
  {
    name: "Dr. Helen Tesfaye",
    role: "Lead Strategy Consultant",
    image: helen,
    text: "Hilltop Consultants helped our organization achieve our social development goals efficiently.",
  },
  {
    name: "Samuel Kebede",
    role: "Senior Business Analyst",
    image: samuel,
    text: "Professional, reliable, and highly knowledgeable. Their team transformed our project delivery.",
  },
  {
    name: "Marta Lemma",
    role: "Training & Capacity Lead",
    image: marta,
    text: "Their innovative solutions made a real difference in our capacity-building programs.",
  },
  {
    name: "Daniel Getachew",
    role: "Policy & Research Advisor",
    image: daniel,
    text: "Hilltop's insight and local expertise are unmatched. Highly recommended.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h1 className="testimonials-title">Testimonials</h1>
        <p className="testimonials-subtitle">
          See what our clients say about working with Hilltop Consultants
        </p>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              className="testimonial-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="testimonial-image">
                <img src={t.image} alt={t.name} />
              </div>
              <div className="testimonial-info">
                <p className="testimonial-text">"{t.text}"</p>
                <h3>{t.name}</h3>
                <p className="testimonial-role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
