import express from "express";
import { getOrders, placeOrder } from "../controllers/OrderController.js";
import validate from "../middleware/validate.js";
import { orderSchema } from "../validators/orderValidator.js";

const orderRouter = express.Router();

orderRouter.post("/", validate(orderSchema), placeOrder);
orderRouter.get("/", getOrders);

export default orderRouter;
