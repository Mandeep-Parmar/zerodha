import express from "express";
import {
  loginUser,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import authUser from "../middleware/auth.js";
import validate from "../middleware/validate.js";
import { registerSchema, loginSchema } from "../validators/userValidator.js";

const userRouter = express.Router();

userRouter.post("/register", validate(registerSchema), registerUser);
userRouter.post("/login", validate(loginSchema), loginUser);
userRouter.get("/profile", authUser, getUserProfile);

export default userRouter;
