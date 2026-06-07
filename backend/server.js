import "dotenv/config";
import express from "express";
import connectDB from "./config/mongodb.js";

const app = express();
connectDB();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
