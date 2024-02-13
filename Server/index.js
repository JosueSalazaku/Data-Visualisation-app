import express from "express";
import axios from "axios";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello Josué");
});

app.listen(port, () => {
  console.log(`Server running on port ${port} `);
});
