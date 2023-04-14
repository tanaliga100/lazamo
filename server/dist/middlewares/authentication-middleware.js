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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizedPermissions = exports.authenticationMiddleware = void 0;
const errors_1 = require("../errors");
const unauthorized_error_1 = __importDefault(require("../errors/unauthorized-error"));
const verifyToken_1 = require("../utils/verifyToken");
const authenticationMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //CHECK HEADER
    const token = req.signedCookies.token;
    if (!token) {
        throw new errors_1.UnAuthenticatedError("Authentication Failed");
    }
    try {
        const { name, userId, role } = (0, verifyToken_1.verifyToken)(token);
        req.user = { name, userId, role };
        next();
    }
    catch (error) {
        throw new errors_1.UnAuthenticatedError("Authentication failed");
    }
});
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
