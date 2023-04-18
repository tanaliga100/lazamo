import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { BadRequestError } from "../errors";
import { IProducts } from "../interfaces/product.interfaces";
import { asyncMiddleware } from "../middlewares/async-middleware";
import { upload } from "../middlewares/fileUpload-middleware";
import Product from "../models/product-model";

// const storage = multer.diskStorage({
//   destination: function (req, file, callback) {
//     callback(null, __dirname + "/uploads");
//   },
//   // Sets file(s) to be saved in uploads folder in same directory
//   filename: function (req, file, callback) {
//     callback(null, file.originalname);
//   },
// });

// const upload = multer({ storage: storage });
export const CREATE_PRODUCT = asyncMiddleware(
  async (req: any, res: any, next: NextFunction) => {
    const {
      name,
      averageRating,
      color,
      category,
      featured,
      freeShipping,
      description,
      company,
      image,
      price,
      inventory,
      user,
    } = req.body as IProducts;
    // ATTACH THE USERID INCHARGE TO THE PRODUCT THAT WILL BE CREATED
    req.body.user = req.user.userId;
    // AND THEN CREATE A PRODUCT HERE
    const product = await Product.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "PRODUCT CREATED", product });
  }
);

export const ALL_PRODUCTS = asyncMiddleware(
  async (req: Request, res: any, next: NextFunction) => {
    const products = await Product.find({});
    const productsCount = (await Product.countDocuments({})) === 0;
    if (productsCount) {
      throw new BadRequestError(
        "No Products are on the database... Please create one"
      );
    }

    res
      .status(StatusCodes.OK)
      .json({ msg: " ALL PRODUCTS", length: products.length, products });
  }
);

export const SINGLE_PRODUCT = asyncMiddleware(
  async (req: any, res: any, next: NextFunction) => {
    const { id: productId } = req.params;
    const product = await Product.findOne({ _id: productId });
    if (!product) {
      throw new BadRequestError(`No product with such id : ${productId}`);
    }
    res.status(StatusCodes.OK).json({ msg: " SINGLE PRODUCT", product });
  }
);

export const UPDATE_PRODUCT = asyncMiddleware(
  async (req: any, res: any, next: NextFunction) => {
    const { id: productId } = req.params;
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );

    if (!product) {
      throw new BadRequestError(`No product with such id : ${productId}`);
    }
    res.status(StatusCodes.OK).json({ msg: " UPDATED", product });
  }
);
export const DELETE_PRODUCT = asyncMiddleware(
  async (req: any, res: any, next: NextFunction) => {
    const { id: productId } = req.params;
    const product = await Product.findOneAndDelete({ _id: productId });
    if (!product) {
      throw new BadRequestError(`No product with such id : ${productId}`);
    }

    res.status(StatusCodes.OK).json({ msg: "PRODUCT DELETED" });
  }
);

export const UPLOAD_IMAGE = asyncMiddleware(
  async (req: any, res: any, next: NextFunction) => {
    console.log(req.files);
    console.log("REQUESTED");
    upload.array("files")(req, res, function (err) {
      if (err) {
        return next(err);
      }

      console.log(req.files);
      console.log("REQUESTED");
      res.status(StatusCodes.OK).json({ msg: " UPLOADEDDD", data: req.files });
    });
    // res.status(StatusCodes.OK).json({ msg: " UPLOADEDDD", data: req.files });
  }
);

// export {
//  CREATE_PRODUCT,
//  ALL_PRODUCTS,
//  SINGLE_PRODUCT,
//  UPDATE_PRODUCT,
//  DELETE_PRODUCT,
//  UPLOAD_IMAGE
// }
