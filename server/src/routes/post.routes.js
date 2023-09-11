import { Router } from "express";
import { createPost, deletePost, getPosts, updatePost } from "../controllers/post.controllers.js";

const postRouter = Router();

postRouter.get("/api/posts", getPosts);
postRouter.post("/api/posts", createPost);
postRouter.put("/api/posts/:id", updatePost);
postRouter.delete("/api/posts/:id", deletePost);

export { postRouter };
