import React from "react";
import "../css/Contact.css";
// import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaCode
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">

        <a
          href="mailto:lukhmanshaik786@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <span>Email</span>
        </a>

        <a
          href="https://linkedin.com/in/lukhman-shaik-816492281"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Lukhman97"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <span>GitHub</span>
        </a>
        <a
  href="https://leetcode.com/u/shaik_Lukhman/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <SiLeetcode className="contact-icon" />
  <span>LeetCode</span>
</a>
<a
  href="https://www.codechef.com/users/lukhman_shaik"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <SiCodechef className="contact-icon" />
  <span>CodeChef</span>
</a>

      </div>
    </section>
  );
}

export default Contact;
