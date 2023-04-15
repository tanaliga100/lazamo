"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermissions = void 0;
const errors_1 = require("../errors");
const checkPermissions = (requestUser, resourceUserId) => {
    console.log(requestUser);
    console.log(resourceUserId);
    console.log(typeof resourceUserId);
    if (requestUser.role === "admin" || requestUser.role === "manager")
        return;
    if (requestUser.userId === resourceUserId.toString())
        return;
    throw new errors_1.UnAuthenticatedError("Not authorized to access this rosource");
};
exports.checkPermissions = checkPermissions;
