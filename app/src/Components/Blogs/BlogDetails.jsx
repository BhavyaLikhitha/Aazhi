import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import Navbar from "../Homepage/Navbar/Navbar";
import Footer from "../Homepage/Footer/Footer";

const API_BASE = "http://localhost:5000/api";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await fetch(`${API_BASE}/blogs/${id}`);
      const data = await res.json();
      setBlog(data);
    };

    fetchBlog();
  }, [id]);

  if (!blog) return null;

  return (
    <>
      <Navbar />
    <div className="blog-detail-page">
      <span className="article-meta">
        ARTICLE • {blog.readTime} MINS READ
      </span>

      <div className="detail-image-wrapper">
        {blog.coverImage ? (
          <img src={blog.coverImage} alt={blog.title} />
        ) : (
          <div className="image-fallback" />
        )}
      </div>

      <h1 className="detail-title">{blog.title}</h1>

      <p className="publish-meta">
        Published on {new Date(blog.createdAt).toDateString()}
      </p>

      <p className="author-name">By {blog.author}</p>

      <div className="blog-content">{blog.content}</div>
    </div>
    <Footer />
    </>
  );
};

export default BlogDetails;
