import { NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import path from "path";
import { BadRequestError } from "../errors";
import { IProducts } from "../interfaces/product.interfaces";
import { asyncMiddleware } from "../middlewares/async-middleware";
import Product from "../models/product-model";

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
    const { image } = req.files;
    console.log(req.files);

    // CHECK THE REQUEST BODY
    if (!req.files) {
      throw new BadRequestError("No File Uploaded");
    }
    // CHECK THE MIMETYPE
    const validImage = image.mimetype.startsWith("image");
    if (!validImage) {
      throw new BadRequestError("Please upload Image");
    }
    const maxSize = 10000000;
    if (image.size > maxSize) {
      throw new BadRequestError("Your file is too large");
    }
    // MOVE THE IMAGE TO PUBLIC FOLDER  AND SENT BACK TO CLIENT WITH PATH
    const imagePath = path.resolve(
      __dirname,
      "dist/public/uploads" + image.name
    );
    console.log({ imagePath });

    await image.mv(imagePath);

    res.status(StatusCodes.OK).json({ msg: " UPLOADED" });
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
