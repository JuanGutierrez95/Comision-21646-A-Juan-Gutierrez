import express from "express";
import { postRouter } from "./src/routes/post.routes.js";
import { startDb } from "./src/config/database.js";
import path from "node:path";
import cors from "cors";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "src", "public")));

app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

const PORT = process.env.PORT || 3000;

app.use("/", postRouter);

app.listen(PORT, () => {
  console.log(`server listening http://localhost:${PORT}/posts`);
  startDb();
});