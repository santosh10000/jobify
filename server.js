import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import "express-async-errors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";

const app = express();
const port = process.env.PORT || 5001;

//db and authenticate User
import connectDb from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import jobRouter from "./routes/jobRouter.js";

//middleware
import errorHandlerMiddleWare from "./middleware/error-handler.js";
//notFoundMiddleWare;
import notFoundMiddleWare from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

//app.use(cors()); , we are using proxy instead

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const __dirname = dirname(fileURLToPath(import.meta.url));

//only when ready to deploy

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.use(express.json());
app.use(cookieParser());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", authenticateUser, jobRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleWare);
app.use(errorHandlerMiddleWare);

// app.listen(port, () => {
//   console.log(`app listening on port ${port}`);
// });

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
