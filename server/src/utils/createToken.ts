import jwt from "jsonwebtoken";
import { ITokenPayload } from "../interfaces/user.interfaces";

export const createToken = (payload: ITokenPayload) => {
  const accessToken = jwt.sign(payload, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_LIFETIME as string,
  });
  return accessToken;
};

// const token = await createToken(tokenUser);

// const oneday = 1000 * 60 * 60 * 24;
// res.cookie("token", token, {
//   httpOnly: true,
//   expires: new Date(Date.now() + 8 * 3600000),
// });
