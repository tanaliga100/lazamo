import jwt from "jsonwebtoken";
import { ITokenPayload } from "../interfaces/user.interfaces";

export const createJWT = async (payload: ITokenPayload) => {
  const accessToken = await jwt.sign(
    payload,
    process.env.JWT_SECRET as string,
    {
      expiresIn: process.env.JWT_LIFETIME as string,
    }
  );
  return accessToken;
};
