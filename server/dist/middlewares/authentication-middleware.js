"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizedPermissions = exports.authenticationMiddleware = void 0;
const errors_1 = require("../errors");
const unauthorized_error_1 = __importDefault(require("../errors/unauthorized-error"));
const verifyToken_1 = require("../utils/verifyToken");
const authenticationMiddleware = (req, res, next) => {
    //CHECK HEADER
    // USING COOKIES
    const token = req.signedCookies.token;
    if (!token) {
        throw new errors_1.UnAuthenticatedError("Authentication Failed");
    }
    // // USING HEADERS AUTHORIZATION
    // const authHeader = req.headers.authorization;
    // const token = authHeader.split(" ")[1]
    try {
        const { name, userId, role } = (0, verifyToken_1.verifyToken)(token);
        req.user = { name, userId, role };
        next();
    }
    catch (error) {
        throw new errors_1.UnAuthenticatedError("Authentication failed");
    }
};
exports.authenticationMiddleware = authenticationMiddleware;
const authorizedPermissions = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new unauthorized_error_1.default("Not authorized to access this route");
        }
        next();
    };
};
exports.authorizedPermissions = authorizedPermissions;
