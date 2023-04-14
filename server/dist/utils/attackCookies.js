"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCookiesToResponse = void 0;
const http_status_codes_1 = require("http-status-codes");
const createToken_1 = require("./createToken");
const attachCookiesToResponse = (res, user) => {
    console.log(res);
    console.log(user);
    const token = (0, createToken_1.createToken)(user);
    const oneday = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneday),
    });
    res.status(http_status_codes_1.StatusCodes.CREATED).json({
        msg: "USER_REGISTERED",
        data: user,
    });
};
exports.attachCookiesToResponse = attachCookiesToResponse;
