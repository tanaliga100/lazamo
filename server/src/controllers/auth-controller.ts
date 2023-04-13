import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { IRegisterUser } from "../interfaces/user.interfaces";
import { asyncMiddleware } from "../middlewares/async-middleware";
import User from "../models/user-model";

const REGISTER = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body as IRegisterUser;
    // CHECK EMAIL
    // const emailExists = await User.findOne({ email });
    // if (emailExists) {
    //   throw new BadRequestError("Email already exists");
    // }
    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({
      msg: "USER_REGISTERED",
      data: user,
    });
  }
);

const LOGIN = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);

    // CHECK THE REQUEST BODY
    const { email, password } = req.body;
    // FIND EXISTING EMAIL, IF NONE THROW ERROR
    // COMPARE PASSWORD USING BCRYPT JS IN THE MODEL
    // IF PASSWORD MATCH RELEASE THE TOKEN
    res.status(StatusCodes.OK).json({
      msg: "LOGIN_SUCCESSFUL",
      data: { ...req.body },
    });
  }
);

const LOGOUT = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    // CHECK THE REQUEST BODY
    const { email, password } = req.body;
    res.status(StatusCodes.OK).json({
      msg: "LOGOUT",
      data: { ...req.body },
    });
  }
);

export { LOGIN, LOGOUT, REGISTER };
