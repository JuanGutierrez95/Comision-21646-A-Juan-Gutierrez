import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlDeletePost,
  ctrlGetPosts,
  ctrlUpdatePost,
  ctrlView,
} from "../controllers/post.controllers.js";
import { createPost, editPost } from "../models/schemas/post.schema.js";
import { validator } from "../middlewares/validator.js";

const postRouter = Router();

postRouter.get("/posts", ctrlView);

postRouter.get("/api/posts", ctrlGetPosts);
postRouter.post("/api/posts", createPost, validator, ctrlCreatePost);
postRouter.put("/api/posts/:id", editPost, validator, ctrlUpdatePost);
postRouter.delete("/api/posts/:id", ctrlDeletePost);

export { postRouter };
