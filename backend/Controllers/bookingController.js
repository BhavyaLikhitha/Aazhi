import Booking from "../Models/Bookings.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking submitted successfully",
      booking
    });
    console.log("Booking created:", booking);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Transaction ID already exists"
      });
    }
    console.error("Error creating booking:", error);
    res.status(500).json({
      message: "Failed to create booking",
      error: error.message
    });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch bookings"
    });
  }
};

export const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status, meetLinkSent } = req.body;

  const updateData = {};

  // Approve / Deny logic
  if (status !== undefined) {
    if (!["approved", "denied"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }
    updateData.status = status;

    // 🔐 IMPORTANT: when moving to processed, reset meetLinkSent
    updateData.meetLinkSent = "pending";
  }

  // Meet link decision logic (YES / NO buttons)
  if (meetLinkSent !== undefined) {
    if (!["yes", "no"].includes(meetLinkSent)) {
      return res.status(400).json({
        message: "Invalid meetLinkSent value"
      });
    }
    updateData.meetLinkSent = meetLinkSent;
  }

  try {
    const updated = await Booking.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.json({ booking: updated });
  } catch (err) {
    res.status(500).json({ message: "Update failed" });
  }
};
