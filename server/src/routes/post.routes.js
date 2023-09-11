import { Router } from "express";

const postRouter = Router();

postRouter.get("/api/posts");
postRouter.post("/api/posts");
postRouter.put("/api/posts/:id");
postRouter.delete("/api/posts/:id");

export { postRouter };
