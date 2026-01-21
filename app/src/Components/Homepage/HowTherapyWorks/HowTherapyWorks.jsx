import React from "react";
import "./therapy.css";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HearingIcon from "@mui/icons-material/Hearing";
import MovingIcon from "@mui/icons-material/Moving";

export default function HowTherapyWorks() {
  return (
    <section className="how-section">
      <h2 className="how-title">How Therapy Works</h2>
      <p className="how-subtitle">
        A simple, supportive journey toward healing and growth.
      </p>

      <div className="how-steps">
        {/* Step 1 */}
        <div className="how-step">
          <div className="how-icon-wrapper">
            <span className="how-step-number">01</span>
            <div className="how-icon">
              <CalendarMonthIcon />
            </div>
          </div>

          <div className="how-card">
            <h3>Book a Session</h3>
            <p>
              Choose a convenient time and reach out through our booking
              system.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="how-step">
          <div className="how-icon-wrapper">
            <span className="how-step-number">02</span>
            <div className="how-icon">
              <HearingIcon />
            </div>
          </div>

          <div className="how-card">
            <h3>We Listen & Understand</h3>
            <p>
              In the initial sessions, we focus on understanding your
              experiences, concerns, and goals at your pace, without judgment.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="how-step">
          <div className="how-icon-wrapper">
            <span className="how-step-number">03</span>
            <div className="how-icon">
              <MovingIcon />
            </div>
          </div>

          <div className="how-card">
            <h3>Ongoing Support & Growth</h3>
            <p>
              Together, we work toward clarity, coping, and positive change
              using approaches suited to your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
