import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Blogs.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";
const API_BASE = "http://localhost:5000/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await fetch(`${API_BASE}/blogs`);
      const data = await res.json();
      setBlogs(data);
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <Navbar />
    <div className="blogs-page">
      <h1 className="blogs-heading">Our Counselling Articles</h1>

      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="blog-card"
            onClick={() => navigate(`/blogs/${blog._id}`)}
          >
            <div className="blog-image-wrapper">
              {blog.coverImage ? (
                <img src={blog.coverImage} alt={blog.title} />
              ) : (
                <div className="image-fallback" />
              )}
            </div>

            <div className="blog-card-content">
              <span className="blog-category">{blog.category}</span>

              <h2 className="blog-title">{blog.title}</h2>

              <p className="blog-excerpt">
                {blog.content.slice(0, 120)}...
              </p>

              <button
                className="read-more"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/blogs/${blog._id}`);
                }}
              >
                Read more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Blogs;
