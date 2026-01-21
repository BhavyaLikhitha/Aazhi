import Booking from "../models/Booking.js";

export const createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking submitted successfully",
      booking
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Transaction ID already exists"
      });
    }

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
  const { status } = req.body;

  if (!["approved", "denied"].includes(status)) {
    return res.status(400).json({
      message: "Invalid status value"
    });
  }

  try {
    const booking = await Booking.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    res.json({
      message: `Booking ${status}`,
      booking
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update booking"
    });
  }
};
