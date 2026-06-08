import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/mongodb.js";
import holdingRouter from "./routes/holdingRoute.js";
import positionRouter from "./routes/positionRoute.js";
import orderRouter from "./routes/OrderRoute.js";
import userRouter from "./routes/userRoute.js";
import authUser from "./middleware/auth.js";

const app = express();
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 4000;

// api routes
app.use("/api/holdings", authUser, holdingRouter);
app.use("/api/positions", authUser, positionRouter);
app.use("/api/orders", authUser, orderRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`App is listing on port ${port}`);
});
