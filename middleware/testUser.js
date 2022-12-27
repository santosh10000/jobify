import { BadRequestError } from "../errors/index.js";

export const testUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError(
      `Test User is not authorized to make any changes ! It's View Only!!`
    );
  }
  next();
};
