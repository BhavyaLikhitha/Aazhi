import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import Admin from "../Models/Admin.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_CONNECTION;
const seedAdmin = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected");

    const existingAdmin = await Admin.findOne({
      email: process.env.ADMIN_EMAIL
    });

    if (existingAdmin) {
      console.log("⚠️ Admin already exists. Skipping creation.");
      process.exit(0);
    }
    const hashedPassword = await bcrypt.hash(
  process.env.ADMIN_PASSWORD,
  10
);

    await Admin.create({
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword
    });

    console.log("✅ Admin user created successfully");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();

// after this run 'node Scripts/seedAdmin.js' to create admin user