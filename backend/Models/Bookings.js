import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    counsellorName: {
      type: String,
      required: true,
      trim: true
    },

    sessionName: {
      type: String,
      required: true,
      trim: true
    },

    fullName: {
      type: String,
      required: true,
      trim: true
    },

    phoneNumber: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },

    notes: {
      type: String,
      default: ""
    },

    sessionDate: {
      type: String,
      required: true
    },

    sessionTime: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
    },
    
    transactionId: {
      type: String,
      required: true,
      unique: true
    },

    status: {
      type: String,
      enum: ["pending", "approved", "denied"],
      default: "pending"
    }
  },
  {
    timestamps: true
  }
);

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
