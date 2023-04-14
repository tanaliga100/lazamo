import { NextFunction, Request, Response } from "express";
import { asyncMiddleware } from "../middlewares/async-middleware";

const ALL_USERS = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("ALL_USERS");
  }
);

const SINGLE_USER = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send(req.params);
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
