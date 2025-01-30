import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>
        Email:{" "}
        <a href="mailto:jeetbiswas816@gmail.com" style={{ textDecoration: "none", color: "blue" }}>
          jeetbiswas816@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:+918392063915" style={{ textDecoration: "none", color: "blue" }}>
          +91 8392063915
        </a>
      </p>
    </section>
  );
};

export default Contact;
