import express from "express";
import { getHoldings } from "../controllers/holdingController.js";

const holdingRouter = express.Router();

holdingRouter.get("/", getHoldings);

export default holdingRouter;
