import React from "react";
import "./products.css";
import Header from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const Products = () => {
  return (
    <>
      <Header />
    <div className="products-page">
      <div className="products-container">
        <h1 className="products-title">Products</h1>
        <p className="products-subtitle">
          Our bookstore is currently under development.
        </p>

        <div className="products-card">
          <p className="products-message">
            🚧 This page is a work in progress.
          </p>
          <p className="products-message-secondary">
            We are curating a collection of Journals and will be launching this
            section soon. Please check back later.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Products;
