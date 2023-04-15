"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCookiesToResponse = void 0;
const createToken_1 = require("./createToken");
const attachCookiesToResponse = (res, user) => __awaiter(void 0, void 0, void 0, function* () {
    const token = (0, createToken_1.createToken)(user);
    const oneday = 1000 * 60 * 60 * 24;
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + oneday),
        secure: process.env.NODE_ENV === "production",
        signed: true,
    });
});
exports.attachCookiesToResponse = attachCookiesToResponse;
