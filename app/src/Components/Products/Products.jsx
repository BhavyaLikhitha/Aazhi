import "./products.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const Products = () => {
  return (
    <>
      <Navbar />
    <div className="products-page">
      <div className="products-container">
        <h1 className="products-title">Products</h1>

        <p className="products-subtitle">
          Thoughtfully designed offerings — coming soon.
        </p>

        <div className="products-status-card">
          <h3>🚧 Products Under Progress</h3>
          <p>
            We are currently building and refining our products to ensure they
            meet the highest standards of quality and usability. Detailed
            product information will be available here soon.
          </p>
        </div>

        <p className="products-footer-note">
          Thank you for your patience. Please check back shortly.
        </p>
      </div>
    </div>
    <Footer />
      </>
  );
};

export default Products;
