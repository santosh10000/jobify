import { UnauthenticatedError } from "../errors/index.js";
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.token;
  if (!token) {
    throw new UnauthenticatedError(`Authentication Invalid `);
  }

  // Now are using token from cookies
  // const authHeader = req.headers.authorization;
  // // console.log(authHeader);
  // if (!authHeader || !authHeader.startsWith("Bearer")) {
  //   throw new UnauthenticatedError(`Authentication Invalid `);
  // }
  // const token = authHeader.split(" ")[1];
  // console.log(token);

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log(`payload is ${JSON.stringify(payload)}`);
    const testUser = payload.userId === "63a8fc18d3e5b98ce9444e18";
    req.user = { userId: payload.userId, testUser };

    next();
  } catch (error) {
    console.log(`error is ${error}`);
    throw new UnauthenticatedError(`Authentication Invalid `);
  }
};
export default auth;
