import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
    //   maxlength: 10, // initials or short name
    },
    text: {
      type: String,
      required: true,
      maxlength: 1000,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    approved: {
      type: Boolean,
      default: true, // admin moderation later
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Testimonial", testimonialSchema);
