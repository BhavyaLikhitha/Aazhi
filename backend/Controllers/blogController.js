import Blog from "../Models/Blogs.js";

/* ADMIN */

// Create blog
export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all blogs (admin – includes unpublished)
export const getAllBlogsAdmin = async (req, res) => {
  const blogs = await Blog.find().sort({ createdAt: -1 });
  res.json(blogs);
};

// Update blog
export const updateBlog = async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(blog);
};

// Delete blog
export const deleteBlog = async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: "Blog deleted" });
};

/* PUBLIC */

// Get published blogs only
export const getPublishedBlogs = async (req, res) => {
  const blogs = await Blog.find({ isPublished: true })
    .sort({ createdAt: -1 })
    .select("title author category readTime content coverImage createdAt");

  res.json(blogs);
};

// Get single blog
export const getSingleBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  res.json(blog);
};
