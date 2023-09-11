import express from "express";

const app = express();

app.use(express.json())

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server listening http://localhost:${PORT}`)
})

