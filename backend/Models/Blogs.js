import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    readTime: {
      type: Number, // minutes
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    coverImage: {
      type: String, // image URL (Cloudinary / S3 / local later)
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", blogSchema);
