import { StatusCodes } from "http-status-codes";
import CustomError from "./custom-error";

class ForbiddenError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
export default ForbiddenError;
