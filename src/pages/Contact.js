import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <p>
        Email:{" "}
        <a href="mailto:Carrierpath9999@gmail.com" style={{ textDecoration: "none", color: "blue" }}>
        Carrierpath9999@gmail.com
        </a>
      </p>
      <p>
        Phone:{" "}
        <a href="tel:+917908186697" style={{ textDecoration: "none", color: "blue" }}>
          +91 7908186697
        </a>
      </p>
    </section>
  );
};

export default Contact;
