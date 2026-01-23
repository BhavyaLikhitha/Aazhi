// import React, { useState } from "react";
// import "./session.css";
// import Header from "../Homepage/Navbar/Navbar";
// import Footer from "../Homepage/Footer/Footer";
// import woman1 from "../Homepage/Providers/women.png"
// import qr from "./qr.jpeg"
// import { useNavigate } from "react-router-dom";


// /* PROVIDERS */
// const providers = [
//   {
//     id: 1,
//     name: "Someshwari S",
//     role: "Psychologist",
//     focus: "Self Development, Identity, Relationship",
//     image: woman1,
//   },
//   {
//     id: 2,
//     name: "Udaya Priyanka P",
//     role: "MSW – Family & Child Welfare",
//     focus: "Children, Family, Parenting",
//     image: woman1,
//   },
// ];



// /* SERVICES (MASTER LIST) */
// const services = {
//   Individual: { title: "Individual Counseling", price: 799 },
//   relationship: { title: "Relationship Counseling", price: 799 },
//   self: { title: "Self Development", price: 799 },
//   guidance: { title: "Guidance", price: 899 },
//   parenting: { title: "Parenting Support", price: 799 },
//   family: { title: "Family Counseling", price: 799 },
//   awareness: { title: "Awareness Program", price: 799 },
//   couple: { title: "Couple Counseling", price: 1599 },
// };

// /* PROVIDER → ALLOWED SERVICES */
// const providerServices = {
//   1: ["Individual", "relationship", "self", "couple", "guidance", "awareness"],
//   2: ["parenting", "family", "guidance", "awareness"],
// };

// const steps = ["Counsellor", "Session Type", "Schedule", "Payment"];


// export default function Session() {
//   const [step, setStep] = useState(1);
//   const [provider, setProvider] = useState(null);
//   const [service, setService] = useState(null);

//   const [fullName, setFullName] = useState("");
// const [email, setEmail] = useState("");
// const [phone, setPhone] = useState("");
// const [notes, setNotes] = useState("");

// const [selectedDate, setSelectedDate] = useState("");
// const [selectedTime, setSelectedTime] = useState(null);

// const isFormValid =
//   fullName.trim() !== "" &&
//   email.trim() !== "" &&
//   phone.trim() !== "";

// const isDateEnabled = isFormValid;
// const isTimeEnabled = isFormValid && selectedDate;
// const today = new Date().toISOString().split("T")[0];


// const canContinue =
//   (step === 1 && provider) ||
//   (step === 2 && service) ||
//   (step === 3 && isFormValid && selectedDate && selectedTime) ||
//   step >= 4;


// // for step 4
// const [showPayment, setShowPayment] = useState(false);
// const [transactionId, setTransactionId] = useState("");
// const [showConfirmation, setShowConfirmation] = useState(false);

// const navigate = useNavigate();

//   return (
//     <>
//       <Header />

//       <section className="session-page">
//         <h1 className="session-title">Book Your Session</h1>
//         <p className="session-subtitle">
//           Take the first step towards your mental wellness journey.
//         </p>

//         {/* STEPPER */}
//         <div className="session-stepper">
//           {steps.map((label, i) => (
//             <div
//               key={label}
//               className={`session-step ${step >= i + 1 ? "active" : ""}`}
//             >
//               <div className="session-step-circle">
//                 {step > i + 1 ? "✓" : i + 1}
//               </div>
//               <span>{label} </span>
//             </div>
//           ))}
//         </div>

//         {/* STEP CONTENT */}
//         <div className="session-content">
//           {/* STEP 1 – PROVIDER */}
//           <div className="session-content">
//   {step === 1 && (
//     <>
//       <h2 className="counsellor-h2">Choose your counsellor</h2>

//       <div className="session-provider-grid">
//         {providers.map((p) => (
//           <div
//             key={p.id}
//             className={`session-provider-card ${
//               provider === p.id ? "session-selected" : ""
//             }`}
//             onClick={() => {
//               setProvider(p.id);
//               setService(null);
//             }}
//           >
//             {/* LEFT: IMAGE */}
//            <div className="session-provider-image">
//   <img src={p.image} alt={p.name} />
// </div>


//             {/* RIGHT: DETAILS */}
//             <div className="session-provider-details">
//               <h3 className="session-provider-name">{p.name}</h3>
//               <p className="session-provider-role">{p.role}</p>

//               <p className="session-provider-focus">
//                 <strong>Area of focus:</strong> {p.focus}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>
//   )}
// </div>

 

//           {/* STEP 2 – SERVICES */}
//           {step === 2 && provider && (
//             <>
//               <h2 className="counsellor-h2">Select Session Type</h2>
//               <div className="session-service-list">
//                 {providerServices[provider].map((key) => {
//                   const s = services[key];
//                   return (
//                     <div
//                       key={key}
//                       className={`session-service-card ${
//                         service === key ? "session-selected" : ""
//                       }`}
//                       onClick={() => setService(key)}
//                     >
//                       <span>{s.title}</span>
//                       <span>₹{s.price}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </>
//           )}

//           {/* STEP 3 – SCHEDULE
//           {step === 3 && (
//             <>
//               <h2 className="counsellor-h2">Choose Date & Time</h2>
//               <div className="session-schedule">
//                 <input type="date" />
//                 <div className="session-time-grid">
//                   {["9:00", "10:00", "11:00", "2:00", "3:00", "4:00"].map(
//                     (t) => (
//                       <button key={t}>{t}</button>
//                     )
//                   )}
//                 </div>
//               </div>
//             </>
//           )} */}
//           {/* STEP 3 – SCHEDULE */}
//         {/* STEP 3 – SCHEDULE */}
// {/* STEP 3 – SCHEDULE */}
// {step === 3 && (
//   <>
//     <h2 className="counsellor-h2">Choose Date & Time</h2>

//     <div className="session-schedule-grid">
//       {/* LEFT: FORM */}
//       <div className="session-form">
//         <div className="session-form-group">
//           <label>Full Name *</label>
//           <input
//             type="text"
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="session-form-group">
//           <label>Email *</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//           />
//         </div>

//         <div className="session-form-group">
//           <label>Phone Number *</label>
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Enter your phone number"
//           />
//         </div>

//         <div className="session-form-group">
//           <label>Notes</label>
//           <textarea
//             value={notes}
//             onChange={(e) => setNotes(e.target.value)}
//             placeholder="Optional notes"
//           />
//         </div>
//       </div>

//       {/* RIGHT: DATE & TIME */}
//       <div className="session-datetime">
//         <div className="session-date-picker">
//           <label>Select Date</label>
//           <input
//             type="date"
//             min={today}
//             disabled={!isDateEnabled}
//             value={selectedDate}
//             onChange={(e) => {
//               setSelectedDate(e.target.value);
//               setSelectedTime(null); // reset time on date change
//             }}
//           />

//           {!isFormValid && (
//             <p className="session-hint">
//               Fill required details to select date
//             </p>
//           )}
//         </div>

//         <div className="session-time-slots">
//           <label>Select Time Slot</label>
//           <div className="session-time-grid">
//             {[
//               "09:00 AM",
//               "10:00 AM",
//               "11:00 AM",
//               "12:00 PM",
//               "01:00 PM",
//               "02:00 PM",
//               "03:00 PM",
//               "04:00 PM",
//               "05:00 PM",
//             ].map((time) => (
//               <button
//                 key={time}
//                 disabled={!isTimeEnabled}
//                 className={`session-time-slot ${
//                   selectedTime === time ? "selected" : ""
//                 }`}
//                 onClick={() => setSelectedTime(time)}
//               >
//                 {time}
//               </button>
//             ))}
//           </div>

//           {!selectedDate && isFormValid && (
//             <p className="session-hint">
//               Select a date to enable time slots
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   </>
// )}


//           {/* STEP 4 – PAYMENT */}
//          {/* STEP 4 – PAYMENT */}
// {step === 4 && (
//   <>
//     <h2 className="counsellor-h2">Payment</h2>

//     <div className="session-payment-box">
//       {/* SUMMARY */}
//       <div className="session-summary">
//         <p>
//           <strong>Counsellor:</strong>{" "}
//           {providers.find((p) => p.id === provider)?.name}
//         </p>
//         <p>
//           <strong>Session:</strong> {services[service]?.title}
//         </p>
//         <p>
//           <strong>Booked Date:</strong> {selectedDate}
//         </p>
//         <p>
//           <strong>Booked Time:</strong> {selectedTime}
//         </p>
//         <p className="session-total">
//           <strong>Total:</strong> ₹{services[service]?.price}
//         </p>
//       </div>

//       {/* PAY NOW */}
//       {!showPayment && (
//         <button
//           className="paynow-btn"
//           onClick={() => setShowPayment(true)}
//         >
//           Pay Now
//         </button>
//       )}

//       {/* PAYMENT DETAILS */}
//       {showPayment && (
//         <div className="session-upi-box">
//           <div className="session-qr">
//            <img src={qr} alt="QR Code" className="qr"/>
//             {/* <div className="session-qr-placeholder">QR</div> */}
//           </div>

//           <p className="session-upi-id">
//             UPI ID: <strong>navil.counselingservices@oksbi</strong>
//           </p>

//           <div className="session-form-group">
//             <label className="trans">Please enter Transaction ID *</label>
//             <input
//               type="text"
//               value={transactionId}
//               onChange={(e) => setTransactionId(e.target.value)}
//               placeholder="Enter UPI Transaction ID"
//             />
//           </div>

//           <button
//             className="submit-payment-btn"
//             disabled={!transactionId.trim()}
//             onClick={() => setShowConfirmation(true)}
//           >
//             Submit Payment Details
//           </button>
//         </div>
//       )}
//     </div>
//   </>
// )}
//   {/* NAV */}
//         <div className="session-nav">
//           {step > 1 && (
//             <button
//               className="session-btn-outline"
//               onClick={() => setStep(step - 1)}
//             >
//               Back
//             </button>
//           )}

//           {step < 4 && (
//             <button
//               className="session-btn-primary"
//               onClick={() => setStep(step + 1)}
//               disabled={!canContinue}
//             >
//               Continue
//             </button>
//           )}
//           </div>
//         </div>
//         {showConfirmation && (
//   <div className="session-modal-overlay">
//     <div className="session-modal">
//       <h3>Payment Submitted</h3>
//       <p>
//         We will send you a confirmation with booking details shortly after
//         verifying the payment.
//       </p>
//       <p>Thank you.</p>
//       <button
//   className="close-btn"
//   onClick={() => {
//     setShowConfirmation(false);

//     setTimeout(() => {
//       navigate("/");
//     }, 1000);
//   }}
// >
//   Close
// </button>

//     </div>
//   </div>
// )}

//       </section>

//       <Footer />
//     </>
//   );
// }
import React, { useState } from "react";
import "./session.css";
import Header from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import woman1 from "../Homepage/Providers/women.png";
import qr from "./qr.jpeg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

/* PROVIDERS */
const providers = [
  {
    id: 1,
    name: "Someshwari S",
    role: "Psychologist",
    focus: "Self Development, Identity, Relationship",
    image: woman1,
  },
  {
    id: 2,
    name: "Udaya Priyanka P",
    role: "MSW – Family & Child Welfare",
    focus: "Children, Family, Parenting",
    image: woman1,
  },
];

/* SERVICES */
const services = {
  Individual: { title: "Individual Counseling", price: 799 },
  relationship: { title: "Relationship Counseling", price: 799 },
   couple: { title: "Couple Counseling", price: 1599 },
   family: { title: "Family & Parenting Support", price: 799 },
  self: { title: "Personal Growth & Self-Development", price: 799 },
  guidance: { title: "Academic, Career & Life Guidance", price: 899 },
  parenting: { title: "Stress, Anxiety & Emotional Well-Being", price: 799 },
  awareness: { title: "Mental Health Awareness Programs", price: 799 },
 
};

const providerServices = {
  1: ["Individual", "relationship", "self", "couple", "guidance", "awareness"],
  2: ["parenting", "family", "guidance", "awareness"],
};

const steps = ["Counsellor", "Session Type", "Schedule", "Payment"];

export default function Session() {
  const [step, setStep] = useState(1);
  const [provider, setProvider] = useState(null);
  const [service, setService] = useState(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState(null);

  const [showPayment, setShowPayment] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const navigate = useNavigate();
  const today = new Date().toISOString().split("T")[0];

  const isFormValid =
    fullName.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "";

  const isDateEnabled = isFormValid;
  const isTimeEnabled = isFormValid && selectedDate;

  const canContinue =
    (step === 1 && provider) ||
    (step === 2 && service) ||
    (step === 3 && isFormValid && selectedDate && selectedTime) ||
    step >= 4;

  /* BACKEND SUBMISSION */
  const submitBookingToBackend = async () => {
    const payload = {
      counsellorName: providers.find((p) => p.id === provider)?.name,
      sessionName: services[service]?.title,
      price: services[service]?.price,
      fullName,
      phoneNumber: phone,
      email,
      notes,
      sessionDate: selectedDate,
      sessionTime: selectedTime,
      transactionId,
    };

    try {
      const res = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error();

      setShowConfirmation(true);
    } catch {
      toast.error("Failed to submit booking. Please try again.");
      // alert("Failed to submit booking. Please try again.");
    }
  };

  return (
    <>
      <Header />

      <section className="session-page">
        <h1 className="session-title">Book Your Session</h1>
        <p className="session-subtitle">
          Take the first step towards your mental wellness journey.
        </p>

        {/* STEPPER */}
        <div className="session-stepper">
          {steps.map((label, i) => (
            <div
              key={label}
              className={`session-step ${step >= i + 1 ? "active" : ""}`}
            >
              <div className="session-step-circle">
                {step > i + 1 ? "✓" : i + 1}
              </div>
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <>
            <h2 className="counsellor-h2">Choose your counsellor</h2>
            <div className="session-provider-grid">
              {providers.map((p) => (
                <div
                  key={p.id}
                  className={`session-provider-card ${
                    provider === p.id ? "session-selected" : ""
                  }`}
                  onClick={() => {
                    setProvider(p.id);
                    setService(null);
                  }}
                >
                  <div className="session-provider-image">
                    <img src={p.image} alt={p.name} />
                  </div>
                  <div className="session-provider-details">
                    <h3 className="session-provider-name">{p.name}</h3>
                    <p className="session-provider-role">{p.role}</p>
                    <p className="session-provider-focus">
                      <strong>Area of focus:</strong> {p.focus}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && provider && (
          <>
            <h2 className="counsellor-h2">Select Session Type</h2>
            <h3 className="counsellor-h3">Note: If you are confused on what type of counselling to select, then select Individual counselling</h3>
            <div className="session-service-list">
              {providerServices[provider].map((key) => {
                const s = services[key];
                return (
                  <div
                    key={key}
                    className={`session-service-card ${
                      service === key ? "session-selected" : ""
                    }`}
                    onClick={() => setService(key)}
                  >
                    <span>{s.title}</span>
                    <span>₹{s.price}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <>
            <h2 className="counsellor-h2">Choose Date & Time</h2>

            <div className="session-schedule-grid">
              <div className="session-form">
                <div className="session-form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="session-form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="session-form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div className="session-form-group">
                  <label>Notes</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                </div>
              </div>

              <div className="session-datetime">
                <div className="session-date-picker">
                  <label>Select Date</label>
                  <input
                    type="date"
                    min={today}
                    disabled={!isDateEnabled}
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setSelectedTime(null);
                    }}
                  />
                </div>

                <div className="session-time-slots">
                  <label>Select Time Slot</label>
                  <div className="session-time-grid">
                    {[
                      "09:00 AM",
                      "10:00 AM",
                      "11:00 AM",
                      "12:00 PM",
                      "01:00 PM",
                      "02:00 PM",
                      "03:00 PM",
                      "04:00 PM",
                      "05:00 PM",
                    ].map((time) => (
                      <button
                        key={time}
                        disabled={!isTimeEnabled}
                        className={`session-time-slot ${
                          selectedTime === time ? "selected" : ""
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* STEP 4
       {step === 4 && ( 
        <> 
        <h2 className="counsellor-h2">Payment</h2> 
        <div className="session-payment-box"> {/* SUMMARY */}
           {/* <div className="session-summary"> 
            <p> <strong>Counsellor:</strong>{" "} {providers.find((p) => p.id === provider)?.name} </p> 
            <p> <strong>Session:</strong> {services[service]?.title} </p> 
            <p> <strong>Booked Date:</strong> {selectedDate} </p> 
            <p> <strong>Booked Time:</strong> {selectedTime} </p> 
            <p className="session-total"> <strong>Total:</strong> ₹{services[service]?.price} </p> 
            </div>

            {!showPayment && (
              <button
                className="paynow-btn"
                onClick={() => setShowPayment(true)}
              >
                Pay Now
              </button>
            )}

            {showPayment && (
              <div className="session-upi-box">
                <img src={qr} alt="QR" className="qr" />

                <div className="session-form-group">
                  <label className="trans">
                    Please enter Transaction ID *
                  </label>
                  <input
                    type="text"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                </div>

                <button
                  className="submit-payment-btn"
                  disabled={!transactionId.trim()}
                  onClick={submitBookingToBackend}
                >
                  Submit Payment Details
                </button>
              </div>
            )}
          </>
        )}  */}

        {step === 4 && (
  <>
    <h2 className="counsellor-h2">Payment</h2>

    <div className="session-payment-box">
      {/* SUMMARY */}
      <div className="session-summary">
        <p>
          <strong>Counsellor:</strong>{" "}
          {providers.find((p) => p.id === provider)?.name}
        </p>
        <p>
          <strong>Session:</strong> {services[service]?.title}
        </p>
        <p>
          <strong>Booked Date:</strong> {selectedDate}
        </p>
        <p>
          <strong>Booked Time:</strong> {selectedTime}
        </p>
        <p className="session-total">
          <strong>Total:</strong> ₹{services[service]?.price}
        </p>
      </div>

      {!showPayment && (
        <button
          className="paynow-btn"
          onClick={() => setShowPayment(true)}
        >
          Pay Now
        </button>
      )}

      {showPayment && (
                <div className="session-upi-box">
          <div className="session-qr">
           <img src={qr} alt="QR Code" className="qr"/>
            {/* <div className="session-qr-placeholder">QR</div> */}
          </div>

         <p className="session-upi-id">
  UPI ID: <strong>navil.counselingservices@oksbi</strong>
  <button
    className="copy-upi-btn"
    onClick={() => {
      navigator.clipboard.writeText("navil.counselingservices@oksbi");
       toast.success("UPI ID copied to clipboard");
      
    }}
  >
    Copy UPI
  </button>
</p>


                 <div className="session-form-group">
            <label className="trans">Please enter Transaction ID *</label>
            <input
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter UPI Transaction ID"
            />
          </div>


                <button
                  className="submit-payment-btn"
                  disabled={!transactionId.trim()}
                  onClick={submitBookingToBackend}
                >
                  Submit Payment Details
                </button>
              </div>
      )}
    </div>
  </>
)}


        {/* NAV */}
        <div className="session-nav">
          {step > 1 && (
            <button
              className="session-btn-outline"
              onClick={() => setStep(step - 1)}
            >
              Back
            </button>
          )}

          {step < 4 && (
            <button
              className="session-btn-primary"
              onClick={() => setStep(step + 1)}
              disabled={!canContinue}
            >
              Continue
            </button>
          )}
        </div>

        {/* CONFIRMATION */}
        {showConfirmation && (
          <div className="session-modal-overlay">
            <div className="session-modal">
              <h3>Payment Submitted</h3>
              <p>
                We will send you a confirmation with booking details shortly
                after verifying the payment.
              </p>
              <button
                className="close-btn"
                onClick={() => navigate("/")}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}
