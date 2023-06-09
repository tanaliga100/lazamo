"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (accessToken) => {
    const token = jsonwebtoken_1.default.verify(accessToken, process.env.JWT_SECRET);
    return token;
};
exports.verifyToken = verifyToken;
