import React from "react";
import "./ContactUs.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you. Let’s start a conversation today.</p>
      </div>

      <div className="contact-main">
        <div className="contact-info">
          <h2>Hilltop Consultancy</h2>
          <p className="info-desc">
            We provide high-quality consultancy and project management services
            across Ethiopia. Reach us through the channels below or send a
            message using the form.
          </p>

          <div className="info-item">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Phone</h4>
              <p>+251 933 123 433</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email</h4>
              <p>info@hilltopconsultancy.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>6 Kilo around Minilik Hospital, Addis Ababa, Ethiopia</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              className="social facebook"
              data-tooltip="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="social linkedin"
              data-tooltip="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="social instagram"
              data-tooltip="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              className="social twitter"
              data-tooltip="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form action="https://formspree.io/f/xdkpeyen" method="POST">
            <div className="form-row">
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
            </div>
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="6"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Hilltop Consultancy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.031818425!2d38.76361141477808!3d9.01079339352862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8f8cfa30b2ad%3A0x3b1a7b1d92f9a7a!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2set!4v1697189000000!5m2!1sen!2set"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
