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


// import React, { useEffect, useMemo, useState } from "react";
// import "./testimonials.css";

// export default function Testimonials() {
//   const [center, setCenter] = useState(0);
//   const [showForm, setShowForm] = useState(false);
// const [isSubmitting, setIsSubmitting] = useState(false);
// const [error, setError] = useState("");
// const [testimonials, setTestimonials] = useState(initialTestimonials);

//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);
//   const [name, setName] = useState("");
//   const [feedback, setFeedback] = useState("");

//   useEffect(() => {
//     const id = setInterval(() => {
//       setCenter((prev) => (prev - 1 + testimonials.length) % testimonials.length);
//     }, 3000);

//     return () => clearInterval(id);
//   }, []);

//   const positions = useMemo(() => {
//     const rels = [-3, -2, -1, 0, 1, 2, 3];
//     const map = new Map();

//     for (const r of rels) {
//       const idx = (center + r + testimonials.length) % testimonials.length;
//       map.set(idx, r);
//     }
//     return map;
//   }, [center]);

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   if (!rating) {
//     setError("Please select a rating");
//     return;
//   }

//   setIsSubmitting(true);
//   setError("");

//   try {
//     const res = await fetch("http://localhost:5000/api/testimonials", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         author: name.trim(),
//         text: feedback.trim(),
//         rating,
//       }),
//     });

//     if (!res.ok) throw new Error("Submission failed");

//     // ✅ Append as 17th testimonial
//     setTestimonials((prev) => [
//       ...prev,
//       { rating, text: feedback, author: name },
//     ]);

//     // Reset
//     setRating(0);
//     setHover(0);
//     setName("");
//     setFeedback("");
//     setShowForm(false);
//   } catch (err) {
//     setError(err.message);
//   } finally {
//     setIsSubmitting(false);
//   }
// };


//   return (
//     <section className="t-section">
//       <h2 className="t-title">What our clients say about us</h2>

//       <div className="t-stage">
//         {testimonials.map((t, i) => {
//           const slot = positions.get(i);
//           if (slot === undefined) return null;

//           return (
//             <div
//               key={i}
//               className={`t-card ${slot === 0 ? "active" : ""}`}
//               style={{ "--slot": slot }}
//             >
//               <div className="t-stars">
//                 {[...Array(5)].map((_, j) => (
//                   <span
//                     key={j}
//                     className={`star ${j < t.rating ? "filled" : ""}`}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>

//               <p className="t-text">"{t.text}"</p>
//               <p className="t-author">– {t.author}</p>
//             </div>
//           );
//         })}
//       </div>

//       <button
//         className="add-testimonial-btn"
//         onClick={() => setShowForm(!showForm)}
//       >
//         Add Testimonial
//       </button>

//       {showForm && (
//         <form className="testimonial-form" onSubmit={handleSubmit}>
//           <div className="form-stars">
//             {[...Array(5)].map((_, i) => {
//               const val = i + 1;
//               return (
//                 <span
//                   key={val}
//                   className={`star ${val <= (hover || rating) ? "filled" : ""}`}
//                   onClick={() => setRating(val)}
//                   onMouseEnter={() => setHover(val)}
//                   onMouseLeave={() => setHover(0)}
//                 >
//                   ★
//                 </span>
//               );
//             })}
//           </div>

//           <input
//             type="text"
//             placeholder="Your name / initials"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <textarea
//             placeholder="Your feedback"
//             value={feedback}
//             onChange={(e) => setFeedback(e.target.value)}
//             required
//           />
//       {error && <p className="form-error">{error}</p>}

//         <button type="submit" className="submit-btn" disabled={isSubmitting}>
//   {isSubmitting ? "Submitting..." : "Submit"}
// </button>

//         </form>
//       )}
//     </section>
//   );
// }

import React, { useEffect, useMemo, useState } from "react";
import "./testimonials.css";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [center, setCenter] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");

  /* ---------------- FETCH TESTIMONIALS (GET) ---------------- */
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        const data = await res.json();

        if (data.success) {
          setTestimonials(data.data);
          setCenter(0);
        }
      } catch (err) {
        console.error("Failed to load testimonials");
      }
    };

    fetchTestimonials();
  }, []);

  /* ---------------- CAROUSEL AUTO SLIDE ---------------- */
  useEffect(() => {
    if (!testimonials.length) return;

    const id = setInterval(() => {
      setCenter(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    }, 3000);

    return () => clearInterval(id);
  }, [testimonials]);

  /* ---------------- POSITION CALCULATION ---------------- */
  const positions = useMemo(() => {
    if (!testimonials.length) return new Map();

    const rels = [-3, -2, -1, 0, 1, 2, 3];
    const map = new Map();

    for (const r of rels) {
      const idx = (center + r + testimonials.length) % testimonials.length;
      map.set(idx, r);
    }
    return map;
  }, [center, testimonials]);

  /* ---------------- SUBMIT TESTIMONIAL (POST) ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!rating) {
      setError("Please select a rating");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          author: name.trim(),
          text: feedback.trim(),
          rating,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      // Optimistic append (will be pending approval in backend)
      setTestimonials((prev) => [
        ...prev,
        { author: name, text: feedback, rating },
      ]);

      // Reset form
      setRating(0);
      setHover(0);
      setName("");
      setFeedback("");
      setShowForm(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ---------------- RENDER ---------------- */
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
                  className={`star ${
                    val <= (hover || rating) ? "filled" : ""
                  }`}
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

          {error && <p className="form-error">{error}</p>}

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      )}
    </section>
  );
}
