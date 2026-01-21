import React from "react";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../Navbar/logo.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <Link to="/aazhi-admin-login" className="footer-logo-link">
            <img src={logo} alt="Aazhi logo" className="footer-logo-img" />
            <span className="footer-logo-text">Aazhi</span>
          </Link>

          <p className="footer-tagline">
            Mental health support that listens, understands, and guides you forward.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.instagram.com/counseling_in_tamil?igsh=MWRsZ2szM3Q1aDh2ZA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/somesh26"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book-session">Book an Online Session</Link></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#providers">Providers</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>
            Phone: <a href="tel:7604947825">7604947825</a>
          </p>
          <p>
            Email: 
            <a href="mailto:navil.counselingservices@gmail.com">
               navil.counselingservices@gmail.com
            </a>
          </p>
          <p>Location: India</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Aazhi Mental Health Services. All rights reserved.
      </div>
    </footer>
  );
}
