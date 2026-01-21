import express from "express";
import {
  createBooking,
  getAllBookings,
  updateBookingStatus
} from "../Controllers/bookingController.js";

const router = express.Router();

/**
 * Create booking (User submits form)
 * POST /api/bookings
 */
router.post("/", createBooking);

/**
 * Get all bookings (Admin dashboard)
 * GET /api/bookings
 */
router.get("/", getAllBookings);

/**
 * Approve / Deny booking (Admin action)
 * PATCH /api/bookings/:id
 */
router.patch("/:id", updateBookingStatus);

export default router;
