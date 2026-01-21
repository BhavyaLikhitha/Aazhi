import mongoose from "mongoose";
import dotenv from "dotenv";
import Testimonial from "../Models/Testinomial.js";

dotenv.config();

const testimonials = [
  {
    author: "PP",
    rating: 4,
    text: "Someshwari creates a warm, safe space that makes it easy to open up...",
    approved: true,
  },
  {
    author: "GP",
    rating: 4,
    text: "Ms. Someshwari offered insightful guidance, sharing her perspective...",
    approved: true,
  },
  {
    author: "S",
    rating: 5,
    text: "Thank you so much ma’am 🌸. Your guidance was very realistic...",
    approved: true,
  },
  {
    author: "M",
    rating: 5,
    text: "She listens to all my thoughts and patiently guides me step by step...",
    approved: true,
  },
  {
    author: "PV",
    rating: 5,
    text: "She is easy to talk to and listens compassionately...",
    approved: true,
  },
  {
    author: "S",
    rating: 5,
    text: "Will totally recommend 10/10",
    approved: true,
  },
  {
    author: "K",
    rating: 5,
    text: "Her HomeWorks and practice are truly very helpful...",
    approved: true,
  },
  {
    author: "A",
    rating: 4,
    text: "Every session had activities and worksheets...",
    approved: true,
  },
  {
    author: "AY",
    rating: 5,
    text: "I felt heard. I learned to accept myself fully...",
    approved: true,
  },
  {
    author: "G",
    rating: 5,
    text: "After just three sessions, I got a clearer view...",
    approved: true,
  },
  {
    author: "D",
    rating: 5,
    text: "Somesh took the time to delve into my thoughts...",
    approved: true,
  },
  {
    author: "PR",
    rating: 5,
    text: "Thank you for the session. Got more insights...",
    approved: true,
  },
  {
    author: "BB",
    rating: 5,
    text: "Works really well for me. I could open up...",
    approved: true,
  },
  {
    author: "B",
    rating: 5,
    text: "I am being consistent now with my work...",
    approved: true,
  },
  {
    author: "G",
    rating: 5,
    text: "You are such an inspiration to me...",
    approved: true,
  },
  {
    author: "S",
    rating: 5,
    text: "Nowadays my anger is under my control...",
    approved: true,
  },
];

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION);

    await Testimonial.deleteMany(); // optional (use once)
    await Testimonial.insertMany(testimonials);

    console.log("Testimonials seeded successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seed();

