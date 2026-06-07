import express from "express";
import { getPosition } from "../controllers/positionController.js";

const positionRouter = express.Router();

positionRouter.get("/", getPosition);

export default positionRouter;
