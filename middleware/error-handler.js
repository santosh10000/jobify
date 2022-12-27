import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleWare = (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    statusCode: err.statusCodes || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || `Something went wrong please try again later`,
  };
  if (err.name === "ValidationError") {
    //400 bad request
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    //defaultError.msg = err.message;
    defaultError.msg = Object.values(err.errors)
      .map((items) => items.message)
      .join(",");
  }

  if (err.code && err.code == 11000) {
    defaultError.statusCode = StatusCodes.BAD_REQUEST;
    defaultError.msg = `${Object.keys(err.keyValue)} field has to be unique`;
  }
  // res.status(defaultError.statusCode).json({ msg: err });
  res.status(defaultError.statusCode).json({ msg: defaultError.msg });
};
export default errorHandlerMiddleWare;
