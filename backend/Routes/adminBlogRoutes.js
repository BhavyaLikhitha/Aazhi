import express from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogsAdmin,
} from "../Controllers/blogController.js";

const router = express.Router();

router.post("/blogs", createBlog);
router.get("/blogs",  getAllBlogsAdmin);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);

export default router;
