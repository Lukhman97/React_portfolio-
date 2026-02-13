import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <p className="footer-tagline">
          Building scalable web applications with passion & precision.
        </p>

        <div className="footer-divider"></div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Shaik Lukhman — Full Stack Developer
        </p>

      </div>

    </footer>
  );
}

export default Footer;
