import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors";
import UnAuthenticatedError from "../errors/unauthenticated-error";
import { IRegisterUser } from "../interfaces/user.interfaces";
import { asyncMiddleware } from "../middlewares/async-middleware";
import User from "../models/user-model";
import { attachCookiesToResponse } from "../utils/attachCookies";
import { hashPassword } from "../utils/hashedPassword";

const REGISTER = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body as IRegisterUser;
    // CHECK EMAIL
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      throw new BadRequestError("Email already exists");
    }
    // CHECK IF THERE IS A USER
    const isFirstAccount = (await User.countDocuments({})) === 0;
    if (isFirstAccount) {
      req.body.role = "admin";
    } else {
      req.body.role = "user";
    }
    // HASHING PASSWORD
    const hashedPassword = await hashPassword(password);
    req.body.password = hashedPassword;
    // CREATING USER
    const user = await User.create(req.body);

    // ATTACHING COOKIES
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    attachCookiesToResponse(res, tokenUser);
    res.status(StatusCodes.CREATED).json({
      msg: "USER_REGISTERED",
      data: tokenUser,
    });
  }
);

const LOGIN = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    // CHECK THE REQUEST BODY
    const { email, password } = req.body;
    // FIND EXISTING EMAIL, IF NONE THROW ERROR
    if (!email || !password) {
      throw new BadRequestError("Please provide email and password");
    }
    // GET THE USER
    const user = await User.findOne({ email });
    if (!user) {
      throw new UnAuthenticatedError(
        "Invalid Credentials : Email doesnt exist"
      );
    }
    // COMPARE PASSWORD USING BCRYPT JS IN THE MODEL
    const isPasswordCorrect = await user.comparePassword(password);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Password is incorrect");
    }
    // IF PASSWORD MATCH RELEASE THE TOKEN
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    attachCookiesToResponse(res, tokenUser);
    res.status(StatusCodes.OK).json({
      msg: "LOGIN_SUCCESSFUL",
      data: tokenUser,
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
