// src/components/Navbar.jsx

import React from "react";
import "./Navbar.css";
import logo from './logo.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="Aazhi Logo" className="navbar__logo" />
        <div className="navbar__brand">
          <h1 className="navbar__title">Aazhi</h1>
          <p className="navbar__subtitle">Mental Health services</p>
        </div>
      </div>

      <nav className="navbar__links">
  <a href="/" className="nav-btn">Home</a>
  <a href="/book-session" className="nav-btn">Book a Session</a>
  <a href="/blog" className="nav-btn">Blog</a>
  <a href="/products" className="nav-btn">Products</a>
  <a href="/about" className="nav-btn">About Us</a>
</nav>


    </header>
  );
}

export default Navbar;
