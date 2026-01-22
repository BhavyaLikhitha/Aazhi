import express from "express";
import {
  getPublishedBlogs,
  getSingleBlog,
} from "../Controllers/blogController.js";

const router = express.Router();

router.get("/blogs", getPublishedBlogs);
router.get("/blogs/:id", getSingleBlog);

export default router;
