import "./about.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
    
    <div className="about-page">
    
      <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <p className="about-subtitle">
          We are currently shaping this space to better reflect our vision.
        </p>

        <div className="about-status-card">
          <h3>🚧 Page Under Progress</h3>
          <p>
            Our team is actively working on this section. Soon, you’ll find
            details about our mission, values, and the story behind Aazhi.
          </p>
        </div>

        <p className="about-footer-note">
          Thank you for your patience. Please check back shortly.
        </p>
      </div>
    </div>
    <Footer />
      </>
  );
};

export default AboutUs;
