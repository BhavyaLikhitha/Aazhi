import React from "react";
import "./opt.css";

const slides = [
  "Anyone feeling overwhelmed, anxious, or emotionally drained.",
  "People going through life changes or challenges in relationships, work, studies, or personal growth.",
  "Those struggling with overthinking, self-doubt, or inner conflict, seeking clarity and balance.",
  "People navigating stress, burnout, or emotional pressure.",
  "Anyone curious about understanding themselves better and building healthier ways of coping and living.",
  "Parents and caregivers seeking support in understanding their child’s emotions, behaviour, or development.",
];

export default function WhoCanOpt() {
  return (
    <section className="who-section">
      <h2 className="who-heading">Who can opt for counselling?</h2>
      <div className="snap-container">
        {slides.map((text, index) => (
          <div className="snap-slide" key={index}>
            <div className="jelly-circle">
              <p className="circle-text">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
