import express from "express";
import {
  getTestimonials,
  createTestimonial,
} from "../Controllers/testimonialController.js";

const router = express.Router();

// GET approved testimonials
router.get("/", getTestimonials);

// POST new testimonial
router.post("/", createTestimonial);

export default router;
