import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlGetPosts,
  ctrlUpdatePost,
} from "../controllers/post.controllers.js";
import { createPost, updatePost } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";

const postRouter = Router();

postRouter.get("/api/posts", ctrlGetPosts);
postRouter.post("/api/posts", createPost, validator, ctrlCreatePost);
postRouter.put("/api/posts/:id", updatePost, ctrlUpdatePost);
postRouter.delete("/api/posts/:id", ctrlDeletePost);

export { postRouter };
