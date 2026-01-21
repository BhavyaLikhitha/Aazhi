import Testimonial from "../Models/Testinomial.js";

/**
 * GET approved testimonials
 */
export const getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ approved: true })
      .sort({ createdAt: 1 });

    res.status(200).json({
      success: true,
      data: testimonials,
    });
  } catch (error) {
    console.error("Fetch testimonials error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/**
 * POST new testimonial (pending approval)
 */
export const createTestimonial = async (req, res) => {
  try {
    const { author, text, rating } = req.body;

    if (!author || !text || !rating) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const testimonial = await Testimonial.create({
      author,
      text,
      rating,
    //   approved: false,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial submitted successfully",
      data: testimonial,
    });
  } catch (error) {
    console.error("Create testimonial error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};
