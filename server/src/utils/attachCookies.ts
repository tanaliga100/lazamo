import { ITokenPayload } from "../interfaces/user.interfaces";
import { createToken } from "./createToken";

export const attachCookiesToResponse = (res: any, user: ITokenPayload) => {
  const token = createToken(user);
  const oneday = 1000 * 60 * 60 * 24;

  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneday),
    secure: process.env.NODE_ENV === "production",
    signed: true,
  });
};
