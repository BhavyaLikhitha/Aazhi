// import React, { useEffect, useMemo, useState } from "react";
// import "./testimonials.css";

// const testimonials = [
//   { rating: 5, text: "Amazing support, I finally feel heard.", author: "Anonymous", date: "1st Aug, 2024" },
//   { rating: 4, text: "Great insights and tools to handle stress.", author: "Neha K.", date: "15th Jul, 2024" },
//   { rating: 5, text: "Helped me overcome my anxiety.", author: "Rahul N.", date: "2nd Jun, 2024" },
//   { rating: 3, text: "Good overall, but sessions felt rushed sometimes.", author: "Client A.", date: "10th May, 2024" },
//   { rating: 5, text: "Warm, welcoming, and helpful. Highly recommend.", author: "Meera S.", date: "5th Apr, 2024" },
//   { rating: 4, text: "Listens without judgment. A great experience.", author: "Vinod P.", date: "12th Mar, 2024" },
//   { rating: 5, text: "The best mental health support I’ve received.", author: "Smita B.", date: "28th Feb, 2024" },
//   { rating: 5, text: "Simple tools that made a big difference.", author: "Arun M.", date: "10th Feb, 2024" },
//   { rating: 4, text: "Took time to understand my background. Very patient.", author: "Sana Q.", date: "28th Jan, 2024" },
//   { rating: 5, text: "Excellent support. Thank you for everything.", author: "Zara N.", date: "10th Jan, 2024" },
// ];

// export default function Testimonials() {
//   const [center, setCenter] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       // left card becomes center (i.e., move center backward by 1)
//     //   setCenter((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     setCenter((prev) => (prev - 1) % testimonials.length);

//     }, 3000);

//     return () => clearInterval(id);
//   }, []);

//   // We render all cards, but position only the 7 nearest (others hidden)
//   const positions = useMemo(() => {
//     // slots relative to center: -3 -2 -1 0 +1 +2 +3
//     const rels = [-3, -2, -1, 0, 1, 2, 3];

//     const map = new Map(); // index -> slot
//     for (const r of rels) {
//       const idx = (center + r + testimonials.length) % testimonials.length;
//       map.set(idx, r);
//     }
//     return map;
//   }, [center]);

//   return (
//     <section className="t-section">
//       <h2 className="t-title">What our client say about us</h2>
        
//       <div className="t-stage">
//         {testimonials.map((t, i) => {
//           const slot = positions.get(i);

//           // if not in visible slots, hide
//           if (slot === undefined) return null;

//           const isActive = slot === 0;
//           return (
//             <div
//               key={`${t.author}-${t.date}-${i}`}
//               className={`t-card ${isActive ? "active" : ""}`}
//               style={{ "--slot": slot }}
//             >
//               <div className="t-stars">
//                 {[...Array(5)].map((_, j) => (
//                   <span key={j} className={j < t.rating ? "star filled" : "star"}>★</span>
//                 ))}
//               </div>

//               <p className="t-text">"{t.text}"</p>
//               <p className="t-author">{t.author}</p>
//               <p className="t-date">{t.date}</p>
//             </div>
//           );
//         })}
//       </div>
//         <button
//               className="add-testimonial-btn"
//               onClick={() => navigate("/add-testimonial")}
//             >
//               Add Testimonial
//             </button>
//     </section>
//   );
// }


import React, { useEffect, useMemo, useState } from "react";
import "./testimonials.css";

const testimonials = [
  {
    rating: 4,
    text: "Someshwari creates a warm, safe space that makes it easy to open up. She encourages exercise for self-discovery; she is always available through chats for support and takes time to deeply analyse and identify root causes with genuine understanding.",
    author: "PP",
  },
  {
    rating: 4,
    text: "Ms. Someshwari offered insightful guidance, sharing her perspective in a way that helped me see myself and others in a new light.",
    author: "GP",
  },
  {
    rating: 5,
    text: "Thank you so much ma’am 🌸. Your guidance was very realistic and helpful; it gave me clarity on how to move forward.",
    author: "S",
  },
  {
    rating: 5,
    text: "She listens to all my thoughts and patiently guides me step by step and never misses to answer any of my query.",
    author: "M",
  },
  {
    rating: 5,
    text: "She is easy to talk to and listens compassionately but also nudges to think outside our own perspective.",
    author: "PV",
  },
  {
    rating: 5,
    text: "Will totally recommend 10/10",
    author: "S",
  },
  {
    rating: 5,
    text: "Her HomeWorks and practice are truly very helpful for understanding myself and getting into my own self.",
    author: "K",
  },
  {
    rating: 4,
    text: "Every session had activities and worksheets. The intensity felt purposeful and productive.",
    author: "A",
  },
  {
    rating: 5,
    text: "I felt heard. I learned to accept myself fully and trust myself.",
    author: "AY",
  },
  {
    rating: 5,
    text: "After just three sessions, I got a clearer view of my situation and could make my own decisions.",
    author: "G",
  },
  {
    rating: 5,
    text: "Somesh took the time to delve into my thoughts and emotions, making me feel genuinely understood.",
    author: "D",
  },
  {
    rating: 5,
    text: "Thank you for the session. Got more insights from you.",
    author: "PR",
  },
  {
    rating: 5,
    text: "Works really well for me. I could open up without any fear of judgement from day one.",
    author: "BB",
  },
  {
    rating: 5,
    text: "I am being consistent now with my work and really wanted to let you know.",
    author: "B",
  },
  {
    rating: 5,
    text: "You are such an inspiration to me. Truly grateful to have you as my therapist.",
    author: "G",
  },
  {
    rating: 5,
    text: "Nowadays my anger is under my control, feels so good.",
    author: "S",
  },
];

export default function Testimonials() {
  const [center, setCenter] = useState(0);
  const [showForm, setShowForm] = useState(false);

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const id = setInterval(() => {
      setCenter((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, 3000);

    return () => clearInterval(id);
  }, []);

  const positions = useMemo(() => {
    const rels = [-3, -2, -1, 0, 1, 2, 3];
    const map = new Map();

    for (const r of rels) {
      const idx = (center + r + testimonials.length) % testimonials.length;
      map.set(idx, r);
    }
    return map;
  }, [center]);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      rating,
      author: name,
      text: feedback,
    });

    setRating(0);
    setHover(0);
    setName("");
    setFeedback("");
    setShowForm(false);
  };

  return (
    <section className="t-section">
      <h2 className="t-title">What our clients say about us</h2>

      <div className="t-stage">
        {testimonials.map((t, i) => {
          const slot = positions.get(i);
          if (slot === undefined) return null;

          return (
            <div
              key={i}
              className={`t-card ${slot === 0 ? "active" : ""}`}
              style={{ "--slot": slot }}
            >
              <div className="t-stars">
                {[...Array(5)].map((_, j) => (
                  <span
                    key={j}
                    className={`star ${j < t.rating ? "filled" : ""}`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <p className="t-text">"{t.text}"</p>
              <p className="t-author">– {t.author}</p>
            </div>
          );
        })}
      </div>

      <button
        className="add-testimonial-btn"
        onClick={() => setShowForm(!showForm)}
      >
        Add Testimonial
      </button>

      {showForm && (
        <form className="testimonial-form" onSubmit={handleSubmit}>
          <div className="form-stars">
            {[...Array(5)].map((_, i) => {
              const val = i + 1;
              return (
                <span
                  key={val}
                  className={`star ${val <= (hover || rating) ? "filled" : ""}`}
                  onClick={() => setRating(val)}
                  onMouseEnter={() => setHover(val)}
                  onMouseLeave={() => setHover(0)}
                >
                  ★
                </span>
              );
            })}
          </div>

          <input
            type="text"
            placeholder="Your name / initials"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Your feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          />

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
