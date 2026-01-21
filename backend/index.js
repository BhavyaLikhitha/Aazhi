import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import debugLib from "debug";
import authRoutes from "./Routes/authRoutes.js";



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

// Start server
app.listen(PORT, () => {
  debug(`🚀 Server running on port ${PORT}`);
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
