import express from "express";
import { getOrders, placeOrder } from "../controllers/OrderController.js";

const orderRouter = express.Router();

orderRouter.post("/", placeOrder);
orderRouter.get("/", getOrders);

export default orderRouter;
