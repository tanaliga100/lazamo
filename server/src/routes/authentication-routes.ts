import express from "express";
import { LOGIN, LOGOUT, REGISTER } from "../controllers/auth-controller";
const router = express.Router();

router.route("/register").post(REGISTER);
router.route("/login").post(LOGIN);
router.route("/logout").get(LOGOUT);

export { router };
