"use strict";
// CHECK THE ARRAY OF USER TO ACCESS A PARTICULAR ROUTE
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizedPermissions = void 0;
const forbidden_error_1 = __importDefault(require("../errors/forbidden-error"));
const authorizedPermissions = (roles) => {
    return (req, res, next) => {
        if (roles.includes(req.user.role)) {
            console.log("WELCOME ADMIN, MANAGER");
            next();
        }
        else {
            throw new forbidden_error_1.default("Admin and Manager are only allowed to access this route");
        }
    };
};
exports.authorizedPermissions = authorizedPermissions;
