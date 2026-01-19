import React, { useEffect, useMemo, useState } from "react";
import "./testimonials.css";

const testimonials = [
  { rating: 5, text: "Amazing support, I finally feel heard.", author: "Anonymous", date: "1st Aug, 2024" },
  { rating: 4, text: "Great insights and tools to handle stress.", author: "Neha K.", date: "15th Jul, 2024" },
  { rating: 5, text: "Helped me overcome my anxiety.", author: "Rahul N.", date: "2nd Jun, 2024" },
  { rating: 3, text: "Good overall, but sessions felt rushed sometimes.", author: "Client A.", date: "10th May, 2024" },
  { rating: 5, text: "Warm, welcoming, and helpful. Highly recommend.", author: "Meera S.", date: "5th Apr, 2024" },
  { rating: 4, text: "Listens without judgment. A great experience.", author: "Vinod P.", date: "12th Mar, 2024" },
  { rating: 5, text: "The best mental health support I’ve received.", author: "Smita B.", date: "28th Feb, 2024" },
  { rating: 5, text: "Simple tools that made a big difference.", author: "Arun M.", date: "10th Feb, 2024" },
  { rating: 4, text: "Took time to understand my background. Very patient.", author: "Sana Q.", date: "28th Jan, 2024" },
  { rating: 5, text: "Excellent support. Thank you for everything.", author: "Zara N.", date: "10th Jan, 2024" },
];

export default function Testimonials() {
  const [center, setCenter] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      // left card becomes center (i.e., move center backward by 1)
    //   setCenter((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setCenter((prev) => (prev - 1) % testimonials.length);

    }, 3000);

    return () => clearInterval(id);
  }, []);

  // We render all cards, but position only the 7 nearest (others hidden)
  const positions = useMemo(() => {
    // slots relative to center: -3 -2 -1 0 +1 +2 +3
    const rels = [-3, -2, -1, 0, 1, 2, 3];

    const map = new Map(); // index -> slot
    for (const r of rels) {
      const idx = (center + r + testimonials.length) % testimonials.length;
      map.set(idx, r);
    }
    return map;
  }, [center]);

  return (
    <section className="t-section">
      <h2 className="t-title">What our client say about us</h2>

      <div className="t-stage">
        {testimonials.map((t, i) => {
          const slot = positions.get(i);

          // if not in visible slots, hide
          if (slot === undefined) return null;

          const isActive = slot === 0;
          return (
            <div
              key={`${t.author}-${t.date}-${i}`}
              className={`t-card ${isActive ? "active" : ""}`}
              style={{ "--slot": slot }}
            >
              <div className="t-stars">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className={j < t.rating ? "star filled" : "star"}>★</span>
                ))}
              </div>

              <p className="t-text">"{t.text}"</p>
              <p className="t-author">{t.author}</p>
              <p className="t-date">{t.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
