import { NextFunction, Response } from "express";
import { StatusCodes } from "http-status-codes";
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from "../errors";
import { asyncMiddleware } from "../middlewares/async-middleware";
import User from "../models/user-model";
import { attachCookiesToResponse } from "../utils/attachCookies";
import { checkPermissions } from "../utils/checkPermission";
import { hashPassword } from "../utils/hashedPassword";
import { createTokenUser } from "../utils/tokenUser";

const ALL_USERS = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);
    const users = await User.find({ role: ["admin", "user", "manager"] });

    if (!users) {
      throw new BadRequestError("No Users found");
    }
    res
      .status(StatusCodes.OK)
      .json({ count: users.length, msg: "ALL_USERS", users });
  }
);

const SINGLE_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);

    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      throw new NotFoundError(`No user with id ${req.params.id}`);
    }
    checkPermissions(req.user, user._id);
    res.status(StatusCodes.OK).json({ msg: "SINGLE_USER", user });
  }
);

const CURRENT_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);

    const currentUser = { name: req.user.name, role: req.user.role };
    res.status(StatusCodes.OK).json({ msg: "CURRENT_USER", currentUser });
  }
);

const UPDATE_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);

    const { name, email } = req.body;
    if (!name || !email) {
      throw new BadRequestError("PLEASE PROVIDE ALL THE VALUES");
    }
    const user = await User.findOneAndUpdate(
      { _id: req.user.userId },
      { email, name },
      { new: true, runValidators: true }
    );
    const tokenUser = await createTokenUser(user);
    // ATTACH COOKIES
    attachCookiesToResponse(res, tokenUser);
    // OK ? SEND BACK TO CLIENT : THROW ERROR
    res.status(StatusCodes.OK).json({ msg: "USER_UPDATED", data: tokenUser });
  }
);

const UPDATE_ROLE = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);
    const { id: userToUpdate } = req.params;
    const { role: roleToUpdate } = req.body;

    const managerCount = await User.countDocuments({ role: "manager" });
    const adminCount = await User.countDocuments({ role: "admin" });
    if (adminCount === 1 && roleToUpdate === "admin") {
      throw new BadRequestError("Cannot mutate admin");
    } else if (managerCount === 3 && roleToUpdate === "manager") {
      throw new BadRequestError("Cannot add another manager");
    } else {
      const user = await User.findOneAndUpdate(
        { _id: userToUpdate },
        { role: roleToUpdate },
        { new: true, runValidators: true }
      );
      const tokenUser = await createTokenUser(user);
      attachCookiesToResponse(res, tokenUser);
      res.status(StatusCodes.OK).json({ msg: "USER_UPDATED", data: tokenUser });
    }
  }
);

const UPDATE_USER_PASSWORD = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);

    const { oldPassword, newPassword } = req.body;
    if (!oldPassword || !newPassword) {
      throw new BadRequestError("Please provide both values");
    }

    // USING FINDONEANDUPDATE
    // HASHED THE NEW PASSWORD
    const newPass = await hashPassword(newPassword);
    // UPDATE THE PASSWORD WITH THE NEW HASHED PASSWORD
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.user.userId },
      { password: newPass },
      { new: true }
    );
    // IF ALL CHECK PASSED ?
    if (updatedUser) {
      res.status(StatusCodes.OK).json({ msg: "USER_PASSWORD_UPDATED" });
    } else {
      throw new UnAuthenticatedError("Invalid credentials");
    }

    // USING 'SAVE' HOOK
    // HASHED THE PASSWORD
    // const oldPass = await hashPassword(oldPassword);
    // const newPass = await hashPassword(newPassword);

    // // LOOK FOR A USER ID PASSWORD TO BE UPDATED
    // const user = await User.findOne({ _id: req.user.userId });
    // if (!user) {
    //   throw new BadRequestError(`No user found with id  ${req.user.userId}`);
    // }
    // // COMPARE THE PASSWORD
    // const isPasswordCorrect = comparePassword(oldPass, req.user.password);

    // if (!isPasswordCorrect) {
    //   throw new UnAuthenticatedError("Invalid credentials");
    // }
    // // IF ALL CHECKS SUCCEEDED THEN WE UPDATE THE PASSWORD;
    // user.password = newPass;
    // await user.save();

    // res.status(StatusCodes.OK).json({ msg: "USER_PASSWORD_UPDATED" });
  }
);

const DELETE_USER = asyncMiddleware(
  async (req: any, res: Response, next: NextFunction) => {
    console.log("PAYLOAD FROM VERIFIED COOKIE", req.user);
    const { id: userToDelete } = req.params;

    // CHECK USER IF IF EXIST
    const user = await User.findOne({ _id: userToDelete });
    if (!user) {
      throw new NotFoundError(`No user with id ${userToDelete}`);
    } else {
      // IF OK ? DELETE QUERY
      await User.findOneAndDelete({ _id: userToDelete });
    }
    res.status(StatusCodes.OK).json({ msg: `USER : ${user.name} IS DELETED` });
  }
);
export {
  ALL_USERS,
  CURRENT_USER,
  DELETE_USER,
  SINGLE_USER,
  UPDATE_ROLE,
  UPDATE_USER,
  UPDATE_USER_PASSWORD,
};
