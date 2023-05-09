import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Express } from "express";
import morgan from "morgan";
import path from "path";
import { connectDB } from "./config/connectDB";
import { errorHandlerMidlleware } from "./middlewares/errorHandler-middleware";
import { notFoundMiddleware } from "./middlewares/notFound-middleware";
import { router as AuthRoute } from "./routes/auth-routes";
import { router as ProductRoute } from "./routes/product-routes";
import { router as UserRoute } from "./routes/user-routes";

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://localhost:3000/api/v1"],
  })
);
// app.use(fileUpload());
app.use(express.static(path.join(__dirname, "dist")));

app.use(cookieParser(process.env.JWT_SECRET));
app.use(morgan("dev"));

// BASE ROUTE
// app.get("/", (req: Request, res: Response) => {
//   res.json({ msg: "Server Alive : Express Ts" });
// });
// app.get("/api/v1", (req: Request, res: Response) => {
//   // console.log(req.cookies);
//   console.log(req.signedCookies);
//   res.send("E-Com");
// });
// APPLICATION ROUTES

app.use("/api/v1/auth", AuthRoute);
app.use("/api/v1/users", UserRoute);
app.use("/api/v1/products", ProductRoute);

// 404_MIDDLEWARE
app.use(notFoundMiddleware);
// ERROR_MIDDLEWARE
app.use(errorHandlerMidlleware);

const start = async () => {
  const port = process.env.PORT || 5001;
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`DB && SERVER ALIVE: ${port}`);
    });
  } catch (error) {
    console.log("Something went wrong");
  }
};

start();

// const fse = require("fs-extra");

// const publicPath = path.resolve(__dirname, "src", "public");
// const distPath = path.resolve(__dirname, "dist", "public");

// async function copyStaticAssets() {
//   try {
//     await fse.copy(publicPath, distPath);
//     console.log("Static assets copied successfully");
//   } catch (err) {
//     console.error(err);
//   }
// }

// copyStaticAssets();
