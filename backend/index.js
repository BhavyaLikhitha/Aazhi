import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import debugLib from "debug";
import authRoutes from "./Routes/authRoutes.js";
import bookingRoutes from "./Routes/bookingRoutes.js";
import testimonialRoutes from "./Routes/testimonialRoutes.js";
import adminBlogRoutes from "./Routes/adminBlogRoutes.js";
import publicBlogRoutes from "./Routes/publicBlogsRoutes.js";

dotenv.config();

const debug = debugLib("app:server");
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_CONNECTION;

// Validate env
if (!MONGO_URI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}

// MongoDB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  });

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/testimonials", testimonialRoutes);
// Admin blog routes
app.use("/api/admin", adminBlogRoutes);

// Public blog routes
app.use("/api", publicBlogRoutes);



// Start server
app.listen(PORT, () => {
  debug(`🚀 Server running on port ${PORT}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
