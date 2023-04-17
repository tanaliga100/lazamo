"use strict";
// import { NextFunction, Response } from "express";
// import { JwtPayload } from "jsonwebtoken";
// import { UnAuthenticatedError } from "../errors";
// import UnAuthorizedError from "../errors/unauthorized-error";
// import { verifyToken } from "../utils/verifyToken";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const errors_1 = require("../errors");
// const authenticationMiddleware = (
//   req: any,
//   res: Response,
//   next: NextFunction
// ) => {
//   //CHECK HEADER
//   // USING COOKIES
//   const token = req.signedCookies.token;
//   if (!token) {
//     throw new UnAuthenticatedError("No Cookies Found");
//   }
//   // // USING HEADERS AUTHORIZATION
//   // const authHeader = req.headers.authorization;
//   // const token = authHeader.split(" ")[1]
//   try {
//     const { name, userId, role } = verifyToken(token) as JwtPayload;
//     req.user = { name, userId, role };
//     next();
//   } catch (error) {
//     throw new UnAuthenticatedError("Authentication failed");
//   }
// };
// const authorizedPermissions = (roles: string[]) => {
//   return (req: any, res: any, next: NextFunction) => {
//     if (!roles.includes(req.user.role)) {
//       throw new UnAuthorizedError("Not authorized to access this route");
//     }
//     next();
//   };
// };
// export { authenticationMiddleware, authorizedPermissions };
const authenticationMiddleware = (req, res, next) => {
    // CHECK HEADER
    const token = req.signedCookies.token;
    if (!token) {
        throw new errors_1.UnAuthenticatedError("No Cookie Found");
    }
    // VERIFY THE COOKIE
    try {
        const payload = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const { name, userId, role, email } = payload;
        req.user = {
            name,
            userId,
            role,
            email,
        };
        next();
    }
    catch (error) {
        throw new errors_1.UnAuthenticatedError("Authentication Invalid");
    }
};
exports.authenticationMiddleware = authenticationMiddleware;
