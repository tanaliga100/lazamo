"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCookiesToResponse = void 0;
const createToken_1 = require("./createToken");
const attachCookiesToResponse = (res, user) => {
    const token = (0, createToken_1.createToken)(user);
    const oneday = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneday),
        secure: process.env.NODE_ENV === "production",
        signed: true,
    });
};
exports.attachCookiesToResponse = attachCookiesToResponse;
