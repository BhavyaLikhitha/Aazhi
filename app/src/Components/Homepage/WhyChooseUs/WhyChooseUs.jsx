import React from "react";
import "./choose.css";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";

export default function WhyChooseUs() {
  return (
    <section className="why-section">
      <h2 className="why-title">Why Choose Us?</h2>
      <p className="why-subtitle">
        A space built on trust, understanding, and ethical care.
      </p>

      <div className="why-grid">
        <div className="why-card">
          <div className="why-icon">
            <LockOutlinedIcon />
          </div>
          <h3>Safe, Confidential & Non-Judgmental</h3>
          <p>
            You are offered a respectful and private space where confidentiality
            is deeply valued, and your safety and comfort are given utmost
            importance.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <PersonOutlineOutlinedIcon />
          </div>
          <h3>Personalized, Not One-Size-Fits-All</h3>
          <p>
            Each session is shaped around your unique needs, pace, and life
            context—because your journey is personal.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <ScienceOutlinedIcon />
          </div>
          <h3>Evidence-Informed & Ethical Practice</h3>
          <p>
            Our work is guided by psychological research and scientific
            understanding, balanced with empathy and human values.
          </p>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <PublicOutlinedIcon />
          </div>
          <h3>Culturally Sensitive & Inclusive</h3>
          <p>
            We are mindful of cultural, family, and social influences that shape
            your experiences and identity.
          </p>
        </div>

        <div className="why-card wide">
          <div className="why-icon">
            <VisibilityOutlinedIcon />
          </div>
          <h3>Support Beyond Labels</h3>
          <p>
            While we are informed about psychological conditions and diagnostic
            frameworks, we look beyond labels—remaining open, curious, and
            attentive to your lived experience.
          </p>
        </div>
      </div>
    </section>
  );
}
