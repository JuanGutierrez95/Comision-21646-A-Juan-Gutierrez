import express from "express";
import { postRouter } from "./src/routes/post.routes.js";

const app = express();

app.use(express.json())

const PORT = 3000;

app.use("/", postRouter)

app.listen(PORT, () => {
    console.log(`server listening http://localhost:${PORT}`)
})

