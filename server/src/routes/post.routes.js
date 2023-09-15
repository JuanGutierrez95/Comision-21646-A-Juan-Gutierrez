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

//rutas para la vista
postRouter.get("/posts", ctrlView);

//endpoint para traer todas las posteos
postRouter.get("/api/posts", ctrlGetPosts);

//endpoint para crear una posteo
postRouter.post("/api/posts", createPost, validator, ctrlCreatePost);

//endpoint para modificar una posteo
postRouter.put("/api/posts/:id", editPost, validator, ctrlUpdatePost);

//endpoint para eliminar una posteo
postRouter.delete("/api/posts/:id", ctrlDeletePost);

export { postRouter };
