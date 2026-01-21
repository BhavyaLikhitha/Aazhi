import { useEffect, useState } from "react";
import "./Admin.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
import { toast } from "react-toastify";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBookings = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/bookings");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setBookings(data);
    } catch {
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };


const updateMeetLink = async (id, decision) => {
  try {
    const res = await fetch(
      `http://localhost:5000/api/bookings/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ meetLinkSent: decision })
      }
    );

    if (!res.ok) throw new Error();

    toast.success(`Meet link marked as ${decision}`);
    fetchBookings();
  } catch {
    toast.error("Failed to update meet link status");
  }
};



  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, status) => {
    try {
      const res = await fetch(
        `http://localhost:5000/api/bookings/${id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

      if (!res.ok) throw new Error();

      toast.success(`Booking ${status}`);
      fetchBookings();
    } catch {
      toast.error("Failed to update booking");
    }
  };

  const pendingBookings = bookings.filter(
    (b) => b.status === "pending"
  );

  const processedBookings = bookings
    .filter((b) => b.status !== "pending")
    .sort(
      (a, b) =>
        new Date(a.sessionDate) - new Date(b.sessionDate)
    );

  return (
    <>
      <Navbar />

      <div className="admin-page">
        <div className="admin-container">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">
            Manage and review session booking requests
          </p>

          {loading ? (
            <p className="admin-loading">Loading bookings...</p>
          ) : (
            <>
              {/* 🔹 PENDING REQUESTS */}
              <h2 className="admin-section-title">
                Pending Requests
              </h2>

              {pendingBookings.length === 0 ? (
                <p className="admin-empty">
                  No pending requests
                </p>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Counsellor</th>
                        <th>Session</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Booking Date</th>
                        <th>Time</th>
                        <th>Transaction ID</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pendingBookings.map((b) => (
                        <tr key={b._id}>
                          <td>{b.counsellorName}</td>
                          <td>{b.sessionName}</td>
                          <td>₹{b.price}</td>
                          <td>{b.fullName}</td>
                          <td>{b.phoneNumber}</td>
                          <td>{b.email}</td>
                          <td>{b.sessionDate}</td>
                          <td>{b.sessionTime}</td>
                          <td className="txn">
                            {b.transactionId}
                          </td>
                          <td>
                            <div className="admin-actions">
                              <button
                                className="approve-btn"
                                onClick={() =>
                                  updateStatus(
                                    b._id,
                                    "approved"
                                  )
                                }
                              >
                                Approve
                              </button>
                              <button
                                className="deny-btn"
                                onClick={() =>
                                  updateStatus(
                                    b._id,
                                    "denied"
                                  )
                                }
                              >
                                Deny
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* 🔹 PROCESSED REQUESTS */}
              <h2 className="admin-section-title">
                Completed Requests
              </h2>

              {processedBookings.length === 0 ? (
                <p className="admin-empty">
                  No processed bookings yet
                </p>
              ) : (
                <div className="admin-table-wrapper">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Counsellor</th>
                        <th>Session</th>
                        <th>Price</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Transaction ID</th>
                        <th>Status</th>
                        <th>Meet Link Sent</th>
                      </tr>
                    </thead>
                    <tbody>
                      {processedBookings.map((b) => (
                        <tr key={b._id}>
                          <td>{b.counsellorName}</td>
                          <td>{b.sessionName}</td>
                          <td>₹{b.price}</td>
                          <td>{b.fullName}</td>
                          <td>{b.phoneNumber}</td>
                          <td>{b.email}</td>
                          <td>{b.sessionDate}</td>
                          <td>{b.sessionTime}</td>
                          <td className="txn">
                            {b.transactionId}
                          </td>
                          <td>
                            <span
                              className={`status ${b.status}`}
                            >
                              {b.status}
                            </span>
                          </td>
                    
<td>
  {b.meetLinkSent === "pending" ? (
    <div className="admin-actions">
      <button
        className="approve-btn"
        onClick={() => updateMeetLink(b._id, "yes")}
      >
        Yes
      </button>
      <button
        className="deny-btn"
        onClick={() => updateMeetLink(b._id, "no")}
      >
        No
      </button>
    </div>
  ) : (
    <span
      className={`meet-status ${
        b.meetLinkSent === "yes" ? "yes" : "no"
      }`}
    >
      {b.meetLinkSent === "yes" ? "Yes" : "No"}
    </span>
  )}
</td>


                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Admin;
