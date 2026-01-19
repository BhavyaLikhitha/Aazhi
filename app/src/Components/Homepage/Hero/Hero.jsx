import React from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";
import waveImage from "./hero.png";

function HeroSection() {
  const navigate = useNavigate();

  const handleBookSession = () => {
    navigate("/book-session");
  };

  return (
    <section className="hero">
      <div className="hero__left">
        <img src={waveImage} alt="Wave" className="hero__wave" />
      </div>

      <div className="hero__right">
        <h2 className="hero__quote">
          "YOU DON'T HAVE TO SAIL THROUGH THIS ALONE <br />
          LET’S NAVIGATE IT TOGETHER."
        </h2>

        <button
          className="hero__button"
          onClick={handleBookSession}
        >
          Book a session
        </button>
      </div>
    </section>
  );
}

export default HeroSection;
