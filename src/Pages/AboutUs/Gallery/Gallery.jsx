import React, { useState } from "react";
import "./Gallery.css";

// Example images (replace these with your actual imports)
import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";
import img7 from "../../../assets/img7.jpg";
import img8 from "../../../assets/img8.jpg";
import img9 from "../../../assets/img9.jpg";
import img10 from "../../../assets/img10.jpg";
import img11 from "../../../assets/img11.jpg";
import img12 from "../../../assets/img12.jpg";

const galleryItems = [
  { image: img1, title: "Project One", desc: "Description of project one." },
  { image: img2, title: "Project Two", desc: "Description of project two." },
  {
    image: img3,
    title: "Project Three",
    desc: "Description of project three.",
  },
  { image: img4, title: "Project Four", desc: "Description of project four." },
  { image: img5, title: "Project Five", desc: "Description of project five." },
  { image: img6, title: "Project Six", desc: "Description of project six." },
  {
    image: img7,
    title: "Project Seven",
    desc: "Description of project seven.",
  },
  {
    image: img8,
    title: "Project Eight",
    desc: "Description of project eight.",
  },
  { image: img9, title: "Project Nine", desc: "Description of project nine." },
  { image: img10, title: "Project Ten", desc: "Description of project ten." },
  {
    image: img11,
    title: "Project Eleven",
    desc: "Description of project eleven.",
  },
  {
    image: img12,
    title: "Project Twelve",
    desc: "Description of project twelve.",
  },
];

const Gallery = () => {
  const [visible, setVisible] = useState(6);

  const loadMore = () => setVisible((prev) => prev + 6);
  const loadLess = () => setVisible((prev) => (prev - 6 >= 6 ? prev - 6 : 6));

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h1 className="gallery-title">Our Gallery</h1>
        <p className="gallery-subtitle">
          A collection of our most impactful projects and works.
        </p>

        <div className="gallery-grid">
          {galleryItems.slice(0, visible).map((item, index) => (
            <div className="gallery-card" key={index}>
              <div className="gallery-image">
                <img src={item.image} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-buttons">
          {visible < galleryItems.length && (
            <button className="btn" onClick={loadMore}>
              Load More
            </button>
          )}
          {visible > 6 && (
            <button className="btn" onClick={loadLess}>
              Load Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
