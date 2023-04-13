import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";

class UnAuthorized extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
export default UnAuthorized;
