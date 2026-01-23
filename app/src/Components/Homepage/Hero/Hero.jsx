import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import heroVideo from "./vedio.mp4";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* Background Video */}
      <video
        className="hero__video"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="hero__overlay">
        <h2 className="hero__quote">
          "YOU DON'T HAVE TO SAIL THROUGH THIS ALONE <br />
          LET’S NAVIGATE IT TOGETHER."
        </h2>

        <button
          className="hero__button"
          onClick={() => navigate("/book-session")}
        >
          Book an Online session
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
