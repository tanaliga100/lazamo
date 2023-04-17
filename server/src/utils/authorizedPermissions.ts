// CHECK THE ARRAY OF USER TO ACCESS A PARTICULAR ROUTE

import { NextFunction, Response } from "express";
import ForbiddenError from "../errors/forbidden-error";
import { Roles } from "../interfaces/user.interfaces";

export const authorizedPermissions = (roles: Roles) => {
  return (req: any, res: Response, next: NextFunction) => {
    if (roles.includes(req.user.role)) {
      console.log("WELCOME ADMIN, MANAGER");
      next();
    } else {
      throw new ForbiddenError(
        "Admin and Manager are only allowed to access this route"
      );
    }
  };
};
