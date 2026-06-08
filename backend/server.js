import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import holdingRouter from "./routes/holdingRoute.js";
import positionRouter from "./routes/positionRoute.js";
import orderRouter from "./routes/OrderRoute.js";

const app = express();
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

// api routes
app.use("/api/holdings", holdingRouter);
app.use("/api/positions", positionRouter);
app.use("/api/orders", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
