import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RecentlyCompleted.css";

// Import all images
import img1 from "../../../assets/img19.jpg";
import img2 from "../../../assets/img20.jpg";
import img3 from "../../../assets/img13.jpg";
import img4 from "../../../assets/img14.jpg";
import img5 from "../../../assets/img15.jpg";
import img6 from "../../../assets/img16.jpg";
import img7 from "../../../assets/img17.jpg";
import img8 from "../../../assets/img18.jpg";
import img9 from "../../../assets/img21.jpg";
import img10 from "../../../assets/img22.jpg";
import img11 from "../../../assets/img23.jpg";
import img12 from "../../../assets/img24.jpg";

const allProjects = [
  {
    id: "health",
    title: "Community Health Assessment",
    description:
      "A comprehensive health evaluation for rural communities in Ethiopia.",
    image: img1,
    details:
      "Detailed analysis of health indicators, interventions, and impact metrics. Collaborated with local clinics and NGOs to improve community health outcomes.",
  },
  {
    id: "education",
    title: "Education Improvement Program",
    description:
      "Implemented strategies to improve literacy and learning outcomes.",
    image: img2,
    details:
      "Provided teacher training, curriculum enhancements, and literacy campaigns reaching over 10,000 students in rural schools.",
  },
  {
    id: "water",
    title: "Water & Sanitation Initiative",
    description:
      "Provided clean water access and sanitation facilities to 5 villages.",
    image: img3,
    details:
      "Built wells, installed sanitation systems, and trained local communities in water management and hygiene practices.",
  },
  {
    id: "gender",
    title: "Gender Equality Program",
    description: "Empowering women and girls through advocacy and training.",
    image: img4,
    details:
      "Conducted workshops, awareness campaigns, and policy recommendations to promote gender equity in rural communities.",
  },
  {
    id: "livelihood",
    title: "Livelihood Support Project",
    description: "Enhanced economic opportunities for small-scale farmers.",
    image: img5,
    details:
      "Introduced micro-finance programs, training on sustainable farming, and market linkages to improve household incomes.",
  },
  {
    id: "child",
    title: "Child Protection Research",
    description: "Research to strengthen child protection mechanisms locally.",
    image: img6,
    details:
      "Produced evidence-based recommendations and trained local stakeholders on child safeguarding and protection policies.",
  },
  {
    id: "policy",
    title: "Policy Evaluation Study",
    description:
      "Evaluated local policies for social and economic development.",
    image: img7,
    details:
      "Analyzed policy outcomes, drafted recommendations, and shared findings with government and NGOs for actionable improvement.",
  },
  {
    id: "environment",
    title: "Environmental Conservation",
    description:
      "Implemented sustainable practices to protect forests and rivers.",
    image: img8,
    details:
      "Promoted reforestation, community awareness campaigns, and sustainable agricultural techniques to preserve ecosystems.",
  },
];

const RecentlyCompleted = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const navigate = useNavigate();

  const handleLoadMore = () => {
    setVisibleCount((prev) =>
      prev + 4 > allProjects.length ? allProjects.length : prev + 4
    );
  };

  const handleLoadLess = () => {
    setVisibleCount(4);
  };

  return (
    <section className="recently-section">
      <div className="recently-container">
        <h1 className="recently-title">Recently Completed Projects</h1>
        <p className="recently-subtitle">
          Explore some of our most impactful and successful projects.
        </p>

        <div className="recently-grid">
          {allProjects.slice(0, visibleCount).map((project, index) => (
            <div
              className="recently-card"
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
              onClick={() =>
                navigate(`/projects/recentlycompleted/${project.id}`)
              }
            >
              <div className="recently-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="recently-info">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="recently-buttons">
          {visibleCount < allProjects.length && (
            <button className="btn" onClick={handleLoadMore}>
              Load More
            </button>
          )}
          {visibleCount > 4 && (
            <button className="btn" onClick={handleLoadLess}>
              Load Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecentlyCompleted;
