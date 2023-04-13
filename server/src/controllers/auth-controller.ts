import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors";
import { IRegisterUser } from "../interfaces/user.interfaces";
import { asyncMiddleware } from "../middlewares/async-middleware";
import User from "../models/user-model";
import { createJWT } from "../utils/createJWT";
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

    const user = await User.create(req.body);
    // CREATING JWT
    const tokenUser = { name: user.name, userId: user._id, role: user.role };
    const token = await createJWT(tokenUser);

    res.status(StatusCodes.CREATED).json({
      msg: "USER_REGISTERED",
      data: user,
      token,
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
