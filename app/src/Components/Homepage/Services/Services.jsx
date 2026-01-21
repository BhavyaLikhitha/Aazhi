import React from 'react';
import './services.css';
import shellLeft from './services.png';
import shellright from './services right.png';

const services = [
  { title: "General Counseling", description: "Professional support for various life challenges and mental health concerns." },
  { title: "Relationship Counseling", description: "Navigate relationship challenges and build stronger connections.", highlighted: true },
  { title: "Self development", description: "Unlock your potential and achieve personal growth goals." },
  { title: "Guidance", description: "Expert advice to help you make important life decisions." },
  { title: "Family Counseling", description: "Strengthen family bonds and resolve conflicts together." },
  { title: "Parenting Support", description: "Tools and strategies for effective and confident parenting." },
  { title: "Awareness program", description: "Educational programs to promote mental health awareness." }
];

export default function Service() {
  const topRow = services.slice(0, 4);
  const bottomRow = services.slice(4, 7);

  return (
    <section id = "services">
    <div className="services-section" style={{ backgroundColor: 'white' }}>
      <h2 className="services-title">What we provide you</h2>

      <div className="services-row">
        {topRow.map((service, index) => (
          <div className="card-wrapper" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className={`flip-card-front ${service.highlighted ? 'highlighted' : ''}`}>
                  {service.title}
                </div>
                <div className="flip-card-back">
                  {service.description}
                </div>
              </div>
            </div>
            <div className="card-shadow"></div>
          </div>
        ))}
      </div>
  
      <div className="services-row">
        {bottomRow.map((service, index) => (
          <div className="card-wrapper" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {service.title}
                </div>
                <div className="flip-card-back">
                  {service.description}
                </div>
              </div>
            </div>
            <div className="card-shadow"></div>
          </div>
        ))}
      </div>
           <div className="services-row services-row-bottom">
  <img src={shellLeft} alt="Shell" className="shell-left" />
  </div>
             <div className="services-row services-row-bottom">
  <img src={shellright} alt="Shell" className="shell-right" />
  </div>
    </div>
    </section>
  );
}
