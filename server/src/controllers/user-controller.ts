import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors";
import { asyncMiddleware } from "../middlewares/async-middleware";
import User from "../models/user-model";

const ALL_USERS = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);
    const users = await User.find({ role: "user" }).select("-password");
    if (!users) {
      throw new BadRequestError("No Users found");
    }
    res.status(StatusCodes.OK).json({ msg: "ALL_USERS", users });
  }
);

const SINGLE_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);

    const user = await User.findOne({ _id: req.params.id }).select("-password");
    if (!user) {
      throw new NotFoundError(`No user with id ${req.params.id}`);
    }
    res.status(200).json({ msg: "SINGLE_USER", user });
  }
);

const CURRENT_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    const currentUser = { name: req.user.name, role: req.user.role };
    res.status(200).json({ msg: "CURRENT_USER", currentUser });
  }
);

const UPDATE_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    res.status(200).send(req.body);
  }
);

const UPDATE_USER_PASSWORD = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log(req.body);
    console.log(req.user);

    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      throw new BadRequestError("Please provide both values");
    }
    const user = await User.findOne({ _id: req.user.userId });
    if (!user) {
    }
    const isPasswordCorrect = await user!.comparePassword(oldPassword);
    if (!isPasswordCorrect) {
      throw new UnAuthenticatedError("Invalid password");
    }
    user!.password = newPassword;

    await user!.save();

    res.status(200).json({ msg: "USER_PASSWORD_UPDATED" });
  }
);

export {
  ALL_USERS,
  CURRENT_USER,
  SINGLE_USER,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
};
