import "./Blogs.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const Blogs = () => {
  return (
    <>
      <Navbar />
    <div className="blogs-page">
      <div className="blogs-container">
        <h1 className="blogs-title">Blogs</h1>

        <p className="blogs-subtitle">
          Insights, stories, and updates — coming soon.
        </p>

        <div className="blogs-status-card">
          <h3>🚧 Blogs Under Progress</h3>
          <p>
            We’re currently working on curating meaningful content for this
            section. Soon, you’ll find blogs covering ideas, experiences, and
            perspectives that align with Aazhi.
          </p>
        </div>

        <p className="blogs-footer-note">
          Stay tuned. New posts will be live shortly.
        </p>
      </div>
    </div>
    <Footer />
      </>
  );
};

export default Blogs;
