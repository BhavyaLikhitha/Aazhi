import "./Admin.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const Admin = () => {
  return (
    <>
      <Navbar />
      <div className="admin-page">
        <div className="admin-container">
          <h1 className="admin-title">Admin Dashboard</h1>
          <p className="admin-subtitle">
            Manage session booking requests
          </p>

          <div className="admin-placeholder">
            <p>
              This dashboard will display all booking requests submitted by
              users.
            </p>
            <p>
              Admin actions such as <strong>Approve</strong> and{" "}
              <strong>Deny</strong> will be available here.
            </p>
          </div>

          <div className="admin-note">
            Booking management functionality is under development.
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
