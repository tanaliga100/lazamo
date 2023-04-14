"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload) => {
    const accessToken = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_LIFETIME,
    });
    return accessToken;
};
exports.createToken = createToken;
// const token = await createToken(tokenUser);
// const oneday = 1000 * 60 * 60 * 24;
// res.cookie("token", token, {
//   httpOnly: true,
//   expires: new Date(Date.now() + 8 * 3600000),
// });
