import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          {/* <h3 className="footer-logo">Aazhi</h3>
           */}
        

<Link to="/aazhi-admin-login" className="footer-logo-link">
  <h3 className="footer-logo">Aazhi</h3>
</Link>

          <p className="footer-tagline">
            Mental health support that listens, understands, and guides you forward.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Book a Session</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Providers</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:support@aazhi.com">support@aazhi.com</a></p>
          <p>Location: India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aazhi Mental Health Services. All rights reserved.
      </div>
    </footer>
  );
}
