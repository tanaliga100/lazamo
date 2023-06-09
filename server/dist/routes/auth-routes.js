"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controllers/auth-controller");
const router = express_1.default.Router();
exports.router = router;
router.post("/register", auth_controller_1.REGISTER);
router.post("/login", auth_controller_1.LOGIN);
router.get("/logout", auth_controller_1.LOGOUT);
