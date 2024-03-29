import express from "express";
import { register, login } from "../controllers/authController.js";

const authRouter = express.Router();

authRouter.route("/register").post(register);
authRouter.route("/login").post(login);

export default authRouter