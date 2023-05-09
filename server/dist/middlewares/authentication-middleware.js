"use strict";
// import { NextFunction, Response } from "express";
// import { JwtPayload } from "jsonwebtoken";
// import { UnAuthenticatedError } from "../errors";
// import UnAuthorizedError from "../errors/unauthorized-error";
// import { verifyToken } from "../utils/verifyToken";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = void 0;
const errors_1 = require("../errors");
const verifyToken_1 = require("../utils/verifyToken");
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
// export const authenticationMiddleware = (
//   req: any,
//   res: Response,
//   next: NextFunction
// ) => {
//   // CHECK HEADER
//   const token = req.signedCookies.token;
//   if (!token) {
//     throw new UnAuthenticatedError("No Cookie Found");
//   }
//   // VERIFY THE COOKIE
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET as string);
//     const { name, userId, role, email } = payload as JwtPayload;
//     req.user = {
//       name,
//       userId,
//       role,
//       email,
//     };
//     next();
//   } catch (error) {
//     throw new UnAuthenticatedError("Authentication Invalid");
//   }
// };
const authenticationMiddleware = (req, res, next) => {
    //CHECK HEADER
    // USING HEADERS AUTHORIZATION
    const authHeader = req.headers["authorization"];
    if (authHeader && authHeader.startsWith("Bearer ")) {
        //verify the token if match
        const token = authHeader.slice(7);
        console.log("HAS TOKEN", token);
        try {
            const { name, userId, role } = (0, verifyToken_1.verifyToken)(token);
            req.user = { name, userId, role };
            next();
        }
        catch (error) {
            console.log("NO TOKEN");
            throw new errors_1.UnAuthenticatedError("Uy, Authentication failed ");
        }
    }
    else {
        throw new errors_1.UnAuthenticatedError("No Token Found");
    }
    // const token = authHeader.split(" ")[1];
    // try {
    //   const { name, userId, role } = verifyToken(token) as JwtPayload;
    //   req.user = { name, userId, role };
    //   next();
    // } catch (error) {
    //   throw new UnAuthenticatedError("Authentication failed");
    // }
};
exports.authenticationMiddleware = authenticationMiddleware;
