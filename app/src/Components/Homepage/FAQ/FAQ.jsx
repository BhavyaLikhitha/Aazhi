import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./faq.css";

const faqs = [
  {
    question: "How long is a session, and how many sessions will I need?",
    answer:
      "A session usually lasts around 60 minutes. The number of sessions varies based on your needs, goals, and comfort.",
  },
  {
    question:
      "Do I need to know exactly what my problem is before starting therapy?",
    answer:
      "No. You don’t need clarity or the “right words.” Therapy is a space to explore and understand things together, at your pace.",
  },
  {
    question: "What if I feel uncomfortable or don’t know what to talk about?",
    answer:
      "That’s completely okay. Feeling unsure is common, especially in the beginning. The therapist will gently guide the conversation.",
  },
  {
    question: "Is therapy available online or in person?",
    answer:
      "Currently, individual counselling sessions are offered online only. Awareness programs and workshops are conducted both online and offline, depending on the setting and requirement.",
  },
  {
    question: "Is therapy only for people with serious mental health issues?",
    answer:
      "Not at all. Therapy can support everyday stress, emotional concerns, relationships, personal growth, and life transitions—not only crises.",
  },
  {
    question: "How do I book a session?",
    answer:
      "You can book a session using the “Book a Session” button or by contacting us directly through the contact details provided.",
  },
  {
    question:
      "Can parents consult even if the child does not attend sessions?",
    answer:
      "Yes. Parents and caregivers can seek guidance and support even when the child is not directly involved in sessions.",
  },
  {
    question: "Are there any offers or concessional fees available?",
    answer:
      "Yes. We offer a 50% concessional fee for individuals from marginalized or underserved communities. This is provided after a simple and respectful verification process, which may require submitting relevant proof.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2 className="faq-title">Are you feeling confused?</h2>

      <div className="faq-list">
        {faqs.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`faq-item ${isOpen ? "open" : ""}`}
            >
              <button
                className="faq-question-row"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span className="faq-question">{item.question}</span>
                <KeyboardArrowDownIcon
                  className={`faq-icon ${isOpen ? "rotate" : ""}`}
                />
              </button>

              {isOpen && (
                <div className="faq-answer">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
