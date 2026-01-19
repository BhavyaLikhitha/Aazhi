import React from 'react';
import './faq.css';
// import dogIcon from '../assets/dog-icon.png'; // Replace with your actual image

const faqs = [
  { question: 'How can I book a session?', answer: 'You can book a session through our website under the "Book a Session" tab.' },
  { question: 'Is this confidential?', answer: 'Yes, all sessions are 100% confidential and secure.' },
  { question: 'Do I need a diagnosis?', answer: 'No diagnosis is required to start therapy. You are welcome to talk anytime.' },
  { question: 'What are the timings?', answer: 'We offer flexible slots including evenings and weekends.' },
  { question: 'Are video calls available?', answer: 'Yes, we provide both in-person and online video call sessions.' },
  { question: 'Can I choose my provider?', answer: 'Yes, you can choose a provider that matches your needs.' }
];

export default function FaqSection() {
  return (
    <div className="faq-section">
      <h2 className="faq-title">Are you feeling confused?</h2>

      <div className="faq-subheading">
        {/* <h3>FAQ’S</h3> */}
        {/* <img src={dogIcon} alt="Chat Icon" className="faq-icon" /> */}
      </div>

      <div className="faq-grid">
        {faqs.map((item, index) => (
          <div className="faq-card" key={index}>
            <div className="faq-card-inner">
              <div className="faq-front">
                <span className="faq-symbol">?</span>
                <span className="faq-question">{item.question}</span>
              </div>
              <div className="faq-back">
                {item.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
