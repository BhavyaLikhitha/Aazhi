import React from "react";
import "./providers.css";
import woman1 from "./women.png";

export default function Providers() {
  const providers = [
    {
      name: "Someshwari S",
      designation: "Psychologist",
      // rating: 4.9,
      // sessions: 850,
      Experience : "2.5 years",
      focus: ["Self-development", "Identity", "Relationships"],
      image: woman1,
    },
    {
      name: "Udaya Priyanka P",
      designation: "Social Worker",
      // rating: 4.8,
      Experience : "3.5 years",
      // sessions: 620,
      focus: ["Family", "Parenting", "Emotional support"],
      image: woman1,
    },
  ];

  return (
    <section id="providers" className="providers-section">
      <h2 className="providers-title">Your Providers</h2>

      <div className="providers-grid">
        {providers.map((p, index) => (
          <div className="provider-card" key={index}>
            <img src={p.image} alt={p.name} className="provider-img" />

            <div className="provider-body">
              {/* <div className="provider-rating">
                ⭐ {p.rating} <span>({p.sessions} sessions)</span>
              </div> */}

              <h3 className="provider-name">{p.name}</h3>
              <p className="provider-role">{p.designation}</p>
              <p className="provider-experience">Experience: {p.Experience}</p>

              <div className="provider-tags">
                {p.focus.map((tag, i) => (
                  <span key={i} className="provider-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <button className="provider-btn">Book Session</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
