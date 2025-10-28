import React from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <section className="who-section">
      <div className="who-overlay"></div>
      <div className="who-glow"></div>

      <div className="who-container">
        <header className="who-header">
          <h1 className="who-title">WHO WE ARE</h1>
          <p className="who-subtitle">HIWOTU / 2019 / Hilltop</p>
        </header>

        <div className="who-intro fade-in">
          <p>
            Hilltop Consultants is a growing and dynamic consulting firm
            headquartered in Addis Ababa, Ethiopia. Established in 2019, we are
            committed to delivering high-quality, evidence-based consulting
            services that contribute to sustainable social and economic
            development. Our mission is to be a trusted partner to development
            actors by offering tailored project support, research, and
            evaluation services that empower communities, inform policies, and
            drive meaningful change.
          </p>
        </div>

        <div className="who-boxes">
          <div className="who-card slide-up">
            <h2>Vision</h2>
            <p>
              To be a leading consulting firm in Africa known for innovation,
              integrity, and impact in the social and economic development
              sectors.
            </p>
          </div>
          <div className="who-card slide-up">
            <h2>Mission</h2>
            <p>
              To provide timely, relevant, and actionable consulting services
              that support clients in designing, implementing, and evaluating
              high-impact development interventions.
            </p>
          </div>
          <div className="who-card slide-up">
            <h2>Core Values</h2>
            <ul>
              <li>
                <span>Integrity:</span> Upholding the highest ethical standards.
              </li>
              <li>
                <span>Excellence:</span> Commitment to quality and improvement.
              </li>
              <li>
                <span>Partnership:</span> Collaborative work with stakeholders.
              </li>
              <li>
                <span>Innovation:</span> Creative, context-sensitive solutions.
              </li>
              <li>
                <span>Empowerment:</span> Building capacity and transferring
                knowledge.
              </li>
            </ul>
          </div>
        </div>

        <div className="who-unique fade-in">
          <h2 className="header">What Sets Us Apart</h2>
          <ul>
            <li>
              <span>Proven Track Record:</span> Completed 15+ research and
              evaluation projects with NGOs.
            </li>
            <li>
              <span>Contextual Understanding:</span> Deep insight into
              Ethiopia’s socio-economic and cultural landscape.
            </li>
            <li>
              <span>Client-Centric Approach:</span> Tailored assignments for
              unique client goals.
            </li>
            <li>
              <span>Multidisciplinary Team:</span> Expertise in M&E, health,
              child protection, education, gender, and governance.
            </li>
            <li>
              <span>Ethical & Inclusive Research:</span> Safeguarding, gender
              sensitivity, participatory methods.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
