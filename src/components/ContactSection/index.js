import React from "react";
import "./styles.css";

export default function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-text">
        I'd love to hear from you — whether it's about a project, job
        opportunity, or just to say hi!
      </p>
      <div className="contact-links">
        <a href="mailto:uwizeyeeric@icloud.com">📧 Email</a>
        <a
          href="https://github.com/McQueen5258"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐙 GitHub
        </a>
        <a
          href="www.linkedin.com/in/eric-uwizeye-a97218366"
          target="_blank"
          rel="noopener noreferrer"
        >
          in LinkedIn
        </a>
      </div>
    </section>
  );
}
