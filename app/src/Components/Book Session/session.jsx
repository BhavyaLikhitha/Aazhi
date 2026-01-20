import React, { useState } from "react";
import "./session.css";
import Header from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";


const providers = [
  { id: 1, name: "Someshwari S", role: "Psychologist" },
  { id: 2, name: "Udaya Priyanka P", role: "MSW - Family & Child Welfare" },
];

const services = [
  { title: "General Counseling", price: 1500 },
  { title: "Relationship Counseling", price: 2200 },
  { title: "Self Development", price: 1500 },
  { title: "Guidance", price: 1500 },
  { title: "Family Counseling", price: 2800 },
  { title: "Parenting Support", price: 2200 },
  { title: "Awareness Program", price: 1500 },
];

const steps = ["Provider", "Session Type", "Schedule", "Payment"];

export default function Session() {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState(null);
  const [service, setService] = useState(null);

  const canContinue =
    (step === 1 && provider) ||
    (step === 2 && service) ||
    step >= 3;

  return (
    <>
     <Header />
     <div>
    <section className="session-page">
      <h1 className="session-title">Book Your Session</h1>
      <p className="session-subtitle">
        Take the first step towards your mental wellness journey.
      </p>

      {/* Stepper */}
      <div className="stepper">
        {steps.map((s, i) => (
          <div key={s} className={`step ${step >= i + 1 ? "active" : ""}`}>
            <div className="step-circle">{step > i + 1 ? "✓" : i + 1}</div>
            <span>{s}</span>
          </div>
        ))}
      </div>

      {/* STEP CONTENT */}
      <div className="session-content">

        {/* STEP 1 – PROVIDER */}
        {step === 1 && (
          <>
            <h2>Select Your Provider</h2>
            <div className="provider-row">
              {providers.map((p) => (
                <div
                  key={p.id}
                  className={`provider-card ${
                    provider === p.id ? "selected" : ""
                  }`}
                  onClick={() => setProvider(p.id)}
                >
                  <strong>{p.name}</strong>
                  <p>{p.role}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 2 – SERVICES */}
        {step === 2 && (
          <>
            <h2>Select Session Type</h2>
            <div className="service-list">
              {services.map((s) => (
                <div
                  key={s.title}
                  className={`service-card ${
                    service === s.title ? "selected" : ""
                  }`}
                  onClick={() => setService(s.title)}
                >
                  <span>{s.title}</span>
                  <span>₹{s.price}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 3 – SCHEDULE */}
        {step === 3 && (
          <>
            <h2>Choose Date & Time</h2>
            <div className="schedule">
              <input type="date" />
              <div className="time-grid">
                {["9:00", "10:00", "11:00", "2:00", "3:00", "4:00"].map((t) => (
                  <button key={t}>{t}</button>
                ))}
              </div>
            </div>
          </>
        )}

        {/* STEP 4 – PAYMENT */}
        {step === 4 && (
          <>
            <h2>Payment</h2>
            <div className="payment-box">
              <p><strong>Provider:</strong> {providers.find(p => p.id === provider)?.name}</p>
              <p><strong>Session:</strong> {service}</p>
              <p><strong>Total:</strong> ₹{services.find(s => s.title === service)?.price}</p>

              <button className="btn-primary full">Pay Now</button>
            </div>
          </>
        )}
      </div>

      {/* NAVIGATION */}
      <div className="session-nav">
        {step > 1 && (
          <button className="btn-outline" onClick={() => setStep(step - 1)}>
            Back
          </button>
        )}
        {step < 4 && (
          <button
            className="btn-primary"
            onClick={() => setStep(step + 1)}
            disabled={!canContinue}
          >
            Continue →
          </button>
        )}
      </div>
    </section>
    </div>
    <Footer />
    </>
  );
}
