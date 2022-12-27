import { StatusCodes } from "http-status-codes";
import CustomApiError from "./custom-api.js";

class UnauthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCodes = StatusCodes.UNAUTHORIZED;
  }
}

export default UnauthenticatedError;
