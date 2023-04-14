import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, NotFoundError } from "../errors";
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
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("CURRENT USER");
  }
);

const UPDATE_USER = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(req.body);
  }
);

const UPDATE_USER_PASSWORD = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(req.body);
  }
);

export {
  ALL_USERS,
  CURRENT_USER,
  SINGLE_USER,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
};
