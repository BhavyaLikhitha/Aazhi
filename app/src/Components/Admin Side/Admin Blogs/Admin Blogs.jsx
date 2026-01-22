import { useEffect, useMemo, useState } from "react";
import "./admin blogs.css";
import "../../Homepage/Navbar/Navbar";
import Navbar from "../../Homepage/Navbar/Navbar";
// import "../../Homepage/Footer/Footer";
import Footer from "../../Homepage/Footer/Footer";

const API_BASE = "http://localhost:5000/api";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    readTime: "",
    coverImage: "", // ✅ added
    content: "",
  });

  const [blogs, setBlogs] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // ✅ modal state for "open full blog"
  const [openBlog, setOpenBlog] = useState(null);

  const token = useMemo(() => localStorage.getItem("token"), []);

  /* ---------------- Fetch Blogs (Admin) ---------------- */
  const fetchBlogs = async () => {
    const res = await fetch(`${API_BASE}/admin/blogs`, {
      headers: { Authorization: token },
    });
    const data = await res.json();
    setBlogs(Array.isArray(data) ? data : []);
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ---------------- Handle Input ---------------- */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ---------------- Create / Update Blog ---------------- */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      readTime: Number(formData.readTime),
    };

    const url = editingId
      ? `${API_BASE}/admin/blogs/${editingId}`
      : `${API_BASE}/admin/blogs`;

    const method = editingId ? "PUT" : "POST";

    await fetch(url, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(payload),
    });

    setFormData({
      title: "",
      author: "",
      category: "",
      readTime: "",
      coverImage: "",
      content: "",
    });

    setEditingId(null);
    await fetchBlogs();
  };

  /* ---------------- Edit Blog ---------------- */
  const handleEdit = (blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title || "",
      author: blog.author || "",
      category: blog.category || "",
      readTime: blog.readTime ?? "",
      coverImage: blog.coverImage || "",
      content: blog.content || "",
    });

    // optional: close modal when editing from modal
    setOpenBlog(null);

    // scroll to top for better UX
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* ---------------- Delete Blog ---------------- */
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    await fetch(`${API_BASE}/admin/blogs/${id}`, {
      method: "DELETE",
      headers: { Authorization: token },
    });

    setOpenBlog(null);
    await fetchBlogs();
  };

  return (
    <>
      <Navbar />
      <div className="admin-blog-page">
        {/* ---------- Create / Edit Blog Form ---------- */}
        <div className="blog-form-container">
          <h1>{editingId ? "Edit Blog" : "Create Blog"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="author"
              placeholder="Author"
              value={formData.author}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
           <input
  type="text"
  name="category"
  placeholder="Category (e.g. Mental Health, Relationships)"
  value={formData.category}
  onChange={handleChange}
  required
/>


            <input
              type="number"
              name="readTime"
              placeholder="Minutes of Read"
              value={formData.readTime}
              onChange={handleChange}
              min="1"
              required
            />
          </div>

          {/* ✅ Cover Image URL input + live preview */}
          <div className="cover-row">
            <input
              type="text"
              name="coverImage"
              placeholder="Cover Image URL (optional)"
              value={formData.coverImage}
              onChange={handleChange}
            />

            <div className="cover-preview">
              {formData.coverImage ? (
                <img src={formData.coverImage} alt="cover preview" />
              ) : (
                <div className="cover-fallback">Preview</div>
              )}
            </div>
          </div>

          <textarea className="text-area-blog"
            name="content"
            placeholder="Write the full blog content here..."
            value={formData.content}
            onChange={handleChange}
            rows="10"
            required
          />

          <div className="form-actions">
            {editingId && (
              <button
                type="button"
                className="secondary-btn"
                onClick={() => {
                  setEditingId(null);
                  setFormData({
                    title: "",
                    author: "",
                    category: "",
                    readTime: "",
                    coverImage: "",
                    content: "",
                  });
                }}
              >
                Cancel Edit
              </button>
            )}

            <button type="submit" className="primary-btn">
              {editingId ? "Update Blog" : "Publish Blog"}
            </button>
          </div>
        </form>
      </div>

      {/* ---------- Published Blogs ---------- */}
      <div className="published-blogs-section">
        <h2>Published Blogs</h2>

        <div className="blogs-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog._id}>
              {/* ✅ Image component */}
              <button
                type="button"
                className="blog-image-btn"
                onClick={() => setOpenBlog(blog)}
                aria-label={`Open blog ${blog.title}`}
              >
                {blog.coverImage ? (
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="blog-card-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="blog-card-image fallback-gradient" />
                )}
              </button>

              <h3 className="blog-title">Title: {blog.title}</h3>
                <p className="blog-meta">Author: {blog.author}</p>
                <p className="blog-meta">Category: {blog.category}</p>
                <p className="blog-meta">Time: {blog.readTime} min read</p>

              <p className="blog-preview">
                {(blog.content || "").slice(0, 120)}...
              </p>

              <div className="blog-card-footer">
                <button
                  type="button"
                  className="link-btn"
                  onClick={() => setOpenBlog(blog)}
                >
                  Read more
                </button>

                <div className="blog-actions">
                  <button type="button" onClick={() => handleEdit(blog)}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="danger"
                    onClick={() => handleDelete(blog._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Full Blog Modal ---------- */}
      {openBlog && (
        <div className="blog-modal-overlay" onClick={() => setOpenBlog(null)}>
          <div
            className="blog-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="modal-close"
              onClick={() => setOpenBlog(null)}
              aria-label="Close"
            >
              ×
            </button>

            {openBlog.coverImage ? (
              <img
                src={openBlog.coverImage}
                alt={openBlog.title}
                className="modal-cover"
              />
            ) : (
              <div className="modal-cover fallback-gradient" />
            )}

            <h2 className="modal-title">{openBlog.title}</h2>
            <p className="modal-meta">
              {openBlog.author} • {openBlog.category} • {openBlog.readTime} min
              read
            </p>

            <div className="modal-content">{openBlog.content}</div>

            <div className="modal-actions">
              <button onClick={() => handleEdit(openBlog)}>Edit</button>
              <button
                className="danger"
                onClick={() => handleDelete(openBlog._id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default CreateBlog;
