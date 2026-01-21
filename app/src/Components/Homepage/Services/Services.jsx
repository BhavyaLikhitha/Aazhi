import React from "react";
import "./Services.css";

import BackHandOutlinedIcon from "@mui/icons-material/BackHandOutlined";
import Diversity1OutlinedIcon from "@mui/icons-material/Diversity1Outlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AutoAwesomeOutlinedIcon from "@mui/icons-material/AutoAwesomeOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import PsychologyAltOutlinedIcon from "@mui/icons-material/PsychologyAltOutlined";

const services = [
  {
    title: "Individual Counselling",
    description:
      "For individuals seeking support with emotions, thoughts, life challenges, or personal concerns.",
    icon: <BackHandOutlinedIcon />,
  },
  {
    title: "Relationship Counselling",
    description:
      "Support for navigating relationship concerns, emotional understanding, and interpersonal challenges.",
    icon: <Diversity1OutlinedIcon />,
  },
  {
    title: "Couple Counselling",
    description:
      "For couples or partners wanting to improve communication, understanding, and emotional connection.",
    icon: <GroupOutlinedIcon />,
  },
  {
    title: "Family & Parenting Support",
    description:
      "For families and parents navigating conflicts, parenting challenges, or family transitions.",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  {
    title: "Personal Growth & Self-Development",
    description:
      "For individuals interested in self-awareness, growth, and building healthier life patterns.",
    icon: <AutoAwesomeOutlinedIcon />,
  },
  {
    title: "Stress, Anxiety & Emotional Well-Being",
    description:
      "Support for managing stress, anxiety, and emotional difficulties related to daily pressures.",
    icon: <VolunteerActivismOutlinedIcon />,
  },
  {
    title: "Academic, Career & Life Guidance",
    description:
      "Guidance for students and adults seeking clarity in academic, career, or life decisions.",
    icon: <RocketLaunchOutlinedIcon />,
  },
  {
    title: "Mental Health Awareness Programs",
    description:
      "Psychoeducation and awareness programs for groups, institutions, and communities.",
    icon: <PsychologyAltOutlinedIcon />,
  },
];

export default function Services() {
  return (
    <section className="services-section" id="services">
      {/* <h2 className="services-title">Our Services</h2> */}
      <h2 className="services-title"> Comprehensive Mental Health Support</h2>
      <p className="services-description">
        We offer a range of services designed to support you at every stage of your mental health journey.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">
              {service.icon}
            </div>

            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
